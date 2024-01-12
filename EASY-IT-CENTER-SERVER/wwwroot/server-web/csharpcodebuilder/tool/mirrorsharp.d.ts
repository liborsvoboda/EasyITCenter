import type { Extension } from '@codemirror/state';
import type { EditorView } from '@codemirror/view';
import type { StyleSpec } from 'style-mod';
import type { Theme } from './main/theme';
import type { Language } from './protocol/languages';
import type { DiagnosticSeverity } from './protocol/messages';
export type MirrorSharpDiagnosticSeverity = DiagnosticSeverity;
export type MirrorSharpLanguage = Language;
export type MirrorSharpConnectionState = 'open' | 'error' | 'close';
export type MirrorSharpTheme = Theme;
export interface MirrorSharpDiagnostic {
    readonly id: string;
    readonly severity: MirrorSharpDiagnosticSeverity;
    readonly message: string;
}
export type MirrorSharpSlowUpdateResult<TExtensionData = void> = void extends TExtensionData ? {
    readonly diagnostics: ReadonlyArray<MirrorSharpDiagnostic>;
} : {
    readonly diagnostics: ReadonlyArray<MirrorSharpDiagnostic>;
    readonly extensionResult: TExtensionData;
};
export type MirrorSharpOptions<TExtensionServerOptions = void, TSlowUpdateExtensionData = void> = {
    readonly serviceUrl: string;
    readonly language?: MirrorSharpLanguage | undefined;
    readonly theme?: MirrorSharpTheme | undefined;
    readonly text?: string | undefined;
    readonly cursorOffset?: number | undefined;
    readonly on?: {
        readonly slowUpdateWait?: () => void;
        readonly slowUpdateResult?: (result: MirrorSharpSlowUpdateResult<TSlowUpdateExtensionData>) => void;
        readonly textChange?: (getText: () => string) => void;
        readonly connectionChange?: (event: 'open' | 'loss') => void;
        readonly serverError?: (message: string) => void;
    } | undefined;
    readonly disconnected?: boolean | undefined;
    readonly serverOptions?: TExtensionServerOptions | undefined;
    readonly codeMirror?: {
        extensions?: ReadonlyArray<Extension>;
        theme?: {
            [selector: string]: StyleSpec;
        };
    };
};
export interface MirrorSharpInstance<TExtensionServerOptions> {
    getCodeMirrorView(): EditorView;
    getRootElement(): Element;
    getText(): string;
    setText(text: string): void;
    getCursorOffset(): number;
    getLanguage(): MirrorSharpLanguage;
    setLanguage(value: MirrorSharpLanguage): void;
    setServerOptions(value: TExtensionServerOptions): void;
    setTheme(value: MirrorSharpTheme): void;
    setServiceUrl(url: string, options?: ({
        disconnected?: boolean;
    } | undefined)): void;
    connect(): void;
    destroy(): void;
}
export default function mirrorsharp<TExtensionServerOptions = void, TSlowUpdateExtensionData = void>(container: HTMLElement, options: MirrorSharpOptions<TExtensionServerOptions, TSlowUpdateExtensionData>): MirrorSharpInstance<TExtensionServerOptions>;
