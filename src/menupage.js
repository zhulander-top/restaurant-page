import salmonImage from '../images/salmon.jpg';
import steakImage from '../images/steak.jpg';
import pastaImage from '../images/pasta.jpg';
import chickenImage from '../images/chicken.jpg';
export default function loadMenuPage() {
    const content = document.getElementById('content');
    content.className = 'menu'; 
    content.innerHTML = ''; 
    
    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';
    heading.className = 'menu-heading';
    content.appendChild(heading);

    const grid = document.createElement('div');
    grid.className = 'menu-grid';

    const entrees = [
        { name: 'Grilled Salmon', img: salmonImage, desc: 'Fresh Atlantic salmon grilled to perfection.' },
        { name: 'Steak Frites', img: steakImage, desc: 'Juicy ribeye with crispy fries.' },
        { name: 'Pasta Primavera', img: pastaImage, desc: 'Seasonal vegetables in a creamy sauce.' },
        { name: 'Chicken Parmesan', img: chickenImage, desc: 'Breaded chicken with marinara and cheese.' },
       
    ];

    entrees.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-item';

        const img = document.createElement('img');
        img.src = item.img;
        img.alt = item.name;

        const title = document.createElement('h3');
        title.textContent = item.name;

        const desc = document.createElement('p');
        desc.textContent = item.desc;

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(desc);
        grid.appendChild(card);
    });

    content.appendChild(grid);
}