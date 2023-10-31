const  { defineConfig } = require("cypress");
const  { configurePlugin } = require("cypress-mongodb");

module.exports = defineConfig({
  projectId: "vf7omg",
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },
  env: {
    mongodb: {
      uri: "mongodb://testUser:qwerty12345@5.189.186.217:27017/?authMechanism=DEFAULT",
      database: "admin",
    },
  },
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    specPattern: ["cypress/e2e/**/*.spec.{js,jsx,ts,tsx}", "**/*.feature"],
    setupNodeEvents(on, config) {
      configurePlugin(on);
      const email = process.env.EMAIL;
      const password = process.env.PASSWORD;

      config.env = { email, password };
      // implement node event listeners here
      on("task", {
        logToConsole(message) {
          console.log(message);
          return null;
        },
      });
      on("before:browser:launch", (browser, launchOptions) => {
        if (browser.name === "chrome") {
          launchOptions.args.push("--incognito");
        }
        return launchOptions;
      });
      return config;
    },
  },
});
