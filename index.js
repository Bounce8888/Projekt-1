import { v4 as uuidv4 } from "https://jspm.dev/uuid";

let inCome = [];
console.log(inCome);
let outCome = [];
console.log(outCome);
let sumInc = 0;
console.log(sumInc);
let sumOut = 0;
console.log(sumOut);
function sumFn(arr) {
  return arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
}

function diffrend() {
  let sum = sumInc - sumOut;
  const reszta = document.querySelector("#reszta");
  if (sum === 0) {
    reszta.innerHTML = "Nie masz nic do wydania";
  } else if (sum > 0) {
    reszta.innerHTML = `Masz do wydania ${sum}`;
  } else {
    reszta.innerHTML = `Brakuje ${sum}`;
  }
}

// let amountInputBox = document.getElementById("amount-input");

// var invalidChars = ["-", "+", "e"];

// amountInputBox.addEventListener("keydown", function (e) {
//   if (invalidChars.includes(e.key)) {
//     e.preventDefault();
//   }
// });
const addBtn = document.querySelector(".addP");
addBtn.addEventListener("click", () => {
  const nameInput = document.querySelector(".name-input");
  const nameVal = nameInput.value;
  const amountInput = document.querySelector(".amount-input");
  const amountVal = amountInput.value;
  let wallet = {
    name: nameVal,
    amount: amountVal,
    id: uuidv4(),
  };

  // DLACZEGO NIE DZIAŁA OD RAZU tylko po kliknieciu
  var invalidChars = ["-", "+", "e"];
  amountInput.addEventListener("keydown", function (e) {
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
  });

  //test

  const newLi = document.createElement("li");
  const par = document.createElement("p");
  par.textContent = `${wallet.name} - ${wallet.amount}`;
  newLi.appendChild(par);
  const input = document.createElement("input");
  input.type = "text";
  input.setAttribute("data-id", wallet.id);
  input.setAttribute("style", "display:none");
  input.placeholder = `${wallet.name}`;
  newLi.appendChild(input);
  const inputAmount = document.createElement("input");
  inputAmount.type = "number";
  inputAmount.placeholder = `${wallet.amount}`;
  inputAmount.setAttribute("data-id", wallet.id);
  inputAmount.setAttribute("style", "display:none");
  newLi.appendChild(inputAmount);
  nameInput.value = "";
  amountInput.value = "";

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Zapisz";
  saveBtn.setAttribute("data-id", wallet.id);
  saveBtn.setAttribute("style", "display:none");
  newLi.appendChild(saveBtn);

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edytuj";
  editBtn.setAttribute("data-id", wallet.id);
  newLi.appendChild(editBtn);
  editBtn.addEventListener("click", () => {
    editBtn.setAttribute("style", "display:none");
    saveBtn.setAttribute("style", "display:flex");
    cancelBtn.setAttribute("style", "display:flex");
    delBtn.setAttribute("style", "display:none");
    input.setAttribute("style", "display:flex");
    inputAmount.setAttribute("style", "display:flex");

    saveBtn.addEventListener("click", () => {
      saveBtn.setAttribute("style", "display:none");
      editBtn.setAttribute("style", "display:flex");
      input.setAttribute("style", "display:none");
      cancelBtn.setAttribute("style", "display:none");
      delBtn.setAttribute("style", "display:flex");
      inputAmount.setAttribute("style", "display:none");
      const oldAmount = wallet.amount;
      inCome.push(-oldAmount);
      inCome.push(+inputAmount.value);
      par.textContent = `${input.value} - ${inputAmount.value}`;
      sumInc = sumFn(inCome);
      diffrend();
      wallet.amount = inputAmount.value;
      sumaInc.innerText = `Suma przychodów: ${+sumInc} zł.`;
    });
    oldAmount = 0;
  });
  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Anuluj";
  cancelBtn.setAttribute("data-id", wallet.id);
  cancelBtn.setAttribute("style", "display:none");
  newLi.appendChild(cancelBtn);
  cancelBtn.addEventListener("click", () => {
    cancelBtn.setAttribute("style", "display:none");
    delBtn.setAttribute("style", "display:flex");
    saveBtn.setAttribute("style", "display:none");
    input.setAttribute("style", "display:none");
    inputAmount.setAttribute("style", "display:none");
    editBtn.setAttribute("style", "display:flex");
  });
  const delBtn = document.createElement("button");
  delBtn.textContent = "Usuń";
  delBtn.setAttribute("data-id", wallet.id);
  newLi.appendChild(delBtn);

  document.getElementById("incomeList").appendChild(newLi);
  inCome.push(+wallet.amount);

  sumInc = sumFn(inCome);
  diffrend();

  delBtn.addEventListener("click", () => {
    document.getElementById("incomeList").removeChild(newLi);
    inCome.push(-wallet.amount);
    sumInc = sumInc - wallet.amount;
    sumaInc.innerText = `Suma przychodów ${+sumInc} zł.`;
    diffrend();
  });

  let sumaInc = document.getElementById("sumaP");
  console.log(sumInc);
  sumaInc.innerText = `Suma przychodów: ${+sumInc} zł`;
});

