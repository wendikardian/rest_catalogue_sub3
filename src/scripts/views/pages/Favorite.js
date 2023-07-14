/* eslint-disable no-unused-vars */

import FavoriteResto from '../../globals/favResto';
import '../templates/CostumeMainElement';
import CONFIG from '../../globals/config';
import itemRestaurant from '../templates/itemRestaurant';

const Favorites = {
  async render() {
    return `
    <main-element main-title="My Fav Restaurant"></main-element>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteResto.allResto();
    const restContainer = document.querySelector('.restaurant-container');
    restaurants.forEach((resto) => {
      console.log(resto);
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

export default Favorites;
