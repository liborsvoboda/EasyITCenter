export const switchableExtension = (initialState, getExtension) => {
  let extension = getExtension(initialState);
  return {
    get extension() {
      return extension;
    },
    switch: (extensions, newState) => {
      const index = extensions.indexOf(extension);
      extension = getExtension(newState);
      return [...extensions.slice(0, index), extension, ...extensions.slice(index + 1, extensions.length)];
    }
  };
};