import initEvents from './events';
import renderBoard from './render/board.js';
import renderBox from './render/box.js';
import STORE from './store';

const app = (root) => {
  const render = (store) => {
    root.innerHTML = `
      ${renderBoard(store.board, store.selected)}
      ${renderBox(store.box)}
    `;
    initEvents(root, store, render);
  };
  render(STORE);
};

export default app;
