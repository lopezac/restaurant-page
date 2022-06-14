import Data from "./articles_data.json";

export default function createMenu() {
    const articles = document.createElement("div");
    articles.classList.add("articles");

    for (const aData of Data.articles) {
        const title = document.createElement("h2");
        title.textContent = aData.title;
        
        const info = document.createElement("p");
        info.textContent = aData.info;

        const imgElem = new Image();
        imgElem.classList.add("art-img");
        const Img = require(`./${aData.imgUrl}`);
        imgElem.src = Img;

        const article = document.createElement("article");
        article.append(title, imgElem, info);
        articles.append(article);
    }

    const content = document.querySelector("#content");
    content.append(articles);
}