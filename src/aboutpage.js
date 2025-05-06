export default function loadAboutPage(){
    const content = document.getElementById('content');
    content.className = 'about'; 
    content.innerHTML = ''; 

    const heading = document.createElement('h1');
    heading.textContent = 'About Us';
    heading.className = 'about-heading';
    content.appendChild(heading);
    
    const description = document.createElement("p");
    description.textContent = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.";
    description.className = 'about-description';
    content.appendChild(description);

}