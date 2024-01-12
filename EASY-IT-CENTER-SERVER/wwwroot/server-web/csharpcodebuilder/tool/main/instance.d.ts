import { Extension } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import type { StyleSpec } from 'style-mod';
import { ExtensionSwitcher } from '../codemirror/create';
import { Connection } from '../protocol/connection';
import { Language } from '../protocol/languages';
import { Session, SessionEventListeners } from '../protocol/session';
import { ContainerRoot } from './container-root';
import { Theme } from './theme';
type CreateInstanceOptions<TExtensionServerOptions, TSlowUpdateExtensionData> = {
    readonly serviceUrl: string;
    readonly language: Language | undefined;
    readonly theme: Theme | undefined;
    readonly text: string | undefined;
    readonly cursorOffset?: number | undefined;
    readonly on: {
        readonly textChange: ((getText: () => string) => void) | undefined;
    } & SessionEventListeners<TSlowUpdateExtensionData>;
    readonly disconnected: boolean | undefined;
    readonly serverOptions: TExtensionServerOptions | undefined;
    readonly codeMirror: {
        extensions: ReadonlyArray<Extension> | undefined;
        theme: {
            [selector: string]: StyleSpec;
        } | undefined;
    };
};
type InstanceContext<O, U> = {
    readonly connection: Connection<O, U>;
    readonly session: Session<O, U>;
    disconnected: boolean;
    language: Language;
    readonly codeMirror: {
        readonly view: EditorView;
        extensions: ReadonlyArray<Extension>;
        readonly extensionSwitcher: ExtensionSwitcher;
    };
    readonly root: ContainerRoot;
};
declare class Instance<TExtensionServerOptions, U> {
    #private;
    constructor(context: InstanceContext<TExtensionServerOptions, U>);
    getCodeMirrorView(): EditorView;
    getRootElement(): HTMLDivElement;
    getText(): string;
    setText(text: string): void;
    getCursorOffset(): number;
    getLanguage(): Language;
    setLanguage(value: Language): void;
    setServerOptions(value: TExtensionServerOptions): void;
    setTheme(value: Theme): void;
    setServiceUrl(url: string, { disconnected }?: {
        disconnected?: boolean;
    }): void;
    connect(): void;
    destroy(): void;
}
export declare const createInstance: <O, U>(container: HTMLElement, options: CreateInstanceOptions<O, U>) => Instance<O, U>;
export {};
