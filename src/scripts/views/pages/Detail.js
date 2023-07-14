/* eslint-disable no-unused-vars */
import UrlParser from '../../routes/url-parser';
import dataRestaurants from '../../globals/api-endpoint';
import detailDescription from '../templates/detailDescription';
import LikeButtonInitiator from '../../utils/like_button_initiator';
import Reviews from '../../utils/review_utils';

const Detail = {
  async render() {
    return `
        <div class="_detail_container">
          <div class="_detail_description"   tabindex="0">

            <div class="_add_fav">
             <button class="fav" > 💓 Add to Fav</button>
            </div>
          </div>
          <div class="menu_list"  tabindex="0">
            <div class="menu_item"  tabindex="0">
            <h2>🍗 Food</h2>
            <div class="list_menu food">
            </div>
            </div>
            <div class="menu_item"  tabindex="0"    >
            <h2>☕ Drink </h2>
            <div class="list_menu drink">
            </div>
            </div>
          </div>
          <div class="review_container">

          </div>
          <div class="list_review">
          </div>

        </div>
        `;
  },

  async afterRender() {
    const url = UrlParser.withoutCombiner();
    const { restaurant } = await dataRestaurants.getDetailSpecified(url.id);
    const detailDescriptionDiv = document.querySelector('._detail_description');
    detailDescriptionDiv.innerHTML = '';
    detailDescriptionDiv.innerHTML += detailDescription({ data: restaurant });

    const divCategories = document.createElement('div');
    divCategories.classList.add('_detail_categories');

    for (let i = 0; i < restaurant.categories.length; i += 1) {
      const p = document.createElement('p');
      p.innerText = `#${restaurant.categories[i].name}`;
      divCategories.appendChild(p);
    }
    detailDescriptionDiv.appendChild(divCategories);

    const foodContainer = document.querySelector('.food');
    restaurant.menus.foods.forEach((data) => {
      const p = document.createElement('p');
      p.innerText = data.name;
      foodContainer.appendChild(p);
    });

    const drinkContainer = document.querySelector('.drink');
    restaurant.menus.drinks.forEach((data) => {
      const p = document.createElement('p');
      p.innerText = data.name;
      drinkContainer.appendChild(p);
    });
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('._add_fav'),
      resto: { ...restaurant },
    });
    const reviews = new Reviews({
      reviewsContainer: document.querySelector('.review_container'),
      dataId: url.id,
    });
    reviews.addReview();
    reviews.submitReview();
    reviews.list();
  },

};

export default Detail;
