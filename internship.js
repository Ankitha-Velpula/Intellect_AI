let internships = [];

function loadInternships() {
    const storedInternships = localStorage.getItem('internships');
    internships = storedInternships ? JSON.parse(storedInternships) : [];
    displayInternships(internships);
}

function displayInternships(internshipsToShow) {
    const internshipsContainer = document.getElementById("internships-container");
    internshipsContainer.innerHTML = "";

    internshipsToShow.forEach(internship => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.id = internship.id;
        card.innerHTML = `
            <h3>${internship.company}</h3>
            <p>${internship.description}</p>
            <p>Date: ${internship.date}</p>
            <p>${internship.duration}</p>
            <p>Email: ${internship.stipend}</p>
            <p><strong>Website:</strong> 
            ${internship.contact?.website ? `<a href="${internship.contact.website}" target="_blank">${internship.contact.website}</a>` : "N/A"}
            </p>
            internshipsContainer.appendChild(card);
    });
}

window.addEventListener("DOMContentLoaded", loadInternships);
