import addReviewForm from '../views/templates/formReview';
import dataRestaurants from '../globals/api-endpoint';
import review from '../views/templates/review';

class Reviews {
  constructor({ reviewsContainer, reviewsListEl, dataId }) {
    this._reviewsContainer = reviewsContainer;
    this._reviewsListEl = reviewsListEl;
    this._dataId = dataId;
  }

  addReview() {
    this._reviewsContainer.innerHTML += addReviewForm();
  }

  async list() {
    dataRestaurants.getDetailSpecified(this._dataId).then((res) => {
      const data = res.restaurant.customerReviews;
      const reviewEl = document.querySelector('.list_review');
      reviewEl.innerHTML = '';
      reviewEl.innerHTML
        += data.length < 1
          ? '<h2>No Review</h2>'
          : `<h2>${data.length} Review :</h2>`;
      data.reverse().forEach((item) => {
        reviewEl.innerHTML += review(item);
      });
    });
  }

  submitReview() {
    const formSubmit = document.querySelector('#submit_review');
    formSubmit.addEventListener('submit', () => {
      const name = document.querySelector('#name-review').value;
      const reviewContent = document.querySelector('#review').value;
      console.log(name, reviewContent, this._dataId);
      dataRestaurants
        .addReview({
          id: this._dataId,
          name,
          review: reviewContent,
        });
    });
  }
}
export default Reviews;
