const form = document.getElementById("my-form");
const countryField = document.getElementById("country");
const additionalFields = document.getElementById("additional-fields");

countryField.addEventListener("change", function() {
  if (countryField.value === "US") {
    additionalFields.style.display = "block";
  } else {
    additionalFields.style.display = "none";
  }
});

form.addEventListener("submit", function(event) {
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const stateField = document.getElementById("state");
  const cityField = document.getElementById("city");

  const name = nameField.value.trim();
  const email = emailField.value.trim();
  const state = stateField.value.trim();
  const city = cityField.value.trim();

  let isValid = true;

  if (!name) {
    nameField.classList.add("error");
    isValid = false;
  } else {
    nameField.classList.remove("error");
  }

  if (!email || !email.includes("@")) {
    emailField.classList.add("error");
    isValid = false;
  } else {
    emailField.classList.remove("error");
  }

  if (countryField.value === "US" && !state) {
    stateField.classList.add("error");
    isValid = false;
  } else {
    stateField.classList.remove("error");
  }

  if (countryField.value === "US" && !city) {
    cityField.classList.add("error");
    isValid = false;
  } else {
    cityField.classList.remove("error");
  }

  if (!isValid) {
    event.preventDefault();
  }
});

const tooltips = document.querySelectorAll(".tooltip");
tooltips.forEach(function(tooltip) {
  const tooltipText = tooltip.querySelector(".tooltip-text");
  tooltip.addEventListener("mouseenter", function() {
    tooltipText.style.visibility = "visible";
  });
})
