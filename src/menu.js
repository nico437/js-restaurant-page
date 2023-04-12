export function menu() {
    
    const contentDiv = document.querySelector("#content");

    // Remove any existing DOM children if present
    contentDiv.replaceChildren();

    // DOM for heading
    const heading = document.createElement("h1");
    heading.textContent = "Welcome To Nico's Restaurant";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    // DOM for italianPasta
    const italianPasta = document.createElement("img");
    italianPasta.classList.add("image-food");
    italianPasta.src = "../src/assets/pasta2.jpg";
    italianPasta.alt = "Image of Italian Pasta";
    contentDiv.appendChild(italianPasta);

    // DOM for p tag for italianPasta
    const para1ItalianPasta = document.createElement("p");
    para1ItalianPasta.classList.add("menu-copy");
    para1ItalianPasta.textContent = "An amazing Italian Pasta made with Italian noodles";
    contentDiv.appendChild(para1ItalianPasta);

    // DOM for chickenParm
    const chickenParm = document.createElement("img")
    chickenParm.classList.add("image-food");
    chickenParm.src = "../src/assets/chicken-parm.jpg";
    chickenParm.alt = "Image of Chicken Parm Dish";
    contentDiv.appendChild(chickenParm);

    // DOM for p tag for chickenParm
    const para1chickenParm = document.createElement("p");
    para1chickenParm.classList.add("menu-copy");
    para1chickenParm.textContent = "This savoury Chicken Parm will satisfy your Italian food craving";
    contentDiv.appendChild(para1chickenParm);
}