describe("Home Tests", () => {
  it("open the home page and verify the url and the title", () => {
    // open the Home Page
    cy.visit("https://practice.automationbro.com");

    // assert the url
    cy.url().should("include", "automationbro");

    // assert the title
    cy.title().should("eq", "Practice E-Commerce Site – Automation Bro");
  });

  it("clicks the Get Started button and asserts the url", () => {
    // click the button
    cy.get("#get-started").click();

    // assert the url
    cy.url().should("include", "#get-started");
  });

  it("gets the text of the heading and assert the value", () => {
    // get the text
    cy.get("h1.elementor-heading-title").should(($heading) => {
      // console.log($heading.text());
      expect($heading.text()).to.eq("Think different. Make different.");
    });

    // assert the value
    // cy
    //     .get("h1.elementor-heading-title")
    //     .should("have.text", "Think different. Make different." )
    //     .and("have.class", "elementor-size-default")
  });

  it("verifies the text of the first menu link item", () => {
    cy.get("#primary-menu").find("li").first().should("have.text", "Home");
  });

  it("verifies the length and the text of all the menu link items", () => {
    const menuLinksText = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ];

    cy.get("#primary-menu [id*=menu-item]").should("have.length", 6);
    cy.get("#primary-menu [id*=menu-item]").each((item, index, list) => {
      //   cy.wrap(item).should("contain.text", menuLinksText[index]);
      expect(Cypress.$(item).text()).to.eq(menuLinksText[index]);
    });
  });
});
