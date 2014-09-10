/// <reference path="typings/requirejs/require.d.ts" />
require.config({
  baseUrl: 'js'
});

require(["classes/Project"], (Project) => {
  console.log("Piau")
})