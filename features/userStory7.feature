Feature: Removing items from shopping cart
  As a user I want to be able to remove an item from the basket,
  if I then regret putting it in the shopping cart.

  Background:
    Given that we are on Willy's website
    And that we accepted the standard cookie policy
    And that we have have been through the initial where to deliver popup

  Scenario: Removing items from shopping cart
    When I added the items to the cart
    Then I check the shopping cart icon
    Then click minus button to remove a particular product
