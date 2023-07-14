/* eslint-disable no-undef */
import FavoriteResto from '../src/scripts/globals/favResto';
import * as TestFactories from './helper/TestFactories';

describe('like a restaurant', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div class="_add_fav"></div>';
  });

  afterEach(() => {
    FavoriteResto.deleteResto(1);
  });

  it('show the like botton when hasnt been liked', async () => {
    await TestFactories.likeButtonPresenter({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });
});
