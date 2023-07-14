import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import DrawerInitiator from '../utils/drawer_utils';

class App {
  constructor({
    button, drawer, content, main,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._main = main;
    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._main,
    });
  }

  async renderPage() {
    const url = UrlParser.withCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      // focus cursor to element id = "mainContent"
      const mainContent = document.querySelector('#mainContent');
      mainContent.focus();
    });
  }
}

export default App;
