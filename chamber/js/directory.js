document.addEventListener("DOMContentLoaded", () => {
    const membersContainer = document.getElementById("members-container");
    const gridViewBtn = document.getElementById("grid-view");
    const listViewBtn = document.getElementById("list-view");

    async function fetchMembers() {
        try {
            const response = await fetch("data/members.json");
            const data = await response.json();
            displayMembers(data.members, "grid");
        } catch (error) {
            console.error("Error fetching members:", error);
        }
    }

    function displayMembers(members, view) {
        membersContainer.innerHTML = "";
        membersContainer.className = view;
        
        members.forEach(member => {
            const memberElement = document.createElement("div");
            memberElement.classList.add("member");
            
            memberElement.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;
            
            if (view === "list") {
                memberElement.classList.add("list-item");
            }
            membersContainer.appendChild(memberElement);
        });
    }

    gridViewBtn.addEventListener("click", () => displayMembers(JSON.parse(localStorage.getItem("members")), "grid"));
    listViewBtn.addEventListener("click", () => displayMembers(JSON.parse(localStorage.getItem("members")), "list"));

    fetchMembers().then(() => {
        localStorage.setItem("members", JSON.stringify(members));
    });
});
