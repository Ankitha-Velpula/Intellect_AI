let events = [];

function loadEvents() {
    const storedEvents = localStorage.getItem('events');
    events = storedEvents ? JSON.parse(storedEvents) : [];
    displayEvents(events);
}

function displayEvents(eventsToShow) {
    const eventsContainer = document.getElementById("events-container");
    eventsContainer.innerHTML = "";

    eventsToShow.forEach(event => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.id = event.id;
        card.innerHTML = `
            <h3>${event.name}</h3>
            <p>${event.description}</p>
            <p>${event.type === "offline" ? "Location: " + event.location : ""}</p>
            <p>Date: ${event.date}</p>
            <p>Email: ${event.contact.email}</p>
            <p>Phone: ${event.contact.phone}</p>
            <p>Website: <a href="${event.contact.website}" target="_blank">${event.contact.website}</a></p>
        `;
        eventsContainer.appendChild(card);
    });
}

function filterByLocation() {
    const searchTerm = document.getElementById("location-search").value.trim().toLowerCase();
    const filteredEvents = searchTerm
    ? events.filter(event => event.type === "offline" && event.location.toLowerCase().includes(searchTerm))
    : events;
    displayEvents(filteredEvents);
}

window.addEventListener("DOMContentLoaded", loadEvents);

