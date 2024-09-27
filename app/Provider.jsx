"use client"
import React from 'react'
import Header from './_components/Header'
import { LoadScript } from '@react-google-maps/api'

function Provider({children}) {
  return (
    <div>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY}
        libraries={['places']}
      >
      <div className='mt-28'>
          <Header></Header>
          {children}
      </div>
      </LoadScript>
    </div>
  )
}

export default Provider