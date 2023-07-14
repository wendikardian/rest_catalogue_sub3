const likeButtonElement = () => `
<button class="fav" aria-label="like this restaurant" id="likeButton" > 💓 Add to Fav</button>
`;
const likedButtonElement = () => `
<button class="fav liked" aria-label="unlike this restaurant"  id="likeButton" > Remove from Fav</button>
`;
export { likeButtonElement, likedButtonElement };
