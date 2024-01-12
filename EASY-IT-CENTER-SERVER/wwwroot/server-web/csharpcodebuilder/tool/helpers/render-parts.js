const createSection = () => {
  const section = document.createElement('div');
  section.className = 'mirrorsharp-parts-section';
  return section;
};
const renderPartTo = (parent, part, {
  getExtraClassNames
}) => {
  const span = document.createElement('span');
  const extraClassNames = getExtraClassNames?.(part);
  span.className = 'tok-' + part.kind + (extraClassNames ? ' ' + extraClassNames.join(' ') : '');
  span.textContent = part.text;
  parent.appendChild(span);
};
export const renderPartsTo = (parent, parts, {
  splitLinesToSections,
  getExtraClassNames
} = {}) => {
  let section = splitLinesToSections ? createSection() : parent;
  for (const part of parts) {
    if (part.kind === 'linebreak' && splitLinesToSections) {
      parent.appendChild(section);
      section = createSection();
      continue;
    }
    renderPartTo(section, part, {
      getExtraClassNames
    });
  }
  if (splitLinesToSections) parent.appendChild(section);
};
export const renderParts = (parts, options = {}) => {
  const container = document.createElement('div');
  renderPartsTo(container, parts, options);
  return container;
};