import "./style_index.css";
import createHome from "./home/home.js";
import createMenu from "./menu/articles.js";
import createContact from "./contact/contact.js";

const options = (() => {
    const cleanContent = () => {
        const content = document.querySelector("#content");
        removeChilds(content);
    }
    
    const removeChilds = (parent) => {
        while (parent.lastChild) {
            parent.removeChild(parent.lastChild);
        }    
    }

    const changePagesTab = () => {
        const buttons = document.querySelectorAll(".navbar > ul > li");
        for (const btn of buttons) {
            btn.addEventListener("click", (e) => {
                cleanContent();
                doBtnAction(e.target);
            });
        }
    }

    const doBtnAction = btn => {
        if (btn.classList.contains("home-btn")) createHome();
        else if (btn.classList.contains("menu-btn")) createMenu();
        else if (btn.classList.contains("contact-btn")) createContact();
    }

    return {changePagesTab};
})();

const index = (() => {
    const create = () => {
        const header = createHeader();
        const content = createContent();
        const footer = createFooter();

        document.body.append(header, content, footer);
    };

    const createHeader = () => {
        const header = document.createElement("header");
        header.classList.add("top-navbar");
        
        const nav = document.createElement("nav");
        nav.classList.add("navbar");

        const ul = document.createElement("ul");

        const homeLi = document.createElement("li");
        homeLi.classList.add("home-btn");
        homeLi.textContent = "Home";

        const menuLi = document.createElement("li");
        menuLi.classList.add("menu-btn");
        menuLi.textContent = "Menu";

        const contactLi = document.createElement("li");
        contactLi.classList.add("contact-btn");
        contactLi.textContent = "Contact";
        
        ul.append(homeLi, menuLi, contactLi);
        nav.append(ul);
        header.append(nav);

        return header;
    };

    const createContent = () => {
        const content = document.createElement("div");
        content.id = "content";

        return content;
    };

    const createFooter = () => {
        const footer = document.createElement("footer");
        const footerPara = document.createElement("p");
        footerPara.textContent = "Made by Axel C. Lopez "

        const linkFooter = document.createElement("a");
        linkFooter.href = "https://www.github.com/lopezac";
        const gitIcon = document.createElement("span");
        gitIcon.classList.add("github-icon");

        linkFooter.append(gitIcon);
        footerPara.append(linkFooter);
        footer.append(footerPara);

        return footer;
    };

    return {create};
})();


index.create();
createHome();
options.changePagesTab();