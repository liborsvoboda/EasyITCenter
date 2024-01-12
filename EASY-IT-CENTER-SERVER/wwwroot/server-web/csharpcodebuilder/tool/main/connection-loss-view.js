export const installConnectionLossView = (root, connection) => {
  let messageElement;
  const show = () => {
    if (!messageElement) {
      messageElement = document.createElement('div');
      messageElement.setAttribute('class', 'mirrorsharp-connection-loss-message');
      messageElement.innerText = 'Server connection lost, reconnecting…';
      root.element.appendChild(messageElement);
    }
    root.element.classList.add('mirrorsharp--connection-lost');
  };
  const hide = () => {
    root.element.classList.remove('mirrorsharp--connection-lost');
  };
  const removeConnectionListeners = connection.addEventListeners({
    open: () => hide(),
    close: () => show()
  });
  return () => {
    removeConnectionListeners();
    messageElement?.remove();
  };
};