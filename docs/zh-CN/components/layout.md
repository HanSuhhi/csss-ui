# 布局组件 Layout

它可以快速帮你完成页面布局，基于[CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)实现

它使用起来会很便捷的，如果你习惯使用[插槽](https://cn.vuejs.org/guide/components/slots.html#slots)的话。

页面布局时使用它多是一件美事。

:::warning
布局组件依赖于`display: grid`，即 grid 布局，请先确认浏览器功能对此是否兼容。
:::

## 常用布局

这里会展示一些最基础的组件功能。无需任何嵌套元素或额外逻辑，只需要一层`<template>`即可完成布局。

在一些比较简单的布局场景下，它可以很好地发挥实力。当然，复杂场景我希望它也可以胜任。

### 左右布局

依赖于 `default` 和 `aside` 插槽。

<demo src="../../demos/layout/LeftRight.vue" />

### 上下布局

依赖于 `default` 和 `header` 插槽。

<demo src="../../demos/layout/UpDown.vue" />

依赖于 `default` 和 `footer` 插槽。

<demo src="../../demos/layout/UpDown2.vue" />

### 首尾布局

当`default`、`aside`、`header`、`footer` 四个插槽均存在时，此布局为默认布局。也可手动设置布局类型为 `header-aside`。

:::tip
首尾布局表示 `header 插槽` 优先占领对应视图空间，其次 `footer 插槽` 将占领对应视图空间，剩余插槽再依次占领对应视图空间。
:::

<demo src="../../demos/layout/HeaderFooter.vue" />

### 首侧布局

当`default`、`aside`、`header`、`footer` 四个插槽均存在时，需手动设置布局类型为`header-footer`。

:::tip
首尾布局表示 `header 插槽` 优先占领对应视图空间，其次 `aside 插槽` 将占领对应视图空间，剩余插槽再依次占领对应视图空间。
:::

<demo src="../../demos/layout/HeaderAside.vue" />

### 尾侧布局

当`default`、`aside`、`header`、`footer` 四个插槽均存在时，需手动设置布局类型为`footer-aside`。

:::tip
首尾布局表示 `footer 插槽` 优先占领对应视图空间，其次 `aside 插槽` 将占领对应视图空间，剩余插槽再依次占领对应视图空间。
:::

<demo src="../../demos/layout/FooterAside.vue" />

### 侧布局

当`default`、`aside`、`header`、`footer` 四个插槽均存在时，需手动设置布局类型为`aside`。

:::tip
首尾布局表示 `aside 插槽` 优先占领对应视图空间，剩余插槽再依次占领对应视图空间。
:::

<demo src="../../demos/layout/Aside.vue" />

## 接口

> Layout 布局组件接口类型为`CLayoutApi`

借助于 vue3.0 `expose` 能力，可以通过组件暴露的接口来定义组件样式、逻辑与状态。具体使用参考@TODO

### setHeaderHeightSize

设置 `header插槽` 高度尺寸，可选值有 `small` , `normal` , `large` , 默认值为 `normal`。

如果对于 `header插槽` 高度有具体要求，可使用 [setStyleValue](#setstylevalue) 来设置详细高度。

<demo src="../../demos/layout/HeaderHeightSize.vue" />

### setAsideWidthSize

设置 `aside插槽` 宽度尺寸，可选值有 `small` , `normal` , `large` , 默认值为 `normal`。

如果对于 `aside插槽` 宽度有具体要求，可使用[setStyleValue](#setstylevalue) 来设置详细宽度。

<demo src="../../demos/layout/AsideWidthSize.vue" />

### setFooterHeightSize

设置 `footer插槽` 高度尺寸，可选值有 `small` , `normal` , `large` , 默认值为 `normal`。

如果对于 `footer插槽` 高度有具体要求，可使用[setStyleValue](#setstylevalue) 来设置详细高度。

<demo src="../../demos/layout/FooterHeightSize.vue" />

### setLayoutType

:::tip
对于一些简单布局而言，此接口并无实质意义。应考虑增减相关插槽以实现布局目的。
:::

设置布局类型，可选值有 `header-footer` ， `header-aside` ， `footer-aside` ， `aside`。

如果已经参考过[常用布局](#常用布局)中的[首侧布局](#首侧布局)，[尾侧布局](#尾侧布局)和[侧布局](#侧布局)的话，相信你应该已经对该接口有了一些了解。

事实上，这些布局已经是它的全部能力。

### setStyleValue

:::warning

某种程度上来说，凡是其他接口可以操作的组件样式，你都可以通过该接口进行相对应的实现。

但仍建议优先使用其他接口对样式进行操作，因为其他接口可能对一些尺寸、颜色进行了封装，当需求无法被满足时再考虑本接口。

:::

设置 css 样式变量。这是每一个组件接口都应拥有的接口。

我希望开发者可以很便捷的操作一些 css 变量，以达到自定义组件样式的目的，这个接口应运而生。

以下是该接口提供的可供修改的 css 变量列表：

| key               | value type | default | description     | unit  |
| ----------------- | :--------: | :-----: | :-------------- | :---: |
| `--header-height` |  `number`  |    3    | header 插槽高度 | `rem` |
| `--aside-width`   |  `number`  |  12.5   | aside 插槽宽度  | `rem` |
| `--footer-height` |  `number`  |    3    | footer 插槽高度 | `rem` |

## css 变量

:::tip

可能会有一些 css 变量并不在 [setStyleValue](#setstylevalue) 中被罗列，那代表这些 css 变量并不希望被开发者所修改。

:::
:::warning

任何时候 `csss-ui`的 css 变量都不希望被开发者直接修改。

:::

`csss-ui` 组件样式完全依靠 css 变量进行驱动。当[接口](#接口)提供的能力无法解决实际需求时，才考虑直接修改对应的 css 变量。

仅管 `csss-ui` 并不希望开发者直接修改 css 变量，但比起强制修改样式等方法，修改 css 变量又似乎是一个不错的方法。

以下是所有 css 变量列表：

| key                     |                   default                    | description     | remark     |
| ----------------------- | :------------------------------------------: | :-------------- | :--------- |
| `--header-height`       |                     3rem                     | header 插槽高度 |            |
| `--aside-width`         |                   12.5rem                    | aside 插槽宽度  |            |
| `--footer-height`       |                     3rem                     | footer 插槽高度 |            |
| `--grid-template-areas` | "header header" "aside main" "footer footer" | layout 布局     | 不建议修改 |
