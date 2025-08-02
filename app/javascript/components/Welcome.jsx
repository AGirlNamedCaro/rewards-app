import React from 'react'
import Logo from "./shared/Logo";
import Image from "./shared/Image";
import PatternBackground from "./PatternBackground";

const Welcome = () => {
    return (
        <div className="bg-white">
            <main>
                <header className="absolute inset-x-0 top-0 z-50">
                    <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                        <div className="flex lg:flex-1">
                            <Logo/>
                        </div>
                    </div>
                </header>
                <div className="relative isolate">
                    <PatternBackground/>
                    <div className="overflow-hidden">
                        <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                            <div
                                className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                                    <h1 className="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                                        Rewards made <span className="bg-yellow-200 px-1 rounded">effortless</span>
                                    </h1>
                                    <div className="mt-10 flex items-center gap-x-6">
                                        <a
                                            href="/users/sign_in"
                                            className="primary-button"
                                        >
                                            Log in
                                        </a>
                                        <a href="/users/sign_up"
                                           className="text-lg font-semibold text-blue-800 hover:scale-110 duration-300 ease-in">
                                            Sign up <span aria-hidden="true">→</span>
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                                    <div
                                        className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                        <Image src={'/Hamburger.jpg'} alt="hamburger image"/>
                                    </div>
                                    <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                        <Image src="/Happy.jpg" alt="Smiley face"/>
                                        <Image src="/Chatting.jpg" alt="People chatting"/>
                                    </div>
                                    <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                        <Image src="/Ipad.jpg" alt="iPad image"/>
                                        <div className="relative">
                                            <Image src="/Tacos.jpg" alt="tacos image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Welcome