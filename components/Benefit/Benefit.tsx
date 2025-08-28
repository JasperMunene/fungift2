import React from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr";

interface Props {
    props: string;
}

const Benefit: React.FC<Props> = ({ props }) => {
    return (
        <>
            <div className="container px-4 mx-auto">
                <div className={`benefit-block ${props}`}>
                    <div className="heading text-center max-w-2xl mx-auto">
                        <h2 className="heading3 text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Makes Us Special</h2>
                        <p className="text-lg text-gray-600">We're committed to making gift-giving a delightful experience for kids and parents alike</p>
                    </div>

                    <div className="list-benefit grid items-start lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 md:mt-16 mt-10">
                        <div className="benefit-item flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-b from-white to-blue-50/50 hover:to-blue-100/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md">
                            <div className="icon-wrapper bg-blue-100 p-4 rounded-2xl mb-5">
                                <Icon.Headset size={40} className="text-blue-600" weight="duotone" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Always Here to Help</h3>
                            <p className="text-gray-600">Our friendly team is available anytime to answer your questions.</p>
                        </div>

                        <div className="benefit-item flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-b from-white to-green-50/50 hover:to-green-100/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md">
                            <div className="icon-wrapper bg-green-100 p-4 rounded-2xl mb-5">
                                <Icon.ArrowCounterClockwise size={40} className="text-green-600" weight="duotone" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Hassle-Free Returns</h3>
                            <p className="text-gray-600">Not completely happy? Return within 14 days for a full refund.</p>
                        </div>

                        <div className="benefit-item flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-b from-white to-amber-50/50 hover:to-amber-100/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md">
                            <div className="icon-wrapper bg-amber-100 p-4 rounded-2xl mb-5">
                                <Icon.ShieldCheck size={40} className="text-amber-600" weight="duotone" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality Guaranteed</h3>
                            <p className="text-gray-600">We carefully select every product to ensure safety and durability.</p>
                        </div>

                        <div className="benefit-item flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-b from-white to-purple-50/50 hover:to-purple-100/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md">
                            <div className="icon-wrapper bg-purple-100 p-4 rounded-2xl mb-5">
                                <Icon.Truck size={40} className="text-purple-600" weight="duotone" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Worldwide Delivery</h3>
                            <p className="text-gray-600">We ship globally to bring smiles to children everywhere.</p>
                        </div>
                    </div>

                    {/* Additional decorative elements */}
                    <div className="absolute left-0 right-0 -z-10 flex justify-center mt-12">
                        <div className="w-full max-w-6xl border-t border-gray-100"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Benefit