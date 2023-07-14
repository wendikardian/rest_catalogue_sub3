/* eslint-disable no-unused-vars */
// import UrlParser from '../../routes/url-parser';
import dataRestaurants from '../../globals/api-endpoint';
import itemRestaurant from '../templates/itemRestaurant';
import CONFIG from '../../globals/config';
import '../templates/CostumeMainElement';

const Main = {
  async render() {
    return `
    <main-element main-title="Explore Here !"></main-element>
        `;
  },
  async afterRender() {
    const restContainer = document.querySelector('.restaurant-container');
    const data = await dataRestaurants.getRestaurants();
    const resData = data.restaurants;
    restContainer.innerHTML = '';
    resData.forEach((resto) => {
      const imgPath = `${CONFIG.API_URL}${CONFIG.IMG_PATH_SMALL}`;
      const limitDesc = `${resto.description.substring(9, 100)} ... `;
      const card = itemRestaurant({
        data: resto,
        imagePath: imgPath,
        description: limitDesc,
      });
      restContainer.innerHTML += card;
    });
  },
};

export default Main;
