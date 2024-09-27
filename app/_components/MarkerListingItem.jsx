import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function MarkerListingItem({ item, closeHandler }) {
    return (
        <div className='bg-white w-[200px] shadow-xl relative z-50 rounded-md'>
            <X onClick={()=>closeHandler()} size={20} className='cursor-pointer absolute top-0 right-0 mt-3 mr-3'/>
            <div key={item.id} className='flex mt-2 flex-col gap-1 rounded-lg p-3'>
                <h2 className='font-bold text-sm pr-6 mb-1'>{item.Applicant}</h2>
                <h5 className='text-xs'>Address: {item.address}</h5>
                <h5 className='text-xs mb-2'>Type of Facility: {item.FacilityType}</h5>
                <Link href={'/view-listing/'+item.id} className='w-full'>
                    <Button size='sm' className="w-full">View Details</Button>
                </Link>
            </div>
        </div>
    )
}

export default MarkerListingItem