/* eslint-disable */
// import assertBelow
// const assertBelow = require("assert-below");

Feature("restaurant");

Scenario("Make a review", async ({ I }) => {
  I.amOnPage("/");
  I.waitForElement(".__see_detail", 10);
  I.click(locate(".__see_detail").first());
  I.waitForElement(".review-data", 10);
  const reviewsLengthBefore = await I.grabNumberOfVisibleElements(
    ".review-data"
  );
  I.wait(2);
  I.seeElement("#submit_review");
  I.fillField("#name-review", "Jenifer");
  I.wait(2);
  I.fillField("#review", "Amazing !");
  I.click('#submit_review [type="submit"]')
  I.wait(2);
  const reviewsLengthAfter = await I.grabNumberOfVisibleElements(
    ".review-data"
  );
  I.assertBelow(reviewsLengthBefore, reviewsLengthAfter);
});
