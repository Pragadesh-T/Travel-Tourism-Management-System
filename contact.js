// Get the form element
const contactForm = document.getElementById("contactForm");

// Add submit event listener
contactForm.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent page reload

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validate (optional)
  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Create a contact object
  const contact = {
    name: name,
    email: email,
    subject: subject,
    message: message,
    date: new Date().toLocaleString()
  };

  // Get existing contacts from localStorage or initialize empty array
  let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

  // Add new contact
  contacts.push(contact);

  // Save updated contacts to localStorage
  localStorage.setItem("contacts", JSON.stringify(contacts));

  // Show confirmation to user
  alert("Thank you for contacting us! We will get back to you soon.");

  // Reset the form
  contactForm.reset();
});
