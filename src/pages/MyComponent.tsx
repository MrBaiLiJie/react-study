import React, { useState } from "react";

type MyComponentProps = {
  name: string;
};
/** 组件名称必须以大写字母开头 */

// 1.创建函数式组件
function MyComponent({ name }: MyComponentProps) {
  return (
    <h2 style={{ color: "#999" }}>
      {" "}
      我是用<span style={{ color: "blue" }}>{name}</span>
      定义的组件(适用于【简单组件】的定义)
    </h2>
  );
}

// 2.创建类式组件
class MyComponent2 extends React.Component<MyComponentProps> {
  render() {
    const { name } = this.props;
    return (
      <h2 style={{ color: "#999" }}>
        {" "}
        我是用<span style={{ color: "blue" }}>{name}</span>{" "}
        定义的组件(适用于【复杂组件】的定义)
      </h2>
    );
  }
}
// 3.组合组件
function Welcome({ name }: MyComponentProps) {
  return <h1 style={{ color: "#999" }}> 【组合组件】 Hello, {name}</h1>;
}

function MyButton({ title }: { title: string }) {
  return <button>{title}</button>;
}
interface MyButtonProps {
  title: string;
  disabled?: boolean;
}
function MyButton2({ title, disabled }: MyButtonProps) {
  return <button disabled={disabled}>{title}</button>;
}
function MyApp() {
  return (
    <div className="myApp">
      <h1 style={{ color: "#999" }}>欢迎来到我的应用</h1>
      <MyButton title="我是一个按钮" />
      <MyButton2 title="我是一个禁用按钮" disabled={true} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

export { MyComponent, MyComponent2, App, MyApp };
