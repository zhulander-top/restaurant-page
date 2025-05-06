import restaurantImage from '../images/restaurant.jpg';
export default function loadHomePage() {
    const contentDiv = document.getElementById('content');
    contentDiv.className = 'hero';
    contentDiv.innerHTML = '';
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const heading = document.createElement('h1');
    heading.textContent = 'Cool Restaurant!';

    const subheading = document.createElement('h4');
    subheading.textContent = 'Cool Slogan!';

    overlay.appendChild(heading);
    overlay.appendChild(subheading);
    contentDiv.appendChild(overlay);
}
