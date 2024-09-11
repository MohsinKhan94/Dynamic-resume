var _a, _b, _c, _d;
(_a = document.getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    // Fetch form input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    // Function to fetch values from input elements
    function getValues(selector) {
        var elements = document.querySelectorAll(selector);
        return Array.prototype.slice.call(elements).map(function (element) { return element.value; }).filter(function (value) { return value !== ''; });
    }
    // Fetch values for education, work experience, and skills
    var education = getValues("#education .education-entry input");
    var workExperience = getValues("#work-experience .work-experience-entry input");
    var skills = getValues("#skills .skill-entry input");
    // Generate the resume content dynamically
    var resumeContent = "\n        <h2>Resume</h2>\n        <div class=\"resume-section\">\n            <h3>Personal Information</h3>\n            <p><strong>Name:</strong> ".concat(name, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n        </div>\n        <div class=\"resume-section\">\n            <h3>Education</h3>\n            <ul>").concat(education.map(function (item) { return "<li>".concat(item, "</li>"); }).join(""), "</ul>\n        </div>\n        <div class=\"resume-section\">\n            <h3>Work Experience</h3>\n            <ul>").concat(workExperience.map(function (item) { return "<li>".concat(item, "</li>"); }).join(""), "</ul>\n        </div>\n        <div class=\"resume-section\">\n            <h3>Skills</h3>\n            <ul>").concat(skills.map(function (item) { return "<li>".concat(item, "</li>"); }).join(""), "</ul>\n        </div>");
    // Display the resume output on the page
    var resumeOutput = document.getElementById("resume-output");
    resumeOutput.innerHTML = resumeContent;
    // Store data in localStorage
    localStorage.setItem('resumeData', JSON.stringify({
        name: name,
        email: email,
        education: education,
        workExperience: workExperience,
        skills: skills
    }));
});
function addRemoveListener(button) {
    button.addEventListener("click", function () {
        var _a;
        (_a = button.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
    });
}
(_b = document.getElementById("add-education")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    var _a;
    var newField = document.createElement("div");
    newField.classList.add("education-entry");
    newField.innerHTML = "<input type=\"text\" placeholder=\"Enter Your Education\">\n                          <button type=\"button\" class=\"remove-btn\">Remove</button>";
    (_a = document.getElementById("education")) === null || _a === void 0 ? void 0 : _a.appendChild(newField);
    var removeBtn = newField.querySelector(".remove-btn");
    if (removeBtn)
        addRemoveListener(removeBtn);
});
(_c = document.getElementById("add-work-experience")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    var _a;
    var newField = document.createElement("div");
    newField.classList.add("work-experience-entry");
    newField.innerHTML = "<input type=\"text\" placeholder=\"Enter Work Experience\">\n                          <button type=\"button\" class=\"remove-btn\">Remove</button>";
    (_a = document.getElementById("work-experience")) === null || _a === void 0 ? void 0 : _a.appendChild(newField);
    var removeBtn = newField.querySelector(".remove-btn");
    if (removeBtn)
        addRemoveListener(removeBtn);
});
(_d = document.getElementById("add-skills")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
    var _a;
    var newField = document.createElement("div");
    newField.classList.add("skill-entry");
    newField.innerHTML = "<input type=\"text\" placeholder=\"Enter Your Skills\">\n                          <button type=\"button\" class=\"remove-btn\">Remove</button>";
    (_a = document.getElementById("skills")) === null || _a === void 0 ? void 0 : _a.appendChild(newField);
    var removeBtn = newField.querySelector(".remove-btn");
    if (removeBtn)
        addRemoveListener(removeBtn);
});
// Attach initial remove button listeners
document.querySelectorAll(".remove-btn").forEach(function (button) {
    var btn = button;
    addRemoveListener(btn);
});
