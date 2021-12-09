module.exports = function () {

  this.Then(/^I can increase the number of items$/, async function () {
    let plusButton = await driver.findElement(By.css('.ax-product-quantity-plus'));
    await plusButton.click();
    await driver.sleep(2000);
  });

}