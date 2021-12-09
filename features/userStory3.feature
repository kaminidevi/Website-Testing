Feature: Adding product quantities to shopping cart
  As a willys user
  I want to able to add a no of product quantities in Input field
  So that I can see it in shopping cart

  Background:
    Given that we are on Willy's website
    And that we accepted the standard cookie policy
    And that we have have been through the initial where to deliver popup

  Scenario Outline: Searching products and add to shopping cart
    When I search for a <products>
    And press Enter
    Then I should see the result page
    When Adding the quantities of product into Input field and shopping cart
    Then The shopping cart should show the quantity of products added

    Examples:
      | products |
      | "ost"    |
      | "glass"  |

