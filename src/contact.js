import phoneImage1 from './assets/phone.jpg';
import emailImage from './assets/email.jpg';
import mailImage from './assets/address1.jpg';

export function contact() {
    
    const contentDiv = document.querySelector("#content");

    // Remove any existing DOM children if present
    contentDiv.replaceChildren();

    // DOM for heading
    const heading = document.createElement("h1");
    heading.textContent = "Welcome To Nico's Restaurant";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    // DOM for phoneImage
    const phoneImage = document.createElement("img");
    phoneImage.classList.add("image-contact");
    phoneImage.src = phoneImage1;
    phoneImage.alt = "Image of phone";
    contentDiv.appendChild(phoneImage);

    // DOM for p tag for phoneImage
    const para1PhoneImage = document.createElement("p");
    para1PhoneImage.classList.add("menu-copy");
    para1PhoneImage.textContent = "Call us!";
    contentDiv.appendChild(para1PhoneImage);

    // DOM for emailImage
    const email = document.createElement("img")
    email.classList.add("image-contact");
    email.src = emailImage;
    email.alt = "Image of email";
    contentDiv.appendChild(email);

    // DOM for p tag for emailImage
    const para2EmailImage = document.createElement("p");
    para2EmailImage.classList.add("menu-copy");
    para2EmailImage.textContent = "Email us at fake@fake.com";
    contentDiv.appendChild(para2EmailImage);

    // DOM for addressImage
    const topImage = document.createElement("img");
    topImage.classList.add("image-contact");
    topImage.src = mailImage;
    topImage.alt = "Image of mailing address";
    contentDiv.appendChild(topImage);

    // DOM for p tag for addressImage
    const para3AddressImage = document.createElement("p");
    para3AddressImage.classList.add("contact-copy");
    para3AddressImage.textContent = "Our address is 125 Fake Lane";
    contentDiv.appendChild(para3AddressImage);
}