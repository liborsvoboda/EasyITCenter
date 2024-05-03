import { EasyDataTable, HttpClient } from '@easydata/core';
import { domel, EasyGrid } from '@easydata/ui';

import roleValidator, { Role } from './user_role_validator'

declare var $;
declare var ace;

interface Report {
    id: string,
    name?: string,
    description?: string,
    sql?: string;
    isShared?: boolean,
    isAlien?: boolean,
    isReadonly?: boolean
} 

/**
 * The EasyQuery client-side view that represents the UI for ad-hoc reporting page
 */
export class EasyReportView {        
    protected reports: Report[];

    protected activeReport: Report;

    //EditReport dialog controls
    private newReportButton: HTMLButtonElement;
    private addReportButton: HTMLButtonElement;
    private saveReportButton: HTMLButtonElement;
    private sharedCheckbox: HTMLInputElement;
    private reportNameInput: HTMLInputElement;
    private reportDescTextArea: HTMLTextAreaElement;
    private addReportHeaderDiv: HTMLElement;
    private editReportHeaderDiv: HTMLElement;

    private queryEditor: any;

    //Report List panel elements
    private reportListPlaceholder: HTMLElement;
    private cloneReportButton: HTMLButtonElement;
    private cloneReportIdInput: HTMLInputElement;
    private cloneReportNameInput: HTMLInputElement;

    private removeReportButton: HTMLButtonElement;

    private reportSearchBox: HTMLInputElement;
    private reportSearchText = '';

    //Top Bar elements
    private refreshResultButton: HTMLButtonElement;
    private editReportButton: HTMLButtonElement;

    private grid: EasyGrid;
    private gridTable: EasyDataTable;


    private http = new HttpClient();

    constructor() {       
    }

    public init() {
        this.newReportButton = this.getControl<HTMLButtonElement>("OpenNewReportDlgButton");
        this.newReportButton.hidden = roleValidator.validate(Role.CONSUMER);
        this.newReportButton.addEventListener('click', this.newReportButtonClick.bind(this));

        this.cloneReportButton = this.getControl<HTMLButtonElement>('CloneReportButton');
        this.cloneReportButton.addEventListener('click', this.cloneReportButtonClick.bind(this));

        this.cloneReportIdInput = this.getControl<HTMLInputElement>("CloneReportIdInput");
        this.cloneReportNameInput = this.getControl<HTMLInputElement>("CloneReportNameInput")

        this.removeReportButton = this.getControl('RemoveReportButton');
        this.removeReportButton.addEventListener('click', this.removeReportButtonClick.bind(this));

        this.refreshResultButton = this.getControl('RefreshResultButton');
        this.refreshResultButton.addEventListener("mouseenter", () => {
            this.refreshResultButton.querySelector('i').classList.add("fa-spin");
        });
        this.refreshResultButton.addEventListener("mouseleave", () => {
            this.refreshResultButton.querySelector('i').classList.remove("fa-spin");
        });
        this.refreshResultButton.addEventListener('click', this.refreshResultButtonClick.bind(this));


        //Edit Report dialog controls
        this.editReportButton = this.getControl<HTMLButtonElement>('OpenEditReportDlgButton');
        this.editReportButton.hidden = roleValidator.validate(Role.CONSUMER);
        this.editReportButton.addEventListener('click', this.editReportButtonClick.bind(this));

        this.saveReportButton = this.getControl<HTMLButtonElement>('SaveReportButton');
        this.saveReportButton.addEventListener('click', this.saveReportButtonClick.bind(this));

        this.addReportButton = this.getControl('AddReportButton');
        this.addReportButton.addEventListener('click', this.addReportButtonClick.bind(this));

        this.addReportHeaderDiv = this.getControl('AddReportHeader');
        this.editReportHeaderDiv = this.getControl('EditReportHeader');

        this.sharedCheckbox = this.getControl<HTMLInputElement>('IsSharedCheckbox');

        const validateEditReportButtons = () => {
            const enabled = this.queryEditor.getValue() && this.reportNameInput.value;
            this.saveReportButton.disabled = !enabled;
            this.addReportButton.disabled = !enabled;
        }

        this.reportNameInput = this.getControl<HTMLInputElement>('ReportNameInput');
        this.reportNameInput.addEventListener('input', () => {
            validateEditReportButtons();
        });

        const aceEditor = this.getControl('ReportQueryEditor')
        this.queryEditor = ace.edit(aceEditor);
        this.queryEditor.getSession().setMode('ace/mode/sql');
        this.queryEditor.setShowPrintMargin(false);
        this.queryEditor.on('change', () => {
            validateEditReportButtons();
        });
        this.reportDescTextArea = this.getControl<HTMLTextAreaElement>('ReportDescTextArea');

        const togglePickerFunc = () => {
            const picker = document.querySelector('.er-report-picker');
            if (picker) {
                picker.classList.toggle('show-picker');
                picker.classList.toggle('animate-in');
                picker.classList.toggle('animate-out');
            }
        };

        const togglePickerButton = this.getControl<HTMLButtonElement>('TogglePickerButton');
        togglePickerButton.addEventListener('click', togglePickerFunc.bind(this));

        const closePickerBtn = this.getControl<HTMLButtonElement>('HideReportListButton');
        closePickerBtn.addEventListener('click', togglePickerFunc.bind(this));

        this.reportListPlaceholder = this.getControl("ReportList");

        this.reportSearchBox = this.getControl<HTMLInputElement>('reportSearchBox');
        let updateTimer;

        this.reportSearchBox.addEventListener('input', (e: Event) => {
            this.reportSearchText = (e.target as HTMLInputElement).value;
            clearTimeout(updateTimer);
            updateTimer = setTimeout(() => this.filterReportList(), 500);
        });

        this.gridTable = new EasyDataTable();
        this.grid = new EasyGrid({
            slot: `#ResultSet`,
            paging: {
                enabled: true,
                pageSize: 20
            },
            dataTable: this.gridTable
        });


        $('#EditReportDlg').on('shown.bs.modal', () => {
            this.queryEditor.renderer.updateFull(true);
        });

        this.grid.refresh();

        this.loadReportList();
    }

