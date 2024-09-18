---
date: '2024-09-18 09:46'
title: 'react命名规范'
description: ''
---

## 介绍

在本文中，我们将介绍需要命名约定的原因、这些约定是什么以及如何将它们具体应用于`React`。

## 为什么我们需要命名约定？

命名约定是一组规则或指南，用于以一致且有意义的方式命名文件、变量、函数、类或其他实体。它们很重要，因为它们可以提高代码的可读性、可维护性和团队成员之间的协作。在`React`中，一致性和清晰度对于命名约定至关重要。

定义良好的命名约定有助于增强代码的可读性、可维护性和协作性。一些常用的命名模式包括：

#### `camelCase`：第一个单词为小写，后续每个单词均以大写字母开头。

```js
const userName = 'Lerte'
```

#### `PascalCase`：每个单词都以大写字母开头，包括第一个单词。

```js
const UserName = 'Lerte'
```

#### `snake_case`：所有单词都小写，并用下划线（\_）分隔。

```js
const user_name = 'lerte'
```

> rust里面就是采用`snake_case`命名法则的

#### `kebab-case`：所有单词均小写，并以连字符 (-) 分隔。通常用于 URL 和一些文件名。

```
use-outside-click.ts
```

## 命名约定

#### 组件-Component

为`React`组件使用描述性且有意义的名称。对于组件名称，请使用 `PascalCase`。

```tsx
// React 组件 ✔️
const  ExampleItem = ( ) => {
  ...
};

// React 组件 ❌
const  exampleItem = ( ) => {
  ...
};

// Typescript 接口 ✔️
 interface ExampleItem {
  id : number;
  name : string;
}

// Typescript 接口 ❌
 interface exampleItem {
  id : number;
  name : string;
}
```

#### 文件

使用与组件名称匹配的 PascalCase 命名文件。例如，如果您有一个名为 ExampleCard 的组件，则文件应命名为 ExampleCard.jsx。

```
// React 文件 ✔️
ExampleCard.jsx
ExampleCard.tsx

// React 文件 ❌
 exampleCard.jsx
 example-card.jsx
 example_card.jsx
```

#### Props

使用描述性名称来明确说明props的用途。除非缩写在项目上下文中被广泛理解，否则请避免使用缩写。

```jsx
import  React  from  'react' ;

// 子组件：显示用户信息的组件。
function  UserInfo ( props ) {
  return (
    <div>
      <h2>{props.name></h2>
      <p>{props.email></p>
    </div>
  );
}

// 主组件：包含用户信息的组件。
function  App ( ) {
  const user = {
    name : 'user' ,
    email : 'user@example.com' ,
  };

  return (
    <div>
      <h1>用户信息</h1>
      <UserInfo name={user.name} email={user.email} />
    </div>
  );
}

export  default  App ;
```

> 使用“UserInfo”和“user”等描述性名称可以清楚地表明该 prop 代表用户数据，从而增强可读性和可理解性。

#### 状态-State

对于布尔状态变量，在其前面加上 is、has 或 should

```jsx
import { useState } from 'react'

const ExampleComponent = () => {
  const [isActive, setIsActive] = useState(true) // ✔️
  const [hasError, setHasError] = useState(false) // ✔️
  const [shouldRender, setShouldRender] = useState(true) // ✔️

  const [active, setActive] = useState(true) // ❌
  const [error, setError] = useState(false) // ❌
  const [render, setRender] = useState(true) // ❌

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <div>
      {shouldRender && (
        <div className={isActive ? 'active' : 'inactive'}>
          <button onClick={handleClick}>
            {isActive ? 'active' : 'inactive'}
          </button>
          {hasError && <p>An error occurred.</p>}
        </div>
      )}
    </div>
  )
}

export default ExampleComponent
```

> 通过遵循命名约定，这些状态变量的目的和含义变得更加清晰，使得代码更具可读性和可维护性。

#### 事件处理函数

对事件处理程序使用前缀 handle，并尽量使用驼峰命名法进行命名。例如，handleSubmit、handleClick、handleLogout、handleInputChange。

```jsx
import { useState } from 'react'

function ExampleComponent() {
  const [isActive, setIsActive] = useState(true)

  // ✔️
  const handleButtonClick = () => {
    setIsActive(!isActive)
  }

  // ❌
  const buttonClick = () => {
    setIsActive(!isActive)
  }

  return (
    <div>
      <button onClick={handleButtonClick}>
        {isActive ? 'active' : 'inactive'}
      </button>
    </div>
  )
}

export default ExampleComponent
```

#### 常量

使用 UPPER_SNAKE_CASE 来表示 JavaScript 中的常量。

```js
const API_URL = 'https://api.example.com' // ✔️
const MAX_RESULT = 10 // ✔️

const api_url = 'https://api.example.com' // ❌
const max_result = 10 // ❌
```

#### 函数

函数名称区分大小写，且应以小写字母开头。使用驼峰命名法进行命名。最好使用有意义的名称，并且通常使用祈使动词。

```jsx
// ✔️
const getUserData = () => {
  // function implementation
  return userData
}

const fetchOrders = () => {
  // function implementation
  return orders
}

// ❌
const UserData = () => {
  // function implementation
  return userData
}

const FetchOrders = () => {
  // function implementation
  return orders
}
```

#### 总结

> 总而言之，在 React 项目中应用一致且有意义的命名约定可提高代码的可读性和可维护性。使用 camelCase 等约定有助于为个人开发人员和团队创建更高效​​的工作环境。通过遵守这些简单的规则，您可以实现更清晰、更易理解的代码结构。