const addBtnExp = document.querySelector(".dodajW"); // dlaczego nie moge zmienić?!
addBtnExp.addEventListener("click", () => {
  const nameExp = document.querySelector(".name-output");
  const nameValExp = nameExp.value;
  const exptInput = document.querySelector(".amount-output");

  // DLACZEGO NIE DZIAŁA OD RAZU tylko po kliknieciu
  // DLACZEGO NIE DZIAŁA OD RAZU tylko po kliknieciu
  var invalidCharss = ["-", "+", "e"];
  exptInput.addEventListener("keydown", function (e) {
    if (invalidCharss.includes(e.key)) {
      e.preventDefault();
    }
  });
  const expVal = exptInput.value;
  const spend = {
    name: nameValExp,
    amount: expVal,
    id: uuidv4(),
  };

  const newLi2 = document.createElement("li");
  const par2 = document.createElement("p");
  par2.textContent = `${spend.name} - ${spend.amount}`;
  newLi2.appendChild(par2);

  const input2 = document.createElement("input");
  input2.type = "text";
  input2.setAttribute("data-id", spend.id);
  input2.setAttribute("style", "display:none");
  input2.placeholder = `${spend.name}`;
  newLi2.appendChild(input2);

  const inputAmountExp = document.createElement("input");
  inputAmountExp.type = "number";
  inputAmountExp.placeholder = `${spend.amount}`;
  inputAmountExp.setAttribute("data-id", spend.id);
  inputAmountExp.setAttribute("style", "display:none");
  newLi2.appendChild(inputAmountExp);
  nameExp.value = "";
  exptInput.value = "";

  const saveBtnExp = document.createElement("button");
  saveBtnExp.textContent = "Zapisz";
  saveBtnExp.setAttribute("data-id", spend.id);
  saveBtnExp.setAttribute("style", "display:none");
  newLi2.appendChild(saveBtnExp);

  const editBtnExp = document.createElement("button");
  editBtnExp.textContent = "Edytuj";
  editBtnExp.setAttribute("data-id", spend.id);
  newLi2.appendChild(editBtnExp);
  editBtnExp.addEventListener("click", () => {
    editBtnExp.setAttribute("style", "display:none");
    saveBtnExp.setAttribute("style", "display:flex");
    cancelBtnExp.setAttribute("style", "display:flex");
    delBtnExp.setAttribute("style", "display:none");
    input2.setAttribute("style", "display:flex");
    inputAmountExp.setAttribute("style", "display:flex");

    saveBtnExp.addEventListener("click", () => {
      saveBtnExp.setAttribute("style", "display:none");
      editBtnExp.setAttribute("style", "display:flex");
      input2.setAttribute("style", "display:none");
      cancelBtnExp.setAttribute("style", "display:none");
      delBtnExp.setAttribute("style", "display:flex");
      inputAmountExp.setAttribute("style", "display:none");
      const oldAmountExp = spend.amount;
      outCome.push(-oldAmountExp);
      outCome.push(+inputAmountExp.value);
      par2.textContent = `${input2.value} - ${inputAmountExp.value}`;
      sumOut = sumFn(outCome);
      console.log(sumOut + " SumOut");
      diffrend();
      spend.amount = inputAmountExp.value;
      sumaOut.innerText = `Suma wydatków ${+sumOut} zł.`;
    });
    oldAmountExp = 0;
  });
  const cancelBtnExp = document.createElement("button");
  cancelBtnExp.textContent = "Anuluj";
  cancelBtnExp.setAttribute("data-id", spend.id);
  cancelBtnExp.setAttribute("style", "display:none");
  newLi2.appendChild(cancelBtnExp);
  cancelBtnExp.addEventListener("click", () => {
    cancelBtnExp.setAttribute("style", "display:none");
    delBtnExp.setAttribute("style", "display:flex");
    saveBtnExp.setAttribute("style", "display:none");
    input2.setAttribute("style", "display:none");
    inputAmountExp.setAttribute("style", "display:none");
    editBtnExp.setAttribute("style", "display:flex");
  });
  const delBtnExp = document.createElement("button");
  delBtnExp.textContent = "Usuń";
  delBtnExp.setAttribute("data-id", spend.id);
  newLi2.appendChild(delBtnExp);

  document.getElementById("spendList").appendChild(newLi2);
  outCome.push(+spend.amount);
  console.log(outCome + "outCome");
  sumOut = sumFn(outCome);
  diffrend();
  console.log(sumOut);

  delBtnExp.addEventListener("click", () => {
    document.getElementById("spendList").removeChild(newLi2);
    sumOut = sumOut - spend.amount;
    sumaOut.innerText = `Suma wydatków ${+sumOut} zł.`;
    diffrend();
    console.log(sumOut + " sumOut");
  });

  let sumaOut = document.getElementById("sumaW");
  sumaOut.innerText = `Suma wydatków ${+sumOut}`;
});
