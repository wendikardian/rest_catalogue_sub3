const review = (item) => `
    <div class="review-data">
      <h3>${item.name}</h3>
      <p class="reviewDate">${item.date}</p>
      <p class="reviewContent">${item.review}</p>
    </div>
    `;
export default review;
