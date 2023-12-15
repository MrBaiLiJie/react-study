import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount } from './counterSlice'


const Counter = () => {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment增加
        </button>
        <span style={{margin:'0 10px'}}>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement减少
        </button>
        <button
        style={{marginLeft:'10px'}}
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(3))}
        >
          incrementByAmount增加指定数量(例如：指定数量3)
        </button>
      </div>
    </div>
  )
}
export default Counter