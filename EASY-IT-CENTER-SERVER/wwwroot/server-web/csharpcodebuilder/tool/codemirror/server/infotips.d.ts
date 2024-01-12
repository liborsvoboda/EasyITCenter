import { Tooltip } from '@codemirror/view';
import type { Connection } from '../../protocol/connection';
export declare const infotipsFromServer: <O, U>(connection: Connection<O, U>) => (import("@codemirror/state").Extension | import("@codemirror/state").StateField<{
    pos: number;
    promise: Promise<Tooltip>;
    resolve: (tooltip: Tooltip) => void;
} | null | undefined>)[];
