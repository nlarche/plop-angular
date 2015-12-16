var base = "./src/component/template/";

var composant = [
        {
          type: "add",
          path: "./{{dashCase name}}/{{dashCase name}}.js",
          templateFile: base + "component.js"
        },
        {
          type: "add",
          path: "./{{dashCase name}}/{{dashCase name}}.test.js",
          templateFile: base + "component.test.js"
        }
        ,
        {
          type: "add",
          path: "./{{dashCase name}}/{{dashCase name}}.html",
          templateFile: base + "component.html"
        },
        {
          type: "add",
          path: "./{{dashCase name}}/{{dashCase name}}.css",
          templateFile: base + "component.css"
        },
        {
          type: "add",
          path: "./{{dashCase name}}/karma.conf.js",
          templateFile: base + "karma.conf.js"
        },
      ];
  
module.exports = composant;