/* eslint-disable import/prefer-default-export */
import LikeButtonInitiator from '../../src/scripts/utils/like_button_initiator';

const likeButtonPresenter = async (resto) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('._add_fav'),
    resto,
  });
};

export { likeButtonPresenter };
