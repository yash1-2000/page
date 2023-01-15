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

const onBlurChange = (e) => {
  if (!e.value || e.value === "") {
    e.style.borderColor = "red";
  } else {
    e.style.borderColor = "#dee2e6";
  }
};
