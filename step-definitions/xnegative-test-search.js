module.exports = function () {

  this.When(/^I search for "([^"]*)"$/, async function (items) {
    let searchInput = await driver.findElement(By.css('#selenium--search-items-input'));
    await searchInput.sendKeys(items, selenium.Key.ENTER);
  });

  this.When(/^press an Enter$/, async function () {
    let searchInput = await driver.findElement(By.css('#selenium--search-items-input'));
    await searchInput.sendKeys(selenium.Key.ENTER);
  });

  this.Then(/^I should see the error result$/, async function () {
    await driver.wait(until.elementsLocated(By.css('.ftzRVR')));
    await driver.sleep(3000);
  });

}