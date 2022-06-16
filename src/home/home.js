import EmpanadasImg from './empanadas.jpg';

export default function createHome() {
    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Empanadas House";
    
    const img  = new Image();
    img.classList.add("home-img");
    img.src = EmpanadasImg;
    img.alt = "Empanadas with a mate";
    
    const para = document.createElement("p");
    para.classList.add("home-description");
    para.textContent = "The rich gastronomy from Argentina";

    const home = document.createElement("div");
    home.classList.add("home");
    home.append(title, img, para);

    const content = document.querySelector("#content");
    content.append(home);
}