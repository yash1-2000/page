const toggleDiv = (id, btnId) => {
  const element = document.getElementById(id);
  const btnElement = document.getElementById(btnId);
  if (!element.style.display) {
    element.style.display = "block";
    btnElement.innerText = "Hide details";
  } else if (element.style.display === "none") {
    element.style.display = "block";
    btnElement.innerText = "Hide details";
  } else {
    element.style.display = "none";
    btnElement.innerText = "Show details";
  }
};

const addTableRow = (tableBodyId, rowClass) => {
  const tBody = document.getElementById(tableBodyId);
  const tRow = document.getElementsByClassName(rowClass)[0];
  const clonetRow = tRow.cloneNode(true);
  clonetRow.id = tBody.childElementCount;

  tBody.appendChild(clonetRow);
};

const removeTableRow = (e) => {
  const row = e.parentNode;
  if (row.parentNode.childElementCount === 1) {
    return;
  }
  row.parentNode.removeChild(row);
};

const futureAndCurrentYearStrArr = ["2023-24", "2022-23"];
const PastYearStrArr = [
  "2021-22",
  "2020-21",
  "2019-20",
  "2018-19",
  "2017-18",
  "2016-17",
  "2015-16",
  "2014-15",
  "2013-14",
  "2012-13",
  "2011-12",
  "2010-11",
];

const onSelectChange = (e) => {
  const yesNo = document.getElementById("taxation-opting-dropDown-div");
  const Label = document.getElementById("income-from-salary-label");
  if (
    e.target.value === "Select" ||
    !futureAndCurrentYearStrArr.includes(e.target.value)
  ) {
    yesNo.style.display = "none";
    Label.innerText = "Income from Salary";
  } else {
    yesNo.style.display = "block";
    Label.innerText =
      "Income from Salary (Income from salary after standard deduction of Rs.50000.)";
  }
};

const onTaxPayerTypeSelectChange = (e) => {
  if (e.target.value !== "Individual") {
    document
      .querySelectorAll(".conditional-on-individual-tax-payer")
      .forEach((elem) => (elem.style.display = "none"));
  } else {
    document
      .querySelectorAll(".conditional-on-individual-tax-payer")
      .forEach((elem) => (elem.style.display = "block"));
  }
};

const onBlurChange = (e) => {
  if (!e.value || e.value === "") {
    e.style.borderColor = "red";
  } else {
    e.style.borderColor = "#dee2e6";
  }
};

const calculateIncomeFromOtherSources = () => {
  const firstVal = parseInt(
    document.getElementById("IncomeFromOtherSourcesInterest").value
  );
  const secondVal = parseInt(
    document.getElementById("IncomeFromOtherSourcesCommissionOther").value
  );
  const thirdVal = parseInt(
    document.getElementById("IncomeFromOtherSourcesLottertyEtc").value
  );

  document.getElementById("IncomeFromOtherSourcesMainInputView").value =
    calculateTotal([firstVal, secondVal, thirdVal]);
};

const calculateICapitalGainsPart = (e) => {
  const allTypeInputs = Array.from(
    document
      .getElementById(e.target.getAttribute("data-type"))
      .querySelectorAll("input")
  );
  allTypeInputs[allTypeInputs.length - 1].value = calculateTotal(
    allTypeInputs
      .map((elem) => parseInt(elem.value))
      .slice(0, allTypeInputs.length - 1)
  );
  calculateICapitalGains();
};

const calculateICapitalGains = () => {
  const firstVal = parseInt(
    document.getElementById("StermCGainsOtherThan111ATotal").value
  );
  const secondVal = parseInt(
    document.getElementById("StermCGainsCovered111ATotal").value
  );
  const thirdVal = parseInt(
    document.getElementById("LtermCGains20Total").value
  );
  const fourthVal = parseInt(
    document.getElementById("LtermCGains10Total").value
  );

  document.getElementById("CapitalGainsMainInputView").value = calculateTotal([
    firstVal,
    secondVal,
    thirdVal,
    fourthVal,
  ]);
};

const calculateDeductionForMaintenanceCheckbox = () => {
  const firstVal = document.getElementById(
    "deduction80DDCheckboxIfClaimed"
  ).checked;
  const secondVal = document.getElementById(
    "deduction80DDCheckboxIfDisable"
  ).checked;
  const deduction80DDCheckboxnumber = document.getElementById(
    "deduction80DDCheckboxnumber"
  );

  if (firstVal && secondVal) {
    deduction80DDCheckboxnumber.value = 100000;
  } else if (firstVal) {
    deduction80DDCheckboxnumber.value = 50000;
  } else {
    deduction80DDCheckboxnumber.value = 0;
  }

  calculateDeductionValue();
};

const calculateDeductionIncaseDisableCheckbox = () => {
  const firstVal = document.getElementById(
    "deduction80UCheckboxIfClaimed"
  ).checked;
  const secondVal = document.getElementById(
    "deduction80UCheckboxIfDisable"
  ).checked;
  const deduction80UCheckboxnumber = document.getElementById(
    "deduction80UCheckboxnumber"
  );

  if (firstVal && secondVal) {
    deduction80UCheckboxnumber.value = 100000;
  } else if (firstVal) {
    deduction80UCheckboxnumber.value = 50000;
  } else {
    deduction80UCheckboxnumber.value = 0;
  }

  calculateDeductionValue();
};

const calculateDeductionValue = () => {
  const allTypeInputs = Array.from(
    document
      .getElementById("data-deductionInput")
      .querySelectorAll("input[data-deductionInput]")
  );
  const totalField = document.getElementById("deductions-total-field");
  const DeductionsMainInputView = document.getElementById(
    "DeductionsMainInputView"
  );
  const InputsForTotal = allTypeInputs.filter(
    (inputElem) => inputElem.getAttribute("data-inTotal") !== null
  );
  totalField.value = calculateTotal(
    InputsForTotal.map((elem) => parseInt(elem.value))
  );
  DeductionsMainInputView.value = calculateTotal(
    allTypeInputs.map((elem) => parseInt(elem.value))
  );
};

const calculateTotal = (valueArr) => {
  const total = valueArr.reduce((acc, curr) => {
    if (isNaN(curr)) {
      return acc + 0;
    } else {
      return acc + curr;
    }
  }, 0);

  return total;
};

// ------------------------------------Hover events-----------------------------------------------
// ----------------todo blasts on small screen size--------------
const toolTipElements = document.querySelectorAll(
  "[data-tooltip='data-tooltip']"
);
console.log(toolTipElements);
toolTipElements.forEach((elem) =>
  elem.addEventListener("mouseover", () => {
    console.log("hoverrrrr");
    document.getElementById("uuuu").style.display = "block";
    document.body.style.overflow = "hidden";
  })
);
toolTipElements.forEach((elem) =>
  elem.addEventListener("mouseleave", () => {
    console.log("hoverrrrr");
    document.getElementById("uuuu").style.display = "none";
    document.body.style.overflow = "scroll";
  })
);

const OOption = document.getElementById("AssessmentYearSelect");
console.log(OOption.children);
Array.from(OOption.children).forEach((elem) => {
  // elem.style.background = "red";
  elem.style.padding = "5px";
});
