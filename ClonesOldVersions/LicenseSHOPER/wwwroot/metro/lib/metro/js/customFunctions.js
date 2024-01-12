function ModalInfobook() {
    Desktop.createWindow({
        resizeable: false,
        draggable: true,
        width: 1080,
        height: 880,
        icon: "<span class='mif-info'></span>",
        title: "Groupware Projects Info",
        content: "<iframe src='../server/InfoBook/index.html' style='width: 100%; height: 800px;' ></iframe>",
        overlay: true,
        //overlayColor: "transparent",
        modal: true,
        place: "center",
        onShow: function (win) {
            var win = $(win);
            win.addClass("ani-swoopInTop");
            setTimeout(function () {
                $(win).removeClass("ani-swoopInTop");
            }, 1000);
        },
        onClose: function (win) {
            var win = $(win);
            win.addClass("ani-swoopOutTop");
        }
    });
}