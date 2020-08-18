// Set the name field of the resume
function setName(val) {
  if (val) $("#name").html(val);
}

// Set the subheader field of the resume
function setSubHeader(arr) {
  if (arr && arr.length > 0) {
    $("#subheader").html(arr.join(" • "));
  } else {
    $("#subheader").remove();
  }
}

// Set the phone field of the resume
function setPhone(val) {
  if (val) {
    $("#phone").html(val);
  } else {
    $("#phone").parent().remove();
  }
}

// Set the email field of the resume
function setEmail(val) {
  if (val) {
    $("#email").html(val);
  } else {
    $("#email").parent().remove();
  }
}

// Set the location field of the resume
function setLocation(val) {
  if (val) {
    $("#location").html(val);
  } else {
    $("#location").parent().remove();
  }
}

// Set the github field of the resume
function setGithub(val) {
  if (val) {
    $("#github").html("Github");
    $("#github").attr("href", val);
  } else {
    $("#github").parent().remove();
  }
}

// Set the portfolio field of the resume
function setPortfolio(val) {
  if (val) {
    $("#portfolio").html("Portfolio");
    $("#portfolio").attr("href", val);
  } else {
    $("#portfolio").parent().remove();
  }
}

// Set the experience field of the resume
function setExperience(arr) {
  if (arr && arr.length > 0) {
    // Empty element
    $("#experience").empty();

    // Append each job
    for (job of arr) {
      // Determine the accomplishments list
      const inner_list = `<ul>
        <li>
          ${job.accomplishments.join("</li><li>")}
        </li>
      </ul>`;

      // Set the field
      $("#experience").append(
        `<div class="icon-left">
          <h4>${job.role}</h4>
          <h5>${job.company}</h5>
          <div class="bisect-container">
            <p><i class="fas fa-calendar-alt"></i>${job.date}</p>
            <p><i class="fas fa-map-marker-alt"></i>${job.location}</p>
          </div>
          ${inner_list}
        </div>`
      );
    }
  } else {
    $("#experience").parent().remove();
  }
}

// Set the projects field of the resume
function setProjects(arr) {
  if (arr && arr.length > 0) {
    // Empty element
    $("#projects").empty();

    // Append each project
    for (job of arr) {
      // Determine the accomplishments list
      const inner_list = `<ul>
        <li>
          ${job.accomplishments.join("</li><li>")}
        </li>
      </ul>`;

      // Set the field
      $("#projects").append(
        `<div class="icon-left">
          <div class="bisect-container">
            <h4>${job.title}</h4>
            <p><i class="fas fa-calendar-alt"></i>${job.date}</p>
          </div>
          <span>
            <i class="fab fa-github"></i>
            <a href="${job.github}">${job.github.split("://")[1]}</a>
          </span>
          ${inner_list}
        </div>`
      );
    }
  } else {
    $("#projects").parent().remove();
  }
}

// Set the skills field of the resume
function setSkills(arr) {
  if (arr && arr.length > 0) {
    // Empty element
    $("#skills").empty();
    console.log(arr);

    // Append each skill
    for (skill of arr) {
      // Determine the accomplishments list
      const inner_list = `<p class="badge">
        ${skill.attributes.join('</p><p class="badge">')}
      </p>`;

      // Set the field
      $("#skills").append(
        `<div>
          <h2>${skill.title} <span class="${skill.icon}"></span></h2>
          <div class="clumped">
            ${inner_list}
          </div>
        </div>`
      );
    }
  } else {
    $("#skills").remove();
  }
}

// // Set the education field of the resume
function setEducation(arr) {
  if (arr && arr.length > 0) {
    // Empty element
    $("#education").empty();

    // Append each job
    for (education of arr) {
      // Set the field
      $("#education").append(
        `<div>
          <h4>${education.degree}</h4>
          <h5>${education.school}</h5>
          <div class="bisect-container icon-left">
            <p><i class="fas fa-calendar-alt"></i>${education.date}</p>
            <p><i class="fas fa-map-marker-alt"></i>${education.location}</p>
          </div>
        </div>`
      );
    }
  } else {
    $("#education").parent().remove();
  }
}

// Set the passions field of the resume
function setPassions(arr) {
  if (arr && arr.length > 0) {
    // Empty element
    $("#passions").empty();

    // Append each passion
    for (passion of arr) {
      // Set the field
      $("#passions").append(
        `<p class="icon-left badge"><i class="${passion.icon}"></i>${passion.title}</p>`
      );
    }
  } else {
    $("#passions").parent().remove();
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
  setExperience(data.experience);
  setProjects(data.projects);

  // Set fields in the right column
  setSkills(data.skills);
  setEducation(data.education);
  setPassions(data.passions);
});
