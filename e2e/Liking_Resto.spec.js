const assert = require('assert')

Feature("Liking Resto");

Scenario("test liking a restaurant", async ({ I }) => {
  I.amOnPage("/");
  I.waitForElement(".card-name-restaurant", 10);
  I.seeElement(".card-name-restaurant");
  const firstRestoDetail = await I.grabTextFrom(
    locate(".card-name-restaurant").first()
  );
  I.click(locate(".__see_detail").first());

  I.waitForElement("#likeButton", 10);
  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("#/favorite");
  I.waitForElement(".card-name-restaurant", 10);
  I.seeElement(".card-name-restaurant");
  const likedRestoName = await I.grabTextFrom(locate(".card-name-restaurant").first());

  assert.strictEqual(firstRestoDetail, likedRestoName);
});
