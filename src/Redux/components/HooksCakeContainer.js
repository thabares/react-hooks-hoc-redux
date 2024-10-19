import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux'

export default function HooksCakeContainer() {

    const numberOfCakes = useSelector((state) => state.cake.numberOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of Cakes - {numberOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cakes</button>
        </div>
    )
}
