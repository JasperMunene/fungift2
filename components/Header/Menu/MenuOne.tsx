'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { usePathname } from 'next/navigation';
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

    return (
        <>
            <div className={`header-menu style-one ${fixedHeader ? 'fixed shadow-md' : 'absolute'} top-0 left-0 right-0 w-full md:h-[80px] h-[64px] ${props} z-50 transition-all duration-300`}>
                <div className="absolute inset-0 bg-white/95 backdrop-blur-md border-b border-gray-100"></div>

                <div className="container mx-auto h-full relative z-10">
                    <div className="header-main flex justify-between items-center h-full px-4">
                        {/* Mobile Menu Button */}
                        <div className="menu-mobile-icon lg:hidden flex items-center cursor-pointer" onClick={handleMenuMobile}>
                            <div className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
                                <Icon.List size={24} className="text-primary" />
                            </div>
                        </div>

                        <div className="left flex items-center gap-10">
                            {/* Logo */}
                            <Link href={'/'} className='flex items-center max-lg:absolute max-lg:left-1/2 max-lg:-translate-x-1/2'>
                                <div className="relative">
                                    <Image
                                        src='/images/logo.png'
                                        alt='FunGift Logo'
                                        width={70}
                                        height={70}
                                        className='transition-transform duration-300 hover:scale-105'
                                    />
                                </div>
                            </Link>

                            {/* Main Navigation */}
                            <div className="menu-main h-full max-lg:hidden">
                                <ul className='flex items-center gap-2 h-full'>
                                    <li className='h-full flex items-center'>
                                        <Link
                                            href="/shop/gift-cards"
                                            className={`group relative px-6 py-2.5 rounded-xl font-medium text-sm uppercase tracking-wide transition-all duration-200 ${
                                                pathname.includes('/shop/gift-cards')
                                                    ? 'text-primary bg-gray-100'
                                                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                                            }`}
                                        >
                                            <span className="relative z-10 flex items-center gap-2">
                                                <Icon.Gift size={18} className="text-primary" />
                                                Gift Cards
                                            </span>
                                        </Link>
                                    </li>
                                    <li className='h-full flex items-center'>
                                        <Link
                                            href="/shop/gifts"
                                            className={`group relative px-6 py-2.5 rounded-xl font-medium text-sm uppercase tracking-wide transition-all duration-200 ${
                                                pathname.includes('/shop/gifts')
                                                    ? 'text-primary bg-gray-100'
                                                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                                            }`}
                                        >
                                            <span className="relative z-10 flex items-center gap-2">
                                                <Icon.Star size={18} className="text-primary" />
                                                Gifts
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Actions */}
                        <div className="right flex gap-3">
                            <div className="list-action flex items-center gap-2">
                                {/* Wishlist */}
                                <div className="max-md:hidden wishlist-icon cursor-pointer" onClick={openModalWishlist}>
                                    <div className="relative p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
                                        <Icon.Heart
                                            size={22}
                                            className="text-primary"
                                            weight={pathname.includes('/wishlist') ? 'fill' : 'regular'}
                                        />
                                    </div>
                                </div>

                                {/* Cart */}
                                <div className="cart-icon cursor-pointer" onClick={openModalCart}>
                                    <div className="relative p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
                                        <Icon.Handbag
                                            size={22}
                                            className="text-primary"
                                        />
                                        {/* Cart quantity badge */}
                                        {cartState.cartArray.length > 0 && (
                                            <span className="quantity absolute -top-1 -right-1 min-w-[18px] h-[18px] text-xs text-white bg-primary flex items-center justify-center rounded-full font-medium px-1">
                                                {cartState.cartArray.length}
                                            </span>
                                        )}
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
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={handleMenuMobile}></div>

                {/* Menu Panel */}
                <div className={`menu-container absolute left-0 top-0 w-80 max-w-[85vw] h-full bg-white shadow-xl transform transition-transform duration-300 ${openMenuMobile ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="container h-full p-5">
                        <div className="menu-main h-full overflow-hidden">
                            {/* Header */}
                            <div className="heading py-4 relative flex items-center justify-center border-b border-gray-100">
                                <div
                                    className="close-menu-mobile-btn absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
                                    onClick={handleMenuMobile}
                                >
                                    <Icon.X size={16} className="text-gray-600" />
                                </div>
                                <Link href={'/'} className='logo text-xl font-bold text-primary'>
                                    FunGift
                                </Link>
                            </div>

                            {/* Search Form */}
                            <div className="form-search relative mt-5">
                                <div className="relative">
                                    <Icon.MagnifyingGlass size={18} className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400' />
                                    <input
                                        type="text"
                                        placeholder='What are you looking for?'
                                        className='h-12 rounded-xl border border-gray-200 bg-white text-sm w-full pl-12 pr-4 focus:border-primary transition-colors duration-200'
                                    />
                                </div>
                            </div>

                            {/* Navigation */}
                            <div className="list-nav mt-6">
                                <ul className="space-y-2">
                                    <li>
                                        <Link
                                            href={'/'}
                                            className='group flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200'
                                            onClick={handleMenuMobile}
                                        >
                                            <span className='font-medium text-gray-700 flex items-center gap-3'>
                                                <Icon.House size={20} className="text-primary" />
                                                Home
                                            </span>
                                            <Icon.CaretRight size={16} className="text-gray-400" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={'/shop/gift-cards'}
                                            className='group flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200'
                                            onClick={handleMenuMobile}
                                        >
                                            <span className='font-medium text-gray-700 flex items-center gap-3'>
                                                <Icon.Gift size={20} className="text-primary" />
                                                Gift Cards
                                            </span>
                                            <Icon.CaretRight size={16} className="text-gray-400" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={'/shop/gifts'}
                                            className='group flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200'
                                            onClick={handleMenuMobile}
                                        >
                                            <span className='font-medium text-gray-700 flex items-center gap-3'>
                                                <Icon.Star size={20} className="text-primary" />
                                                Gifts
                                            </span>
                                            <Icon.CaretRight size={16} className="text-gray-400" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Footer section with user actions */}
                            <div className="absolute bottom-5 left-5 right-5">
                                <div className="flex gap-2 justify-center">
                                    <button
                                        className="flex-1 p-2.5 rounded-xl bg-primary text-white font-medium transition-colors duration-200 hover:bg-primary-dark"
                                        onClick={() => {
                                            handleMenuMobile();
                                            openModalWishlist();
                                        }}
                                    >
                                        Wishlist
                                    </button>
                                    <button
                                        className="flex-1 p-2.5 rounded-xl bg-secondary text-white font-medium transition-colors duration-200 hover:bg-secondary-dark"
                                        onClick={() => {
                                            handleMenuMobile();
                                            openModalCart();
                                        }}
                                    >
                                        Cart ({cartState.cartArray.length})
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