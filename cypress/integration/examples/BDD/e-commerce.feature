Feature: End-to-end e-commerce validation


    Application regression
    Scenario: E-commerce product delivery
    Given I open e-commerce page
    When I add items to cart
    And Validate the total prices and checkout
    Then select the country, submit and verify success 