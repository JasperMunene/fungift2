'use client'

import React, { useState, useEffect } from 'react'
import Product from '../Product/Product'
import { ProductType } from '@/type/ProductType'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { getCollectionProducts, transformShopifyProduct, getCollectionDetails } from '@/lib/shopify-collections';
import 'swiper/css/bundle';
import * as Icon from "@phosphor-icons/react/dist/ssr";

interface Props {
    collectionHandle?: string;
    start?: number;
    limit?: number;
    category?: string;
}

const BestSeller: React.FC<Props> = ({
                                         collectionHandle = 'best-sellers',
                                         start = 0,
                                         limit = 8,
                                         category
                                     }) => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [collectionTitle, setCollectionTitle] = useState<string>('Best Sellers');
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBestSellers = async () => {
            try {
                setLoading(true);
                setError(null);

                const collectionDetails = await getCollectionDetails(collectionHandle);
                if (collectionDetails) {
                    setCollectionTitle(collectionDetails.title || 'Best Sellers');
                }

                const fetchLimit = category ? limit * 3 : limit;
                const shopifyProducts = await getCollectionProducts(collectionHandle, fetchLimit);

                const transformedProducts = shopifyProducts.map(transformShopifyProduct);

                const filteredProducts = category
                    ? transformedProducts.filter(product => product.category === category)
                    : transformedProducts;

                const finalProducts = filteredProducts.slice(start, start + limit);

                setProducts(finalProducts);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch products');
                console.error('Error fetching best sellers:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchBestSellers();
    }, [collectionHandle, limit, start, category]);

    if (loading) {
        return (
            <div className="best-sellers-section py-16 bg-gray-50">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-12">
                        <div className="h-10 bg-gray-200 rounded-lg w-64 mx-auto mb-4 animate-pulse"></div>
                        <div className="h-6 bg-gray-200 rounded w-48 mx-auto animate-pulse"></div>
                    </div>
                    <div className="flex justify-center">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="bg-white rounded-xl shadow-sm p-4 animate-pulse">
                                    <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
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
            <div className="best-sellers-section py-16 bg-gray-50">
                <div className="container px-4 mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">{collectionTitle}</h2>
                    <div className="flex justify-center items-center h-48 bg-white rounded-xl shadow-sm">
                        <div className="text-red-500 text-center">
                            <Icon.WarningCircle size={48} className="mx-auto mb-2" />
                            <p>Error loading products: {error}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (products.length === 0) {
        return (
            <div className="best-sellers-section py-16 bg-gray-50">
                <div className="container px-4 mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">{collectionTitle}</h2>
                    <div className="flex justify-center items-center h-48 bg-white rounded-xl shadow-sm">
                        <div className="text-gray-500 text-center">
                            <Icon.Package size={48} className="mx-auto mb-2" />
                            <p>
                                {category
                                    ? `No ${category} products found in this collection`
                                    : 'No products found in this collection'
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="best-sellers-section py-16 bg-gray-50">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{collectionTitle}</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover our most loved products that bring joy to kids and peace of mind to parents.
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
                        loop={products.length > 4}
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
                        {products.map((product, index) => (
                            <SwiperSlide key={product.id || index}>
                                <Product data={product} type='grid' style='style-1' />
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

export default BestSeller;