    /**
    * Creates a new report.
    */
    public showNewReportDialog() {
        this.editReportHeaderDiv.hidden = true;
        this.addReportHeaderDiv.hidden = false;

        this.saveReportButton.hidden = true;

        this.addReportButton.disabled = true;
        this.addReportButton.hidden = false;

        this.reportNameInput.value = 'Report ' + new Date().toLocaleDateString('sv-SE');

        setTimeout(() => {
            this.reportNameInput.select();
            this.reportNameInput.focus();
        }, 500);

        this.sharedCheckbox.checked = true;

        this.queryEditor.setValue('');
        this.queryEditor.getSession().selection.clearSelection();

        this.reportDescTextArea.value = '';

        $('#EditReportDlg').modal();
    }

    protected showEditReportDialog() {
        this.addReportHeaderDiv.hidden = true;
        this.editReportHeaderDiv.hidden = false;

        this.saveReportButton.hidden = false;

        this.addReportButton.hidden = true;

        if (this.activeReport.isAlien || this.activeReport.isReadonly) {
            return;
        }

        this.reportNameInput.value = this.activeReport.name;
        this.sharedCheckbox.checked = this.activeReport.isShared;

        this.queryEditor.setValue(this.activeReport.sql || '');
        this.queryEditor.getSession().selection.clearSelection();
        this.queryEditor.resize();
        this.reportDescTextArea.value = this.activeReport.description || '';

        $('#EditReportDlg').modal();
    }


    public addReportButtonClick() {
        const reportName = this.reportNameInput.value;

        if (reportName) {
            const isShared = this.sharedCheckbox.checked;

            const report: Report = {
                id: null,
                name: reportName,
                isShared: isShared,
                description: this.reportDescTextArea.value,
                sql: this.queryEditor.getValue()
            }

            this.http.post('/Reports/NewReport', report)
                .then(report => {
                    this.insertIntoReportList(report);
                    this.renderReportList({ reportId: report.id });
                });
        }
    }
  
    public loadReportList() {
        this.http.get<Report[]>('/Reports/GetAllReports')
            .then(reports => {
                this.reports = reports;
                this.renderReportList();
            })
            .catch(error => console.error(error));
    }

