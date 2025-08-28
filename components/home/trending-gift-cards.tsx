'use client'

import React, { useState, useEffect } from 'react'
import GiftCard from '../Product/GiftCard'
import { ProductType } from '@/type/ProductType'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { getCollectionProducts, transformShopifyProduct } from '@/lib/shopify-collections';
import 'swiper/css/bundle';
import * as Icon from "@phosphor-icons/react/dist/ssr";

interface Props {
    collectionHandle?: string;
    start?: number;
    limit?: number;
    category?: string;
}

const TrendingGiftCards: React.FC<Props> = ({
                                                collectionHandle = 'gift-cards',
                                                start = 0,
                                                limit = 8,
                                                category
                                            }) => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGiftCards = async () => {
            try {
                setLoading(true);
                const shopifyProducts = await getCollectionProducts(collectionHandle, limit * 2);
                const transformedProducts = shopifyProducts.map(transformShopifyProduct);
                setProducts(transformedProducts);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch gift cards');
                console.error('Error fetching gift cards:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchGiftCards();
    }, [collectionHandle, limit]);

    // Filter products by category if specified
    const filteredProducts = category
        ? products.filter(product => product.category === category)
        : products;

    const displayProducts = filteredProducts.slice(start, limit);

    if (loading) {
        return (
            <div className="trending-gift-cards py-16 bg-white">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-12">
                        <div className="h-10 bg-gray-200 rounded-lg w-64 mx-auto mb-4 animate-pulse"></div>
                        <div className="h-6 bg-gray-200 rounded w-48 mx-auto animate-pulse"></div>
                    </div>
                    <div className="flex justify-center">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="bg-gray-50 rounded-xl shadow-sm p-4 animate-pulse">
                                    <div className="aspect-[4/3] bg-gray-200 rounded-lg mb-4"></div>
                                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="trending-gift-cards py-16 bg-white">
                <div className="container px-4 mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Trending Gift Cards</h2>
                    <div className="flex justify-center items-center h-48 bg-gray-50 rounded-xl shadow-sm">
                        <div className="text-red-500 text-center">
                            <Icon.WarningCircle size={48} className="mx-auto mb-2" />
                            <p>Error loading gift cards: {error}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (displayProducts.length === 0) {
        return (
            <div className="trending-gift-cards py-16 bg-white">
                <div className="container px-4 mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Trending Gift Cards</h2>
                    <div className="flex justify-center items-center h-48 bg-gray-50 rounded-xl shadow-sm">
                        <div className="text-gray-500 text-center">
                            <Icon.Gift size={48} className="mx-auto mb-2" />
                            <p>No gift cards found in this collection</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="trending-gift-cards py-16 bg-white">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Trending Gift Cards</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Perfect presents for every occasion. Let them choose their favorite gift!
                    </p>
                </div>

                <div className="relative">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={2}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        loop={displayProducts.length > 4}
                        modules={[Navigation, Autoplay]}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        className="pb-12"
                    >
                        {displayProducts.map((product, index) => (
                            <SwiperSlide key={product.id || index}>
                                <GiftCard data={product} type='grid' style='style-1' />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom navigation buttons */}
                    <div className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
                        <Icon.CaretLeft size={20} className="text-gray-700" />
                    </div>
                    <div className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
                        <Icon.CaretRight size={20} className="text-gray-700" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingGiftCards;