import CONFIG from './config';

const dataRestaurants = {
  async getRestaurants() {
    try {
      const response = await fetch(`${CONFIG.API_URL}/list`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        return response.json();
      }
      throw new Error('Error while Fetching !!');
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  async getDetailSpecified(id) {
    try {
      const response = await fetch(`${CONFIG.API_URL}/detail/${id}`, {
        cache: 'reload',
      });
      if (response.ok) {
        return response.json();
      }
      throw new Error('Something went wrong ! ');
    } catch (error) {
      return error;
    }
  },

  async addReview({ id, name, review }) {
    try {
      const response = await fetch(`${CONFIG.API_URL}/review`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          name,
          review,
        }),
      });
      if (response.ok) {
        return response;
      }
      throw new Error('Something went wrong ! ');
    } catch (error) {
      return error;
    }
  },

};

export default dataRestaurants;
