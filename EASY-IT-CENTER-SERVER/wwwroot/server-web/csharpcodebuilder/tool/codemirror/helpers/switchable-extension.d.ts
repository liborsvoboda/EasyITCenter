import type { Extension } from '@codemirror/state';
export declare const switchableExtension: <T>(initialState: T, getExtension: (state: T) => Extension) => {
    readonly extension: Extension;
    readonly switch: (extensions: ReadonlyArray<Extension>, newState: T) => readonly Extension[];
};
