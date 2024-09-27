"use client"
import GoogleAddressSearch from '@/app/_components/GoogleAddressSearch'
import { Button } from '@/components/ui/button'
import { supabase } from '@/utils/supabase/client';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from "sonner"

function addNewListing() {
    const [selectedAddress, setSelectedAddress] = useState();
    const [coordinates, setCoordinates] = useState();
    const [loader, setLoader] = useState(false);
    const router = useRouter();

    const nextHandler = async () => {
        setLoader(true)

        const { data, error } = await supabase
            .from('listing')
            .insert([
                {
                    address: selectedAddress.label,
                    coordinates: coordinates,
                    createdBy: 'user'
                },
            ])
            .select();

        if (data) {
            setLoader(false);
            console.log('New Data Added', data);
            toast("New Truck Added");
            router.replace('/edit-listing/'+data[0].id);
        }
        if (error) {
            setLoader(false);
            console.log(error);
            toast("Server side error")
        }
    }
    return (
        <div className='mt-10 p-10'>
            <div className='flex flex-col gap-5 items-center justify-center max-w-3xl mx-auto'>
                <h2 className='font-bold text-2xl'>Park a New Food Truck or Push Cart</h2>
                <div className='p-10 rounded-lg border shadow-md flex flex-col gap-5 items-center w-full'>
                    <p className='text-center'>Got a hot tip? Let's park a new food truck or Push Cart on the map, just drop the address below and watch the magic happen!</p>
                    <GoogleAddressSearch
                        selectedAddress={(value) => setSelectedAddress(value)}
                        setCoordinates={(value) => setCoordinates(value)}
                    />
                    <Button
                        className='w-full'
                        disabled={!selectedAddress || !coordinates || loader}
                        onClick={nextHandler}
                    >
                        {loader ? <Loader className='animate-spin' /> : 'Next'}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default addNewListing