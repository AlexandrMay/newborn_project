/// <reference types="cypress"/>

const {
  Given,
  And,
  When,
  Then,
} = require("cypress-cucumber-preprocessor/steps");

Given("User logged in by API and visit Overview page", () => {
  cy.loginByAPI();
});

And("User opened Categories page", () => {
  cy.get("[href='/categories']").click();
});

When("User created new category", (table) => {
  beforeEach(() => {
    cy.log("HOOK")
  })
  table.hashes().forEach(hash => {
  cy.contains("Додати категорію").click();
  cy.get("#name").type(hash.name);
  cy.contains("Зберегти зміни").click();
  });
});

Then("User can see the created category in categories list", (table) => {
  table.hashes().forEach((hash) => {
    cy.contains("Асортимент").click();
    cy.get("a").contains(hash.name).should("be.visible");
  });
});
