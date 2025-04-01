'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-[#4B0082] text-white p-4 shadow-lg">
      <nav aria-label="Global" className="mx-auto flex max-w-full items-center justify-between p-1 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6 text-white" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a
            href="#"
            className="relative text-sm/6 font-semibold text-white 
              before:absolute before:inset-x-0 before:-bottom-1 before:h-0.5 
              before:bg-indigo-500 before:scale-x-0 before:transition-transform 
              before:duration-300 hover:before:scale-x-100 hover:text-indigo-500"
          >
            Features
          </a>
          <a
            href="#"
            className="relative text-sm/6 font-semibold text-white 
              before:absolute before:inset-x-0 before:-bottom-1 before:h-0.5 
              before:bg-green-500 before:scale-x-0 before:transition-transform 
              before:duration-300 hover:before:scale-x-100 hover:text-green-500"
          >
            Marketplace
          </a>
          <a
            href="#"
            className="relative text-sm/6 font-semibold text-white 
              before:absolute before:inset-x-0 before:-bottom-1 before:h-0.5 
              before:bg-red-500 before:scale-x-0 before:transition-transform 
              before:duration-300 hover:before:scale-x-100 hover:text-red-500"
          >
            Company
          </a>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:from-indigo-500 hover:to-purple-500 transition-all duration-300">
            Log in 
            <span aria-hidden="true" className="text-lg">→</span>
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#4B0082] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 "
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6  !text-white" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 
                             font-semibold text-white hover:bg-gradient-to-r 
                             hover:from-yellow-400 hover:to-red-500 transition-all"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 
                             font-semibold text-white hover:bg-gradient-to-r 
                             hover:from-green-400 hover:to-blue-500 transition-all"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 
                             font-semibold text-white hover:bg-gradient-to-r 
                             hover:from-red-400 hover:to-pink-500 transition-all"
                >
                  Company
                </a>
              </div>

              {/* Mobile 'Log in' Button */}
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 
                             font-semibold text-white bg-gradient-to-r 
                             from-purple-500 to-indigo-500 shadow-md 
                             hover:from-indigo-500 hover:to-purple-500 transition-all"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
