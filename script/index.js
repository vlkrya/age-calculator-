const inputYear = document.getElementById("inputYear");
const inputMonth = document.getElementById("inputMonth");
const inputDay = document.getElementById("inputDay");
const nameYear = document.getElementById("nameYear");
const nameDay = document.getElementById("nameDay");
const nameMonth = document.getElementById("nameMonth");
const alert = document.getElementById("alert");

function sizeInputDay() {
  inputDay.addEventListener("input", function () {
    const maxLength = 2; 
    if (inputDay.value.length > maxLength) {
      inputDay.value = inputDay.value.slice(0, maxLength); 
    }
  });
}
function sizeInputMonth() {
  inputMonth.addEventListener("input", function () {
    const maxLength = 2;
    if (inputMonth.value.length > maxLength) {
      inputMonth.value = inputMonth.value.slice(0, maxLength);
    }
  });
}
function sizeInputYear() {
  inputYear.addEventListener("input", function () {
    const maxLength = 4;
    if (inputYear.value.length > maxLength) {
      inputYear.value = inputYear.value.slice(0, maxLength);
    }
  });
}

function isValidDateString(dateString) {
  const dateParts = dateString.split("-");
  const year = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10);
  const day = parseInt(dateParts[2], 10);

 
  const date = new Date(year, month - 1, day);
  const isDateValid = date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;

  return isDateValid;
}

function calculete() {
  const button = document.getElementById("arrowBtn");
  button.addEventListener("click", () => {
    const dateUser = `${inputYear.value}-${inputMonth.value}-${inputDay.value}`;
    const isValidDate = isValidDateString(dateUser);
    const currentYear = new Date().getFullYear();

    if (isValidDate && inputYear.value < currentYear) {
      alert.classList.remove("show-alert");
      const currentDate = dayjs();
      const yearValue = document.getElementById("yearsValue");
      const monthValue = document.getElementById("monthsValue");
      const dayValue = document.getElementById("daysValue");

      const yearsUser = currentDate.diff(dateUser, "year");
      const monthsUser = currentDate.diff(dateUser, "month");
      const daysUser = currentDate.diff(dateUser, "day");

      yearValue.textContent = yearsUser;
      monthValue.textContent = monthsUser;
      dayValue.textContent = daysUser;
    } else {
      alert.classList.add("show-alert");
      inputDay.style.border = "1px solid #ff0101";
      inputYear.style.border = "1px solid #ff0101";
      inputMonth.style.border = "1px solid #ff0101";
      nameDay.style.color = "#ff0101";
      nameMonth.style.color = "#ff0101";
      nameYear.style.color = "#ff0101";
    }
  });
}

function clearAlert() {
  alert.classList.remove("show-alert");
  nameDay.style.removeProperty("color");
  nameYear.style.removeProperty("color");
  nameMonth.style.removeProperty("color");
  inputDay.style.removeProperty("border");
  inputMonth.style.removeProperty("border");
  inputYear.style.removeProperty("border");
}

inputYear.addEventListener("input", clearAlert);
inputMonth.addEventListener("input", clearAlert);
inputDay.addEventListener("input", clearAlert);

function initialize() {
  sizeInputDay();
  sizeInputMonth();
  sizeInputYear();
  calculete();
}

initialize();





