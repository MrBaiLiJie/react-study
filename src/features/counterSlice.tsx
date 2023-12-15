/** 引入 createSlice API */
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',   // 标识当前 reducer 的名称,在浏览器调试工具或者其他 Redux 开发者工具中，可以通过 name 属性来查看当前状态树中各个 reducer 的名称以及它们所处理的 action 类型
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      // Redux Toolkit 允许我们在 reducers 写 "可变" 逻辑。
      // 它并不是真正的改变状态值，因为它使用了 Immer 库
      // 可以检测到“草稿状态“ 的变化并且基于这些变化生产全新的不可变的状态
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})
/** 
 * 在上述代码中，我们使用 createSlice 函数创建了一个名为 counter 的 reducer
 * 因此将 name 属性设置为 'counter'
 * 在该 reducer 中，我们定义了三个 action：increment、decrement 和 incrementByAmount
 * 用来增加、减少和增加指定数量的计数器值 
*/
// 每个 case reducer 函数会生成对应的 Action creators
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer