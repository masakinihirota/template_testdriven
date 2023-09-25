/* eslint-disable import/no-anonymous-default-export */
// ESLintのルールを無効にするためのコメントです。import/no-anonymous-default-exportというルールは、デフォルトエクスポートが無名関数である場合に警告を出すルールです。このルールを無効にすることで、このファイルでデフォルトエクスポートが無名関数であっても、警告が出なくなります。

// {{ kebabCase name }} は、plopfile.mjsのnameプロパティをkebab-caseに変換したものです。例えば、nameプロパティが"FooBar"の場合、{{ kebabCase name }}は"foo-bar"になります。
// {{ pascalCase name }} は、plopfile.mjsのnameプロパティをPascalCaseに変換したものです。例えば、nameプロパティが"foo-bar"の場合、{{ pascalCase name }}は"FooBar"になります。

const pad00 = (num) => String(num).padStart(2, "0");

const date = new Date();
const year = date.getFullYear();
const month = pad00(date.getMonth() + 1);
const day = pad00(date.getDate());
const hms = `${pad00(date.getHours())}:00:00`;
const datePrefix = `${year}-${month}-${day}`;

const categories = ["Other", "Tech", "BlogOps"];

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
    ],
    actions: [
      {
        type: "add",
        path: "app/components/{{path}}/{{pascalCase name}}/{{name}}.tsx",
        templateFile: "templates/component/component.tsx.hbs",
      },
      {
        type: "add",
        path: "app/components/{{path}}/{{pascalCase name}}/{{name}}.test.tsx",
        templateFile: "templates/component/component.test.tsx.hbs",
      },
      {
        type: "add",
        path: "app/components/{{path}}/{{pascalCase name}}/{{name}}.stories.tsx",
        templateFile: "templates/component/component.stories.tsx.hbs",
      },
    ],
  });
}
