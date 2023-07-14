// create skeleton element
class MakeSkeletonItem extends HTMLElement {
  connectedCallback() {
    this._title = this.getAttribute("main-title") || null;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="card" tabIndex="0">
    <p class="card-name-restaurant"> lorem </p>

</div>
            `;
  }
}
customElements.define("skeleton-el", MakeSkeletonItem);
