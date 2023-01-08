# 菜单组件 Menu

完全由开发者提供的数据进行驱动的 Menu 菜单组件。

## 开始

开发者可以使用通过 `useMenu` 来初始化一个 `Menu` 组件。（[组合式 API](#组合式-api)）

<menu-demo />

<demo title="" desc="" src="../../demos/menu/demo.vue" raw />

## 插槽

`csss-ui` 基于插槽实现了多数组件，这也是其中之一。

### item-\* 插槽

`item-* 插槽` 会根据 list 中 children 的层级，自动生成相对应的 menu 层级插槽，并返回相应层级的数据。

例如：

<demo title="" desc="" src="../../demos/menu/Item.vue" />

当你想禁用某个选项时，只需在对应的层级对象加上 `disabled: true` 即可。

<demo title="" desc="" src="../../demos/menu/ItemDisabled.vue" />

如果你不想显示某一层级的菜单项时，只需在对应的层级对象加上 `hide: true` 即可。

<demo title="" desc="" src="../../demos/menu/ItemHide.vue" />

## 组合式 API

开发者可以使用通过 `useCsssMenu` 来初始化一个 `Menu` 组件。

一般情况下，`csss—ui` 都建议开发者使用这种方法。

::: tip 使用示例

```typescript
const { ...返回值 } = useCsssMenu({
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

| name     | param type | description       |
| -------- | :--------- | :---------------- |
| menuList | `array`    | [菜单项](#菜单项) |

当 menu 列表中包含 `disabled: true` 时，该菜单项会被禁用。

当 menu 列表中包含 `hide: true` 时，该菜单项会被隐藏。

#### style

style 除了一些基础状态，还包括两个子对象，分别是代表 class 设置的 `classList` 和 定义 css 变量的 `property`。

| name        | param type | description             |
| ----------- | :--------- | :---------------------- |
| `classList` | /          | [classList](#classlist) |
| `property`  | /          | [property](#property)   |

##### classList

| name  | param type                 | description                       |
| ----- | :------------------------- | :-------------------------------- |
| menu  | `string[]`                 | 设置[根元素 class](#根元素-class) |
| items | `Record<number, string[]>` | 设置每一[层级 class](#层级-class) |

##### property

| name | param type | description |
| ---- | :--------- | :---------- |

### 返回值

| name    | description                            |
| ------- | -------------------------------------- |
| `COMP`  | 组件实例，需要与 template 中的组件绑定 |
| `read`  | [组件只读属性](#read-组件只读属性)     |
| `state` | [组件状态](#state-组件状态)            |
| `style` | [组件只读属性](#read-组件只读属性)     |

<!--
#### read 组件只读属性

提供一些只读但无法修改的属性。

| name | param type | description |
| ---- | :--------- | :---------- | -->

#### state 组件状态

开发者可根据实际需要随时修改组件状态。

同[state](#state)

#### style 样式

开发者可根据实际需要随时修改组件样式。

同[style](#style)

## 菜单项

组件支持提供默认的选中值。以及提供修改的 state。

<demo title="" desc="" src="../../demos/menu/demo.vue" />

## 根元素 class

通过一个 `string[]` 来设置根元素的 class。

当第一个元素值为 `""` 时，根元素保留组件 class。

当有且只有一个元素值为 `_` 时，根元素会失去所有 class。

当第一个元素值不为 `""` 时，根元素会失去所有默认 class，样式将由开发者进行完成。

<demo title="" desc="" src="../../demos/menu/RootClass.vue" />

::: warning
所有 css 变量都存放于根元素当中，当默认根元素 class 失效后，将失去组件下所有 css 变量。
:::

## 层级 class

items 是一个内置的 `Record<number, string[]>` 对象。如果需要修改层级 class, 需要手动设置。

例如：

```javascript
const { COMP: Menu, style } = useCsssMenu({
  state: {
    menuList: [
      {
        name: "fruits",
        children: [
          {
            name: "apple",
          },
          {
            name: "banana",
          },
        ],
      },
    ],
  },
  style: {
    classList: {
      items: {
        1: ["fruit-item"],
      },
    },
  },
});
```

实际可参考该示例组件：

<demo title="" desc="" src="../../demos/menu/ItemClass.vue" />

## 选中项

组件会为选中的层级自动添加 `data-active` 属性，一般用于自定义样式。

如果需要自定义点击事件，可以通过在模板层自定义实现。

<demo title="" desc="" src="../../demos/menu/Active.vue" />
