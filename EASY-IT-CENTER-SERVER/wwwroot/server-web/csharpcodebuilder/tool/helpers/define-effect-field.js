import { StateEffect, StateField } from '@codemirror/state';
export function defineEffectField(...[initialValue]) {
  const effectType = StateEffect.define();
  const field = StateField.define({
    create: () => initialValue,
    update(value, {
      effects
    }) {
      const effect = effects.find(e => e.is(effectType));
      return effect ? effect.value : value;
    }
  });
  const dispatchEffect = (view, value) => view.dispatch(view.state.update({
    effects: [effectType.of(value)]
  }));
  return [field, dispatchEffect];
}