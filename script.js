//const fieldName = document.getElementById("name");
// const closeBtn = document.getElementById("close-btn")! as HTMLButtonElement;
// const rules = document.getElementById("rules")! as HTMLDivElement;

// Set the name field of the resume
function setName(val) {
  if (val) $("#name").html(val);
}

// Set the subheader field of the resume
function setSubHeader(arr) {
  if (arr && arr.length > 0) $("#subheader").html(arr.join(" • "));
}

// Set the phone field of the resume
function setPhone(val) {
  if (val) $("#phone").html(val);
}

// Set the phone field of the resume
function setEmail(val) {
  if (val) $("#email").html(val);
}

// Set the phone field of the resume
function setLocation(val) {
  if (val) $("#location").html(val);
}

// Set the phone field of the resume
function setGithub(val) {
  if (val) {
    $("#github").html("Github");
    $("#github").attr("href", val);
  }
}

// Set the phone field of the resume
function setPortfolio(val) {
  if (val) {
    $("#portfolio").html("Portfolio");
    $("#portfolio").attr("href", val);
  }
}

// Read in the JSON file using jQuery
$.getJSON("resume.json", (data) => {
  console.log(data);
  // Set fields in the header region
  setName(data.name);
  setSubHeader(data.name_subheader);
  setPhone(data.phone);
  setEmail(data.email);
  setLocation(data.location);
  setGithub(data.github);
  setPortfolio(data.portfolio);

  // Set fields in the left column

  // Set fields in the right column
});
