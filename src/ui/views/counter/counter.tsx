"use client"

import LandingLayout from "@/ui/layouts/landing"
import type { NextPage } from "next"
import useCounterViewModel from "./counter-view-model"

const CounterView: NextPage = () => {
    const viewModel = useCounterViewModel()

    return (
        <>
            <LandingLayout>
                <button aria-label="Increment value" onClick={() => viewModel.increment()}>
                    Increment
                </button>
                <span>{viewModel.count}</span>
                <button aria-label="Decrement value" onClick={() => viewModel.decrement()}>
                    Decrement
                </button>
            </LandingLayout>
        </>
    )
}

export default CounterView
