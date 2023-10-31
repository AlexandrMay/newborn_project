// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { ApiHelper } from "./apiHelper";

Cypress.Commands.add("loginByAPI", () => {
    ApiHelper.getToken().then((token) => {
      cy.visit("/overview", {
        onBeforeLoad(win) {
          win.localStorage.setItem("auth-token", token);
        }
      });
    });
  });

  // Cypress.Commands.add("getOrder", () => {
  //   cy.intercept("POST", "http://5.189.186.217/api/order").as("getOrder");
  //   return cy.wait("@getOrder", { timeout: 4000 })
  //     .then((response) => {
  //       return response.body.order;
  //     });
  // });

  // Cypress.Commands.add("getCategories", () => {
  //   cy.request({
  //     method: "GET",
  //     url: "http://5.189.186.217/api/category",
  //     headers: {
  //       Authorization: window.localStorage.getItem("auth-token"),
  //     },
  //   }).then((res) => {
  //     const categories = res.body;
  //     console.log(categories);
  //     cy.wrap(categories).as("categories");
  //     cy.wrap(res).should("have.property", "status", 200);
  //     //cy.wrap(categories).as("categories");
  //   });
  // });