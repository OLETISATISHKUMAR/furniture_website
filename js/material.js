const materials = [
    {
        title: 'Wood',
        description: 'Wood is a classic choice for furniture due to its natural beauty and durability. Common types include oak, maple, and walnut.',
        image: '../assets/wood.jpg'
    },
    {
        title: 'Metal',
        description: 'Metal provides a modern look and is often used for frames and accents. Steel and aluminum are popular choices.',
        image: '../assets/metal.png'
    },
    {
        title: 'Upholstered',
        description: 'Upholstered furniture offers comfort and style. It typically includes a framework covered with foam and fabric.',
        image: '../assets/glass.jpg'
    },
    {
        title: 'Glass',
        description: 'Glass is often used in tabletops and display cabinets, adding elegance and a contemporary feel to furniture.',
        image: '../assets/glass.jpg'
    },
    {
        title: 'MDF (Medium Density Fiberboard)',
        description: 'MDF is a versatile material used for its smooth surface, ideal for painted finishes and intricate designs.',
        image: '../assets/MDF.jpg'
    },
    {
        title: 'Rattan',
        description: 'Rattan is a natural material used for lightweight and durable furniture, often associated with outdoor and tropical styles.',
        image: '../assets/Rattan.jpg'
    }
];

function renderMaterials() {
    const materialContainer = document.getElementById('material');
    
    let content = `
    <div id="materialCarousel" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">`;

    for (let i = 0; i < materials.length; i += 3) {
        content += `<div class="carousel-item ${i === 0 ? 'active' : ''}">
                      <div class="d-flex justify-content-center">`;

        for (let j = i; j < i + 3 && j < materials.length; j++) {
            const material = materials[j];
            content += `
            <div class="card mx-3" style="width: 20rem; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
              <img src="${material.image}" class="card-img-top" alt="${material.title}" style="border-radius: 15px 15px 0 0;">
              <div class="card-body text-center" style="background-color: #f8f9fa;">
                <h5 class="card-title font-weight-bold" style="color: #343a40;">${material.title}</h5>
                <p class="card-text" style="color: #6c757d;">${material.description}</p>
              </div>
            </div>`;
        }

        content += `</div></div>`; // Close the flex container and the carousel item
    }

    content += `
      </div>
      <a class="carousel-control-prev" href="#materialCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#materialCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>`;

    materialContainer.innerHTML = content;
}

document.addEventListener('DOMContentLoaded', renderMaterials);
