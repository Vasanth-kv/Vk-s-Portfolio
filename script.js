document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        // Basic form validation
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        
        if (!name || !email || !message) {
            alert("Please fill out all fields.");
            event.preventDefault();
        }
    });
});

function showResume(resumeId) {
    // Hide all iframes
    document.querySelectorAll('#resume-viewer iframe').forEach(function(iframe) {
        iframe.style.display = 'none';
    });
    
    // Show the selected iframe
    document.getElementById(resumeId).style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    // Function to show a section based on the ID
    function showSection(sectionId) {
        // Hide all sections
        const sections = document.querySelectorAll("section");
        sections.forEach(section => section.style.display = "none");
        
        // Show the selected section
        const selectedSection = document.querySelector(sectionId);
        if (selectedSection) {
            selectedSection.style.display = "block";
        }
    }

    // Add event listeners to navbar links
    const navbarLinks = document.querySelectorAll(".navbar a");
    navbarLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
            const sectionId = this.getAttribute("href"); // Get the href attribute value (which is the section ID)
            showSection(sectionId); // Show the corresponding section
        });
    });

    // Show the first section by default (optional)
    showSection("#about");
});
