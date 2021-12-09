Feature: Get more information on product
  As a user I want to click on a product to get more information
  so that I can check if I want to buy the product or not

  Background:
    Given that we are on Willy's website
    And that we accepted the standard cookie policy
    And that we have have been through the initial where to deliver popup

  Scenario: Information about product
    When I click on the product picture
    Then I should get the product information