"use client"

import ButtonType from "@/model/enum/button-type"
import LandingLayout from "@/ui/layouts/landing"
import Button from "@/widget/button"
import type { NextPage } from "next"
import useCounterViewModel from "./counter-view-model"

const CounterView: NextPage = () => {
    const viewModel = useCounterViewModel()

    return (
        <LandingLayout>
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
        </LandingLayout>
    )
}

export default CounterView
