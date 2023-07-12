import { decrement as _d, increment as _i } from "@/data/redux/counter"
import { useDispatch, useSelector } from "@/lib/hooks/typed-redux"
import { AnyAction } from "@reduxjs/toolkit"
import { Dispatch } from "react"

interface CounterViewModel {
    count: number
    dispatch: Dispatch<AnyAction>
    increment: () => void
    decrement: () => void
}

const useCounterViewModel: () => CounterViewModel = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const increment = () => {
        dispatch(_i())
    }

    const decrement = () => {
        dispatch(_d())
    }

    return {
        count,
        dispatch,
        increment,
        decrement,
    }
}

export default useCounterViewModel
