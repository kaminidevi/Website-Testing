Feature: Non exiting product in Search Bar
  As a willys user
  I want to able to search a product by non existing product
  So that I can see the error resultt

  Background:
    Given that we are on Willy's website
    And that we accepted the standard cookie policy
    And that we have have been through the initial where to deliver popup

  Scenario Outline: Non exiting product in search bar
    When I search for <items>
    And press an Enter
    Then I should see the error result

    Examples:
      | items        |
      | "photoframe" |
      | "123345"     |
      | "@£$%"       |


