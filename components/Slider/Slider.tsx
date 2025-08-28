'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Slider = () => {
    return (
        <>
            <div className="slider-block style-one bg-gradient-to-br from-blue-50 to-purple-50 xl:py-[80px] px-4 md:py-16 py-12 w-full">
                <div className="slider-main h-full w-full flex items-center justify-center gap-8 max-md:flex-col">
                    <div className="sub-img w-[400px] max-md:w-full rounded-2xl overflow-hidden max-md:hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
                        <Image
                            src={'/images/gifting-2.jpg'}
                            width={800}
                            height={800}
                            alt='Fun gift for kids'
                            priority={true}
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <div className="text-content w-fit text-center max-w-lg">
                        <div className="text-sub-heading text-center text-primary font-semibold text-lg mb-2">
                            Special Offers Just for Kids
                        </div>
                        <h1 className="text-heading text-center text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            Making Gifting Fun & Easy
                        </h1>
                        <p className="text-gray-600 mb-6">
                            Discover the perfect gifts that bring joy and smiles to children of all ages.
                        </p>
                        <div className="text-center">
                            <Link href='/shop/gifts' className="button-primary inline-block px-6 py-3 rounded-xl bg-primary text-white font-medium transition-colors duration-200 hover:bg-primary-dark">
                                Explore Gifts
                            </Link>
                        </div>
                    </div>
                    <div className="sub-img w-[400px] max-md:w-full rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
                        <Image
                            src={'/images/gifting-1.jpg'}
                            width={800}
                            height={800}
                            alt='Colorful gift box'
                            priority={true}
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider