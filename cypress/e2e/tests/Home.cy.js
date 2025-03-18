describe("Home Page Tests", () => {
  beforeEach(() => {
    cy.visit("/"); // Adjust if the URL is different in your setup
  });

  it("make sure the slideshow images are visible", () => {
    cy.get('[data-testid="slideshow-image1"]').should("be.visible");
    cy.get('[data-testid="slideshow-image2"]').should("be.visible");
    cy.get('[data-testid="slideshow-image3"]').should("be.visible");
  });

  it('should have a "Get Help Now" button that is clickable', () => {
    cy.contains("Get Help Now").should("be.visible").click();
    // Assert expected behavior after clicking, e.g., navigation or state change
  });
  it('should ensure the Donate button is visible', () => {
 // Visit the homepage or the relevant page
  
    // Check that the Donate button is visible
    cy.get('button')
      .contains('Donate')  // Find button with the text "Donate"
      .should('be.visible');  // Assert that it's visible
  });
  
});

