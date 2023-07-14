Feature('restaurant')


Scenario('Unlike some resto' , ({I}) => {
    I.amOnPage('/')
    I.wait(2)
    I.seeElement('.card-name-restaurant')
    I.waitForElement('.card-name-restaurant', 10)
    I.click(locate('.__see_detail').first())
    I.waitForElement('#likeButton', 10)
    I.seeElement('#likeButton')
    I.click('#likeButton')

    I.amOnPage('/#/favorite')
    I.wait(2)
    I.waitForElement('.card-name-restaurant', 10)
    I.seeElement('.card-name-restaurant')
    I.click(locate('.__see_detail').first())
    I.waitForElement('#likeButton', 10)
    I.seeElement('#likeButton')
    I.click('#likeButton')

    I.amOnPage('/#/favorite')
    I.dontSeeElement('.card-name-restaurant')
})