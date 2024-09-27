import { MapPin, Search, ShoppingCart, Truck, TruckIcon } from 'lucide-react'
import React, { useState } from 'react'
import GoogleAddressSearch from './GoogleAddressSearch'
import { Button } from '@/components/ui/button'
import Link from 'next/link';
import FilterSection from './FilterSection';

function Listing({
    listing,
    handleSearchClick,
    searchedAddress,
    setFacilityType,
    setStatusType,
    setCoordinates
}) {
    const [address, setAddress] = useState();
    return (
        <div>

            <div className='flex gap-2 mb-3'>
                <GoogleAddressSearch
                    selectedAddress={(v) => { searchedAddress(v); setAddress(v) }}
                    setCoordinates={setCoordinates}
                />
            </div>

            <FilterSection
                setFacilityType={setFacilityType}
                setStatusType={setStatusType}
            />

            <Button className="flex gap-2 w-full mt-3"
                onClick={handleSearchClick}
            >
                <Search className='w-4 h-4' /> Click to Search or Filter</Button>

            {address && <div className='mb-6 px-1 mt-3'>
                <h6 className='text-sm'>Found <span className='text-primary'>{listing?.length}</span> results in <span className='text-primary'>{address?.label}</span></h6>
            </div>}

            <div className='grid grid-cols-1 md:grids-cols-2 gap-5 mb-10 mt-4'>
                {listing.map((item, index) => (
                    <Link href={'/view-listing/' + item.id} key={item.id}>
                        <div className='flex mt-2 flex-col gap-2 rounded-md border p-4 cursor-pointer hover:bg-accent shadow-md'>

                            <div className='flex gap-4 items-start mb-1'>
                                <div className=''>
                                    {item.FacilityType === 'Truck' ? (
                                        <div className='border p-2'>
                                            <Truck size="24" />
                                        </div>
                                    ) : item.FacilityType === 'Push Cart' && (
                                        <div className='border p-2'>
                                            <ShoppingCart size="24" />
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <h5 className='text-xs text-gray-500 leading-5'>{item.address}</h5>
                                    <h2 className='font-bold'>{item.Applicant}</h2>
                                </div>
                            </div>

                            <hr className='mb-1'></hr>

                            <p className='text-sm leading-6 mb-1'>{item.FoodItems}</p>

                            {item.dayshours && <p className='text-sm'>
                                <span className='font-bold'>Opening Hours:</span> {item.dayshours}
                            </p>}

                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Listing