'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ProductType } from '@/type/ProductType'
import { GiftCardType } from "@/type/GiftCardType";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useCart } from '@/context/CartContext'
import { useModalCartContext } from '@/context/ModalCartContext'
import { useWishlist } from '@/context/WishlistContext'
import { useModalWishlistContext } from '@/context/ModalWishlistContext'
import { useModalGiftCardQuickviewContext } from '@/context/ModalGiftCardQuickviewContext'
import { useRouter } from 'next/navigation'

interface ProductProps {
    data: ProductType
    type: string
    style: string
}

const GiftCard: React.FC<ProductProps> = ({ data, type, style }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const { addToCart, updateCart, cartState } = useCart();
    const { openModalCart } = useModalCartContext()
    const { addToWishlist, removeFromWishlist, wishlistState } = useWishlist();
    const { openModalWishlist } = useModalWishlistContext()
    const { openGiftCardQuickview } = useModalGiftCardQuickviewContext()
    const router = useRouter()

    const handleAddToCart = () => {
        if (!cartState.cartArray.find(item => item.id === data.id)) {
            addToCart({ ...data });
            updateCart(data.id, data.quantityPurchase, '', '')
        } else {
            updateCart(data.id, data.quantityPurchase, '', '')
        }
        openModalCart()
    };

    const handleAddToWishlist = () => {
        if (wishlistState.wishlistArray.some(item => item.id === data.id)) {
            removeFromWishlist(data.id);
        } else {
            addToWishlist(data);
        }
        openModalWishlist();
    };

    const handleQuickviewOpen = () => {
        openGiftCardQuickview({
            ...data,
            availableAmounts: [25, 50, 100], // fallback or fetched
            isActive: true,
        } as GiftCardType)
    }

    const handleDetailProduct = (productId: string) => {
        const slugify = (text: string) =>
            text.toLowerCase().replace(/\s+/g, "-");
        router.push(`/shop/gift-cards/${slugify(data.name)}`);
    };

    const percentSale = Math.floor(100 - ((data.price / data.originPrice) * 100))
    const percentSold = data.quantity ? Math.floor(((data.sold ?? 0) / data.quantity) * 100) : 0

    return (
        <div
            className={`gift-card bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md ${isHovered ? 'ring-2 ring-primary/20' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative">
                {/* Gift card image */}
                <div
                    className="gift-card-image aspect-[4/3] overflow-hidden cursor-pointer relative"
                    onClick={() => handleDetailProduct(data.id)}
                >
                    <Image
                        src={data.thumbImage[0] || "/placeholder-giftcard.jpg"}
                        width={400}
                        height={300}
                        alt={data.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />

                    {/* Sale badge */}
                    {data.sale && (
                        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
                            {percentSale}% OFF
                        </div>
                    )}

                    {/* New badge */}
                    {data.new && (
                        <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
                            New
                        </div>
                    )}

                    {/* Gift card ribbon */}
                    <div className="absolute top-3 right-3 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
                        Gift Card
                    </div>

                    {/* Quick actions on hover */}
                    <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                        <button
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleAddToWishlist();
                            }}
                        >
                            {wishlistState.wishlistArray.some(item => item.id === data.id) ? (
                                <Icon.Heart size={16} weight="fill" className="text-red-500" />
                            ) : (
                                <Icon.Heart size={16} className="text-gray-600" />
                            )}
                        </button>

                        <button
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleQuickviewOpen();
                            }}
                        >
                            <Icon.Eye size={16} className="text-gray-600" />
                        </button>
                    </div>
                </div>

                {/* Gift card info */}
                <div className="p-4">
                    <h3
                        className="font-medium text-gray-800 mb-2 cursor-pointer line-clamp-2 hover:text-primary transition-colors"
                        onClick={() => handleDetailProduct(data.id)}
                    >
                        {data.name}
                    </h3>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-lg font-semibold text-gray-900">KES {data.price}</span>
                        {data.sale && (
                            <span className="text-sm text-gray-500 line-through">KES {data.originPrice}</span>
                        )}
                    </div>



                    {/* Add to cart button */}
                    <button
                        className="w-full py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                        onClick={handleAddToCart}
                    >
                        <Icon.ShoppingCart size={16} />
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GiftCard