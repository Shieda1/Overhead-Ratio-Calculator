// https://calculator.swiftutors.com/overhead-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const overheadRatioRadio = document.getElementById('overheadRatioRadio');
const operatingExpensesRadio = document.getElementById('operatingExpensesRadio');
const operatingIncomeRadio = document.getElementById('operatingIncomeRadio');
const taxableNetInterestIncomeRadio = document.getElementById('taxableNetInterestIncomeRadio');

let overheadRatio;
let operatingExpenses = v1;
let operatingIncome = v2;
let taxableNetInterestIncome = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

overheadRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Operating Expenses';
  variable2.textContent = 'Operating Income';
  variable3.textContent = 'Taxable Net Interest Income';
  operatingExpenses = v1;
  operatingIncome = v2;
  taxableNetInterestIncome = v3;
  result.textContent = '';
});

operatingExpensesRadio.addEventListener('click', function() {
  variable1.textContent = 'Overhead Ratio';
  variable2.textContent = 'Operating Income';
  variable3.textContent = 'Taxable Net Interest Income';
  overheadRatio = v1;
  operatingIncome = v2;
  taxableNetInterestIncome = v3;
  result.textContent = '';
});

operatingIncomeRadio.addEventListener('click', function() {
  variable1.textContent = 'Overhead Ratio';
  variable2.textContent = 'Operating Expenses';
  variable3.textContent = 'Taxable Net Interest Income';
  overheadRatio = v1;
  operatingExpenses = v2;
  taxableNetInterestIncome = v3;
  result.textContent = '';
});

taxableNetInterestIncomeRadio.addEventListener('click', function() {
  variable1.textContent = 'Overhead Ratio';
  variable2.textContent = 'Operating Expenses';
  variable3.textContent = 'Operating Income';
  overheadRatio = v1;
  operatingExpenses = v2;
  operatingIncome = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(overheadRatioRadio.checked)
    result.textContent = `Overhead Ratio = ${computeOverheadRatio().toFixed(2)}`;

  else if(operatingExpensesRadio.checked)
    result.textContent = `Operating Expenses = ${computeOperatingExpenses().toFixed(2)}`;

  else if(operatingIncomeRadio.checked)
    result.textContent = `Operating Income = ${computeOperatingIncome().toFixed(2)}`;

  else if(taxableNetInterestIncomeRadio.checked)
    result.textContent = `Taxable Net Interest Income = ${computeTaxableNetInterestIncome().toFixed(2)}`;
})

// calculation

function computeOverheadRatio() {
  return Number(operatingExpenses.value) / (Number(operatingIncome.value) + Number(taxableNetInterestIncome.value));
}

function computeOperatingExpenses() {
  return Number(overheadRatio.value) * (Number(operatingIncome.value) + Number(taxableNetInterestIncome.value));
}

function computeOperatingIncome() {
  return (Number(operatingExpenses.value) / Number(overheadRatio.value)) - Number(taxableNetInterestIncome.value);
}

function computeTaxableNetInterestIncome() {
  return (Number(operatingExpenses.value) / Number(overheadRatio.value)) - Number(operatingIncome.value);
}