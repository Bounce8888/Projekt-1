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

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Zapisz";
  saveBtn.setAttribute("data-id", wartosc.id);
  saveBtn.setAttribute("style", "display:none");
  newLi.appendChild(saveBtn);
  saveBtn.addEventListener("click", () => {
    saveBtn.setAttribute("style", "display:none");
    editBtn.setAttribute("style", "display:");
  });

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edytuj";
  editBtn.setAttribute("data-id", wartosc.id);
  newLi.appendChild(editBtn);
  editBtn.addEventListener("click", () => {
    editBtn.setAttribute("style", "display:none");
    saveBtn.setAttribute("style", "display:");
    console.log("klik");
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = `${wartosc.name}`;
    newLi.appendChild(input);

    li.removeChild(newLi);
  });

  const delBtn = document.createElement("button");
  delBtn.textContent = "Usuń";
  delBtn.setAttribute("data-id", wartosc.id);
  newLi.appendChild(delBtn);

  document.getElementById("incomeList").appendChild(newLi);
  przychody.push(+wartosc.amount);

  sumInc = +sumFn(przychody);
  difrend();

  delBtn.addEventListener("click", () => {
    document.getElementById("incomeList").removeChild(newLi);
    sumInc = sumInc - wartosc.amount;
    sumaInc.innerText = `Suma przychodów ${+sumInc} zł.`;
    difrend();
  });

  const sumaInc = document.getElementById("sumaP");
  sumaInc.innerText = `Suma przychodów: ${+sumInc} zł`;
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

  const saveBtnExp = document.createElement("button");
  saveBtnExp.textContent = "Zapisz";
  saveBtnExp.setAttribute("data-id", spend.id);
  saveBtnExp.setAttribute("style", "display:none");

  newLi2.appendChild(saveBtnExp);
  saveBtnExp.addEventListener("click", () => {
    saveBtnExp.setAttribute("style", "display:none");
    editBtnExp.setAttribute("style", "display:");
  });

  const editBtnExp = document.createElement("button");
  editBtnExp.textContent = "Edytuj";
  editBtnExp.setAttribute("data-id", spend.id);
  newLi2.appendChild(editBtnExp);
  editBtnExp.addEventListener("click", () => {
    editBtnExp.setAttribute("style", "display:none");
    saveBtnExp.setAttribute("style", "display:");
  });

  const delBtnExp = document.createElement("button");
  delBtnExp.textContent = "Usuń";
  delBtnExp.setAttribute("data-id", spend.id);
  newLi2.appendChild(delBtnExp);

  document.getElementById("spendList").appendChild(newLi2);
  wydatki.push(+spend.amount);

  sumOut = +sumFn(wydatki);
  difrend();

  delBtnExp.addEventListener("click", () => {
    document.getElementById("spendList").removeChild(newLi2);
    sumOut = sumOut - spend.amount;
    sumaOut.innerText = `Suma wydatków ${+sumOut} zł.`;
    difrend();
  });
  const sumaOut = document.getElementById("sumaW");

  sumaOut.innerText = `Suma wydatków ${+sumOut}`;

  //   delBtnExp.addEventListener("click", () => {
  //     document.getElementById("spendList").removeChild(newLi2);

  //     sumOut = +sumFn(wydatki);
  //     difrend();
  //   });
});

console.log("start");

// if (sumInc > 2) {
//   console.log("wiecej niż 2");
// } else if (sumInc > 5) {
//   console.log("wiecej niż 5");
// } else {
//   console.log("jest ponizej 2!");
// }
