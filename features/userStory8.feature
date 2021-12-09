Feature: Removing all items from the shopping cart
  As a user I want to be able to remove all items from the shopping cart.
  If I change my mind about shopping so that I want to empty the shopping cart

  Background:
    Given that we are on Willy's website
    And that we accepted the standard cookie policy
    And that we have have been through the initial where to deliver popup
    And I add a product to the shopping cart
    And I click the shopping cart button

  Scenario: Empty shopping cart
    Then empty the shopping cart by clicking on the icon
