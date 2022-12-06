<p align="center">
  <img width="144px" src="https://hansuhhi.github.io/csss-ui/favicon.ico" />
</p>
<h1 align="center">
  <samp>csss-ui</samp>
</h1>

<p align="center">
  <samp>依赖于 csss 的 vue3.0 组件库</samp>
</p>
<p align="center"> <a href="README.md">English</a> | 中文</p>
<p align="center">
  Csss / Headless / Simple / Cool
</p>

## 文档

[hansuhhi.github.io/csss-ui/zh-CN/](https://hansuhhi.github.io/csss-ui/zh-CN/)

## 使用

```
# npm
npm install csss-ui

# yarn
yarn add csss-ui

# pnpm
pnpm install csss-ui
```

### 完全引入

使用完整引入是一个省心省力的方式。

```typescript
import { createApp } from "vue";
import App from "./App.vue";
import { createCsssUI } from "csss-ui";
// 引入 css
import "csss-ui/dist/style.css";

createApp(App).use(createCsssUI());
```

### Volar 支持

类型支持在多数情况下是必须的，因此开发者需要在 `tsconfig.json` 中配置 `compilerOptions.type` 来提供全局的 `csss-ui` 类型支持。

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["csss-ui/global"]
  }
}
```

## 特征

`csss-ui` 目前能总结的特性只有以下几点，之后应该会逐渐增加。

### csss 变量控制

通过原生 / 接口方式操作 css 变量，实现对组件样式的控制。

这一切都拥有类型的支持。

### headless 无头组件

在默认样式的基础上，通过插槽方式暴露子组件，实现样式自定义。

在这一方面，`csss-ui` 希望可以更加精进。

### expose 接口支持

借助于 vue3.0 的 expose 能力，每一个组件皆提供多个接口进行样式 / 逻辑 / 状态修改。

这一切都拥有类型的支持。

## 鸣谢

> 按照字母顺序排列

- [element-plus](https://github.com/element-plus/element-plus)
- [headlessui](https://github.com/tailwindlabs/headlessui)
- [naive-ui](https://github.com/tusen-ai/naive-ui)
- [vue-components-lib-seed](https://github.com/zouhangwithsweet/vue-components-lib-seed)

## 许可

[MIT](./LICENSE) License &copy; 2022 [Hansuhhi Don](https://github.com/HanSuhhi)
