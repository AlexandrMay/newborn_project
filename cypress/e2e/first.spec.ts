/// <reference types="cypress"/>

import { ApiHelper } from "../support/apiHelper";

describe("First suite", () => {
  beforeEach(() => {
    cy.loginByAPI();
  });

  it("First", () => {
    cy.contains("Оглядl").click();
    ApiHelper.getCategories().then((res) => {
      cy.wrap(res).should('have.length.gte', 2);
    });
  });

  it("Second", () => {
    cy.contains("Асортимент").click();
    cy.contains("Додати категорію").click();
    cy.get("input[type='file']").selectFile("cypress/media/photo.jpeg", {force: true});
  });

  it("Third", () => {
    cy.contains("Асортимент").click();
    cy.contains("Додати категорію").click();
    cy.get("input[type='file']").selectFile("cypress/media/photo.jpeg", {force: true});
  });

  it("Fourth", () => {
    cy.contains("Асортимент").click();
    cy.contains("Додати категорію").click();
    cy.get("input[type='file']").selectFile("cypress/media/photo.jpeg", {force: true});
  });
});
