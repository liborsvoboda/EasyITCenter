import type { EditorView } from '@codemirror/view';
import type { ChangeData } from '../../protocol/messages';
export declare const applyChangesFromServer: (view: EditorView, changesFromServer: ReadonlyArray<ChangeData>) => void;
