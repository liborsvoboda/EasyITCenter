import { setDiagnostics, lintGutter } from '@codemirror/lint';
import { ViewPlugin } from '@codemirror/view';
import { applyChangesFromServer } from "../helpers/apply-changes-from-server.js";
import { convertFromServerPosition, getEnd } from "../helpers/convert-position.js";
const receiveSlowUpdateFromServer = connection => ViewPlugin.define(view => {
  const mapSeverity = (severity, tags) => {
    if (severity === 'error' || severity === 'warning') return severity;
    if (tags.includes('unnecessary')) return 'unnecessary';
    return 'info';
  };
  const mapAction = ({
    id,
    title
  }) => ({
    name: title,
    apply: () => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      connection.sendApplyDiagnosticAction(id);
    }
  });
  const mapDiagnostic = ({
    span: {
      start,
      length
    },
    message,
    severity,
    actions,
    tags
  }) => ({
    from: convertFromServerPosition(view.state.doc, start),
    to: convertFromServerPosition(view.state.doc, getEnd(start, length)),
    message,
    severity: mapSeverity(severity, tags),
    actions: actions?.map(mapAction)
  });
  const removeConnectionListeners = connection.addEventListeners({
    message(message) {
      if (message.type !== 'slowUpdate') return;
      const diagnostics = message.diagnostics.filter(d => d.severity !== 'hidden').map(mapDiagnostic)
      // If slow update is received after a text change
      // some diagnostics might be outside document boundaries
      .filter(d => d.to <= view.state.doc.length);
      diagnostics.sort((a, b) => {
        if (a.from > b.from) return 1;
        if (b.from > a.from) return -1;
        return 0;
      });
      view.dispatch(setDiagnostics(view.state, diagnostics));
    }
  });
  return {
    destroy: () => removeConnectionListeners()
  };
});
const receiveFixChangesFromServer = connection => ViewPlugin.define(view => {
  const removeListeners = connection.addEventListeners({
    message(message) {
      if (message.type !== 'changes' || message.reason !== 'fix') return;
      applyChangesFromServer(view, message.changes);
    }
  });
  return {
    destroy: () => removeListeners()
  };
});
export const diagnosticsFromServer = connection => [receiveSlowUpdateFromServer(connection), receiveFixChangesFromServer(connection), lintGutter()];