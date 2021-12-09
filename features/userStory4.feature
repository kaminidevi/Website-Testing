Feature: See added products in the shopping cart
  As a Willys user
  I want to be able to see added products in the shopping cart
  on Willys so that I know what products I can select to buy

  Background:
    Given that we are on Willy's website
    And that we accepted the standard cookie policy
    And that we have have been through the initial where to deliver popup
    And I add a product to the shopping cart

  Scenario: Select the shopping cart 
    When I click the shopping cart button
    Then I should get the products added in the shopping cart
   