    public loadReport(reportId: string, keepListOpen = false) {
        if (!reportId) 
            return;

        this.http.get(`/Reports/LoadReport/${reportId}`)
            .then((report) => {
                this.activeReport = report;

                this.fetchData();

                this.renderCurrentReport();
            });
         
        this.setActiveReport(reportId, keepListOpen);
    }

    public cloneReport() {
        const reportId = this.cloneReportIdInput.value;
        this.cloneReportIdInput.value = "";
        const report = this.findReportById(reportId);
        if (!report)
            return;

        const newReportName = this.cloneReportNameInput.value;
        if (newReportName) {
            this.http.get(`/Reports/LoadReport/${reportId}`)
                .then((report) => {
                    const newReport: Report = {
                        id: undefined,
                        name: newReportName,
                        description: report.description,
                        sql: report.sql,
                        isShared: false
                    };
                    return this.http.post('/Reports/NewReport', newReport);
                })
                .then(report => {
                    this.insertIntoReportList(report);
                    this.renderReportList({ reportId: report.id });
                });
        }
    }

    public saveCurrentReport() {
        const reportName = this.reportNameInput.value;

        if (reportName) {
            this.activeReport.name = reportName;
            this.activeReport.description = this.reportDescTextArea.value;
            this.activeReport.sql = this.queryEditor.getValue();
            this.activeReport.isShared = this.sharedCheckbox.checked;
           
            this.http.put('/Reports/SaveReport', this.activeReport)
                .then((result) => {
                    const report = this.findReportById(result.id);
                    report.name = result.name;
                    report.isShared = result.isShared;
                    report.description = this.activeReport.description;
                    report.sql = this.activeReport.sql

                    this.renderReportList({ reportId: report.id });

                    this.renderCurrentReport();
                    this.fetchData();
                });
        }
    }

    public removeSelectedReport() {
        const removeReportIdInput = this.getControl<HTMLInputElement>('RemoveReportIdInput');
        const reportId = removeReportIdInput.value;
        removeReportIdInput.value = '';
        const report = this.findReportById(reportId);
        if (!report)
            return;
            
        this.http.delete(`/Reports/DeleteReport/${reportId}`)
            .then(() => {
                const currentReportId = this.activeReport.id;
                const index = this.removeFromReportList(reportId);
                this.renderReportList((reportId === currentReportId)
                    ? { reportIndex: index, keepListOpen: true }
                    : { reportId: currentReportId, keepListOpen: true }); 
            });
    }

    public fetchData() {
        this.clearErrors();
        if (this.activeReport) {
            this.gridTable.columns.clear();
            this.gridTable.clear();
            this.grid.clear();

            const requestData = {
                reportId: this.activeReport.id
            };
            this.http.post('/Reports/FetchData', requestData)
                .then(result => {
                    for (const col of result.cols) {
                        this.gridTable.columns.add(col);
                    }

                    this.gridTable.setTotal(result.rows.length);

                    for (const row of result.rows) {
                        this.gridTable.addRow(row);
                    }
                    this.grid.refresh();
                })
                .catch(error => {
                    this.errorHandler(error.message);
                });
        }
    }

    public setActiveReport(reportId: string, keepListOpen = false) {
        const rlItems = this.reportListPlaceholder.querySelectorAll('li');
        for (let i = 0; i < rlItems.length; i++) {
            const item = rlItems[i];

            item.classList.remove('active');

            const rid = item.getAttribute('data-rid');
            if (rid === reportId) {
                item.classList.add('active');
            }
        }

        if (!keepListOpen) {
            const closeButton = this.getControl('HideReportListButton');
            if (closeButton && closeButton.offsetParent !== null) { // HideReportList button is visible, so the reportlist is fullscreen now
                closeButton.click();
            }
        }
    }

    public renderCurrentReport() {        
        const reportTitleElem =  this.getControl('ReportTitle');
        if (reportTitleElem) {
            reportTitleElem.innerHTML = this.activeReport.name;
        }

        const reportDescElem = this.getControl('ReportDescription');
        if (reportDescElem) {
            reportDescElem.innerHTML = this.activeReport.description || '[No description]'; 
        }

        const report = this.findReportById(this.activeReport.id);
        this.editReportButton.disabled = report.isReadonly;
    }

