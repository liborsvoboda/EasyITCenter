import type { Connection } from '../../protocol/connection';
import type { SignaturesEmptyMessage, SignaturesMessage } from '../../protocol/messages';
export declare const signatureHelpFromServer: (connection: Connection) => (import("@codemirror/state").Extension | import("@codemirror/state").StateField<SignaturesMessage | SignaturesEmptyMessage | undefined>)[];
