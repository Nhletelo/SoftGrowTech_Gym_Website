document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault();

document.getElementById("msg").innerText =
"Thank you! We will contact you soon.";

});