    public renderReportList(options?: any) {
        this.renderReportPanels();

        this.reportListPlaceholder.innerHTML = "";
        if (this.reports.length > 0) {
            options = {reportIndex: 0, ...options};

            const ul = document.createElement('ul');
            ul.className = "list-group list-group-flush";

            this.reportListPlaceholder.appendChild(ul);

            for (const report of this.reports) {
                ul.appendChild(this.renderReportItemInList(report));
            }

            if (options.reportId) {  
                if (!this.activeReport || options.reportId !== this.activeReport.id) {
                    this.loadReport(options.reportId, options.keepListOpen);
                }
                else {
                    this.setActiveReport(this.activeReport.id, options.keepListOpen);
                }
            }
            else if (typeof (options.reportIndex) !== "undefined") {
                let idx = options.reportIndex;
                if (idx >= this.reports.length)
                    idx = this.reports.length - 1;
                if (idx < 0 && this.reports.length > 0)
                    idx = 0;
                if (idx >= 0)
                    this.loadReport(this.reports[idx].id, options.keepListOpen);
            }
        }

        this.filterReportList();
    }

    protected filterReportList() {
        const filter = this.reportSearchText.toLowerCase();
        const items = this.reportListPlaceholder.querySelectorAll('li');
        items.forEach(item => {
            const report = this.findReportById(item.getAttribute('data-rid'));
            const nameDiv = item.querySelector('.er-report-name');
            if (!this.reportSearchText) {
                if (nameDiv) {
                    nameDiv.innerHTML = report.name;
                }
                item.hidden = false;
                return;
            }

            item.hidden = !report.name.toLowerCase().includes(filter);

            if (!item.hidden && nameDiv) {
                nameDiv.innerHTML = report.name
                    .replace(new RegExp(filter, "gi"), (match) => `<b>${match}</b>`)
            }
        });
    }


    protected renderReportItemInList(report: Report): HTMLElement {    
        const reportName = report.name || report.description || "";
        const li = document.createElement('li');
        li.title = report.name;
        li.setAttribute('data-rid', report.id);
        li.className = 'list-group-item list-group-item-action er-report-item';

        // shared icon
        const iconDiv = document.createElement('div');
        iconDiv.innerHTML = "<i class='fa'></i>";

        if (report.isShared) {
            if (report.isAlien) {
                iconDiv.classList.add("er-readonly-report");
                iconDiv.querySelector("i").classList.add("fa-lock");
                iconDiv.querySelector("i").title = "Read-only report";
            }
            else {
                iconDiv.classList.add("er-shared-report");
                iconDiv.querySelector("i").classList.add("fa-rss");
                iconDiv.querySelector("i").title = "Shared report";
            }
        }

        li.appendChild(iconDiv);


        // report name
        const nameDiv = document.createElement('div');
        nameDiv.classList.add('er-report-name');
        nameDiv.innerText = reportName;
        li.appendChild(nameDiv);

        // menu button
        const btnGroupDiv = document.createElement('div');
        btnGroupDiv.classList.add("er-actions-button");

        const self = this;

        if (!roleValidator.validate(Role.CONSUMER)) {
            btnGroupDiv.innerHTML += `<a data-toggle='dropdown' title="Actions" id='drop-down' data-cid='` + report.id + `'>
				<i class="fa fa-ellipsis-v"></i>
            </a>`;

            const dropDownDiv = document.createElement('div');
            dropDownDiv.className += "dropdown-menu dropdown-menu-left";
            dropDownDiv.setAttribute('role', 'menu');

            const cloneReportMenuButton = domel('button')
                .addClass('dropdown-item')
                .title('')
                .id('OpenCloneReportDlgButton')
                .attr('data-toggle', 'modal')
                .attr('data-target', "#CloneReportDlg")
                .html('Duplicate')
                .on('click', () => {
                    this.cloneReportIdInput.value = report.id;
                    this.cloneReportNameInput.value = report.name + " Copy";
                    setTimeout(() => {
                        this.cloneReportNameInput.focus();
                    }, 500);
                })
                .toDOM();

            const removeReportMenuButton = domel('button')
                .id('OpenRemoveReportDlg')
                .addClass('dropdown-item text-danger')
                .title('')
                .attr('data-toggle', 'modal')
                .attr('data-target', '#RemoveReportDlg')
                .html('Remove')
                .on('click', () => {
                    this.getControl<HTMLInputElement>('RemoveReportIdInput').value = report.id;
                    this.getControl('RemoveReportTitle').innerHTML = report.name;
                })
                .toDOM();
            removeReportMenuButton.disabled = report.isReadonly;

            dropDownDiv.appendChild(cloneReportMenuButton);
            dropDownDiv.appendChild(removeReportMenuButton);

            btnGroupDiv.appendChild(dropDownDiv);
        }

        li.appendChild(btnGroupDiv);

        li.addEventListener('click', (e: MouseEvent) => {
            let el = e.target as HTMLElement;
            if (el.classList.contains('er-report-name')) {
                el = el.parentElement;
            }

            if (el.hasAttribute('data-rid')) {
                const rid = el.getAttribute('data-rid');
                self.loadReport(rid);
            }
        });

        return li;
    }

