import { StateField } from '@codemirror/state';
import type { EditorView } from '@codemirror/view';
export declare function defineEffectField<T>(...[initialValue]: undefined extends T ? [T] | [] : [T]): readonly [StateField<T | undefined>, (view: EditorView, value: T) => void];
