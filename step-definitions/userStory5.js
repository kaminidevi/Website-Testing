module.exports = function () {

  // /^ = Start of regular expression
  // $/ = End of regular expression
  // "([^"]*)" = match anything inside quotation marks

  let quantity = 0;
  let maxBuyProducts = 0;
  let productPriceRea = 0;
  let rea = 0;

  this.Given(/^I have the price information of the product$/, async function () {
    let findProductsPrice = await (await driver.findElement(By.css('ax-product-pricelabel'))).getText();
    productPriceRea = findProductsPrice[18] + findProductsPrice[19] + "." + findProductsPrice[21] + findProductsPrice[22];
    rea = findProductsPrice[6] + findProductsPrice[7] + "." + findProductsPrice[9] + findProductsPrice[10];
    rea = parseFloat(rea);
    productPriceRea = parseFloat(productPriceRea);
    productPrice = rea + productPriceRea;
    maxBuyProducts = await (await driver.findElement(By.css('.ax-product-priceinfo-promotion'))).getText();
    maxBuyProducts = parseFloat(maxBuyProducts[4]);
    await driver.sleep(3000);
  });

  this.When(/^I add some products to the shopping cart$/, async function () {
    let addProductButton = await driver.findElement(By.css('.ax-product-quantity-input input'));
    quantity = (Math.floor(Math.random() * 5) + 1);
    await addProductButton.sendKeys(quantity + '', selenium.Key.ENTER);
  });

  this.Then(/^I should get the total price of the products$/, async function () {
    let calculatedPrice = 0;
    if(quantity > maxBuyProducts){
      calculatedPrice = maxBuyProducts * productPriceRea;
      quantity = quantity - maxBuyProducts;
      calculatedPrice = calculatedPrice + (quantity * productPrice);
    }
    else {
      calculatedPrice = quantity * productPriceRea;
    }
    let totalPrice = await (await driver.findElement(By.css('#selenium--miniCart-total-amount'))).getText();
    if (totalPrice.length == 8 ) {
      totalPrice = totalPrice[0] + totalPrice[1] + "." + totalPrice[3];
    } else if (totalPrice.length == 9) {
      totalPrice = totalPrice[0] + totalPrice[1] + totalPrice[2] + "." + totalPrice[4];
    }
    console.log('\n\Total price of the products:', totalPrice, calculatedPrice.toFixed(1));
    expect(totalPrice).to.equal(calculatedPrice.toFixed(1));
    await driver.sleep(2000)
  });
};