    protected renderReportPanels() {
        const reportPicker = document.querySelector<HTMLElement>('.er-report-picker') || new HTMLElement();
        const reportContainer = document.querySelector<HTMLElement>('.er-report-container') || new HTMLElement();
        const noReportPanel = this.getControl("NoReportPanel") || new HTMLElement();
        if (this.reports.length > 0) {
            noReportPanel.style.display = 'none';
            reportPicker.style.removeProperty('display');
            reportContainer.style.removeProperty('display');
        }
        else {
            noReportPanel.style.removeProperty('display');
            if (roleValidator.validate(Role.CONSUMER)) {
                noReportPanel.innerHTML = '<h3>No reports</h3><p>You need a "manager" or "admin" role to create reports. Please, ask your team administrator to grant you a permission.</p>';
            }
            reportPicker.style.display = 'none';
            reportContainer.style.display = 'none';
        }
    }


    protected insertIntoReportList(report: Report) {
        this.reports.push(report);
        this.orderReportsByName();
    }

    private orderReportsByName() {
        this.reports.sort((report1, report2) => {
            if (report1.name > report2.name)
                return 1;

            if (report1.name === report2.name)
                return 0;

            return -1;
        })
    }

    
    protected replaceInReportList(report: Report) {
        for(let i = 0; i < this.reports.length; i++) {
            this.reports[i] = report;
        }
    }

    protected removeFromReportList(reportId: string): number {
        let index = this.indexOfReportById(reportId);
        if (index >= 0)
            this.reports.splice(index, 1);

        return index;

    }

    private indexOfReportById(reportId: string): number {
        for (let i = 0; i < this.reports.length; i++) {
            if (this.reports[i].id === reportId)
                return i;
        }
        return -1;
    }

    protected clearReportButtonClick() {
        this.clearErrors();
        this.grid.clear();
        this.activeReport.sql = '';
        this.reportDescTextArea.value = '';
        this.queryEditor.setValue('');
    }

    protected refreshResultButtonClick() {
        this.fetchData();
    }
    
    protected saveReportButtonClick() {
        this.saveCurrentReport();
    }

    protected editReportButtonClick() {
        this.showEditReportDialog();    }


    protected newReportButtonClick() {
        this.showNewReportDialog();
    }

    protected cloneReportButtonClick() {
        this.cloneReport();
    }

    protected removeReportButtonClick() {
        this.removeSelectedReport();
    }
   
    protected errorHandler(error) {
        const alertDiv = document.createElement('div');
        alertDiv.setAttribute('role', 'alert');
        alertDiv.className = 'alert alert-danger alert-dismissible fade show';
        alertDiv.innerHTML = `${error}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>`;
    
        const slot = document.querySelector('.er-result-block');
        slot.insertBefore(alertDiv, slot.firstChild);
    }

    protected clearErrors() {
        const slot = document.querySelector('.er-result-block');
        const alerts = slot.querySelectorAll('.alert');
        alerts.forEach(alert => {
            alert.parentElement.removeChild(alert);
        });
    }


    private getControl<T extends HTMLElement>(id: string): T {
        const control = document.getElementById(id) as T || null;
        if (control === null) {
            throw new Error("Can't find element: " + id);
        }
        return control;
    }

    private findReportById(id: string) : Report | null {

        for(let report of this.reports) {
            if (report.id === id)
                return report;
        }

        return null;
    }
}
