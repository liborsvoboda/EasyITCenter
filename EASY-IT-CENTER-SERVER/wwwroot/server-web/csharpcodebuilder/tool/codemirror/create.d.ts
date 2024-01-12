import { EditorState, Extension } from '@codemirror/state';
import type { StyleSpec } from 'style-mod';
import { Theme } from '../main/theme';
import type { Connection } from '../protocol/connection';
import type { Language } from '../protocol/languages';
import type { Session } from '../protocol/session';
export declare const createExtensions: <O, U>(connection: Connection<O, U>, session: Session<O, U>, options: {
    language: Language;
    theme: Theme;
    themeSpec: {
        [selector: string]: StyleSpec;
    };
    onTextChange: ((getText: () => string) => void) | undefined;
    extraExtensions: ReadonlyArray<Extension>;
}) => readonly [(Extension | (Extension | import("@codemirror/state").StateField<{
    pos: number;
    promise: Promise<import("@codemirror/view").Tooltip>;
    resolve: (tooltip: import("@codemirror/view").Tooltip) => void;
} | null | undefined>)[] | (Extension | import("@codemirror/state").StateField<import("../protocol/messages").SignaturesMessage | import("../protocol/messages").SignaturesEmptyMessage | undefined>)[] | (import("@codemirror/state").StateField<boolean | undefined> | import("@codemirror/view").ViewPlugin<{
    destroy: () => void;
}>)[])[], {
    readonly switchLanguageExtension: (extensions: readonly Extension[], newState: Language) => readonly Extension[];
    readonly switchThemeExtension: (extensions: readonly Extension[], newState: Theme) => readonly Extension[];
}];
export type ExtensionSwitcher = ReturnType<typeof createExtensions>[1];
export declare const createState: (extensions: ReadonlyArray<Extension>, options?: {
    text?: string | undefined;
    cursorOffset?: number | undefined;
}) => EditorState;
