describe('FindHelp Component', () => {
    beforeEach(() => {
      cy.visit('/find-help'); // Visit the Find Help page
    });
  
    // E2E Test 1: Check if the "Find Nearby Medical Assistance" section is displayed
    it('displays the correct section when in hospital mode', () => {
      cy.get('h2').should('contain.text', 'Find Nearby Medical Assistance');
    });
  
    // E2E Test 2: Simulate a successful shelter search and check if results are displayed
    it('displays shelters when the search is successful in shelter mode', () => {
      // Mock the API response for shelters BEFORE interacting with the UI
      cy.intercept('GET', 'https://homeless-shelters-and-foodbanks-api.p.rapidapi.com/resources*', {
        statusCode: 200,
        body: [
          { name: 'Shelter A', full_address: '789 Oak St', phone_number: '123-456-7890' },
          { name: 'Shelter B', full_address: '101 Pine St', phone_number: '987-654-3210' },
        ],
      }).as('getShelters');
  
      // Switch to shelter mode
      cy.get('button').contains('Food Banks & Shelters').click();
  
      // Enter city and state
      cy.get('input[placeholder="Enter City"]').type('Los Angeles');
      cy.get('input[placeholder="Enter State (e.g., NY)"]').type('CA');
  
      // Click the search button
      cy.get('button').contains('Search').click();
  
      // Wait for the API call to complete
      cy.wait('@getShelters');
  
      // Check if the results are displayed
      cy.get('[data-testid="result-item"]').first().should('contain', 'Shelter A');
      cy.get('[data-testid="result-item"]').last().should('contain', 'Shelter B');
    });
  
    // Unit Test 1: Check if hospitals are displayed correctly
    it('displays hospitals correctly when in hospital mode', () => {
      // Mock the API response for hospitals BEFORE interacting with the UI
      cy.intercept('GET', 'https://api.api-ninjas.com/v1/hospitals*', {
        statusCode: 200,
        body: [
          { name: 'Hospital A', address: '123 Main St', phone: '123-456-7890' },
          { name: 'Hospital B', address: '456 Elm St', phone: '987-654-3210' },
        ],
      }).as('getHospitals');
  
      // Ensure we're in hospital mode
      cy.get('button').contains('Hospitals & Medical Centers').click();
  
      // Enter city and state
      cy.get('input[placeholder="Enter City"]').type('New York');
      cy.get('input[placeholder="Enter State (e.g., NY)"]').type('NY');
  
      // Click the search button
      cy.get('button').contains('Search').click();
  
      // Wait for the API call to complete
      cy.wait('@getHospitals');
  
      // Check if the results are displayed
      cy.get('[data-testid="result-item"]').first().should('contain', 'Hospital A');
      cy.get('[data-testid="result-item"]').last().should('contain', 'Hospital B');
    });
  
    // Unit Test 2: Check if the loading state appears correctly
    it('shows loading state when fetching data', () => {
      // Mock a slow API response for hospitals
      cy.intercept('GET', 'https://api.api-ninjas.com/v1/hospitals*', {
        statusCode: 200,
        delay: 2000, // Simulate a 2-second delay
        body: [],
      }).as('getHospitalsDelayed');
  
      // Ensure we're in hospital mode
      cy.get('button').contains('Hospitals & Medical Centers').click();
  
      // Enter city and state
      cy.get('input[placeholder="Enter City"]').type('Chicago');
      cy.get('input[placeholder="Enter State (e.g., NY)"]').type('IL');
  
      // Click the search button
      cy.get('button').contains('Search').click();
  
      // Check if the loading state is displayed
      cy.get('.text-gray-500').should('contain', 'Loading...');
    });
  });