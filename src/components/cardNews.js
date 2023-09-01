// Essa classe é responsável por transformar a classe "CardNews" em um documento que retorna elementos HTML
// Isso é o que chamamos de shadow DOM, pois é um tipo de documento que age "por baixo" dos panos e encapsula um documento jS dentro de documentos HTML, reduzindo a complexidade do documento HTML principal e permitindo dinamismo.
class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = "<h1> Hello World</h1>";
  }
}
// Uma característica interessante do Shadow DOM é que ele permite criar tags HTML personalizadas. Abaixo criamos uma tag chamada "card-news" que vai trazer o código dentro do bloco da classe CardNews , nesse caso é uma H1 com um Hello World, que será impresso no documento do site.
customElements.define("card-news", CardNews);
