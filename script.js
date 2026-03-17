const eventForm = document.getElementById("eventForm");
const eventContainer = document.getElementById("eventContainer");
const clearAllBtn = document.getElementById("clearAll");

let events = JSON.parse(localStorage.getItem("events")) || [];

// Load events when page loads
document.addEventListener("DOMContentLoaded", renderEvents);

// Add Event
eventForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("eventName").value;
    const date = document.getElementById("eventDate").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;

    const newEvent = {
        id: Date.now(),
        name,
        date,
        category,
        description
    };

    events.push(newEvent);
    localStorage.setItem("events", JSON.stringify(events));

    renderEvents();
    eventForm.reset();
});

// Render Events
function renderEvents() {
    eventContainer.innerHTML = "";

    events.forEach(event => {
        const card = document.createElement("div");
        card.classList.add("event-card");

        card.innerHTML = `
            <span class="category ${event.category}">${event.category}</span>
            <button class="delete-btn" onclick="deleteEvent(${event.id})">Delete</button>
            <h3>${event.name}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            <p>${event.description}</p>
        `;

        eventContainer.appendChild(card);
    });
}

// Delete Single Event
function deleteEvent(id) {
    events = events.filter(event => event.id !== id);
    localStorage.setItem("events", JSON.stringify(events));
    renderEvents();
}

// Clear All Events
clearAllBtn.addEventListener("click", function () {
    events = [];
    localStorage.removeItem("events");
    renderEvents();
});
