module.exports = function () {
  this.When(/^I added the items to the cart$/, async function () {
    let addProductButton = await driver.findElement(By.css('.ax-product-quantity-input input'));
    let quantity = (Math.floor(Math.random() * 3) + 1);
    await addProductButton.sendKeys(quantity + '', selenium.Key.ENTER);
    await driver.sleep(3000);
  });
  this.Then(/^I check the shopping cart icon$/, async function () {
    let cartEmpty = await driver.findElement(By.css('button[class="ax-btn ax-btn-fab ax-toolbar-btn mini-cart-desktop selenium--mini-cart-desktop-btn md-button md-ink-ripple"]'));
    await cartEmpty.click();
    await driver.sleep(3000);
  });
  this.Then(/^click minus button to remove a particular product$/, async function () {
    let minusButton = 0;
    minusButton = await driver.findElement(By.css('.ax-product-quantity-minus'));
    console.log(minusButton);
    await minusButton.click();
    await driver.sleep(2000);
  });
}