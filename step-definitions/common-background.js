let slowDown = true;

async function waitAWhile() {
  await driver.sleep(slowDown ? 5000 : 0);
}

module.exports = function () {

  this.Given(/^that we are on Willy's website$/, async function () {
    await helpers.loadPage('https://www.willys.se/');
  });

  this.Given(/^that we accepted the standard cookie policy$/, async function () {
    // the cookie accept button does not exist initially so wait for it to exist
    await driver.wait(until.elementsLocated(by.css('#onetrust-accept-btn-handler')), 10000);
    // once it exists grab the button
    let cookieAcceptButton = await driver.findElement(By.css('#onetrust-accept-btn-handler'));
    // now wait for the button to be interactable (visible) before clicking
    // check if visible/displayed, wait 1/10 of a second then check again
    while (!(await cookieAcceptButton.isDisplayed())) {
      await driver.sleep(100);
    }
    // the accept button exists and is visible so click it
    await cookieAcceptButton.click();
    await waitAWhile();
  });

  this.Given(/^that we have have been through the initial where to deliver popup$/, async function () {
    // Grab the plus-button of the first product and click it
    let plusButton = await driver.findElement(By.css('.ax-product-quantity-plus'));
    let body = await driver.findElement(By.css('body'));
    await plusButton.click();
    await waitAWhile();
    // Wait for the delivery overlay (the layer to click to remove
    // the delivery choice popup) to exist
    await driver.wait(until.elementsLocated(by.css('.ax-delivery-widget-overlay')), 10000);
    // Then grab it and click it
    let deliveryOverlay = await driver.findElement(By.css('.ax-delivery-widget-overlay'));
    await deliveryOverlay.click();
    // Grab the minus-button of the first product and click it 
    let minusButton = await driver.findElement(By.css('.ax-product-quantity-minus'));
    await minusButton.click();
    // Now the "where to deliver popup" should be gone...
    // and no products in the cart...
    await waitAWhile();
  });

  this.When(/^I add a product to the shopping cart$/, async function () {
    //let addProductButton = await driver.findElement(By.css('.ax-product-quantity-btn'));
    let addProductButton = await driver.findElement(By.css('.ax-product-quantity-input input'));
    let quantity = (Math.floor(Math.random() * 5) + 1);
    await addProductButton.sendKeys(quantity + '', selenium.Key.ENTER);
  });

  this.When(/^I click the shopping cart button$/, async function () {
    let shoppingCartButton = await driver.findElement(By.css('.ax-cart-mini .ax-toolbar-btn'));
    await shoppingCartButton.sendKeys(selenium.Key.ENTER);
    await driver.sleep(2000);
  });

}