export default function (
  // JSDocコメントを使用して、import('plop').NodePlopAPIという型を指定しています。これは、plopというライブラリが提供するNodePlopAPIという型をインポートしていることを示しています。この型は、plopfile.mjsで使用されるplopオブジェクトの型を定義しています。
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setGenerator("component", {
    description: "Create a new component",
    prompts: [
      {
        type: "input",
        name: "path",
        message: "どこにコンポーネントを置きますか？(例: app/components/)",
      },
      {
        type: "input",
        name: "name",
        message: "コンポーネントの名前を入力してください",
      },
      {
        type: "list",
        name: "componentType",
        message: "Component type",
        // サーバーコンポーネント、クライアントコンポーネント
        choices: ["server", "client"],
      },
    ],
    actions: [
      {
        type: "add",
        path: "app/components/{{componentType}}/{{path}}/{{pascalCase name}}/{{name}}.tsx",
        templateFile: "templates/component/component.tsx.hbs",
      },
      {
        type: "add",
        path: "app/components/{{componentType}}/{{path}}/{{pascalCase name}}/{{name}}.test.tsx",
        templateFile: "templates/component/component.test.tsx.hbs",
      },
      {
        type: "add",
        path: "app/components/{{componentType}}/{{path}}/{{pascalCase name}}/{{name}}.stories.tsx",
        templateFile: "templates/component/component.stories.tsx.hbs",
      },
    ],
  });
}
