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


  plop.setGenerator("directive", {


    description: "Create a new directive",

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
      addChoiceTrueFalse('bower', 'Do you want to use bower ?'),
    ],


    actions: (data) => {
      var actions = [
        {
          type: "add",
          path: "./{{dashCase name}}/{{dashCase name}}.js",
          templateFile: "plop-templates/composant.js"
        },
        {
          type: "add",
          path: "./{{dashCase name}}/tests/{{dashCase name}}-spec.js",
          templateFile: "plop-templates/composantSpec.js"
        }
        ,
        {
          type: "add",
          path: "./{{dashCase name}}/{{dashCase name}}.html",
          templateFile: "plop-templates/composant.html"
        }
      ];      

      if (data.package) {
        actions.push({
          type: "add",
          path: "./{{dashCase name}}/package.json",
          templateFile: "plop-templates/package.json"
        });
      }
      
      if (data.bower) {
        actions.push({
          type: "add",
          path: "./{{dashCase name}}/bower.json",
          templateFile: "plop-templates/bower.json"
        });
      }
      
      return actions;
    }

  });

};