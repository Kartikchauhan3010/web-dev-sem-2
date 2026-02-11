const form = document.getElementById("eventForm");
const container = document.getElementById("eventContainer");
const clearBtn = document.getElementById("clearAll");

// Handle form submission
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("eventName").value;
    const date = document.getElementById("eventDate").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p>${description}</p>
        <span class="delete-btn">❌</span>
    `;

    container.appendChild(card);
    form.reset();
});

// Event Delegation (Delete)
container.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
    }
});

// Clear All Button
clearBtn.addEventListener("click", function () {
    if (container.children.length === 0) {
        alert("No events to clear!");
        return;
    }

    container.innerHTML = "";
}); 