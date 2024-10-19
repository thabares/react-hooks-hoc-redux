import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ComponentA() {

    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Count {count}</h2>
            <button onClick={() => dispatch({type: "increment"})}>Increment</button>
            <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>
        </div>
    )
}
