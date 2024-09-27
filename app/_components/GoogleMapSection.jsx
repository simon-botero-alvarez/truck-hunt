import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import MarkerItem from './MarkerItem';

function GoogleMapSection({coordinates, listing}) {

    const [center,setCenter] = useState ({
        lat: 37.7749295,
        lng: -122.4194155
    })

    const [map, setMap] = React.useState(null)

    useEffect (()=>{
        coordinates&&setCenter(coordinates);
        console.log(coordinates)
    },[coordinates])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return (
        <GoogleMap
            mapContainerClassName="w-full h-[300px] md:h-[470px] rounded-[15px]"
            center={center}
            zoom={12}
            onUnmount={onUnmount}
            gestureHandling="greedy"
        >
            { /* Child components, such as markers, info windows, etc. */}
            {listing.map((item,index)=>(
                <MarkerItem
                    key={index}
                    item={item}
                />
            ))}
        </GoogleMap>
    )
}

export default GoogleMapSection