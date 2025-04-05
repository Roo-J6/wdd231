document.addEventListener('DOMContentLoaded', () => {
    const itemGrid = document.getElementById('item-grid');
    const items = [
      { name: "Mountain Peak 1", address: "123 Peak Drive, Mountain Town", description: "A beautiful mountain peak with stunning views of the valley.", image: "peak1.webp" },
      { name: "Mountain Lake", address: "456 Lake Road, Mountain Town", description: "A serene lake surrounded by majestic mountains.", image: "lake.webp" },
      { name: "Forest Trails", address: "789 Forest Road, Mountain Town", description: "Explore the wilderness with scenic walking trails.", image: "forest.webp" },
      { name: "Rocky Pass", address: "123 Rock Road, Mountain Town", description: "A challenging mountain pass offering a great adventure.", image: "rockypass.webp" },
      { name: "Mountain Viewpoint", address: "234 View Road, Mountain Town", description: "A breathtaking viewpoint overlooking the entire region.", image: "viewpoint.webp" },
      { name: "Cave Exploration", address: "345 Cave Road, Mountain Town", description: "Venture into dark caves for a thrilling experience.", image: "cave.webp" },
      { name: "Snow Peak", address: "567 Snow Road, Mountain Town", description: "Enjoy skiing and snowboarding on this snowy peak.", image: "snowpeak.webp" },
      { name: "Wildlife Sanctuary", address: "678 Sanctuary Road, Mountain Town", description: "A sanctuary for local wildlife and a great spot for bird watching.", image: "wildlife.webp" }
    ];
  
    items.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
      
      card.innerHTML = `
        <figure>
          <img src="../images/${item.image}" alt="${item.name}">
        </figure>
        <h2>${item.name}</h2>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button>Learn More</button>
      `;
      
      itemGrid.appendChild(card);
    });
  });
  