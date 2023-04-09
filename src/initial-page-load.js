export function initialPageLoad() {
    const contentDiv = document.querySelector("#content");
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Nico's Restaurant";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    const topImage = document.createElement("img");
    topImage.classList.add("top-image");
    topImage.src = "../src/assets/restaurant-image.jpg";
    topImage.alt = "Image of Restaurant";
    contentDiv.appendChild(topImage);

    const para1 = document.createElement("p");
    para1.classList.add("landing-page-copy");
    para1.textContent = "This is a restaurant with a natural look and feel";
    contentDiv.appendChild(para1);

    const para2 = document.createElement("p");
    para2.classList.add("landing-page-copy");
    para2.textContent = "Casual attire";
    contentDiv.appendChild(para2);

    const para3 = document.createElement("p");
    para3.classList.add("landing-page-copy");
    para3.textContent = "Thanks, Management";
    contentDiv.appendChild(para3);

}

