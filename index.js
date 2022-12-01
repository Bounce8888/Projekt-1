import { v4 as uuidv4 } from "https://jspm.dev/uuid";

let inCome = [];

let outCome = [];

let sumInc = 0;

let sumOut = 0;
const sumaInc = document.getElementById("incomeSum");
const exptInput = document.querySelector(".amount-output");
const amountInput = document.querySelector(".amount-input");
function calculateSum(arr) {
  return arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
}
function blockNotNumber(event) {
  if (event.keyCode === 69 || event.keyCode === 189 || event.keyCode === 187) {
    event.preventDefault();
  }
}
exptInput.addEventListener("keydown", blockNotNumber);
amountInput.addEventListener("keydown", blockNotNumber);

function budgetChack() {
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

const addBtn = document.querySelector(".addP");
addBtn.addEventListener("click", () => {
  const nameInput = document.querySelector(".name-input");
  const nameVal = nameInput.value;

  const amountVal = amountInput.value;
  if (!nameVal) return;
  if (!amountVal) return;
  let wallet = {
    name: nameVal,
    amount: amountVal,
    id: uuidv4(),
  };

  const newDiv = document.createElement("div");
  const paragraph = document.createElement("p");
  paragraph.textContent = `${wallet.name} - ${wallet.amount}`;
  newDiv.appendChild(paragraph);
  const input = document.createElement("input");
  input.type = "text";

  input.setAttribute("data-id", wallet.id);
  input.setAttribute("style", "display:none");
  input.placeholder = `${wallet.name}`;
  newDiv.appendChild(input);
  const inputAmount = document.createElement("input");
  inputAmount.type = "number";
  inputAmount.placeholder = `${wallet.amount}`;
  inputAmount.setAttribute("data-id", wallet.id);
  inputAmount.setAttribute("style", "display:none");
  newDiv.appendChild(inputAmount);
  nameInput.value = "";
  amountInput.value = "";

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Zapisz";
  saveBtn.setAttribute("data-id", wallet.id);
  saveBtn.setAttribute("style", "display:none");
  newDiv.appendChild(saveBtn);

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edytuj";
  editBtn.setAttribute("data-id", wallet.id);
  newDiv.appendChild(editBtn);
  editBtn.addEventListener("click", () => {
    editBtn.setAttribute("style", "display:none");
    saveBtn.setAttribute("style", "display:flex");
    cancelBtn.setAttribute("style", "display:flex");
    delBtn.setAttribute("style", "display:none");
    input.setAttribute("style", "display:flex");
    inputAmount.setAttribute("style", "display:flex");

    saveBtn.addEventListener("click", () => {
      if (!inputAmount.value || Number(inputAmount.value) < 0) return;
      saveBtn.setAttribute("style", "display:none");
      editBtn.setAttribute("style", "display:flex");
      input.setAttribute("style", "display:none");
      cancelBtn.setAttribute("style", "display:none");
      delBtn.setAttribute("style", "display:flex");
      inputAmount.setAttribute("style", "display:none");
      const oldAmount = wallet.amount;
      inCome.push(-oldAmount);
      inCome.push(+inputAmount.value);
      paragraph.textContent = `${input.value} - ${inputAmount.value}`;
      sumInc = calculateSum(inCome);
      budgetChack();
      wallet.amount = inputAmount.value;
      sumaInc.innerText = `Suma przychodów: ${+sumInc} zł.`;
    });
    oldAmount = 0;
  });
  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Anuluj";
  cancelBtn.setAttribute("data-id", wallet.id);
  cancelBtn.setAttribute("style", "display:none");
  newDiv.appendChild(cancelBtn);
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
  newDiv.appendChild(delBtn);

  document.getElementById("incomeList").appendChild(newDiv);
  inCome.push(+wallet.amount);

  sumInc = calculateSum(inCome);
  budgetChack();

  delBtn.addEventListener("click", () => {
    document.getElementById("incomeList").removeChild(newDiv);
    inCome.push(-wallet.amount);
    sumInc = sumInc - wallet.amount;
    sumaInc.innerText = `Suma przychodów ${+sumInc} zł.`;
    budgetChack();
  });

  sumaInc.innerText = `Suma przychodów: ${+sumInc} zł`;
});

const addBtnExp = document.querySelector(".addW"); // dlaczego nie moge zmienić?!
addBtnExp.addEventListener("click", () => {
  const nameExp = document.querySelector(".name-output");
  const nameValExp = nameExp.value;

  const expVal = exptInput.value;
  if (!nameValExp) return;
  if (!expVal) return;
  const spend = {
    name: nameValExp,
    amount: expVal,
    id: uuidv4(),
  };

  const newDiv2 = document.createElement("div");
  const paragraph2 = document.createElement("p");
  paragraph2.textContent = `${spend.name} - ${spend.amount}`;
  newDiv2.appendChild(paragraph2);

  const input2 = document.createElement("input");
  input2.type = "text";
  input2.setAttribute("data-id", spend.id);
  input2.setAttribute("style", "display:none");
  input2.placeholder = `${spend.name}`;
  newDiv2.appendChild(input2);

  const inputAmountExp = document.createElement("input");
  inputAmountExp.type = "number";
  inputAmountExp.placeholder = `${spend.amount}`;
  inputAmountExp.setAttribute("data-id", spend.id);
  inputAmountExp.setAttribute("style", "display:none");
  newDiv2.appendChild(inputAmountExp);
  nameExp.value = "";
  exptInput.value = "";

  const saveBtnExp = document.createElement("button");
  saveBtnExp.textContent = "Zapisz";
  saveBtnExp.setAttribute("data-id", spend.id);
  saveBtnExp.setAttribute("style", "display:none");
  newDiv2.appendChild(saveBtnExp);

  const editBtnExp = document.createElement("button");
  editBtnExp.textContent = "Edytuj";
  editBtnExp.setAttribute("data-id", spend.id);
  newDiv2.appendChild(editBtnExp);
  editBtnExp.addEventListener("click", () => {
    editBtnExp.setAttribute("style", "display:none");
    saveBtnExp.setAttribute("style", "display:flex");
    cancelBtnExp.setAttribute("style", "display:flex");
    delBtnExp.setAttribute("style", "display:none");
    input2.setAttribute("style", "display:flex");
    inputAmountExp.setAttribute("style", "display:flex");

    saveBtnExp.addEventListener("click", () => {
      if (!inputAmountExp.value || Number(inputAmountExp.value) < 0) return;
      saveBtnExp.setAttribute("style", "display:none");
      editBtnExp.setAttribute("style", "display:flex");
      input2.setAttribute("style", "display:none");
      cancelBtnExp.setAttribute("style", "display:none");
      delBtnExp.setAttribute("style", "display:flex");
      inputAmountExp.setAttribute("style", "display:none");
      const oldAmountExp = spend.amount;
      outCome.push(-oldAmountExp);
      outCome.push(+inputAmountExp.value);
      paragraph2.textContent = `${input2.value} - ${inputAmountExp.value}`;
      sumOut = calculateSum(outCome);
      budgetChack();
      spend.amount = inputAmountExp.value;
      sumaOut.innerText = `Suma wydatków ${+sumOut} zł.`;
    });
    oldAmountExp = 0;
  });
  const cancelBtnExp = document.createElement("button");
  cancelBtnExp.textContent = "Anuluj";
  cancelBtnExp.setAttribute("data-id", spend.id);
  cancelBtnExp.setAttribute("style", "display:none");
  newDiv2.appendChild(cancelBtnExp);
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
  newDiv2.appendChild(delBtnExp);

  document.getElementById("spendList").appendChild(newDiv2);
  outCome.push(+spend.amount);

  sumOut = calculateSum(outCome);
  budgetChack();

  delBtnExp.addEventListener("click", () => {
    document.getElementById("spendList").removeChild(newDiv2);
    outCome.push(-spend.amount);
    sumOut = sumOut - spend.amount;
    sumaOut.innerText = `Suma wydatków ${+sumOut} zł.`;
    budgetChack();
  });

  let sumaOut = document.getElementById("outcomeSum");
  sumaOut.innerText = `Suma wydatków ${+sumOut}`;
});
