import React from 'react'

export default function Logo() {
    return (
        <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
                alt=""
                src="/Thanx-Logo.svg"
                className="h-8 w-auto"
            />
        </a>
    )
}