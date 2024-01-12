import type { Theme } from './theme';
export declare class ContainerRoot {
    #private;
    constructor(container: HTMLElement, codeMirrorDom: HTMLElement, theme: Theme);
    get element(): HTMLDivElement;
    setThemeClass(theme: Theme): void;
    destroy(): void;
}
