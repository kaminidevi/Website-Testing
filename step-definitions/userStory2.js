module.exports = function () {

  this.When(/^I click on the product picture$/, async function () {
    let productImg = await driver.findElement(by.css('.ax-product-puff-image'));
    await productImg.click();
    await driver.sleep(1000);
  });

  this.Then(/^I should get the product information$/, async function () {
    let find_products_info = await (await driver.findElement(By.css('[class^="detail line-break"]'))).getText();
    console.log('\n\nProduct information :', find_products_info);
    expect(find_products_info).to.equal("Längd per rulle: 22m. 3-lagspapper.");
    await driver.sleep(3000);
  });
}