import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import * as Icon from "@phosphor-icons/react/dist/ssr";

const Footer = () => {
  return (
      <>
        <div id="footer" className='footer'>
          <div className="footer-main bg-gradient-to-br from-surface via-white to-surface-pink playful-shadow">
            <div className="container">
              <div className="content-footer py-[60px] flex justify-between items-center max-lg:flex-col max-lg:gap-8 bg-gradient-to-r from-surface-pink via-white to-surface-blue rounded-3xl mx-4 p-8 rainbow-border">
                {/* Company Info */}
                <div className="company-infor max-lg:text-center">
                  <Link href={'/'} className="logo fun-hover">
                    <div className="heading4 text-bubble-pink font-bold hover:animate-bounce rainbow-text">🎁 Fungift ✨</div>
                  </Link>
                  <div className='flex gap-3 mt-3 max-lg:justify-center'>
                    <div className="flex flex-col ">
                      <span className="text-button font-bold text-ocean-blue">📧 Mail:</span>
                      <span className="text-button mt-3 font-bold text-ocean-blue">📱 Phone:</span>
                      <span className="text-button mt-3 font-bold text-ocean-blue">📍 Address:</span>
                    </div>
                    <div className="flex flex-col ">
                      <span className='text-bubble-pink font-semibold hover:animate-pulse'>hi.fungift@gmail.com</span>
                      <span className='mt-3 text-bubble-pink font-semibold hover:animate-pulse'>254-733-345-686</span>
                      <span className='mt-3 pt-px text-bubble-pink font-semibold hover:animate-pulse'>Nairobi, Kenya 🇰🇪</span>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="social-section max-lg:order-first">
                  <div className="text-button-uppercase pb-3 text-center font-bold text-bubble-pink animate-bounce">🌟 Follow Us! 🌟</div>
                  <div className="list-social flex items-center gap-6 bg-gradient-to-r from-surface via-white to-surface rounded-full p-4 playful-shadow">
                    <Link href={'https://www.facebook.com/'} target='_blank'>
                      <div className="icon-facebook text-2xl text-bubble-pink hover:text-ocean-blue hover:animate-bounce transition-all duration-300 fun-hover"></div>
                    </Link>
                    <Link href={'https://www.instagram.com/'} target='_blank'>
                      <div className="icon-instagram text-2xl text-sunset-orange hover:text-bubble-pink hover:animate-wiggle transition-all duration-300 fun-hover"></div>
                    </Link>
                    <Link href={'https://www.twitter.com/'} target='_blank'>
                      <div className="icon-twitter text-2xl text-sky-blue hover:text-ocean-blue hover:animate-pulse transition-all duration-300 fun-hover"></div>
                    </Link>
                    <Link href={'https://www.youtube.com/'} target='_blank'>
                      <div className="icon-youtube text-2xl text-candy-red hover:text-sunset-orange hover:animate-bounce transition-all duration-300 fun-hover"></div>
                    </Link>
                    <Link href={'https://www.pinterest.com/'} target='_blank'>
                      <div className="icon-pinterest text-2xl text-lavender-purple hover:text-bubble-pink hover:animate-wiggle transition-all duration-300 fun-hover"></div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Footer Bottom */}
              <div className="footer-bottom py-6 flex items-center justify-between gap-5 max-lg:justify-center max-lg:flex-col border-t-4 border-gradient-to-r from-bubble-pink to-ocean-blue rounded-t-3xl bg-gradient-to-r from-surface-pink to-surface-blue mx-4 px-8">
                <div className="left flex items-center gap-8">
                  <div className="copyright caption1 text-bubble-pink font-bold hover:animate-pulse">©2025 Fungift. All Rights Reserved. 💖</div>
                  <div className="select-block flex items-center gap-5 max-md:hidden">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer