'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { sidebarLinks } from '@/constants/index'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const Sidebar = ({ user } : SidebarProps) => {

    const pathNameUrl = usePathname()

  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link 
                href={`/`}
                className='mb-12 cursor-pointer flex items-center gap-2'
            >
                <Image 
                    src={`/icons/logo.svg`}
                    alt='Steve Banking'
                    width={34}
                    height={34}
                    className='size-[24px] max-xl:size-14'
                />
                <h1 className='sidebar-logo'>Steve</h1>
            </Link>

            {
                sidebarLinks.map((item) => {

                    const isActivePath = item.route === pathNameUrl || pathNameUrl.startsWith(item.route)

                    return (
                        <Link 
                        href={item.route}
                        key={item.label}
                        className={cn('sidebar-link', { 'bg-bank-gradient' : isActivePath })}
                    >
                        <div className='relative size-6'>
                            <Image
                                src={item.imgURL}
                                alt={item.label}
                                fill
                                className={cn({'brightness-[3] invert-0' : isActivePath})}
                            />
                            <p className={cn('sidebar-label', {'!text-white' : isActivePath })}>
                                {item.label}
                            </p>
                        </div>
                    </Link>
                    )
                })
            }
        </nav>
        FOOTER
    </section>
  )
}

export default Sidebar