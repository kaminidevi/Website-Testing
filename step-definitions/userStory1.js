module.exports = function () {
  this.Given(/^that I am on the Frozen category page$/, async function () {
    let frozenLink = await driver.findElement(By.css('a[href="/sortiment/kott-chark-och-fagel"]'));
    await frozenLink.click();
    let fruitandbarLink = await driver.findElement(By.css('a[href="/sortiment/kott-chark-och-fagel/fagel"]'));
    await fruitandbarLink.click();
    await driver.sleep(2000);
    let loadMoreButton = driver.findElement(By.css('button[class*="LoadMore"]'));
    await loadMoreButton.click();
    await driver.executeScript('window.scrollTo(0,0)');
  });
  this.Then(/^I should get the related products$/, async function () {
    let h2Text;
    while (h2Text !== 'Fågel') {
      h2Text = await (await driver.findElement(By.css('h2'))).getText();
      await driver.sleep(2000);
    }
  });
}