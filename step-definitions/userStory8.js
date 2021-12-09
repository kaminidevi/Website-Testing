module.exports = function () {
  //click the checkout button 
  this.Then(/^empty the shopping cart by clicking on the icon$/, async function () {
    let checkOutButton = await driver.findElement(By.css('.checkout-button-text-bottom'))
    await checkOutButton.click();
    await driver.sleep(3000);
    await driver.executeScript('window.scrollTo(0,0)');
    //click the tomt button to delete all the products in the shopping cart
    let emptyButton = await driver.findElement(By.css('#selenium--cartpage-empty-cart-btn'));
    await emptyButton.click();
    await driver.sleep(3000);
    //In the next Page surebutton will be displayed we have to accept the button to delete the page
    let sureButton = await driver.findElement(by.css('button[class*="ax-btn-primary md-button md-ink-ripple"]'));
    await sureButton.click();
    await driver.sleep(2000);
  });
}
