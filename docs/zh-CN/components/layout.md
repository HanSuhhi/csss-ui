# 布局组件 Layout

它可以快速帮你完成页面布局，基于[CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)实现。

它使用起来会很便捷的，如果你习惯使用[插槽](https://cn.vuejs.org/guide/components/slots.html#slots)的话。

页面布局时使用它多是一件美事。

:::warning
布局组件依赖于`display: grid`，即 grid 布局，请先确认浏览器功能对此是否兼容。
:::

## 开始

开发者可以使用通过 `useCsssLayout` 来初始化一个 `Layout` 组件。（[组合式 API](#组合式-api)）

<layout-demo />

<demo title="" desc="" src="../../demos/layout/demo.vue" raw />

## 插槽

`csss-ui` 基于插槽实现了多数组件，这也是其中之一。

### header 插槽

`header 插槽` 用于定义布局的顶部区域。

开发者们仅需关注插槽内容，布局交给组件本身。

### aside 插槽

`aside 插槽` 用于定义布局的顶部区域。

开发者们仅需关注插槽内容，布局交给组件本身。

### footer 插槽

`footer 插槽` 用于定义布局的顶部区域。

开发者们仅需关注插槽内容，布局交给组件本身。

### default 插槽

用于定义布局的核心区域。

开发者们仅需关注插槽内容，布局交给组件本身。

## 组合式 API

开发者可以使用通过 `useCsssLayout` 来初始化一个 `Layout` 组件。

一般情况下，`csss—ui` 都建议开发者使用这种方法。

::: tip 使用示例

```typescript
const { ...返回值 } = useCsssLayout({
  // 组件初始化状态
  state: {
    ...
  },
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

| name               | param type                                                             | description                      |
| ------------------ | :--------------------------------------------------------------------- | :------------------------------- |
| `headerHeightSize` | `"small"` \| `"normal"` \| `"large"` \| `number`                       | 设置 [header 高度](#header-高度) |
| `asideWidthSize`   | `"small"` \| `"normal"` \| `"large"` \| `number`                       | 设置 [aside 宽度](#aside-宽度)   |
| `footerHeightSize` | `"small"` \| `"normal"` \| `"large"` \| `number`                       | 设置 [footer 高度](#footer-高度) |
| `layoutType`       | `"header-footer"` \| `"header-aside"` \| `"footer-aside"` \| `"aside"` | 设置[布局类型](#布局类型)        |
| `classList`        | /                                                                      | [classList](#classlist)          |
| `property`         | /                                                                      | [property](#property)            |

##### classList

| name   | param type | description                        |
| ------ | :--------- | :--------------------------------- |
| layout | `string[]` | 设置[根元素 class](#根元素-class)  |
| header | `string[]` | 设置 [header class](#header-class) |
| aside  | `string[]` | 设置 [aside class](#aside-class)   |
| footer | `string[]` | 设置 [footer class](#footer-class) |
| main   | `string[]` | 设置 [main class](#main-class)     |

##### property

目前 IDE 对于 css 变量的支持并不好。

如果开发者想要手动修改 css 变量，此处也提供了接口。

| name              | param type | description |
| ----------------- | :--------- | :---------- |
| `--header-height` | `string`;  | header 高度 |
| `--aside-width`   | `string`   | aside 宽度  |
| `--footer-height` | `string`   | footer 高度 |

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

## 布局类型

:::tip
对于一些简单布局而言，此接口并无实质意义。应考虑增减相关插槽以实现布局目的。
:::

设置布局类型，可选值有 `header-footer` ， `header-aside` ， `footer-aside` ， `aside`。

### 左右布局

依赖于 `default` 和 `aside` 插槽。

<demo title="" desc="" src="../../demos/layout/LeftRight.vue" />

### 上下布局

依赖于 `default` 和 `header` 插槽。

<demo title="" desc="" src="../../demos/layout/UpDown.vue" />

依赖于 `default` 和 `footer` 插槽。

<demo title="" desc="" src="../../demos/layout/UpDown2.vue" />

### 首尾布局

当`default`、`aside`、`header`、`footer` 四个插槽均存在时，此布局为默认布局。也可手动设置布局类型为 `header-aside`。

:::tip
首尾布局表示 `header 插槽` 优先占领对应视图空间，其次 `footer 插槽` 将占领对应视图空间，剩余插槽再依次占领对应视图空间。
:::

<demo title="" desc="" src="../../demos/layout/HeaderFooter.vue" />

### 首侧布局

当`default`、`aside`、`header`、`footer` 四个插槽均存在时，需手动设置布局类型为`header-footer`。

:::tip
首尾布局表示 `header 插槽` 优先占领对应视图空间，其次 `aside 插槽` 将占领对应视图空间，剩余插槽再依次占领对应视图空间。
:::

<demo title="" desc="" src="../../demos/layout/HeaderAside.vue" />

### 尾侧布局

当`default`、`aside`、`header`、`footer` 四个插槽均存在时，需手动设置布局类型为`footer-aside`。

:::tip
首尾布局表示 `footer 插槽` 优先占领对应视图空间，其次 `aside 插槽` 将占领对应视图空间，剩余插槽再依次占领对应视图空间。
:::

<demo title="" desc="" src="../../demos/layout/FooterAside.vue" />

### 侧布局

当`default`、`aside`、`header`、`footer` 四个插槽均存在时，需手动设置布局类型为`aside`。

:::tip
首尾布局表示 `aside 插槽` 优先占领对应视图空间，剩余插槽再依次占领对应视图空间。
:::

<demo title="" desc="" src="../../demos/layout/Aside.vue" />

## header 高度

用于设置 `header 插槽` 高度，可以通过 `small`，`normal`，`large` 三个尺寸设置。

当传入的参数为 number 时，会自动转化为 rem 单位。

<demo title="" desc="" src="../../demos/layout/HeaderHeight.vue" />

## aside 宽度

用于设置 `aside 插槽` 宽度，可以通过 `small`，`normal`，`large` 三个尺寸设置。

当传入的参数为 number 时，会自动转化为 rem 单位。

<demo title="" desc="" src="../../demos/layout/AsideWidth.vue" />

:::warning
由于宽度实现是通过 `grid-template-columns: minmax(min-content, var(--aside-width))` 实现。`aside插槽` 的设定宽度只是最小宽度值，实际宽度会随子元素宽度的增加而增加。

**请注意控制子组件 / 元素的宽度。**

@TODO：提供锁定模式和非锁定模式。
:::

## footer 高度

用于设置 `footer 插槽` 高度，可以通过 `small`，`normal`，`large` 三个尺寸设置。

当传入的参数为 number 时，会自动转化为 rem 单位。

<demo title="" desc="" src="../../demos/layout/FooterHeight.vue" />

## 根元素 class

通过一个 `string[]` 来设置根元素的 class。

当第一个元素值为 `""` 时，根元素保留组件 class。

当有且只有一个元素值为 `_` 时，根元素会失去所有 class。

当第一个元素值不为 `""` 时，根元素会失去所有默认 class，样式将由开发者进行完成。

<demo title="" desc="" src="../../demos/layout/RootClass.vue" />

## header class

通过一个 `string[]` 来设置 header 的 class。

当第一个元素值为 `""` 时，header 保留组件 class。

当有且只有一个元素值为 `_` 时，header 会失去所有 class。

当第一个元素值不为 `""` 时，header 会失去所有默认 class，样式将由开发者进行完成。

<demo title="" desc="" src="../../demos/layout/HeaderClass.vue" />

:::tip no-element 样式

```css
.no-element {
  display: none;
}
```

:::

## aside class

通过一个 `string[]` 来设置 aside 的 class。

当第一个元素值为 `""` 时，aside 保留组件 class。

当有且只有一个元素值为 `_` 时，aside 会失去所有 class。

当第一个元素值不为 `""` 时，aside 会失去所有默认 class，样式将由开发者进行完成。

<demo title="" desc="" src="../../demos/layout/AsideClass.vue" />

:::tip no-element 样式

```css
.no-element {
  display: none;
}
```

:::

## footer class

通过一个 `string[]` 来设置 footer 的 class。

当第一个元素值为 `""` 时，footer 保留组件 class。

当有且只有一个元素值为 `_` 时，footer 会失去所有 class。

当第一个元素值不为 `""` 时，footer 会失去所有默认 class，样式将由开发者进行完成。

<demo title="" desc="" src="../../demos/layout/FooterClass.vue" />

:::tip no-element 样式

```css
.no-element {
  display: none;
}
```

:::

## main class

通过一个 `string[]` 来设置 main 的 class。

当第一个元素值为 `""` 时，main 保留组件 class。

当有且只有一个元素值为 `_` 时，main 会失去所有 class。

当第一个元素值不为 `""` 时，main 会失去所有默认 class，样式将由开发者进行完成。

<demo title="" desc="" src="../../demos/layout/MainClass.vue" />

:::tip no-element 样式

```css
.no-element {
  display: none;
}
```

:::
