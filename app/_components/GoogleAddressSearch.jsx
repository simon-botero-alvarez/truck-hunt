"use client"
import { MapPin } from 'lucide-react';
import { Result } from 'postcss';
import React from 'react'
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete'

function GoogleAddressSearch({selectedAddress,setCoordinates}) {
    return (
        <div className='flex justify-center w-full'>
            <GooglePlacesAutocomplete
                selectProps={{
                    placeholder:'Search Address',
                    isClearable:true,
                    className:'w-full',
                    styles: {
                        input: (provided) => ({
                          ...provided,
                          fontSize: '14px',
                        }),
                        placeholder: (provided) => ({
                          ...provided,
                          fontSize: '14px',
                          color: 'black',
                        })
                      },
                    onChange:(place)=>{
                        console.log(place);
                        selectedAddress(place);
                        geocodeByAddress(place.label)
                        .then(result=>getLatLng(result[0]))
                        .then(({lat,lng})=>{
                            setCoordinates({lat,lng})
                        })
                    }
                }}
            />
        </div>
    )
}

export default GoogleAddressSearch