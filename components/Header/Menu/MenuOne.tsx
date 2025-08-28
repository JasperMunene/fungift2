'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { usePathname } from 'next/navigation';
import Product from '@/components/Product/Product';
import productData from '@/data/Product.json'
import useLoginPopup from '@/store/useLoginPopup';
import useMenuMobile from '@/store/useMenuMobile';
import { useModalCartContext } from '@/context/ModalCartContext';
import { useModalWishlistContext } from '@/context/ModalWishlistContext';
import { useModalSearchContext } from '@/context/ModalSearchContext';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

interface Props {
    props: string;
}

const MenuOne: React.FC<Props> = ({ props }) => {
    const router = useRouter()
    const pathname = usePathname()
    let [selectedType, setSelectedType] = useState<string | null>()
    const { openLoginPopup, handleLoginPopup } = useLoginPopup()
    const { openMenuMobile, handleMenuMobile } = useMenuMobile()
    const [openSubNavMobile, setOpenSubNavMobile] = useState<number | null>(null)
    const { openModalCart } = useModalCartContext()
    const { cartState } = useCart()
    const { openModalWishlist } = useModalWishlistContext()
    const { openModalSearch } = useModalSearchContext()

    const handleOpenSubNavMobile = (index: number) => {
        setOpenSubNavMobile(openSubNavMobile === index ? null : index)
    }

    const [fixedHeader, setFixedHeader] = useState(false)
    const [lastScrollPosition, setLastScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setFixedHeader(scrollPosition > 0 && scrollPosition < lastScrollPosition);
            setLastScrollPosition(scrollPosition);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollPosition]);

    const handleGenderClick = (gender: string) => {
        router.push(`/shop/breadcrumb1?gender=${gender}`);
    };

    const handleCategoryClick = (category: string) => {
        router.push(`/shop/breadcrumb1?category=${category}`);
    };

    const handleTypeClick = (type: string) => {
        setSelectedType(type)
        router.push(`/shop/breadcrumb1?type=${type}`);
    };

    return (
        <>
            <div className={`header-menu style-one ${fixedHeader ? 'fixed shadow-2xl' : 'absolute'} top-0 left-0 right-0 w-full md:h-[80px] h-[64px] ${props} z-50 transition-all duration-500 ease-in-out`}>
                {/* Glass morphism background with gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/98 to-white/95 backdrop-blur-xl border-b border-white/20 rounded-b-3xl"></div>

                {/* Animated decorative elements */}
                <div className="absolute inset-0 overflow-hidden rounded-b-3xl">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute -top-2 -right-8 w-16 h-16 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
                </div>

                <div className="container mx-auto h-full relative z-10">
                    <div className="header-main flex justify-between items-center h-full px-4">
                        {/* Mobile Menu Button */}
                        <div className="menu-mobile-icon lg:hidden flex items-center group cursor-pointer" onClick={handleMenuMobile}>
                            <div className="p-3 rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100 group-hover:from-pink-200 group-hover:to-purple-200 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                                <Icon.List size={24} className="text-pink-600 group-hover:text-pink-700 transition-colors" />
                            </div>
                        </div>

                        <div className="left flex items-center gap-16">
                            {/* Logo */}
                            <Link href={'/'} className='flex items-center max-lg:absolute max-lg:left-1/2 max-lg:-translate-x-1/2 group cursor-pointer'>
                                <div className="relative">
                                    <Image
                                        src='/images/logo.png'
                                        alt='Logo'
                                        width={75}
                                        height={75}
                                        className='transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-out filter drop-shadow-lg group-hover:drop-shadow-xl'
                                    />
                                    {/* Animated glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-pink-300/0 via-purple-300/30 to-cyan-300/0 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                                </div>
                            </Link>

                            {/* Main Navigation */}
                            <div className="menu-main h-full max-lg:hidden">
                                <ul className='flex items-center gap-4 h-full'>
                                    <li className='h-full flex items-center'>
                                        <Link
                                            href="/shop/gift-cards"
                                            className={`group relative px-8 py-3 rounded-2xl font-bold text-sm uppercase tracking-wide transition-all duration-300 transform hover:scale-105 hover:-rotate-1 ${
                                                pathname.includes('/shop/gift-cards')
                                                    ? 'text-pink-600 bg-gradient-to-r from-pink-100 to-purple-100 shadow-lg'
                                                    : 'text-gray-700 hover:text-pink-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50'
                                            }`}
                                        >
                                            <span className="relative z-10 flex items-center gap-2">
                                                <span className="text-lg">🎁</span> Gift Cards
                                            </span>
                                            {/* Animated background */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-pink-200/0 via-pink-200/50 to-purple-200/0 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                                            {/* Sparkle effect */}
                                            <div className="absolute top-1 right-2 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-100"></div>
                                        </Link>
                                    </li>
                                    <li className='h-full flex items-center'>
                                        <Link
                                            href="/shop/gifts"
                                            className={`group relative px-8 py-3 rounded-2xl font-bold text-sm uppercase tracking-wide transition-all duration-300 transform hover:scale-105 hover:rotate-1 ${
                                                pathname.includes('/shop/gifts')
                                                    ? 'text-blue-600 bg-gradient-to-r from-blue-100 to-cyan-100 shadow-lg'
                                                    : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50'
                                            }`}
                                        >
                                            <span className="relative z-10 flex items-center gap-2">
                                                <span className="text-lg">🎉</span> Gifts
                                            </span>
                                            {/* Animated background */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-200/0 via-blue-200/50 to-cyan-200/0 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                                            {/* Sparkle effect */}
                                            <div className="absolute top-1 right-2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-200"></div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Actions */}
                        <div className="right flex gap-4">
                            <div className="list-action flex items-center gap-3">
                                {/* Wishlist */}
                                <div className="max-md:hidden wishlist-icon group cursor-pointer" onClick={openModalWishlist}>
                                    <div className="relative p-3 rounded-2xl bg-gradient-to-br from-pink-100 to-red-100 group-hover:from-pink-200 group-hover:to-red-200 transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-xl">
                                        <Icon.Heart
                                            size={24}
                                            className="text-pink-600 group-hover:text-red-600 transition-all duration-300 group-hover:animate-pulse"
                                            weight={pathname.includes('/wishlist') ? 'fill' : 'regular'}
                                        />
                                        {/* Floating hearts animation */}
                                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce delay-100"></div>
                                    </div>
                                </div>

                                {/* Cart */}
                                <div className="cart-icon group cursor-pointer" onClick={openModalCart}>
                                    <div className="relative p-3 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-xl">
                                        <Icon.Handbag
                                            size={24}
                                            className="text-blue-600 group-hover:text-cyan-600 transition-all duration-300 group-hover:animate-bounce"
                                        />
                                        {/* Cart quantity badge */}
                                        {cartState.cartArray.length > 0 && (
                                            <span className="quantity absolute -top-2 -right-2 min-w-[24px] h-6 text-xs text-white bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center rounded-full font-bold shadow-lg animate-pulse px-1">
                                                {cartState.cartArray.length}
                                            </span>
                                        )}
                                        {/* Shopping bag animation */}
                                        <div className="absolute -top-1 -left-1 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Mobile Menu */}
            <div id="menu-mobile" className={`fixed inset-0 z-[200] transition-all duration-300 ${openMenuMobile ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                {/* Backdrop */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleMenuMobile}></div>

                {/* Menu Panel */}
                <div className={`menu-container absolute left-0 top-0 w-80 max-w-[85vw] h-full bg-gradient-to-br from-white via-pink-50/30 to-purple-50/30 backdrop-blur-xl shadow-2xl transform transition-transform duration-300 ${openMenuMobile ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="container h-full p-6">
                        <div className="menu-main h-full overflow-hidden">
                            {/* Header */}
                            <div className="heading py-4 relative flex items-center justify-center border-b border-gray-200/50">
                                <div
                                    className="close-menu-mobile-btn absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer group"
                                    onClick={handleMenuMobile}
                                >
                                    <Icon.X size={18} className="text-gray-600 group-hover:text-gray-800 transition-colors" />
                                </div>
                                <Link href={'/'} className='logo text-3xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent'>
                                    Fungift ✨
                                </Link>
                            </div>

                            {/* Search Form */}
                            <div className="form-search relative mt-6">
                                <div className="relative">
                                    <Icon.MagnifyingGlass size={20} className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400' />
                                    <input
                                        type="text"
                                        placeholder='What are you looking for?'
                                        className='h-14 rounded-2xl border-2 border-gray-200 bg-white/80 backdrop-blur-sm text-sm w-full pl-12 pr-4 focus:border-pink-400 focus:bg-white transition-all duration-300 shadow-lg focus:shadow-xl'
                                    />
                                </div>
                            </div>

                            {/* Navigation */}
                            <div className="list-nav mt-8">
                                <ul className="space-y-3">
                                    <li>
                                        <Link
                                            href={'/'}
                                            className='group flex items-center justify-between p-4 rounded-2xl bg-white/60 backdrop-blur-sm hover:bg-gradient-to-r hover:from-pink-100 hover:to-purple-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]'
                                            onClick={handleMenuMobile}
                                        >
                                            <span className='text-lg font-semibold text-gray-700 group-hover:text-pink-600 flex items-center gap-3'>
                                                🏠 Home
                                            </span>
                                            <Icon.CaretRight size={20} className="text-gray-400 group-hover:text-pink-600 transform group-hover:translate-x-1 transition-all" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={'/shop/gift-cards'}
                                            className='group flex items-center justify-between p-4 rounded-2xl bg-white/60 backdrop-blur-sm hover:bg-gradient-to-r hover:from-pink-100 hover:to-purple-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]'
                                            onClick={handleMenuMobile}
                                        >
                                            <span className='text-lg font-semibold text-gray-700 group-hover:text-pink-600 flex items-center gap-3'>
                                                🎁 Gift Cards
                                            </span>
                                            <Icon.CaretRight size={20} className="text-gray-400 group-hover:text-pink-600 transform group-hover:translate-x-1 transition-all" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={'/shop/gifts'}
                                            className='group flex items-center justify-between p-4 rounded-2xl bg-white/60 backdrop-blur-sm hover:bg-gradient-to-r hover:from-blue-100 hover:to-cyan-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]'
                                            onClick={handleMenuMobile}
                                        >
                                            <span className='text-lg font-semibold text-gray-700 group-hover:text-blue-600 flex items-center gap-3'>
                                                🎉 Gifts
                                            </span>
                                            <Icon.CaretRight size={20} className="text-gray-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Footer section with user actions */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="flex gap-3 justify-center">
                                    <button
                                        className="flex-1 p-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                        onClick={() => {
                                            handleMenuMobile();
                                            openModalWishlist();
                                        }}
                                    >
                                        💝 Wishlist
                                    </button>
                                    <button
                                        className="flex-1 p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                        onClick={() => {
                                            handleMenuMobile();
                                            openModalCart();
                                        }}
                                    >
                                        🛒 Cart ({cartState.cartArray.length})
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuOne