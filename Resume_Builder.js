document.getElementById("resumeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const summary = document.getElementById("summary").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    
    const resumeOutput = document.getElementById("resumeOutput");
    
    const resumeTemplate = `
        <h2>${fullName}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Address: ${address}</p>
        <h3>Summary:</h3>
        <p>${summary}</p>
        <h3>Education:</h3>
        <p>${education}</p>
        <h3>Experience:</h3>
        <p>${experience}</p>
    `;
    
    resumeOutput.innerHTML = resumeTemplate;
});