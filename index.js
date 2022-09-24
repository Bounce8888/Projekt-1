import { v4 as uuidv4 } from "https://jspm.dev/uuid";
// let wartosc = {
//   name: "",
//   amount: "",
//   id: "",
// };

const przychody = [];
const wydatki = [];
let sumInc = 0;
let sumOut = 0;

function sumFn(arr) {
  return arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
}

function difrend() {
  const sum = sumInc - sumOut;
  const reszta = document.querySelector("#reszta");
  if (sum === 0) {
    reszta.innerHTML = "Nie masz nic do wydania";
  } else if (sum > 0) {
    reszta.innerHTML = `Masz do wydania ${sum}`;
  } else {
    reszta.innerHTML = `Brakuje ${sum}`;
  }
}

const addBtn = document.querySelector(".dodajP");
addBtn.addEventListener("click", () => {
  const nameInput = document.querySelector(".name-input");
  const nameVal = nameInput.value;
  const amountInput = document.querySelector(".amount-input");
  const amountVal = amountInput.value;
  let wartosc = {
    name: nameVal,
    amount: amountVal,
    id: uuidv4(),
  };
  const newLi = document.createElement("li");
  newLi.textContent = `${wartosc.name} - ${wartosc.amount}`;
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edytuj";
  editBtn.setAttribute("data-id", wartosc.id);
  newLi.appendChild(editBtn);
  const delBtn = document.createElement("button");
  delBtn.textContent = "Usuń";
  delBtn.setAttribute("data-id", wartosc.id);
  newLi.appendChild(delBtn);

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Zapisz";
  saveBtn.setAttribute("data-id", wartosc.id);
  newLi.appendChild(saveBtn);
  document.getElementById("incomeList").appendChild(newLi);
  sumInc = +sumFn(przychody);
  difrend();
  delBtn.addEventListener("click", () => {
    document.getElementById("incomeList").removeChild(newLi);
    sumInc = +sumFn(przychody);
    difrend();
  });
  przychody.push(+wartosc.amount);

  const sumaInc = document.getElementById("sumaP");
  sumaInc.innerText = `Suma przychodów ${+sumInc}`;
});
// to jest koniec przychodu
const addBtnExp = document.querySelector(".dodajW");
addBtnExp.addEventListener("click", () => {
  const nameExp = document.querySelector(".name-output");
  const nameValExp = nameExp.value;

  const exptInput = document.querySelector(".amount-output");
  const expVal = exptInput.value;

  const spend = {
    name: nameValExp,
    amount: expVal,
    id: uuidv4(),
  };

  const newLi2 = document.createElement("li");
  newLi2.textContent = `${spend.name} - ${spend.amount}`;

  const editBtnExp = document.createElement("button");
  editBtnExp.textContent = "Edytuj";
  editBtnExp.setAttribute("data-id", spend.id);
  newLi2.appendChild(editBtnExp);
  const delBtnExp = document.createElement("button");
  delBtnExp.textContent = "Usuń";
  delBtnExp.setAttribute("data-id", spend.id);
  newLi2.appendChild(delBtnExp);
  const saveBtnExp = document.createElement("button");
  saveBtnExp.textContent = "Zapisz";
  saveBtnExp.setAttribute("data-id", spend.id);
  newLi2.appendChild(saveBtnExp);
  document.getElementById("spendList").appendChild(newLi2);
  wydatki.push(+spend.amount);

  sumOut = +sumFn(wydatki);
  // console.log(+sumOut);
  const sumaOut = document.getElementById("sumaW");

  sumaOut.innerText = `Suma wydatków ${+sumOut}`;
  difrend();
  delBtnExp.addEventListener("click", () => {
    document.getElementById("spendList").removeChild(newLi2);

    sumOut = +sumFn(wydatki);
    difrend();
  });
});

console.log("start");

// if (sumInc > 2) {
//   console.log("wiecej niż 2");
// } else if (sumInc > 5) {
//   console.log("wiecej niż 5");
// } else {
//   console.log("jest ponizej 2!");
// }
