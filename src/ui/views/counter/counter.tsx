"use client"

import ButtonType from "@/model/enum/button-type"
import Button from "@/widget/buttons/button"
import type { NextPage } from "next"
import useCounterViewModel from "./counter-view-model"

const CounterView: NextPage = () => {
    const viewModel = useCounterViewModel()

    return (
        <div className="m-4">
            <Button
                buttonType={ButtonType.OUTLINE}
                onClick={() => viewModel.increment()}
                aria-label="Increment value">
                Increment
            </Button>
            <span>{viewModel.count}</span>
            <Button
                buttonType={ButtonType.OUTLINE}
                onClick={() => viewModel.decrement()}
                aria-label="Decrement value">
                Decrement
            </Button>
        </div>
    )
}

export default CounterView
