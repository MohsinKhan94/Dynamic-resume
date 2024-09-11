document.getElementById("resume-form")?.addEventListener("submit", function (event: Event) {
    event.preventDefault(); // Prevent form submission

    // Fetch form input values
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;

    // Function to fetch values from input elements
    function getValues(selector: string): string[] {
        const elements = document.querySelectorAll(selector) as NodeListOf<HTMLInputElement>;
        return Array.prototype.slice.call(elements).map(element => element.value).filter(value => value !== '');
    }

    // Fetch values for education, work experience, and skills
    const education = getValues("#education .education-entry input");
    const workExperience = getValues("#work-experience .work-experience-entry input");
    const skills = getValues("#skills .skill-entry input");

    // Generate the resume content dynamically
    const resumeContent = `
        <h2>Resume</h2>
        <div class="resume-section">
            <h3>Personal Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
        </div>
        <div class="resume-section">
            <h3>Education</h3>
            <ul>${education.map(item => `<li>${item}</li>`).join("")}</ul>
        </div>
        <div class="resume-section">
            <h3>Work Experience</h3>
            <ul>${workExperience.map(item => `<li>${item}</li>`).join("")}</ul>
        </div>
        <div class="resume-section">
            <h3>Skills</h3>
            <ul>${skills.map(item => `<li>${item}</li>`).join("")}</ul>
        </div>`;

    // Display the resume output on the page
    const resumeOutput = document.getElementById("resume-output") as HTMLElement;
    resumeOutput.innerHTML = resumeContent;

    // Store data in localStorage
    localStorage.setItem('resumeData', JSON.stringify({
        name,
        email,
        education,
        workExperience,
        skills
    }));
});

function addRemoveListener(button: HTMLButtonElement): void {
    button.addEventListener("click", function () {
        button.parentElement?.remove();
    });
}

document.getElementById("add-education")?.addEventListener("click", function () {
    const newField = document.createElement("div");
    newField.classList.add("education-entry");
    newField.innerHTML = `<input type="text" placeholder="Enter Your Education">
                          <button type="button" class="remove-btn">Remove</button>`;
    document.getElementById("education")?.appendChild(newField);
    const removeBtn = newField.querySelector(".remove-btn") as HTMLButtonElement;
    if (removeBtn) addRemoveListener(removeBtn);
});

document.getElementById("add-work-experience")?.addEventListener("click", function () {
    const newField = document.createElement("div");
    newField.classList.add("work-experience-entry");
    newField.innerHTML = `<input type="text" placeholder="Enter Work Experience">
                          <button type="button" class="remove-btn">Remove</button>`;
    document.getElementById("work-experience")?.appendChild(newField);
    const removeBtn = newField.querySelector(".remove-btn") as HTMLButtonElement;
    if (removeBtn) addRemoveListener(removeBtn);
});

document.getElementById("add-skills")?.addEventListener("click", function () {
    const newField = document.createElement("div");
    newField.classList.add("skill-entry");
    newField.innerHTML = `<input type="text" placeholder="Enter Your Skills">
                          <button type="button" class="remove-btn">Remove</button>`;
    document.getElementById("skills")?.appendChild(newField);
    const removeBtn = newField.querySelector(".remove-btn") as HTMLButtonElement;
    if (removeBtn) addRemoveListener(removeBtn);
});

// Attach initial remove button listeners
document.querySelectorAll(".remove-btn").forEach(button => {
    const btn = button as HTMLButtonElement;
    addRemoveListener(btn);
});
