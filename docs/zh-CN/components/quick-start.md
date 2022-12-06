# 快速开始

`csss-ui` 是一个支持 **Vue3.0** 的组件库。它很希望在开发者的项目中占有一席之地。

## 安装

使用一个你喜欢的包管理工具进行安装。

```
# npm
npm install csss-ui

# yarn
yarn add csss-ui

# pnpm
pnpm install csss-ui
```

## 引入

这里介绍 `csss-ui` 的常用引入方式。

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

### 直接引入

直接引入的方式就很直观。

```vue
<script setup lang="ts">
import { CLayout } from "csss-ui";
</script>

<template>
  <CLayout ref="a" class="asd">
    <template #header>header</template>
    <template #aside>aside</template>
    <template #default>main </template>
    <template #footer>footer</template>
  </CLayout>
</template>
```

### 按需引入

TODO

## Volar 支持

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

## 说明

使用 `csss-ui` 时，一些常见的逻辑 / 样式 / 状态的定义可能会与其他组件库并不一致。

关于这部分的内容，会在 [说明](./desc) 中详细说明。

## 开始

至此，`csss-ui` 已经准备就绪了。
