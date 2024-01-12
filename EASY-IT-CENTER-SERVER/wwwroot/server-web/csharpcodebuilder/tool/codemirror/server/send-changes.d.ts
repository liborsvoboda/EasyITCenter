import { ViewPlugin, PluginValue } from '@codemirror/view';
import type { Session } from '../../protocol/session';
export declare const sendChangesToServer: (session: Session) => ViewPlugin<PluginValue>;
