Feature: Globe Chart
  As a user of the weather application
  I would like to see a Globe Chart

  Scenario: Render Globe Chart
    Given I am using the weather app
    And the globe chart is rendered
    When I hover over a circle
    Then the tooltip is rendered