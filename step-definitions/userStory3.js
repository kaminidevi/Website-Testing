module.exports = function () {

  this.When(/^I search for a "([^"]*)"$/, async function (products) {
    let searchInput = await driver.findElement(By.css('#selenium--search-items-input'));
    await searchInput.sendKeys(products, selenium.Key.ENTER);
  });

  this.When(/^press Enter$/, async function () {
    let searchInput = await driver.findElement(By.css('#selenium--search-items-input'));
    await searchInput.sendKeys(selenium.Key.ENTER);
  });

  this.Then(/^I should see the result page$/, async function () {
    await driver.wait(until.elementsLocated(By.css('.Product_product__2dqef')));
    await driver.sleep(3000);
  });

  this.When(/^Adding the quantities of product into Input field and shopping cart$/, async function () {
    let showMore = driver.findElement(By.css('button[class*="LoadMore"]'));
    await showMore.click();
    await driver.executeScript('window.scrollTo(0,0)');
    let products = await driver.findElements(By.css('[itemtype="https://schema.org/Product"]'));
    //To get only 5 products randomly
    products = products.sort(() => Math.random() < 0.5 ? -1 : 1).slice(0, 5);
    cartProducts = [];
    for (let product of products) {
      let name = await (await product.findElement(By.css('[itemprop="name"]'))).getText();
      let quantity = Math.floor(Math.random() * 3 + 1);
      cartProducts.push({ name, quantity });
      let quantityField = await product.findElement(By.css('[aria-label="Ändra produktantal"]'));
      await quantityField.sendKeys(quantity + '', selenium.Key.ENTER);
      await driver.sleep(3000);
    }
    console.log('\n\nShopping Cart Products:\n', cartProducts);
  });

  this.Then(/^The shopping cart should show the quantity of products added$/, async function () {
    let shoppingCartQuantity = +(await (await driver.findElement(By.css('[class^="MiniCartstyles__StyledCounter"]'))).getText());
    await driver.sleep(3000);
    console.log('\n\nTotal Quanatiy in Shopping cart:', shoppingCartQuantity);
  });

}
