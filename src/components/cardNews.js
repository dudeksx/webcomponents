// Essa classe é responsável por transformar a classe "CardNews" em um documento que retorna elementos HTML
// Isso é o que chamamos de shadow DOM, pois é um tipo de documento que age "por baixo" dos panos e encapsula um documento jS dentro de documentos HTML, reduzindo a complexidade do documento HTML principal e permitindo dinamismo.
class Cardnews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    // build se trata do HTML do webcomponent
    shadow.appendChild(this.build());
    // o styles se trata do CSS
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");

    const autor = document.createElement("span");
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("link-url");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content");

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");
    const newImage = document.createElement("img");
    newImage.src = this.getAttribute("photo") || "/assets/default.png";
    newImage.alt = "Foto da noticia";
    cardRight.appendChild(newImage);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `

    .card {
      width: 70%;
      box-shadow: 28px 10px 35px 0px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 28px 10px 35px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 28px 10px 35px 0px rgba(0, 0, 0, 0.75);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    
    .card__left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 10px;
    }
    
    .card__left > span {
      font-weight: 500;
    }
    
    .card__left > h1 {
      margin-top: 15px;
      font-size: 25px;
    }
    
    .card__left > p {
      color: gray;
    }
    
    
    `;

    return style;
  }
}
// Uma característica interessante do Shadow DOM é que ele permite criar tags HTML personalizadas. Abaixo criamos uma tag chamada "card-news" que vai trazer o código dentro do bloco da classe CardNews , nesse caso é uma H1 com um Hello World, que será impresso no documento do site.
customElements.define("card-news", Cardnews);
