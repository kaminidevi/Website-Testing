
module.exports = function () {

  // /^ = Start of regular expression
  // $/ = End of regular expression
  // "([^"]*)" = match anything inside quotation marks

  this.Then(/^I should get the products added in the shopping cart$/, async function () {
    // Wait for a .findList element to show (max 20 seconds)
    let added_products;
    added_products = await (await driver.findElement(By.css('h3'))).getText();
    console.log('\n\nAdded products to the shopping cart:', added_products);
    expect(added_products).to.equal("Toalettpapper Vitt Mjukt");
    await driver.sleep(2000)
  });
};