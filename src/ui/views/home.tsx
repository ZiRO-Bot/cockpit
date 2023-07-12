"use client"

import LandingLayout from "@/ui/layouts/landing"
import type { NextPage } from "next"
import Image from "next/image"
import mascot from "/public/mascot.svg"

const HomeView: NextPage = () => {
    return (
        <>
            <LandingLayout>
                <div className="mx-5 mt-12 lg:mt-24 mb-20 lg:mb-32 flex flex-col items-center justify-center">
                    <Image alt="The bot (Z3R0)" className="w-32 h-32 dark:invert" src={mascot} />
                    <h1 className="mt-8 mb-4 text-5xl font-bold">Z3R0</h1>
                    <p className="text-4xl font-medium">An open-source discord bot</p>
                    <div className="mt-8 gap-3 flex flex-col sm:flex-row">
                        <a
                            className="text-md font-bold py-4 px-6 sm:px-8 transition-colors bg-sky-500 hover:bg-opacity-80 rounded-full text-white"
                            href="#">
                            Add to Server
                        </a>
                        <a
                            className="text-md font-bold py-4 px-6 sm:px-8 transition-[background-color] hover:bg-gray-200/[0.75] dark:hover:bg-gray-50/[0.02] rounded-full shadow-border-like dark:shadow-border-like-dark-btn"
                            href="#">
                            See Features
                        </a>
                    </div>
                </div>
            </LandingLayout>
        </>
    )
}

export default HomeView
