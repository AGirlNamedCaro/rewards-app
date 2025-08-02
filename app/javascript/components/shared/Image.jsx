import React from 'react'

export default function Image({src, alt}) {
    return (
        <div className="relative">
            <img
                alt={alt}
                src={src}
                className="aspect-square w-full rounded-xl object-cover shadow-lg hover:scale-110 duration-300 ease-in cursor-pointer"
            />
        </div>
    )
}