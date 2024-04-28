import React from 'react'
import { Card } from './Card'
export default function CardFlex() {
    return (
        <>
        <div className='text-center font-sans text-3xl font-bold pb-7'>
            <h1>People of Japan</h1>
        </div>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-3 px-3 pb-[4rem]'>

        {Array.from({ length: 4 }).map((_el, index) => (
            <div key={index} className='flex flex-1 items-center justify-center'>
                <Card/>
            </div>
        ))}
        </div>
        </>
    )
}
