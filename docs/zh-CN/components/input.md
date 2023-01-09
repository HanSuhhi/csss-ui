# 输入框组件 Input

多数组件库的最初都是从一个组件开始。

## 开始

开发者可以使用通过 `useCsssInput` 来初始化一个 `Input` 组件。（[组合式 API](#组合式-api)）

但多数情况下可以直接使用它。

<input-demo />

<demo title="" desc="" src="../../demos/input/demo.vue" raw />

## 插槽

`csss-ui` 基于插槽实现了多数组件，这也是其中之一。

### header 插槽

`header 插槽` 用来在 input 之前展示一些内容。

<demo title="" desc="" src="../../demos/input/Header.vue"  />

### footer 插槽

`footer 插槽` 用来在 input 之后展示一些内容。

<demo title="" desc="" src="../../demos/input/Footer.vue"  />

## 组合式 API

开发者可以使用通过 `useCsssInput` 来初始化一个 `Input` 组件。

一般情况下，`csss—ui` 都建议开发者使用这种方法。

::: tip 使用示例

```typescript
const { ...返回值 } = useCsssInput({
  // 组件初始化样式
  state: {
    ...
  },
  style: {
    ...
  }
});
```

:::

### 初始化

函数初始化时接受一个包含 `state` 、 `style` 的对象作为参数。

#### state

| name   | param type | description  |
| ------ | :--------- | :----------- |
| model  | `string`   | model 默认值 |
| active | `boolean`  | 选中状态     |

#### style

style 除了一些基础状态，还包括两个子对象，分别是代表 class 设置的 `classList` 和 定义 css 变量的 `property`。

| name        | param type | description             |
| ----------- | :--------- | :---------------------- |
| `classList` | /          | [classList](#classlist) |
| `property`  | /          | [property](#property)   |

##### classList

| name      | param type | description                       |
| --------- | :--------- | :-------------------------------- |
| input     | `string[]` | 设置[根元素 class](#根元素-class) |
| inputMain | `string[]` | 设置[input class](#input-class)   |
| header    | `string[]` | 设置[header class](#header-class) |
| footer    | `string[]` | 设置[footer class](#footer-class) |

##### property

| name              | param type | description |
| ----------------- | :--------- | :---------- |
| `--border-color`  | `string`   | 边框颜色    |
| `--border-radius` | `string`   | 边框弧度    |

### 返回值

| name    | description                            |
| ------- | -------------------------------------- |
| `COMP`  | 组件实例，需要与 template 中的组件绑定 |
| `read`  | [组件只读属性](#read-组件只读属性)     |
| `state` | [组件状态](#state-组件状态)            |
| `style` | [组件只读属性](#read-组件只读属性)     |

#### read 组件只读属性

提供一些只读但无法修改的属性。

| name | param type | description |
| ---- | :--------- | :---------- |
| /    | /          | /           |

#### state 组件状态

开发者可根据实际需要随时修改组件状态。

同[state](#state)

#### style 样式

开发者可根据实际需要随时修改组件样式。

同[style](#style)

## 根元素 class

通过一个 `string[]` 来设置根元素的 class。

当第一个元素值为 `""` 时，根元素保留组件 class。

当有且只有一个元素值为 `_` 时，根元素会失去所有 class。

当第一个元素值不为 `""` 时，根元素会失去所有默认 class，样式将由开发者进行完成。

<demo title="" desc="" src="../../demos/input/RootClass.vue" />

::: warning
所有 css 变量都存放于根元素当中，当默认根元素 class 失效后，将失去组件下所有 css 变量。
:::

## input class

::: tip
input class 指的是 input 元素本体。
:::

通过一个 `string[]` 来设置 input 的 class。

当第一个元素值为 `""` 时，input 保留组件 class。

当有且只有一个元素值为 `_` 时，input 会失去所有 class。

当第一个元素值不为 `""` 时，input 会失去所有默认 class，样式将由开发者进行完成。

<demo title="" desc="" src="../../demos/input/InputClass.vue" />

## header class

::: tip
header class 指的是 `header 插槽` 元素本体。
:::

通过一个 `string[]` 来设置 header 的 class。

当第一个元素值为 `""` 时，header 保留组件 class。

当有且只有一个元素值为 `_` 时，header 会失去所有 class。

当第一个元素值不为 `""` 时，header 会失去所有默认 class，样式将由开发者进行完成。

<demo title="" desc="" src="../../demos/input/HeaderClass.vue" />

## footer class

::: tip
footer class 指的是 `footer 插槽` 元素本体。
:::

通过一个 `string[]` 来设置 footer 的 class。

当第一个元素值为 `""` 时，footer 保留组件 class。

当有且只有一个元素值为 `_` 时，footer 会失去所有 class。

当第一个元素值不为 `""` 时，footer 会失去所有默认 class，样式将由开发者进行完成。

<demo title="" desc="" src="../../demos/input/FooterClass.vue" />
