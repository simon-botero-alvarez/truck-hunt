"use client"
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {
    const path = usePathname();

    useEffect(() => {
        console.log(path)
    }, [])
    return (
        <div className="p-6 px-10 flex justify-between items-center shadow-sm fixed top-0 w-full z-10 bg-white">
            <div className="flex gap-12 items-center">
                <Link href={'/'} className='flex gap-2'>
                    <Image src={'/logo-truck-hunt.svg'} width={224} height={24} alt={'Truck Hunt Logo'} />
                </Link>
                <ul className="hidden md:flex gap-10">
                    <Link href={'/'}>
                        <li className={`'hover:text-primary font-medium text-sm cursor-pointer' ${path == '/' && 'text-primary'}`}>Trunk & Push Cart Listing</li>
                    </Link>
                </ul>
            </div>
            <div className="flex gap-2">
                <Link href={'/add-new-listing'}>
                    <Button className="flex gap-2"><Plus className="h-5 w-5"></Plus>Add Food Truck</Button>
                </Link>
            </div>
        </div>
    )
}

export default Header