const itemRestaurant = ({ data, imagePath, description }) => {
  if (!data) {
    return '<h2>No Data</h2>';
  }
  return `
    <div class="card" tabIndex="0">
        <img class="card-image" src="${imagePath}${data.pictureId}" alt="${data.name}"           />
        <p class="card-name-restaurant"> ${data.name} </p>
        <p> 🗺️ Location : ${data.city} </p>
        <p> ⭐️ Rating : ${data.rating} </p>
        <p style="text-align: center;"> 📓 ${description} </p>
        <p><a href="${`/#/detail/${data.id}`}" class="__see_detail">See Details</a></p>
    </div>
    `;
};
export default itemRestaurant;
