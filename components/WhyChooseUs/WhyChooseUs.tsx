import React from 'react'
import Image from 'next/image'
import * as Icon from "@phosphor-icons/react/dist/ssr";

const WhyChooseUs = () => {
    return (
        <>
            <div className="why-choose-us md:pt-20 pt-10 mb-20">
                <div className="container px-4 mx-auto">
                    <div className="content flex max-lg:flex-col items-center justify-between gap-12">
                        <div className="left lg:w-1/2 w-full">
                            <div className="bg-img overflow-hidden rounded-2xl shadow-lg transform transition-transform duration-500 hover:scale-[1.02]">
                                <Image
                                    src={'/images/gifting-3.jpg'}
                                    width={800}
                                    height={800}
                                    alt='Quality gift selection for children'
                                    className='w-full h-full object-cover'
                                />
                            </div>
                        </div>
                        <div className="right lg:w-1/2 w-full">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Why Families Choose Us</h2>
                            <p className='text-lg text-gray-600 mb-8 leading-relaxed'>
                                We believe every gift should spark joy and create lasting memories. From carefully curated collections to thoughtful presentation, we make gift-giving a delightful experience for both children and parents.
                            </p>
                            <div className="list-feature space-y-6">
                                <div className="item flex items-start p-5 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500">
                                    <Icon.Star size={24} weight="fill" className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-1">Our Promise</h3>
                                        <p className="text-gray-600">Thoughtfully curated gifts for every occasion and age group</p>
                                    </div>
                                </div>
                                <div className="item flex items-start p-5 rounded-xl bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500">
                                    <Icon.Palette size={24} weight="fill" className="text-green-500 mt-1 mr-4 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-1">Our Craft</h3>
                                        <p className="text-gray-600">Attention to detail in every package with child-safe materials</p>
                                    </div>
                                </div>
                                <div className="item flex items-start p-5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500">
                                    <Icon.Heart size={24} weight="fill" className="text-amber-500 mt-1 mr-4 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-1">For Your Family</h3>
                                        <p className="text-gray-600">Gifts that are both fun and developmentally appropriate</p>
                                    </div>
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