import { ViewPlugin } from '@codemirror/view';
export declare const notifyOnTextChanges: (onTextChange: (getText: () => string) => void) => ViewPlugin<{
    update({ docChanged, view }: import("@codemirror/view").ViewUpdate): void;
}>;
