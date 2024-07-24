// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
module.exports = function (plop) {
  plop.setGenerator('module', {
    description: 'Create new module',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Module Name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/modules/{{name}}/controller.ts',
        templateFile: 'plop-templates/modules/controller.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/modules/{{name}}/repository.ts',
        templateFile: 'plop-templates/modules/repository.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/modules/{{name}}/service.ts',
        templateFile: 'plop-templates/modules/service.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/modules/{{name}}/dto.ts',
        templateFile: 'plop-templates/modules/dto.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/modules/{{name}}/routes.ts',
        templateFile: 'plop-templates/modules/routes.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/modules/{{name}}/index.ts',
        templateFile: 'plop-templates/modules/index.ts.hbs',
      },
    ],
  });
}