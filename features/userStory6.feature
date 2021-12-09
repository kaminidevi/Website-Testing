Feature: Change number of a product quantity in shopping cart
  As a user, I want to be able to change the number of an item in
  shopping cart so I can buy more or less of it

  Background:
    Given that we are on Willy's website
    And that we accepted the standard cookie policy
    And that we have have been through the initial where to deliver popup
    And I add a product to the shopping cart
    And I click the shopping cart button

  Scenario: Change product quantity
    Then I can increase the number of items
