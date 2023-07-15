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

    expect(
      document.querySelector('[aria-label="like this restaurant"]'),
    ).toBeTruthy();
  });

  it('should not store when the movie already liked', async () => {
    await TestFactories.likeButtonPresenter({ id: 1 });
    await FavoriteResto.addResto({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const allResto = await FavoriteResto.allResto();
    expect(allResto).toEqual([{ id: 1 }]);
  });

  it('should like movie and store it to DB', async () => {
    await TestFactories.likeButtonPresenter({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const resto = await FavoriteResto.getSpesifiedResto(1);

    expect(resto).toEqual({ id: 1 });

    FavoriteResto.deleteResto(1);
  });

  it('should not store non exist id rest', async () => {
    await TestFactories.likeButtonPresenter({});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    const allGetResto = await FavoriteResto.allResto();
    expect(allGetResto).toEqual([]);
  });
});
