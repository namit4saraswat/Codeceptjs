@launchTest
Feature: Launch websites
  
  @element
  Scenario: perform different click at button
    Given I navigate to site home page
    # Then I remove ad from page
    Given I click on card "Element"
    Then I click on button section
    Then I perform right click
    Then I validate right click is successful
    Then I perform double click
    Then I validate doule click is successful