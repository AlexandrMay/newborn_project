export class ApiHelper {
  static getToken(): Cypress.Chainable<string> {
    console.log(typeof Cypress.env("password"));
    return cy
      .request({
        method: "POST",
        url: "/api/auth/login",
        body: {
          email: Cypress.env("email"),
          password: Cypress.env("password").toString(),
        },
      })
      .then((res): string => {
        return res.body.token;
      });
  }

//   static getCategories() {
//     return this.getToken().then((token) => {
//       return cy
//         .request({
//           method: "GET",
//           url: "/api/category",
//           headers: {
//             Authorization: token,
//           },
//         })
//         .its("body")
//         .then((body) => {
//           return body;
//         });
//     });
//   }

  static getCategories() {
    const token = window.localStorage.getItem("auth-token");
    return cy
      .request({
        method: "GET",
        url: "/api/category",
        headers: {
          Authorization: token,
        },
      })
      .its("body")
      .then((body) => {
        return body;
      });
  }
}
