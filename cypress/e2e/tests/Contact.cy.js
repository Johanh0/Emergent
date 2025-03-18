describe('Contact Page Validation Tests', () => {
  beforeEach(() => {
    cy.visit('/contact'); // Adjust the URL if necessary
  });

  it('should show an error message when first name is too short', () => {
    cy.get('input[name="firstName"]').type('A'); // Enter invalid first name (too short)
    cy.get('button[type="submit"]').click(); // Click send button

    // Check for the error message specific to first name
    cy.get('p')
      .should('contain', 'First name must be at least 2 letters')
      .and('be.visible');
  });

  it('should show an error message when last name is too short', () => {
    cy.get('input[name="lastName"]').type('B'); // Enter invalid last name (too short)
    cy.get('button[type="submit"]').click(); // Click send button

    // Check for the error message specific to last name
    cy.get('p')
      .should('contain', 'Last name must be at least 2 letters')
      .and('be.visible');
  });

  it('should show an error message when message is too short', () => {
    cy.get('textarea[name="message"]').type('Hi'); // Enter an invalid short message
    cy.get('button[type="submit"]').click(); // Click send button

    // Check for the error message specific to the message field
    cy.get('p')
      .should('contain', 'Message must be at least 10 characters long')
      .and('be.visible');
  });

    it('should submit the form and show a success modal when the Send Message button is clicked', () => {
      // Intercept the API request and mock a successful response
      cy.intercept('POST', 'http://localhost:3000/api/v1/user/send_message', {
        statusCode: 200,
        body: { message: 'Message sent successfully' },
      }).as('sendMessage');
  
      // Visit the contact page
      cy.visit('/contact');  // Adjust URL if necessary
  
      // Check that the form is visible
      cy.get('[data-testid="conatct-form"]').should('be.visible');
  
      // Fill in the form fields
      cy.get('input[name="firstName"]').type('John'); // First Name
      cy.get('input[name="lastName"]').type('Doe'); // Last Name
      cy.get('input[name="email"]').type('johndoe@example.com'); // Email
      cy.get('input[name="subject"]').type('Inquiry about services'); // Subject
      cy.get('textarea[name="message"]').type('I would like more information about your services.'); // Message
  
      // Submit the form
      cy.get('button[type="submit"]').click(); // Send Message button
  
      // Wait for the mock API request to complete
      cy.wait('@sendMessage');
  
      // Check that the modal is displayed
      cy.get('.fixed.inset-0').should('be.visible');  // Modal container should appear
      cy.get('.bg-white p').should('contain', 'We will get back to you shortly.'); // Verify success message
  
      // Optionally, close the modal
      cy.get('button').contains('Close').click(); // Close modal
    });
});
