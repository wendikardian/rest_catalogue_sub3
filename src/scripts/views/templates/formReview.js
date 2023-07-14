const addReviewForm = () => `
        <div class="form-review-container">
        <h1>Add Your Review ! </h1>
        <form id="submit_review">
        <div>
        <label for="name-review">Name</label>
        <input type="text" id="name-review" placeholder="Name" name="name" required class="review-input" >
      </div>
        <div >
        <label for="review">Review</label>
        <input type="text" id="review" placeholder="Your review" name="name" required class="review-input">
      </div>
            <input type="submit" >
      </form>
        </div>
    `;

export default addReviewForm;
