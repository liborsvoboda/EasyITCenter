import type { Message, ServerOptions, ServerPosition } from './messages';
export type ReplaceTextCommand = {
    start: ServerPosition;
    length: number;
    newText: string;
    cursorIndexAfter: ServerPosition;
    reason?: string | null;
};
type HandlerMap<O, U> = {
    open: () => void;
    message: (data: Message<O, U>) => void;
    close: () => void;
};
export declare class Connection<TExtensionServerOptions = unknown, TSlowUpdateExtensionData = unknown> {
    #private;
    constructor(url: string, { closed }: {
        closed: boolean | undefined;
    });
    addEventListeners(listeners: Partial<HandlerMap<TExtensionServerOptions, TSlowUpdateExtensionData>>): () => void;
    open(): void;
    isOpen(): boolean;
    sendReplaceText({ start, length, cursorIndexAfter, newText, reason }: ReplaceTextCommand): Promise<void>;
    sendMoveCursor(cursorIndex: ServerPosition): Promise<void>;
    sendTypeChar(char: string): Promise<void>;
    sendCompletionState(indexOrCommand: 'info' | 'force' | number | 'cancel', indexIfInfo?: number): Promise<void>;
    sendSignatureHelpState(command: 'force' | 'cancel'): Promise<void>;
    sendRequestInfoTip(cursorIndex: ServerPosition): Promise<void>;
    sendSlowUpdate(): Promise<void>;
    sendApplyDiagnosticAction(actionId: number): Promise<void>;
    sendSetOptions(options: Partial<ServerOptions> & Partial<TExtensionServerOptions>): Promise<void>;
    setUrl(url: string, { closed }: {
        closed: boolean | undefined;
    }): void;
    close(): void;
}
export {};
