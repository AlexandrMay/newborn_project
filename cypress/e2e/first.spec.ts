/// <reference types="cypress"/>

import { ApiHelper } from "../support/apiHelper";

describe("First suite", () => {
  beforeEach(() => {
    cy.loginByAPI();
  });

  it("First", () => {
    const length = 2;
    cy.contains("Огляд").click();
    ApiHelper.getCategories().then((res) => {
      cy.wrap(res).should('have.length.gte', length);
    });
  });

  it("Second", () => {
    cy.contains("Асортимент").click();
    cy.contains("Додати категорію").click();
    cy.get("input[type='file']").selectFile("cypress/media/photo.jpeg", {force: true});
  });

  it("Third", () => {
    const length = 2;
    cy.contains("Огляд").click();
    ApiHelper.getCategories().then((res) => {
      cy.wrap(res).should('have.length.gte', length);
    });
  });

  it("Fourth", () => {
    cy.contains("Асортимент").click();
    cy.contains("Додати категорію").click();
    cy.get("input[type='file']").selectFile("cypress/media/photo.jpeg", {force: true});
  });
});
