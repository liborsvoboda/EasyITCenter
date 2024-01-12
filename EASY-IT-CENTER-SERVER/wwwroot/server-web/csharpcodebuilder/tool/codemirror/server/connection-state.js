import { ViewPlugin } from '@codemirror/view';
import { defineEffectField } from "../../helpers/define-effect-field.js";
const [isConnected, dispatchIsConnectedChanged] = defineEffectField(false);
export const connectionState = connection => {
  return [isConnected, ViewPlugin.define(view => {
    const removeListeners = connection.addEventListeners({
      open: () => dispatchIsConnectedChanged(view, true),
      close: () => dispatchIsConnectedChanged(view, false)
    });
    return {
      destroy: () => removeListeners()
    };
  })];
};