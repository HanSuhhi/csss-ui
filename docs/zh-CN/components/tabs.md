# 标签页组件 Tabs

通过有层级的开放能力，让开发者使用更加不被拘束的 Tabs 标签页

## 开始

开发者可以使用通过 `useCsssTabs` 来初始化一个 `Tabs` 组件。（[组合式 API](#组合式-api)）

<tabs-demo />

<demo src="../../demos/tabs/demo.vue" raw />

## 插槽

`csss-ui` 基于插槽实现了多数组件，这也是

### list 插槽

`list 插槽` 会根据插槽内子元素的数量，自动生成相对应的标题以及 [`panel 插槽`](#panel-插槽)。

插槽是自由的，你可以随意生成插槽内容，以及生成不同的样式。

例如：

<demo src="../../demos/tabs/ListSlot.vue" />

当你想禁用某个选项时，只需要在对应的元素加上 `data-disabled` 标签即可。

<demo src="../../demos/tabs/ListSlotDisabled.vue" />

:::tip
`data-disabled` 符合 [data-\*](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/data-*) 规范。
:::

### panel-[*] 插槽

`panel 插槽`会根据 [`list 插槽`](#list-插槽)生成，默认的插槽名称为"panel-index"。

例如 list 插槽有 3 个子元素,那么对应的 3 个 panel 插槽分别为: `panel-0`, `panel-1`, `panel-2`。

<demo src="../../demos/tabs/PanelSlot.vue" />

vue 插槽支持[动态插槽名](https://cn.vuejs.org/guide/components/slots.html#dynamic-slot-names)，因此组件也提供了相关的动态名称数组。

这在 panels 是统一的样式内容时很有用。

<demo src="../../demos/tabs/PanelSlotDynamic.vue" />

::: warning
使用 [组合式 API](#组合式-api) 需要将 `COMP` 与 组件实例进行绑定。
:::

## 组合式 API

开发者可以使用通过 `useCsssTabs` 来初始化一个 `Tabs` 组件。

一般情况下，`csss—ui` 都建议开发者使用这种方法。

::: tip 使用示例

```typescript
const { ...返回值 } = useCsssTabs({
  [接口名]: [接口参数],
  ...
});
```

:::

### 接口

`Tabs` 所有接口列表：

| name                    | param type                                              | description                                         |
| ----------------------- | :------------------------------------------------------ | :-------------------------------------------------- |
| `setActive`             | 1: `number`                                             | [默认选中项](#默认选中项)                           |
| `needDefaultListStyle`  | 1: `boolean`                                            | [`list 插槽` 默认样式](#list-默认样式)              |
| `needDefaultPanelStyle` | 1: `boolean`                                            | [`panel 插槽` 默认样式](#panel-默认样式)            |
| `setTabsClasses`        | 1: `string[]`<br > 2: [`ClassesOption`](#classesoption) | [`设置组件根元素 class`](#设置组件根元素-class)     |
| `setListClasses`        | 1: `string[]`<br > 2: [`ClassesOption`](#classesoption) | [`设置 list 根元素 class`](#设置-list-根元素-class) |

#### ClassesOption

| key       | tpye      | description             |
| --------- | --------- | ----------------------- |
| baseClass | `boolean` | 是否需要基本 class 样式 |

### 返回值

| name     | value type | default | description                            |
| -------- | :--------- | :-----: | :------------------------------------- |
| `COMP`   | `Ref`      |  null   | 组件实例，需要与 template 中的组件绑定 |
| `total`  | `number`   |    0    | 选项卡总数（包含 disabled）            |
| `panels` | `string[]` |   []    | 选项卡内容插槽名数组，用于渲染 panels  |
| `active` | `number`   |    0    | 返回当前选中项                         |

## 默认选中项

组件支持提供默认的选中值。

<demo src="../../demos/tabs/DefaultActive.vue" />

## `list` 默认样式

如果取消默认样式，则 `list 插槽` 样式将完全由开发者提供的元素组件提供，组件仅提供相关逻辑能力。

<demo src="../../demos/tabs/NoDefaultListStyle.vue" />

## `panel` 默认样式

如果取消默认样式，则 `panel 插槽` 样式将完全由开发者提供的元素组件提供，组件仅提供相关逻辑能力。

<demo src="../../demos/tabs/NoDefaultPanelStyle.vue" />

## 设置组件根元素 class

用来设置根元素的 class，这在想要实现自己的组件布局时或者提供一些组件全局的 css 变量时很有用。

<demo src="../../demos/tabs/RootClass.vue" />

## 设置 `list` 根元素 class

用来设置 `list 插槽` 的根元素 class，用来设置 `list 插槽` 的布局时效果不错。

<demo src="../../demos/tabs/ListClass.vue" />

## 设置 `panel` 根元素 class

用来设置 `panel 插槽` 的根元素 class，用来设置 `panel 插槽` 的布局时效果也不错。

<demo src="../../demos/tabs/PanelClass.vue" />
