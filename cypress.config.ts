import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    "viewportWidth": 1919,
    "viewportHeight": 1080,
    "chromeWebSecurity": false,
    "requestTimeout": 90000,
    "defaultCommandTimeout": 90000,
    "responseTimeout" : 90000,
    "pageLoadTimeout": 90000,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
