
describe("About Page Tests", () => {
    beforeEach(() => {
      cy.visit("/about"); // Adjust if the URL is different in your setup
    });
  
    it('should display the Our Mission section text', () => {
    
      // Check if the section with the text "Our Mission" is visible
      cy.contains('Our Mission').should('be.visible');
      
      // Check if the description for the mission is visible
      cy.contains('Our mission is to empower individuals').should('be.visible');
    });
    
    it('should display the Safety & Emergency Education card', () => {
    
      // Check for the card titled "Safety & Emergency Education"
      cy.contains('Safety & Emergency Education').should('be.visible');
    
      // Ensure the description related to the card is also visible
      cy.contains('Equipping communities with the knowledge').should('be.visible');
    });
    
    
  });
  