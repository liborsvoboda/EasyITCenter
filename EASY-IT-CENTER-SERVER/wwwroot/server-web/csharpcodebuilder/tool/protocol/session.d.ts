import type { Connection, ReplaceTextCommand } from './connection';
import type { DiagnosticSeverity, ServerOptions, ServerPosition } from './messages';
type FullTextContext = {
    readonly getText: () => string;
    readonly getCursorIndex: () => ServerPosition;
};
type SlowUpdateResultDiagnostic = {
    readonly id: string;
    readonly severity: DiagnosticSeverity;
    readonly message: string;
};
type SlowUpdateResult<TSlowUpdateExtensionData> = {
    readonly diagnostics: ReadonlyArray<SlowUpdateResultDiagnostic>;
    readonly extensionResult: TSlowUpdateExtensionData;
};
export type SessionEventListeners<TSlowUpdateExtensionData> = {
    readonly connectionChange: ((event: 'open' | 'loss') => void) | undefined;
    readonly slowUpdateWait: (() => void) | undefined;
    readonly slowUpdateResult: ((args: SlowUpdateResult<TSlowUpdateExtensionData>) => void) | undefined;
    readonly serverError: ((message: string) => void) | undefined;
};
export declare class Session<TExtensionServerOptions = unknown, TSlowUpdateExtensionData = unknown> {
    #private;
    constructor(connection: Connection<TExtensionServerOptions, TSlowUpdateExtensionData>, serverOptions: ServerOptions & TExtensionServerOptions, on: SessionEventListeners<TSlowUpdateExtensionData>);
    setOptions(options: Partial<ServerOptions> & Partial<TExtensionServerOptions>): void;
    setFullText(context: FullTextContext): void;
    sendPartialText(command: ReplaceTextCommand): void;
    sendTypeChar(char: string): void;
    sendMoveCursor(cursorIndex: ServerPosition): void;
    destroy(): void;
}
export {};
