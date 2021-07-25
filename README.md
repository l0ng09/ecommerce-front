## 拉钩电商项目说明

### 1. 技术栈

#### 1.1 客户端

- 脚本：TypeScript
- 前端框架：React
- 路由管理：React-router-dom
- 用户界面：Antd
- 全局状态管理：Redux
- 异步状态更新：redux-saga
- 路由状态同步：connected-react-router
- 网络请求：Axios
- 调试工具：redux-devtools-extension

#### 1.2 服务端

- 脚本：Node.js
- 数据库：Mongodb
- 数据库可视化：Robo 3T

### 2. 搭建开发环境 (服务端)

#### 安装 mongodb 数据库 (Windows)

#### 2.3 数据库可视化 Robo 3T

[下载地址](https://robomongo.org/download)

### 3. 搭建开发环境 (客户端)

#### 3.1 创建项目并安装依赖

1. 使用 create-react-app 脚手架创建 react 项目

   `npx create-react-app ecommerce-front --template typescript `

2. 安装项目依赖

   `npm install antd axios dayjs redux react-redux react-router-dom redux-saga connected-react-router redux-devtools-extension @types/react-redux @types/react-router-dom`

3. antd CSS 使用 CDN

   https://cdn.bootcdn.net/ajax/libs/antd/4.8.3/antd.min.css

#### 3.2 配置服务器端 API 请求地址

在项目的根目录下新建 .env 文件，并在文件中添加以下内容：

```html
REACT_APP_PRODUCTION_API_URL=http://fullstack.net.cn/api
REACT_APP_DEVLOPMENT_API_URL=http://localhost/api
```

create-react-app 脚手架中内置了 dotenv，允许我们在 React 项目中配置环境变量，但环境变量的名字必须以 REACT_APP_ 开头。

REACT_APP_PRODUCTION_API_URL： 生产环境的服务器端 API 地址

REACT_APP_DEVLOPMENT_API_URL：开发环境的服务器端 API 地址

在项目中可以通过 `process.env.REACT_APP_DEVLOPMENT_API_URL` 方式进行访问，但是这样会有弊端，其一是代码过长写起来不方便，其二是如果在代码中将环境写死，当切换环境时改起来也不方便。

解决方案就是将 API 地址写入配置中，根据环境决定使用哪个 API 地址

```javascript
export let API: string

if (process.env.NODE_ENV === "development") {
  API = process.env.REACT_APP_DEVLOPMENT_API_URL!
} else {
  API = process.env.REACT_APP_PRODUCTION_API_URL!
}
```

#### 3.3 安装 chrome 扩展

<img src="./images/3.png" align="left"/>

React Developer Tools：检查React组件层次结构，在页面上显示React组件。

<img src="./images/4.jpg" align="left"/>

Redux DevTools：监测 Store 中状态的变化

<img src="./images/5.jpg" align="left"/>

```react
import { composeWithDevTools } from "redux-devtools-extension"

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)
```

```html

```

