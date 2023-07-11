import LandingLayout from "@/ui/layouts/landing"
import type { NextPage } from "next"
import Head from "next/head"

export const HomeView: NextPage = () => {
    return (
        <>
            <Head>
                <title>Z3R0 - An open-source discord bot</title>
            </Head>
            <LandingLayout>
                <div className="mx-5 mt-12 lg:mt-24 mb-20 lg:mb-32 flex flex-col items-center justify-center">
                    <svg
                        className="w-32 h-32 fill-dark dark:fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 185.097 179.62">
                        <defs>
                            <filter
                                id="a"
                                width="1"
                                height="1"
                                x="0"
                                y="0"
                                color-interpolation-filters="sRGB">
                                <feGaussianBlur />
                            </filter>
                        </defs>
                        <path
                            d="M58.157 88.509h.002a3.53 3.53 0 0 1 .313 7.045c-1.255 9.59-1.46 29.999-1.327 48.113.097 13.158.36 24.838.509 30.696.336-.045.674-.09 1.036-.132.915-.105 1.693-.094 2.358.004-.503-14.63-.675-26.026-.024-26.904l8.407-10.17c2.62-2.12 72.277-5.022 78.03-5.022 5.754 0 75.411 2.902 78.031 5.022l8.407 10.17c1.934 2.607-3.319 97.382-3.319 97.382s-.938 6.745-3.361 9.013c-3.09 2.89-12.208 4.248-12.208 4.248l-67.478 10.155c-.025 0-.047-.005-.071-.007-.024.002-.047.007-.072.007l-67.478-10.155s-9.118-1.358-12.207-4.248c-2.424-2.268-3.362-9.013-3.362-9.013s-.491-8.989-1.103-21.045l-.006-.002-9.688-5.128-4.316-41.715s1.503-1.3 6.768-2.207c-.148-5.8-.417-17.637-.515-30.937-.134-18.155.044-38.499 1.345-48.371a3.53 3.53 0 0 1 1.33-6.798zm89.304 70.254c-.277.051-.588.043-.968.07l-56.391 4.09-6.51 6.96 3.664 67.462 59.237 8.812c.622.092.641.144.968.144.327 0 .38-.057.968-.144l59.238-8.812 3.663-67.462-6.51-6.96-56.391-4.09c-.343-.024-.72-.088-.968-.07zm32.607 19.575s4.74 1.015 6.393 2.895c2.656 3.02 4.417 12.056 4.417 12.056s-1.75 9.018-4.398 12.036c-1.657 1.889-6.412 2.914-6.412 2.914s-5.513-1.64-7.355-3.994c-2.228-2.847-3.456-10.956-3.456-10.956s1.83-9.139 4.536-12.175c1.628-1.826 6.275-2.776 6.275-2.776zm-65.307 1.08s4.74 1.015 6.394 2.895c2.655 3.02 4.417 12.055 4.417 12.055s-1.752 9.02-4.4 12.037c-1.656 1.888-6.411 2.913-6.411 2.913s-5.513-1.64-7.354-3.993c-2.228-2.847-3.457-10.957-3.457-10.957s1.83-9.138 4.536-12.174c1.629-1.826 6.275-2.776 6.275-2.776z"
                            filter="url(#a)"
                            transform="translate(-49.23 -88.509)"
                        />
                    </svg>
                    <h1 className="mt-8 mb-4 text-5xl font-bold">Z3R0</h1>
                    <p className="text-4xl font-medium">An open-source discord bot</p>
                    <div className="mt-8 gap-3 flex flex-col sm:flex-row">
                        <a
                            className="text-lg font-bold py-3 px-4 sm:px-6 transition-colors bg-sky-500 hover:bg-opacity-80 rounded-full"
                            href="#">
                            Add to Server
                        </a>
                        <a
                            className="text-lg font-bold py-3 px-4 sm:px-6 transition-colors hover:bg-gray-200/[0.75] dark:hover:bg-gray-50/[0.02] rounded-full shadow-border-like dark:shadow-border-like-dark-btn"
                            href="#">
                            See Features
                        </a>
                    </div>
                </div>
            </LandingLayout>
        </>
    )
}
