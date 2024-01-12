import type { Connection } from '../../protocol/connection';
export declare const diagnosticsFromServer: <TExtensionData>(connection: Connection<unknown, TExtensionData>) => import("@codemirror/state").Extension[];
