import { game, currentBoard } from './celula.js';
setInterval(() => {
  currentBoard = game(currentBoard);
}, 1000);
