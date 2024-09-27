"use client"
import GoogleMapSection from '@/app/_components/GoogleMapSection';
import { Button } from '@/components/ui/button';
import { supabase } from '@/utils/supabase/client'
import { Clock10, Diamond, MapPin, Share2, ShoppingBag, Square, SquareActivity, SquareAsterisk, SquareCheckBig, SquareMousePointer, SquareParking } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';

function ViewListing({ params }) {

    const [listingDetail, setListingDetail] = useState(null);

    useEffect(() => {
        GetListingDetail();
    }, [])

    const GetListingDetail = async () => {
        const { data, error } = await supabase
            .from('listing')
            .select('*')
            .eq('id', params.id)
        if (data) {
            console.log(data);
            setListingDetail(data[0])
        }
        if (error) {
            toast('Server side error')
        }
    }

    return listingDetail && (

        <div className='px-10 py-4'>

            <div className='flex justify-between items-center mb-1'>
                <h2 className='text-lg font-bold'>{listingDetail.Applicant}</h2>
                <Button size="sm" className="flex gap-2"><Share2 size={18} />Share</Button>
            </div>

            <h5 className='flex gap-1 text-sm mb-8'>
                <MapPin size={16} />
                {listingDetail?.address}
                {listingDetail?.LocationDescription && ` - ${listingDetail.LocationDescription}`}
                {listingDetail?.Location && ` - ${listingDetail.Location}`}
            </h5>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8">

                <div>
                    <GoogleMapSection
                        coordinates={listingDetail.coordinates}
                        listing={[listingDetail]}
                    />
                </div>

                <div>
                    <h2 className='text-lg font-bold mb-3'>Get a taste of the best food trucks in town!</h2>
                    <p className='text-sm mb-12'>{listingDetail?.FoodItems}</p>

                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-12 justify-between mb-6'>

                        <div>
                            <h6 className='flex gap-1 items-center text-sm mb-2'>
                                <SquareMousePointer size={20} /> Location ID
                            </h6>
                            <span className='text-xl font-bold'>{listingDetail?.locationid}</span>
                        </div>

                        <div>
                            <h6 className='flex gap-1 items-center text-sm mb-2'>
                                <ShoppingBag size={20} /> Facility Type
                            </h6>
                            <span className='text-xl font-bold'>{listingDetail?.FacilityType}</span>
                        </div>

                        <div>
                            <h6 className='flex gap-1 items-center text-sm mb-2'>
                                <Diamond size={20} /> CNN
                            </h6>
                            <span className='text-xl font-bold'>{listingDetail?.cnn}</span>
                        </div>

                        <div>
                            <h6 className='flex gap-1 items-center text-sm mb-2'>
                                <SquareAsterisk size={20} /> BlockLot
                            </h6>
                            <span className='text-xl font-bold'>{listingDetail?.blocklot}</span>
                        </div>

                        <div>
                            <h6 className='flex gap-1 items-center text-sm mb-2'>
                                <Square size={20} /> Block
                            </h6>
                            <span className='text-xl font-bold'>{listingDetail?.block}</span>
                        </div>

                        <div>
                            <h6 className='flex gap-1 items-center text-sm mb-2'>
                                <SquareParking size={20} /> Lot
                            </h6>
                            <span className='text-xl font-bold'>{listingDetail?.lot}</span>
                        </div>

                        <div>
                            <h6 className='flex gap-1 items-center text-sm mb-2'>
                                <SquareCheckBig size={20} /> Permit
                            </h6>
                            <span className='text-xl font-bold'>{listingDetail?.permit}</span>
                        </div>

                        <div>
                            <h6 className='flex gap-1 items-center text-sm mb-2'>
                                <SquareActivity size={20} /> Status
                            </h6>
                            <span className='text-xl font-bold'>{listingDetail?.status}</span>
                        </div>

                        <div>
                            <h6 className='flex gap-1 items-center text-sm mb-2'>
                                <Clock10 size={20} /> Day Hours
                            </h6>
                            <span className='text-xl font-bold'>{listingDetail?.dayhours}</span>
                        </div>

                    </div>

                    <hr className='mb-6'></hr>

                    {listingDetail?.schedule && (
                        <h6 className='text-sm mb-4'>
                            Schedule: <span className='text-primary'><Link href={'listingDetail?.Schedule'} target="_blank">Link</Link></span>
                        </h6>
                    )}

                    <h6 className='text-sm mb-4'>ID: {listingDetail?.id}</h6>

                    <h6 className='text-sm mb-4'>Date Permit Approved by DPW: {listingDetail?.Approved}</h6>

                    <h6 className='text-sm mb-4'>Date Permit Application Received: {listingDetail?.Received}</h6>

                    <h6 className='text-sm mb-4'>Date Permit Expires: {listingDetail?.ExpirationDate}</h6>

                    <Link href={'/edit-listing/'+listingDetail.id}>
                        <Button size="sm" className="px-12">Edit</Button>
                    </Link>

                </div>

            </div>            
        </div>
    )
}

export default ViewListing