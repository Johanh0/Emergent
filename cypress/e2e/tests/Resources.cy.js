describe('Resource Page', () => {
    beforeEach(() => {
      cy.visit('/resources');  // Visit the page
    });
  
    // E2E Test 1: Check if the YouTube iframe is present and contains the correct src
    it('displays the YouTube iframe correctly', () => {
      cy.get('iframe')
        .should('have.attr', 'src', 'https://www.youtube.com/embed/iEznxKeRXHY?si=62QR4nSMcVNWalyR');
    });
    it('checks if the modal is not visible initially', () => {
        cy.get('.w-full.bg-white').should('not.exist');  // Ensure modal does not show on page load
      });
    
      // Unit Test 1: Check if Guidelines component is rendered
      it('renders the Guidelines component', () => {
        cy.get('.bg-white').should('exist'); // This assumes the Guidelines component is within a div with class 'bg-white'
      });
    
      // Unit Test 2: Check if the page has the correct title
      it('has the correct page title', () => {
        cy.get('h2').should('contain.text', 'Watch this Post Disaster Informational Video Guide Below');
      });
  });
  
  