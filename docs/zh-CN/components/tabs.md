# 标签页组件 Tabs

通过有层级的开放能力，让开发者使用更加不被拘束的 Tabs 标签页

## 开始

开发者可以使用通过 `useCsssTabs` 来初始化一个 `Tabs` 组件。（[组合式 API](#组合式-api)）

<tabs-demo />

<demo title="" desc="" src="../../demos/tabs/demo.vue" raw />

## 插槽

`csss-ui` 基于插槽实现了多数组件，这也是

### list 插槽

`list 插槽` 会根据插槽内子元素的数量，自动生成相对应的标题以及 [`panel 插槽`](#panel-插槽)。

插槽是自由的，你可以随意生成插槽内容，以及生成不同的样式。

例如：

<demo title="" desc="" src="../../demos/tabs/ListSlot.vue" />

当你想禁用某个选项时，只需要在对应的元素加上 `data-disabled` 标签即可。

<demo title="" desc="" src="../../demos/tabs/ListSlotDisabled.vue" />

:::tip
`data-disabled` 符合 [data-\*](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/data-*) 规范。
:::

### panel-[*] 插槽

`panel 插槽`会根据 [`list 插槽`](#list-插槽)生成，默认的插槽名称为"panel-index"。

例如 list 插槽有 3 个子元素,那么对应的 3 个 panel 插槽分别为: `panel-0`, `panel-1`, `panel-2`。

<demo title="" desc="" src="../../demos/tabs/PanelSlot.vue" />

vue 插槽支持[动态插槽名](https://cn.vuejs.org/guide/components/slots.html#dynamic-slot-names)，因此组件也提供了相关的动态名称数组。

这在 panels 是统一的样式内容时很有用。

<demo title="" desc="" src="../../demos/tabs/PanelSlotDynamic.vue" />

::: warning
使用 [组合式 API](#组合式-api) 需要将 `COMP` 与 组件实例进行绑定。
:::

## 组合式 API

开发者可以使用通过 `useCsssTabs` 来初始化一个 `Tabs` 组件。

一般情况下，`csss—ui` 都建议开发者使用这种方法。

::: tip 使用示例

```typescript
const { ...返回值 } = useCsssTabs({
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

函数初始化时接受一个包含 `state` 和 `style` 的对象作为参数。

#### state

| name               | param type | description                                                                              |
| ------------------ | :--------- | :--------------------------------------------------------------------------------------- |
| active             | `number`   | [选中项](#选中项)                                                                        |
| needTransition     | `boolean`  | [是否需要切换动画](#切换动画)                                                            |
| tabsClassList      | `string[]` | 设置[根元素 class](#根元素-class)，第一个元素为 `""` 时，表示保留原 class                |
| listClassList      | `string[]` | 设置 [list 根元素 class](#list-根元素-class)，第一个元素为 `""` 时，表示保留原 class     |
| panelClassList     | `string[]` | 设置 [panels 根元素 class](#panel-根元素-class)，第一个元素为 `""` 时，表示保留原 class  |
| listItemClassList  | `string[]` | 设置 [list 子元素的 class](#list-子元素-class)，第一个元素为 `""` 时，表示保留原 class   |
| panelItemClassList | `string[]` | 设置 [panel 子元素的 class](#panel-子元素-class)，第一个元素为 `""` 时，表示保留原 class |

#### style

TODO

### 返回值

| name    | description                            |
| ------- | -------------------------------------- |
| `COMP`  | 组件实例，需要与 template 中的组件绑定 |
| `state` | [组件状态](#state-组件状态)            |
| `read`  | [组件只读属性](#read-组件只读属性)     |

#### state 组件状态

开发者可根据实际需要随时修改组件状态。

同[state](#state)

#### read 组件只读属性

提供一些只读但无法修改的属性。

| name   | param type | description       |
| ------ | :--------- | :---------------- |
| total  | `number`   | 当前项目数        |
| panels | `string[]` | panels 插槽名数组 |

## 选中项

组件支持提供默认的选中值。以及提供修改的 state。

<demo title="" desc="" src="../../demos/tabs/DefaultActive.vue" />

## 切换动画

如果你不需要切换动画，你可以手动关闭它。

<demo title="" desc="" src="../../demos/tabs/Transition.vue" />

## 根元素 class

通过一个 `string[]` 来设置根元素的 class。

当第一个元素值不为""时，根元素会失去所有默认 class，样式将由开发者进行完成。

<demo title="" desc="" src="../../demos/tabs/RootClass.vue" />

::: warning
所有 css 变量都存放于根元素当中，当默认根元素 class 失效后，将失去组件下所有 css 变量。
:::

## list 根元素 class

通过一个 `string[]` 来设置 list 根元素的 class。

当第一个元素值不为""时，根元素会失去所有默认 class，样式将由开发者进行完成。

<demo title="" desc="" src="../../demos/tabs/ListClass.vue" />

## panel 根元素 class

通过一个 `string[]` 来设置 panel 根元素的 class。

当第一个元素值不为""时，根元素会失去所有默认 class，样式将由开发者进行完成。

<demo title="" desc="" src="../../demos/tabs/PanelClass.vue" />

## list 子元素 class

通过一个 `string[]` 来设置 list 子元素的 class。

当第一个元素值不为""时，根元素会失去所有默认 class，样式将由开发者进行完成。

<demo title="" desc="" src="../../demos/tabs/ListItemClass.vue" />

## panel 子元素 class

通过一个 `string[]` 来设置 panel 子元素的 class。

当第一个元素值不为""时，根元素会失去所有默认 class，样式将由开发者进行完成。

<demo title="" desc="" src="../../demos/tabs/PanelItemClass.vue"/>
