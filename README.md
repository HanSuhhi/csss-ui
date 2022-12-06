<p align="center">
  <img width="144px" src="https://hansuhhi.github.io/csss-ui/favicon.ico" />
</p>
<h1 align="center">
  <samp>csss-ui</samp>
</h1>

<p align="center">
  <samp>A vue3.0 components library based on csss</samp>
</p>
<p align="center"> English | <a href="README.zh-CN.md">中文</a></p>
<p align="center">
  Csss / Headless / Simple / Cool
</p>

## Documentation

[hansuhhi.github.io/csss-ui/zh-CN/](https://hansuhhi.github.io/csss-ui/en-US/)

## Usage

```
# npm
npm install csss-ui

# yarn
yarn add csss-ui

# pnpm
pnpm install csss-ui
```

### Install Globally

Install globally is a way to save worry and effort.

```typescript
import { createApp } from "vue";
import App from "./App.vue";
import { createCsssUI } from "csss-ui";
// 引入 css
import "csss-ui/dist/style.css";

createApp(App).use(createCsssUI());
```

### Volar Support

Type is must.Developers need to configurate `compilerOptions.type` in `tsconfig.json` to provide global type support.

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["csss-ui/global"]
  }
}
```

## Features

The only features that can be summarized at present are the following, which should be added gradually afterwards.

### Css Custom Properties

define component style by css custom properties.

It's all backed by types.

### Headless

Easily design your component styles.

In this regard, `csss-ui` hopes to be more refined.

### Expose Interface

With the help of the expose capability of vue3.0, each component provides multiple interfaces for style / logic / state modification.

It's all backed by types.

## Acknowledgement

> in alphabet order

- [element-plus](https://github.com/element-plus/element-plus)
- [headlessui](https://github.com/tailwindlabs/headlessui)
- [naive-ui](https://github.com/tusen-ai/naive-ui)
- [vue-components-lib-seed](https://github.com/zouhangwithsweet/vue-components-lib-seed)

## License

[MIT](./LICENSE) License &copy; 2022 [Hansuhhi Don](https://github.com/HanSuhhi)
