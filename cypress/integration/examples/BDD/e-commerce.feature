Feature: End-to-end e-commerce validation


    Application regression
    @Regression
    Scenario: E-commerce product delivery
    Given I open e-commerce page
    When I add items to cart
    And Validate the total prices and checkout
    Then select the country, submit and verify success 

    @Smoke
    Scenario: Filling the order form
    Given I open e-commerce page
    When I fill the form details
    |name |gender|
    |frank| Male |
    Then Form behaviour is changed
    And Navigate to Shop page
