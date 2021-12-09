
Feature: To view total price
  As a willys user
  I want the shopping cart to count correctly
  So that I can see the total price before I choose to buy the products
  
  Background:
    Given that we are on Willy's website
    And that we accepted the standard cookie policy
    And that we have have been through the initial where to deliver popup

  Scenario: Get total price
    Given I have the price information of the product
    When I add some products to the shopping cart
    And I click the shopping cart button
    Then I should get the total price of the products
