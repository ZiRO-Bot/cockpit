"use client"

import ButtonType from "@/model/enum/button-type"
import Button from "@/widget/buttons/button"
import Mascot from "/public/mascot.svg"

const HomeView = ({ inviteLink }: { inviteLink?: string }) => {
    return (
        <>
            <div className="mx-5 mt-12 lg:mt-24 mb-20 lg:mb-32 flex flex-col items-center justify-center">
                <Mascot
                    alt="The bot (Z3R0)"
                    className="w-32 h-32 mr-2.5 fill-dark dark:fill-white"
                />
                <h1 className="mt-8 mb-4 text-6xl font-extrabold">Z3R0</h1>
                <p className="text-xl text-center font-normal">
                    An open-source multi-purpose discord bot, designed with customization in mind
                </p>
                <div className="mt-8 gap-3 w-full sm:w-auto text-center flex flex-col sm:flex-row">
                    <Button
                        className={!inviteLink ? "disabled" : ""}
                        buttonType={ButtonType.PRIMARY}
                        href={inviteLink}
                        aria-label="Invite bot to a Discord server">
                        Add to Server
                    </Button>
                    <Button
                        buttonType={ButtonType.OUTLINE}
                        href="#features"
                        aria-label="See all Z3R0's features">
                        See Features
                    </Button>
                </div>
            </div>
            <div id="features" className="flex bg-gray-200/[0.8] dark:bg-gray-50/[0.02]">
                <div className="mx-5 mt-12 lg:mt-24 mb-20 lg:mb-32 w-full flex flex-col items-center justify-center">
                    <h1 className="mb-8 text-5xl font-extrabold text-center">Custom Commands</h1>
                    <p className="max-w-3xl text-lg lg:text-xl text-center font-normal leading-normal">
                        Z3R0 lets you build powerful and unique custom commands. With its scripting
                        engine TagScript, you have lots of control of your command's functionality
                        while still being relatively easy to use.
                    </p>
                    <div>
                        {
                            // TODO: Add screenshot
                        }
                    </div>
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
        </>
    )
}

export default HomeView
