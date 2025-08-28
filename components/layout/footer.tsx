import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import * as Icon from "@phosphor-icons/react/dist/ssr";

const Footer = () => {
  return (
      <>
        <div id="footer" className='footer bg-gray-50 pt-16 pb-8'>
          <div className="container px-4 mx-auto">
            <div className="footer-main bg-white rounded-2xl shadow-sm p-8 mb-8">
              <div className="content-footer flex flex-col lg:flex-row justify-between items-center gap-8">
                {/* Company Info */}
                <div className="company-info text-center lg:text-left">
                  <Link href={'/'} className="logo inline-block mb-4">
                    <span className="text-2xl font-bold text-primary">FunGift</span>
                  </Link>
                  <div className='flex flex-col sm:flex-row gap-6 mt-4 justify-center lg:justify-start'>
                    <div className="flex flex-col items-center sm:items-start">
                      <div className="flex items-center mb-2">
                        <Icon.Envelope size={18} className="text-primary mr-2" />
                        <span className="font-medium text-gray-700">Email:</span>
                      </div>
                      <span className='text-gray-600'>hi.fungift@gmail.com</span>
                    </div>
                    <div className="flex flex-col items-center sm:items-start">
                      <div className="flex items-center mb-2">
                        <Icon.Phone size={18} className="text-primary mr-2" />
                        <span className="font-medium text-gray-700">Phone:</span>
                      </div>
                      <span className='text-gray-600'>254-733-345-686</span>
                    </div>
                    <div className="flex flex-col items-center sm:items-start">
                      <div className="flex items-center mb-2">
                        <Icon.MapPin size={18} className="text-primary mr-2" />
                        <span className="font-medium text-gray-700">Address:</span>
                      </div>
                      <span className='text-gray-600'>Nairobi, Kenya</span>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="social-section">
                  <div className="text-center mb-4">
                    <h3 className="font-semibold text-gray-800">Follow Our Journey</h3>
                  </div>
                  <div className="list-social flex items-center justify-center gap-4">
                    <Link href={'https://www.facebook.com/'} target='_blank' className="p-3 rounded-xl bg-gray-100 hover:bg-blue-100 transition-colors duration-200">
                      <Icon.FacebookLogo size={20} className="text-gray-600 hover:text-blue-600" />
                    </Link>
                    <Link href={'https://www.instagram.com/'} target='_blank' className="p-3 rounded-xl bg-gray-100 hover:bg-pink-100 transition-colors duration-200">
                      <Icon.InstagramLogo size={20} className="text-gray-600 hover:text-pink-600" />
                    </Link>
                    <Link href={'https://www.twitter.com/'} target='_blank' className="p-3 rounded-xl bg-gray-100 hover:bg-blue-100 transition-colors duration-200">
                      <Icon.TwitterLogo size={20} className="text-gray-600 hover:text-blue-400" />
                    </Link>
                    <Link href={'https://www.youtube.com/'} target='_blank' className="p-3 rounded-xl bg-gray-100 hover:bg-red-100 transition-colors duration-200">
                      <Icon.YoutubeLogo size={20} className="text-gray-600 hover:text-red-600" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom pt-8 border-t border-gray-200">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="copyright text-gray-600 text-sm">
                  © {new Date().getFullYear()} FunGift. All rights reserved.
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <Link href="/privacy" className="hover:text-primary transition-colors duration-200">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="hover:text-primary transition-colors duration-200">
                    Terms of Service
                  </Link>
                  <Link href="/contact" className="hover:text-primary transition-colors duration-200">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer