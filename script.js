const symbols = ["🍎","🍌","🍇","🍉","🍒","🍍","🥝","🍓"];
let cards = [...symbols, ...symbols];
cards.sort(() => 0.5 - Math.random());

const game = document.getElementById("game");

let first = null;
let second = null;
let lock = false;

cards.forEach(symbol => {
  let card = document.createElement("div");
  card.classList.add("card");
  card.dataset.symbol = symbol;

  card.onclick = () => {
    if (lock || card.textContent) return;

    card.textContent = symbol;

    if (!first) {
      first = card;
    } else {
      second = card;
      lock = true;

      if (first.dataset.symbol === second.dataset.symbol) {
        first = null;
        second = null;
        lock = false;
      } else {
        setTimeout(() => {
          first.textContent = "";
          second.textContent = "";
          first = null;
          second = null;
          lock = false;
        }, 1000);
      }
    }
  };

  game.appendChild(card);
});
