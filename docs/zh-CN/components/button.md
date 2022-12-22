# 按钮组件 Button

多数组件库的最初都是从一个组件开始。

## 开始

开发者可以使用通过 `useCsssButton` 来初始化一个 `Button` 组件。（[组合式 API](#组合式-api)）

但多数情况下可以直接使用它。

<button-demo />

<demo title="" desc="" src="../../demos/button/demo.vue" raw />

## 颜色

button 组件目前提供了 `green`，`blue`，`yellow`，`red` 四种颜色预设，默认为绿色。

如果需要新增更多预设，可以参考 [property](#property)，修改 `--bg-color-main` 和 `--bg-color-sub` 两个颜色变量。

<demo title="" desc="" src="../../demos/button/Color.vue"/>

## 插槽

`csss-ui` 基于插槽实现了多数组件，这也是其中之一。

### default 插槽

button 布局仅显示 `default 插槽` 内容。

## 组合式 API

开发者可以使用通过 `useCsssButton` 来初始化一个 `Button` 组件。

一般情况下，`csss—ui` 都建议开发者使用这种方法。

::: tip 使用示例

```typescript
const { ...返回值 } = useCsssButton({
  // 组件初始化样式
  style: {
    ...
  }
});
```

:::

### 初始化

函数初始化时接受一个包含 `state` 、 `style` 的对象作为参数。

#### state

| name | param type | description |
| ---- | :--------- | :---------- |
| /    | /          | /           |

#### style

style 除了一些基础状态，还包括两个子对象，分别是代表 class 设置的 `classList` 和 定义 css 变量的 `property`。

| name        | param type | description             |
| ----------- | :--------- | :---------------------- |
| `classList` | /          | [classList](#classlist) |
| `property`  | /          | [property](#property)   |

##### classList

| name   | param type | description                       |
| ------ | :--------- | :-------------------------------- |
| button | `string[]` | 设置[根元素 class](#根元素-class) |

##### property

| name                   | param type | description    |
| ---------------------- | :--------- | :------------- |
| `--font-size`          | `string`   | 字体大小       |
| `--padding-y`          | `string`   | y 方向 padding |
| `--padding-x`          | `string`   | x 方向 padding |
| `--transition-time`    | `string`   | 动画时间       |
| `--cursor`             | `string`   | 指针样式       |
| `--active-transform-y` | `string`   | 激活时移动距离 |
| `--color`              | `string`   | 文字颜色       |
| `--border-radius`      | `string`   | 外边框圆角     |
| `--hover-opacity`      | `string`   | 接触时透明度   |
| `--active-opacity`     | `string`   | 激活时透明度   |
| `--bg-color-main`      | `string`   | 背景主颜色     |
| `--bg-color-sub`       | `string`   | 背景副颜色     |

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

<demo title="" desc="" src="../../demos/button/RootClass.vue" />

::: warning
所有 css 变量都存放于根元素当中，当默认根元素 class 失效后，将失去组件下所有 css 变量。
:::
