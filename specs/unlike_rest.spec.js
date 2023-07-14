// import test factories
import * as TestFactories from './helper/TestFactories';
import FavoriteResto from '../src/scripts/globals/favResto';

describe('unlike a restaurant', () => {
    beforeEach(async () => {
        document.body.innerHTML = '<div class="_add_fav"></div>'
        await FavoriteResto.addResto({ id: 1 })
        await TestFactories.likeButtonPresenter({ id: 1 })
    })

    afterAll(() => {
        FavoriteResto.deleteResto(1)
    })

    it('should display unlike widget when the restaurant has been liked', async () => {
        await TestFactories.likeButtonPresenter({ id: 1 })
        expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy()
    })

    it('should not throw if unlike movie is not on the fav list', async() => {
        await TestFactories.likeButtonPresenter({ id: 1 })
        await FavoriteResto.deleteResto(1)
        document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'))
        expect(await FavoriteResto.allResto()).toEqual([])
    })

    it('should unlike the movie and remove it from the fav list DB', async () => {
        document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'))
        expect(await FavoriteResto.allResto()).toEqual([])
    })
})