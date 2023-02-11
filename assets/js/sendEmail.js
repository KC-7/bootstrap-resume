// const {
//     EmailJSResponseStatus
// } = require("@emailjs/browser");

function sendMail(contactForm) {
    console.log("Sending email...");
    emailjs.send("gmail", "resume", {
            "to_name": "Kieran",
            "from_name": contactForm.fullname.value,
            "message": contactForm.messagetext.value,
            "from_email": contactForm.emailaddress.value,
            "site": "KC-7 Resume"
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                alert("Thanks for reaching out, your message has been sent!");
            },
            function (error) {
                console.log("FAILED", error);
                alert("Oh oh... we ecountered a " + error + ", please try again later.");
            }
        );
    contactForm.reset();  // Reset all form data
    return false; // To block from loading a new page
}