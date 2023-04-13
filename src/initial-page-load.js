import restaurantImage from './assets/restaurant-image.jpg';

export function initialPageLoad() {
    
    const contentDiv = document.querySelector("#content");

    // Remove any existing DOM children if present
    contentDiv.replaceChildren();

    // DOM for heading
    
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Nico's Restaurant";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    // DOM for landing page top image
    const topImage = document.createElement("img");
    topImage.classList.add("image");
    topImage.src = restaurantImage;
    topImage.alt = "Image of Restaurant";
    contentDiv.appendChild(topImage);

    // DOM for p tag #1
    const para1 = document.createElement("p");
    para1.classList.add("landing-page-copy");
    para1.textContent = "This is a restaurant with a natural look and feel";
    contentDiv.appendChild(para1);

    // DOM for p tag #2
    const para2 = document.createElement("p");
    para2.classList.add("landing-page-copy");
    para2.textContent = "Casual attire";
    contentDiv.appendChild(para2);

    // DOM for p tag #3
    const para3 = document.createElement("p");
    para3.classList.add("landing-page-copy");
    para3.textContent = "Thanks, Management";
    contentDiv.appendChild(para3);

}

  