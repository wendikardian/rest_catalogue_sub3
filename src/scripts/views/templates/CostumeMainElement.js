class MainElement extends HTMLElement {
  connectedCallback() {
    this._title = this.getAttribute('main-title') || null;
    this.render();
  }

  render() {
    this.innerHTML = `
    <h1 class="title-restaurant" tabindex="0">${this._title}</h1>
    <div class="restaurant-container" id="restaurant-container">
        `;
  }
}
customElements.define('main-element', MainElement);
