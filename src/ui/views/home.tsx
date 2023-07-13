"use client"

import ButtonType from "@/model/enum/button-type"
import LandingLayout from "@/ui/layouts/landing"
import Button from "@/widget/button"
import type { NextPage } from "next"
import Image from "next/image"
import mascot from "/public/mascot.svg"

const HomeView: NextPage = () => {
    return (
        <LandingLayout>
            <div className="mx-5 mt-12 lg:mt-24 mb-20 lg:mb-32 flex flex-col items-center justify-center">
                <Image alt="The bot (Z3R0)" className="w-32 h-32 dark:invert" src={mascot} />
                <h1 className="mt-8 mb-4 text-5xl font-bold">Z3R0</h1>
                <p className="text-4xl text-center font-medium">An open-source discord bot</p>
                <div className="mt-8 gap-3 flex flex-col sm:flex-row">
                    <Button buttonType={ButtonType.PRIMARY} href="#">
                        Add to Server
                    </Button>
                    <Button buttonType={ButtonType.OUTLINE} href="/counter">
                        See Features
                    </Button>
                </div>
            </div>
        </LandingLayout>
    )
}

export default HomeView
