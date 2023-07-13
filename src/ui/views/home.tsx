"use client"

import ButtonType from "@/model/enum/button-type"
import LandingLayout from "@/ui/layouts/landing"
import Button from "@/widget/buttons/button"
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
                <div className="mt-8 gap-3 w-full sm:w-auto text-center flex flex-col sm:flex-row">
                    <Button
                        buttonType={ButtonType.PRIMARY}
                        href="#"
                        aria-label="Invite bot to a Discord server">
                        Add to Server
                    </Button>
                    <Button
                        buttonType={ButtonType.OUTLINE}
                        href="/counter"
                        aria-label="See all Z3R0's features">
                        See Features
                    </Button>
                </div>
            </div>
            <div className="flex bg-gray-200/[0.8] dark:bg-gray-50/[0.02]">
                <div className="mx-5 mt-12 lg:mt-24 mb-20 lg:mb-32 w-full flex flex-col items-center justify-center">
                    <h1 className="mb-8 text-5xl font-bold">Custom Commands</h1>
                    <p className="max-w-2xl text-lg lg:text-xl text-center font-medium leading-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Nunc id cursus metus
                        aliquam eleifend mi in nulla posuere.
                    </p>
                    <div className="mt-16 gap-3 w-full sm:w-auto text-center flex flex-col sm:flex-row">
                        <Button
                            buttonType={ButtonType.PRIMARY}
                            href="https://docs.zibot.aap.my.id"
                            aria-label="Go to documentation">
                            See documentation
                        </Button>
                    </div>
                </div>
            </div>
        </LandingLayout>
    )
}

export default HomeView
