# 说明

这里用来解释一些 `csss-ui` 的一些特性。

## expose

> expose 用于声明当组件实例被父组件通过模板引用访问时暴露的公共属性。 ——[Vue](https://cn.vuejs.org/api/options-state.html#expose)

在 `csss-ui` 的实际开发中，开发者们将经常使用到此 API。

### 成因

举个例子，如果我们想要设计一个按钮组件，这个组件需要接受一个 `type` ，会很容易想到通过 `props` 来实现。

那么使用这个组件就可能像这样：

```vue
<template>
  <demo-button type="warning">click me!</demo-button>
</template>
```

而在开发过程中，随着实际场景的变化，不可避免的需要在 `props` 中嵌入开发逻辑，动态赋值。

组件的使用场景就会变成这样：

```vue
<script setup lang="ts">
import { computed } from "vue";

const warningOrSuccess = computed(() => {
  if (...) return "warning";
  else return "success";
});
</script>

<template>
  <demo-button :type="warningOrSuccess">click me!</demo-button>
</template>
```

随着开发的进一步深入，组件会变得愈加复杂，很有可能变成这样：

```js
<template>
  <demo-button
    :type="warningOrSuccess"
    size="small"
    round
    :disabled="isDisabled"
    :leftIcon="LeftIcon ? 'icon-a' : 'icon-b'"
    :rightIcon="RightIcon"
    :loading="buttonLoading"
    color="blue">
     click me!
  </demo-button>
</template>
```

如果场景再复杂一些，多个复杂的组件间相互嵌套，那么 `template` 的可读性将会大幅降低。如果在 `template` 中还嵌入了 js 代码，还会导致 `script` 的可读性降低。

### 改造

`csss-ui` 希望可以给出一个自己的方案，通过组合式 API 完成组件的样式初始化。

而在一些动态场景下，比如在需要修改 `type` 时，再结合组件实例进行修改即可。

```vue
<script setup lang="ts">
import { useCsssButton } from "csss-ui";

const {COMP: Button} = useCsssButton({
  size: "small",
  round: true,
  ...
});

const warning = () => Button.value.type = "warning";
</script>

<template>
  <c-button ref="Button"> Click me! </c-button>
</template>
```

一切都只需要在维护时才发生变动，否则一切都将维持默认。

## css 变量驱动

`csss-ui` 的每一个组件样式都是基于 css 变量驱动的。

这一设计的出发点，是为了尽可能避免开发者武断的强制修改组件样式。因为无论是通过强制修改样式，还是全局 / 局部修改样式，都可能导致在组件在其他地方产生不同的样式问题。而花时间处理这些问题，显然与组件库的初衷，相去甚远。

依旧举个例子：

```vue
<template>
  <demo-button>click me!</demo-button>
</template>
```

在使用这个按钮组件的时候，开发者想要自定义按钮的 `border-radius` 为 `10px`。如果组件该属性通过 css 变量设置，那么修改会很方便：

```vue
<template>
  <demo-button class="button">click me!</demo-button>
</template>

<style>
.button {
  --button-border-radius: 10px;
}
</style>
```

而如果不是的话，想要实现相关效果，开发者就会想到这样修改：

```vue
<template>
  <demo-button class="button">click me!</demo-button>
</template>

<style>
.button {
  border-radius: 10px;
}
</style>
```

这在某些情况下是可行的。但组件内部可能存在不同的元素嵌套，从而导致组件内部[样式优先级](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity)更高，在父组件设置的 style 失效。

那么，开发者就不得不使用更极端的方式，例如：

```css
.button {
  border-radius: 10px !important;
}
```

显然，使用 css 变量的方式更为非侵入式且更优雅。

但是这样使用也存在一个问题，css 缺少相关的代码提示功能，开发者想要修改 css 变量，就不得不查询 DOM 或者文档。代码提示功能之后或许可以通过编写 IDE 的插件来实现，但不是现在。

还有一个问题，就是在 css 变量驱动的组件中，可能并不是每一个 css 变量都希望被开发者修改，因为其中有一些参数可能是一个常量，又或者它的变动会影响到其他组件样式。

因此 `csss-ui` 在每一个组件的 [expose](#expose)中提供了解决方案。

以 [`Layout`](./layout.md) 举例：

```vue
<script setup lang="ts">
import { useCsssLayout } from "csss-ui";

const { COMP: Layout } = useCsssLayout({
  setAsideWidthSize: ["small"],
  setStyleValue: [{ "--header-height": 10 }],
  setLayoutType: ["header-aside"],
});
</script>

<template>
  <CLayout ref="Layout">
    <template #header>header</template>
    <template #aside>aside</template>
    <template #default>main </template>
    <template #footer>footer</template>
  </CLayout>
</template>
```

在每一个组件中，expose 都会暴露接口用来修改相对应的 css 变量，以及一个 `setStyleValue` 接口来修改所有 `csss-ui` 希望开发者修改的 css 变量。

得益于 typescript 的强大能力，这一切都拥有相对应的代码提示能力。

当然，如果开发者想要修改所有 css 变量，每一个组件的详情文档也提供了所有的变量清单。

## 组合式 API

每一个组件都拥有一个对应的组合式函数，担负初始化组件样式，暴露组件实例与一些内部函数等功能。

在文档的多处实例中，包括[前文](#改造)，都是基于组合式函数的实现。

## 选项式 API

开发者也可以自定义组件实例进行绑定，这在选项式 API 中同样使用。

> 示例

<demo src="../../demos/layout/Optional.vue" raw/>
