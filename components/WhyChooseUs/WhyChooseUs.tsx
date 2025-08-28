import React from 'react'
import Image from 'next/image'

const WhyChooseUs = () => {
    return (
        <>
            <div className="why-choose-us md:pt-20 pt-10 mb-20 bg-gradient-to-br from-surface-pink via-white to-surface-blue rounded-3xl mx-4 playful-shadow">
                <div className="container px-8 py-12">
                    <div className="content flex max-lg:flex-col items-center justify-between gap-y-8">
                        <div className="left lg:w-1/2 sm:w-2/3 w-full lg:pr-4 fun-hover">
                            <div className="bg-img">
                                <Image
                                    src={'/images/gifting-3.jpg'}
                                    width={2000}
                                    height={2000}
                                    alt='gift-display'
                                    className='w-full rounded-3xl rainbow-border transform hover:scale-105 transition-all duration-500'
                                />
                            </div>
                        </div>
                        <div className="right lg:w-1/2 lg:pl-16 animate-fade-in">
                            <div className="heading3 text-bubble-pink mb-4 animate-bounce">Why Choose Us for Your Gifting Moments? 🎁</div>
                            <div className='text-secondary2 mt-5 text-lg leading-relaxed font-medium'>
                                We believe every gift should tell a story. From curated collections to meaningful touches, we make it easy to give joy, love, and unforgettable memories.
                            </div>
                            <div className="list-feature mt-8 pt-8 border-t-4 border-gradient-to-r from-bubble-pink to-ocean-blue rounded-t-2xl bg-gradient-to-r from-surface-pink to-surface-blue p-6 rounded-2xl">
                                <div className="item flex items-center justify-between pb-4 border-b-2 border-sunshine-yellow/30 fun-hover">
                                    <div className="body1 font-bold uppercase text-bubble-pink flex items-center gap-2">✨ Our Promise:</div>
                                    <div className="body1 text-black font-medium">Thoughtfully curated gifts for every occasion</div>
                                </div>
                                <div className="item flex items-center justify-between pb-4 border-b-2 border-ocean-blue/30 mt-4 fun-hover">
                                    <div className="body1 font-bold uppercase text-ocean-blue flex items-center gap-2">🎨 Our Craft:</div>
                                    <div className="body1 text-black font-medium">Attention to detail in every package</div>
                                </div>
                                <div className="item flex items-center justify-between pb-4 mt-4 fun-hover">
                                    <div className="body1 font-bold uppercase text-sunshine-yellow flex items-center gap-2">💝 For You:</div>
                                    <div className="body1 text-black font-medium">For those who want to give something truly special</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChooseUs
