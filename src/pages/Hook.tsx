/** Hooks ——以 use 开头的函数——只能在组件或自定义 Hook 的最顶层调用。
 * 你不能在条件语句、循环语句或其他嵌套函数内调用 Hook。
 * Hook 是函数，但将它们视为关于组件需求的无条件声明会很有帮助。
 * 在组件顶部 “use” React 特性，类似于在文件顶部“导入”模块。
 */
import React, { useState } from "react";
function MyApp1() {
  type Status = "idle" | "loading" | "success" | "error";

  const [status, setStatus] = useState<Status>("idle");
  /** status 是一个 state setStatus 是对应的 setter 函数。
   * 这里的 [ 和 ] 语法称为数组解构，它允许你从数组中读取值。
   *  useState 返回的数组总是正好有两项。
   */
  const fetchData = () => {
    setStatus("loading");
    setTimeout(() => {
      // 模拟数据加载成功，设置状态为 "success"
      setStatus("success");
    }, 2000);
  };
  const [index, setIndex] = useState(0);
  /**
   * useState 的唯一参数是 state 变量的初始值。在这个例子中，index 的初始值被useState(0)设置为 0。
   * 每次你的组件渲染时，useState 都会给你一个包含两个值的数组：state 变量 (index) 会保存上次渲染的值。state setter 函数 (setIndex) 可以更新 state 变量并触发 React 重新渲染组件。
   */
   const fetchIndex = () =>{
    setIndex(index + 1)
   }
  return (
    <div>
      <div>
        useState: useState 是一个 React Hook，它允许你向组件添加一个 状态变量。
      </div>
      <div>
        <h2 style={{ color: "#999" }}>
          <span style={{ color: "blue" }}>status的值:{status}</span>
        </h2>
        <button onClick={fetchData}>更改status的值</button>
      </div>
      <div>
        <h2 style={{ color: "#999" }}>
          <span style={{ color: "blue" }}>index的值:{index}</span>
        </h2>
        <button onClick={fetchIndex}>更改index的值(每次加1)</button>
      </div>
    </div>
  );
}
export { MyApp1 };
