import Data from "./workers_data.json";

export default function createContact() {
    const contacts = document.createElement("div");
    contacts.classList.add("contacts");

    const pageTitle = document.createElement("h2");
    pageTitle.textContent = "Our team";

    for (const worker of Data.workers) {
        const name = document.createElement("p");
        name.textContent = worker.name;
        
        const email = document.createElement("p");
        email.textContent = worker.email;

        const phoneNum = document.createElement("p");
        phoneNum.textContent = worker.phoneNum;

        const role = document.createElement("p");
        role.textContent = worker.role;

        const imgElem = new Image();
        imgElem.classList.add("worker-img");
        const Img = require(`./${worker.imgUrl}`);
        imgElem.src = Img;

        const info = document.createElement("section");
        info.classList.add("contact-info");

        const contact = document.createElement("article");

        info.append(name, email, phoneNum, role);
        contact.append(info, imgElem);
        contacts.append(contact);
    }

    const content = document.querySelector("#content");
    content.append(pageTitle, contacts);
}