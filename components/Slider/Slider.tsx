'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Slider = () => {
    return (
        <>
            <div className="slider-block style-one bg-gradient-to-br from-surface via-white to-surface xl:py-[100px] px-4 md:py-20 py-14 w-full playful-shadow">
                <div className="slider-main h-full w-full flex items-center justify-center gap-10 animate-pulse">
                    <div className="sub-img w-[440px] max-md:w-1/2 rounded-b-full overflow-hidden max-md:hidden fun-hover rainbow-border">
                        <Image
                            src={'/images/gifting-2.jpg'}
                            width={2000}
                            height={1936}
                            alt='gift-image-1'
                            priority={true}
                            className='w-full'
                        />
                    </div>
                    <div className="text-content w-fit text-center">
                        <div className="text-sub-display text-center text-bubble-pink font-bold animate-bounce">
                            Up to 50% Off!
                        </div>
                        <div className="text-display text-center md:mt-4 mt-2 bg-gradient-to-r from-bubble-pink via-ocean-blue to-sunshine-yellow bg-clip-text text-transparent animate-pulse">
                            Gifts Made Easy
                        </div>
                        <div className="text-center mt-6">
                            <Link href='/shop/gifts' className="button-main md:mt-8 mt-3 fun-hover transform hover:scale-110 hover:rotate-2">
                                Shop Gifts
                            </Link>
                        </div>
                    </div>
                    <div className="sub-img w-[440px] max-md:w-1/2 rounded-t-full overflow-hidden fun-hover rainbow-border">
                        <Image
                            src={'/images/gifting-1.jpg'}
                            width={2000}
                            height={1936}
                            alt='gift-image-2'
                            priority={true}
                            className='w-full'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider
