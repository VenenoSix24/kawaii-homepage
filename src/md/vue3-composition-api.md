---
title: Vue3 Composition API完全指南
date: 2025-07-15
author: VenenoSix24
category: 前端开发
tags: ["Vue3", "JavaScript", "Composition API"]
cover: https://vuejs.org/images/components.png
summary: 本文深入探讨Vue3的Composition API，从基础概念到高级应用，帮助你全面掌握这一强大特性。
---

# Vue3 Composition API 完全指南

## 引言

Vue3 的 Composition API 是一种全新的组织组件逻辑的方式，它提供了更好的代码组织和重用能力。本文将深入探讨 Composition API 的使用方法和最佳实践。

## 为什么需要 Composition API？

在 Vue2 中，我们使用 Options API 来组织组件逻辑。随着组件复杂度增加，相关逻辑往往分散在不同选项中，导致代码难以维护。Composition API 通过功能分组解决了这一问题。

## 基础用法

### setup 函数

`setup`函数是 Composition API 的入口点：

```js
import { ref, onMounted } from "vue";

export default {
  setup() {
    // 声明响应式状态
    const count = ref(0);

    // 方法
    function increment() {
      count.value++;
    }

    // 生命周期钩子
    onMounted(() => {
      console.log("组件已挂载");
    });

    // 返回给模板使用
    return {
      count,
      increment,
    };
  },
};
```

### 响应式 API

Composition API 提供了几种创建响应式状态的方式：

1. `ref` - 创建一个包含单个值的响应式引用
2. `reactive` - 创建一个响应式对象
3. `computed` - 创建计算属性
4. `watch` - 监听数据变化

```js
import { ref, reactive, computed, watch } from "vue";

export default {
  setup() {
    // ref
    const count = ref(0);

    // reactive
    const user = reactive({
      name: "张三",
      age: 25,
    });

    // computed
    const doubleCount = computed(() => count.value * 2);

    // watch
    watch(count, (newValue, oldValue) => {
      console.log(`count从${oldValue}变为${newValue}`);
    });

    return {
      count,
      user,
      doubleCount,
    };
  },
};
```

## 生命周期钩子

Composition API 提供了与 Options API 对应的生命周期钩子：

| Options API   | Composition API |
| ------------- | --------------- |
| beforeCreate  | setup()         |
| created       | setup()         |
| beforeMount   | onBeforeMount   |
| mounted       | onMounted       |
| beforeUpdate  | onBeforeUpdate  |
| updated       | onUpdated       |
| beforeUnmount | onBeforeUnmount |
| unmounted     | onUnmounted     |
| errorCaptured | onErrorCaptured |

## 逻辑复用

Composition API 的一个主要优势是逻辑复用能力。我们可以创建组合函数（Composables）来封装和共享有状态的逻辑：

```js
// useCounter.js
import { ref } from "vue";

export function useCounter(initialValue = 0) {
  const count = ref(initialValue);

  function increment() {
    count.value++;
  }

  function decrement() {
    count.value--;
  }

  function reset() {
    count.value = initialValue;
  }

  return {
    count,
    increment,
    decrement,
    reset,
  };
}
```

然后在组件中使用：

```js
import { useCounter } from "./composables/useCounter";

export default {
  setup() {
    const { count, increment, decrement } = useCounter(10);

    return {
      count,
      increment,
      decrement,
    };
  },
};
```

## 模板引用

在 Composition API 中获取模板引用：

```js
import { ref, onMounted } from "vue";

export default {
  setup() {
    // 创建一个ref来存储DOM引用
    const inputRef = ref(null);

    onMounted(() => {
      // 挂载后访问DOM元素
      inputRef.value.focus();
    });

    return {
      inputRef,
    };
  },
};
```

模板中使用：

```html
<input ref="inputRef" />
```

## script setup 语法糖

Vue 3.2 引入了 `<script setup>`语法糖，进一步简化了 Composition API 的使用：

```html
<script setup>
  import { ref, onMounted } from "vue";
  import { useCounter } from "./composables/useCounter";

  // 无需返回，顶层变量和函数自动暴露给模板
  const message = ref("Hello Vue3!");
  const { count, increment } = useCounter();

  function greet() {
    alert(message.value);
  }

  onMounted(() => {
    console.log("组件已挂载");
  });
</script>

<template>
  <div>
    <p>{{ message }}</p>
    <p>计数: {{ count }}</p>
    <button @click="increment">增加</button>
    <button @click="greet">问候</button>
  </div>
</template>
```

## 最佳实践

1. **按功能组织代码**：将相关的状态和方法组织在一起
2. **提取可复用逻辑到组合函数**：提高代码重用性
3. **保持组合函数的单一职责**：每个组合函数应专注于一个功能
4. **合理命名**：组合函数使用 `useXxx`命名
5. **类型支持**：利用 TypeScript 提供的类型支持

## 性能考虑

1. **避免不必要的响应式**：不需要响应性的大型数据结构可以使用 `shallowRef`或 `shallowReactive`
2. **按需引入 API**：减小打包体积
3. **使用 `toRefs`保持响应性**：从响应式对象中解构属性时使用 `toRefs`

## 结论

Composition API 为组织和重用组件逻辑提供了更灵活、更强大的方式。虽然学习曲线可能比 Options API 陡峭一些，但它带来的代码组织和维护优势是显著的，特别是对于大型、复杂的应用。

随着生态系统的成熟和最佳实践的形成，Composition API 已经成为 Vue 开发的首选方式。无论是新项目还是现有项目，掌握 Composition API 都将帮助你写出更好的 Vue 代码。
