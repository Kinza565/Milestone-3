var _a;
// lISTING ELEMENT
(_a = document.getElementById("resumeform")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    // type assertion
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    if (nameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        experienceElement &&
        skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //  create Resume Output
        var resumeOutput = "\n<h2>Resume</h2>\n<p><b>Name:</b>span contentedable=\"true\"".concat(name_1, "</span></p>\n<p><b>Email:</b>span contentedable=\"true\"</strong> ").concat(email, "</span></p>\n<p><b>Phone:</b>span contentedable=\"true\"</strong> ").concat(phone, "</span></p>\n\n\n<h3>Education</h3>\n<pcontentedable=\"true\">").concat(education, "</p>\n\n<h3>Experience</h3>\n<p  contentedable=\"true\">").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p  contentedable=\"true\">").concat(skills, "</p>\n\n\n");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.log("Error: Cannot find resumeOutput element");
        }
    }
    else {
        console.log("one or more output elements not found");
    }
});
