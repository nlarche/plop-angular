var composant = require('./src/component/component');

module.exports = (plop) => {
  'use strict';

  plop.addHelper('concat', (left, right) => {
    return left + ' ' + right;
  });

  var addChoiceTrueFalse = (name, question) => {
    return {
      type: "list",
      name: name,
      message: question,
      default: true,
      choices: [
        { name: "True", value: true },
        { name: "False", value: false }
      ]
    }
  }


  plop.setGenerator("component", {


    description: "Create a new component",

    prompts: [
      {
        type: "input",
        name: "module",
        message: "What is your angular module base name ?"
      },
      {
        type: "input",
        name: "name",
        message: "What is your composant name ?"
      },
      {
        type: "input",
        name: "description",
        message: "What is your composant doing ?"
      },
      addChoiceTrueFalse('package', 'Do you want to use npm ?'),
      addChoiceTrueFalse('demo', 'Do you want a demo ?'),
    ],


    actions: (data) => {
      
      var actions = composant;

      if (data.package) {
        actions.push({
          type: "add",
          path: "./{{dashCase name}}/package.json",
          templateFile: "./src/package.json"
        });

        actions.push({
          type: "add",
          path: "./{{dashCase name}}/webpack.config.js",
          templateFile: "./src/webpack.config.js"
        });

      }     

      if (data.demo) {

        actions.push({
          type: "add",
          path: "./{{dashCase name}}/demo/index.html",
          templateFile: "./src/demo/index.html"
        });
        
          actions.push({
          type: "add",
          path: "./{{dashCase name}}/demo/demo.js",
          templateFile: "./src/demo/demo.js"
        });
      }

      return actions;
    }

  });

};