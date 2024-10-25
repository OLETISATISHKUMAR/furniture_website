const ecoFriendlyMaterials = [
    {
        title: 'Bamboo',
        description: 'Bamboo is a fast-growing grass that is incredibly strong and durable. It is a sustainable alternative to traditional wood.',
        image: '../assets/Bamboo.jpg'
    },
    {
        title: 'Recycled Plastic',
        description: 'Using recycled plastic helps reduce waste and conserves natural resources. It\'s versatile and can be molded into various furniture styles.',
        image: '../assets/Recycled Plastic.jpg'
    },
    {
        title: 'Organic Cotton',
        description: 'Organic cotton is grown without harmful chemicals, making it a safe choice for upholstery and bedding. It\'s soft, breathable, and eco-friendly.',
        image: '../assets/Organic Cotton.jpg'
    },
    {
        title: 'Reclaimed Wood',
        description: 'Reclaimed wood is salvaged from old structures, reducing the need for new timber and adding unique character to furniture pieces.',
        image: '../assets/Reclaimed Wood.webp'
    },
    {
        title: 'Cork',
        description: 'Cork is harvested from the bark of cork oak trees without harming them. It\'s naturally waterproof, making it ideal for various furniture applications.',
        image: '../assets/Cork.jpg'
    },
    {
        title: 'Hemp',
        description: 'Hemp is a fast-growing plant that requires little water and no pesticides. It\'s used for fabric, rope, and eco-friendly furniture finishes.',
        image: '../assets/Hemp.jpg'
    }
];

// Function to render eco-friendly materials dynamically
function renderEcoFriendlyMaterials() {
    const ecoFriendlyContainer = document.getElementById('ecoFriendly');
    let content = `<div class="container">`;
    
    ecoFriendlyMaterials.forEach((material, index) => {
        const isReverse = index % 2 !== 0 ? 'flex-row-reverse' : '';
        content += `
            <div class="row align-items-center mb-5 ${isReverse}">
                <div class="col-md-6">
                    <img src="${material.image}" class="material-image img-fluid" alt="${material.title}">
                </div>
                <div class="col-md-6">
                    <h3 class="material-title">${material.title}</h3>
                    <p class="material-text">${material.description}</p>
                </div>
            </div>`;
    });

    content += `</div>`;
    ecoFriendlyContainer.innerHTML = content;
}

document.addEventListener('DOMContentLoaded', () => {
    renderEcoFriendlyMaterials();
    console.log("Eco-Friendly Materials Loaded");
});
