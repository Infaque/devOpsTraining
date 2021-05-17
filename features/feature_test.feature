Feature: A feature to validate certain actions on visiting the website

Scenario: On visiting the website
        Given I have visited this web page 
         Then I should see "cucumber test data"
         

Scenario: Click on signup page and check validation
        Given I have gone to homepage
        Then I should have "firebase-integrate"
        When I click on "sign-in"
        Then I should find "email&pass"
        Then I will click "sign-In-span"
        Then I wait '2' seconds
        And I enter "tahmassraheem123@gmail.com" 
        And I entered "12345678"
        Then I would click "sign-in-button"
        Then I would see "notes"
        
        
Scenario: Notes validation and process
        Given I have signed in to website 
        When I click in "Add-notes"
        Then I will find "input-fields"
        When I enter in first field "note-input1"
        And I enter in second field "note-input2"
        And I click "add-button" 
        Then I will see "newnotes-0"