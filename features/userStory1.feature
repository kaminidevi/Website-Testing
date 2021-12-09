Feature: Store categories
  As as user I want to be able to visit different
  product categories in order to see the products they contain.

Background:
   Given that we are on Willy's website
   And that we accepted the standard cookie policy
   And that we have have been through the initial where to deliver popup

Scenario: Choose the "Frozen" category and check that it contains products.
   Given that I am on the Frozen category page
   Then I should get the related products
