import { ViewPlugin } from '@codemirror/view';
import type { Connection } from '../../protocol/connection';
export declare const connectionState: <O, TExtensionData>(connection: Connection<O, TExtensionData>) => (import("@codemirror/state").StateField<boolean | undefined> | ViewPlugin<{
    destroy: () => void;
}>)[];
