# 🧶 string-utils

## ⭐ Usage

Add the dependency from NPM:

```bash
npm install PROJECT-NAME
```

Import the utility you require and use it:

```ts
import { capitalize } from "PROJECT-NAME";

const title = capitalize("hello, world!");
console.log(title); // Hello, world!
```

The following utilities are available:

| Utility | Source |
| ------- | ------ |
| `slugify("Hello world")` → `hello-world` | [`utils/slugify.ts`](./utils/slugify.ts) |
| `trim("-hello-", "-")` → `hello` | [`utils/trim.ts`](./utils/trim.ts) |
| `capitalize("hello")` → `Hello` | [`utils/case.ts`](./utils/case.ts) |
| `camelCase("hello world")` → `helloWorld` | [`utils/case.ts`](./utils/case.ts) |
| `kebabCase("hello world")` → `hello-world` | [`utils/case.ts`](./utils/case.ts) |
| `snakeCase("hello world")` → `hello_world` | [`utils/case.ts`](./utils/case.ts) |

## 🛠️ Development

Install dependencies:

```bash
yarn
```

Compile Typescript to ES6 before publishing to NPM:

```bash
yarn build
```

## 📝 License

[MIT](./LICENSE) © [Anand Chowdhary](https://anandchowdhary.com)
