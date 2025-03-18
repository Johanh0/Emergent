describe("Volunteer Page Tests", () => {
    beforeEach(() => {
      cy.visit("/volunteer"); // Visit the Volunteer page
    });
  
    it("should show the Apply Now button", () => {
        // Check if any "Apply Now" button is visible
      cy.contains('Apply Now').should('be.visible');  
    });
    it('displays the main title correctly', () => {
        cy.get('h1').should('contain.text', 'Volunteer & Make a Difference');
      });
    
      // E2E Test 2: Check if the first volunteer opportunity is displayed
      it('displays the volunteer opportunities section', () => {
        cy.get('h2').should('contain.text', 'Current Volunteer Opportunities');
      });
    
      // Unit Test 1: Check if the second volunteer opportunity status is "Urgent"
      it('displays correct status for the second volunteer opportunity', () => {
        cy.get('.bg-red-100').first().should('contain.text', 'Urgent');
      });
});