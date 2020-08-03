import "./styles.css";
let appId = document.getElementById("app");

appId.innerHTML = `
<h1>Shuffle and Sort</h1>
`;

const ShuffleButton = () => `<button onClick=shuffleCard()>Shuffle</button>`;
const SortButton = () => `<button onClick=generateSortedCard()>Sort</button>`;

appId.innerHTML += ShuffleButton();
appId.innerHTML += SortButton();

const shuffleCard = () => {};

const generateSortedCard = () => {
  let element = "";
  for (let index = 0; index < 10; index++) {
    let elementId = "card" + index;
    element += `<div class="cardClassDiv">${elementId}</div>`;
  }
  appId.innerHTML += element;
};
shuffleCard();
generateSortedCard();
