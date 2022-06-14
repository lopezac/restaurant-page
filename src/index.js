import "./style_index.css";
import createHome from "./home/home.js";
import createMenu from "./menu/articles.js"

createHome();

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
        // else if (btn.classList.contains("contact-btn")) createContact();
    }

    return {changePagesTab};
})();

options.changePagesTab();