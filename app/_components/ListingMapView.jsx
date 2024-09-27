"use client"
import React, { useEffect, useState } from 'react'
import Listing from './Listing'
import { supabase } from '@/utils/supabase/client';
import GoogleMapSection from './GoogleMapSection';

function ListingMapView() {

    const [listing, setListing] = useState([]);
    const [searchedAddress, setSearchedAddress] = useState();

    const [facilityType, setFacilityType] = useState();
    const [statusType, setStatusType] = useState();

    const [coordinates, setCoordinates] = useState();


    useEffect(() => {
        getLatestListing();
    }, [])

    const getLatestListing = async () => {
        const { data, error } = await supabase
            .from('listing')
            .select(`*`)
            .order('id', { ascending: true })

        if (data) {
            console.log(data);
            setListing(data);
        }
        if (error) {
            toast('Server Side Error')
        }
    }

    const handleSearchClick = async () => {
        console.log(searchedAddress)
        console.log("Facility Type:", facilityType); // Verifica el valor de facilityType

        const searchTerm = searchedAddress?.value?.structured_formatting?.main_text

        let query = supabase
            .from('listing')
            .select('*')
            .order('id', { ascending: false })

        if (searchTerm) {
            query = query.like('address', `%${searchTerm}%`);
        }

        if (facilityType) {
            console.log("Applying FacilityType filter:", facilityType);
            query = query.eq('FacilityType', facilityType);
        }

        if (statusType) {
            console.log("Applying StatusType filter:", facilityType);
            query = query.eq('status', statusType);
        }

        const { data, error } = await query;

        if (error) {
            console.error('Supabase query error:', error.message);
        } else {
            console.log('Query successful:', data);
            setListing(data);
        }
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='order-2 md:order-1'>
                <Listing
                    listing={listing}
                    handleSearchClick={handleSearchClick}
                    searchedAddress={(v) => setSearchedAddress(v)}
                    setFacilityType={setFacilityType}
                    setStatusType={setStatusType}
                    setCoordinates={setCoordinates}
                />
            </div>
            <div className='order-1 md:order-2 relative'>
                <div className='relative w-full h-[300px] md:fixed md:w-[44%] md:h-full'>
                    <GoogleMapSection
                        listing={listing}
                        coordinates={coordinates}

                    />
                </div>
            </div>
        </div>
    )
}

export default ListingMapView