"use client"

import React, { useEffect } from 'react'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input'
import { Formik } from 'formik'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import { supabase } from '@/utils/supabase/client'
import { toast } from 'sonner'


function EditListing() {

    const params = usePathname()

    useEffect(() => {
        console.log(params.split("/")[2])
    }, [])

    const onSubmitHandler = async (formValue) => {
        const { data, error } = await supabase
            .from('listing')
            .update(formValue)
            .eq('id', params.split("/")[2])
            .select();

        if (data) {
            console.log(data);
            toast('Listing updated and published')
        }
    }

    return (
        <div className='mt-10 p-10 max-w-7xl mx-auto'>
            <h2 className='font-bold text-2xl text-center mb-5'>Add details about the Food Truck</h2>

            <Formik
                initialValues={{
                    FacilityType: '',
                }}
                onSubmit={(values) => {
                    console.log(values);
                    onSubmitHandler(values);
                }}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit

                }) => (
                    <form onSubmit={handleSubmit}>
                        <div className='p-10 rounded-lg border shadow-md'>

                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
                                <div className='flex flex-col gap-2'>
                                    <h5 className='text-lg font-semibold'>Location ID</h5>
                                    <Input placeholder="Location ID or Facility. ex: 1332935" type="number" name="locationid"
                                        onChange={handleChange} />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h5 className='text-lg font-semibold'>Applicant</h5>
                                    <Input placeholder="Name of permit holder. ex: Zuri Food Facilities" name="Applicant"
                                        onChange={handleChange} />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h5 className='text-lg font-semibold'>Facility Type</h5>
                                    <Select
                                        onValueChange={(e) => values.FacilityType = e}
                                        name="FacilityType"
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select facility permitted" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Truck">Truck</SelectItem>
                                            <SelectItem value="Push Cart">Push Cart</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
                                <div className='flex flex-col gap-2'>
                                    <h5 className='text-lg font-semibold'>CNN</h5>
                                    <Input placeholder="CNN of street segment or intersection location. ex: 110000" type="number" name="cnn"
                                        onChange={handleChange} />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h5 className='text-lg font-semibold'>Location Description</h5>
                                    <Input placeholder="Description of street segment or intersection location. ex: 01ST ST: CLEMENTINA ST to FOLSOM ST (245 - 299)" name="LocationDescription"
                                        onChange={handleChange} />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h5 className='text-lg font-semibold'>Blocklot</h5>
                                    <Input placeholder="Block lot (parcel) number. ex: 8711007" name="blocklot"
                                        onChange={handleChange} />
                                </div>
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>

                                <div className='flex flex-col gap-2'>
                                    <h5 className='text-lg font-semibold'>Block</h5>
                                    <Input placeholder="Block number. ex: 8711" name="block"
                                        onChange={handleChange} />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h5 className='text-lg font-semibold'>Lot</h5>
                                    <Input placeholder="Lot number. ex: 007" name="lot"
                                        onChange={handleChange} />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h5 className='text-lg font-semibold'>Permit</h5>
                                    <Input placeholder="Permit number. ex: 18MFF-0094" name="permit"
                                        onChange={handleChange} />
                                </div>
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>

                                <div className='flex flex-col gap-2'>
                                    <h5 className='text-lg font-semibold'>Food Items</h5>
                                    <Input placeholder="A description of food items sold" name="FoodItems"
                                        onChange={handleChange} />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h5 className='text-lg font-semibold'>Schedule</h5>
                                    <Input placeholder="URL link to schedule for facility" name="Schedule" onChange={handleChange} />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h5 className='text-lg font-semibold'>Days Hours</h5>
                                    <Input placeholder="Abbreviated text of schedule ex: Mo-Fr: 10AM-3PM" name="dayshours" onChange={handleChange} />
                                </div>
                            </div>


                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>

                                <div className='flex flex-col gap-2'>
                                    <h5 className='text-lg font-semibold'>NOISent</h5>
                                    <Input placeholder="Date notice of intent sent" name="NOISent" onChange={handleChange} />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h5 className='text-lg font-semibold'>Approved</h5>
                                    <Input placeholder="Date permit approved by DPW. ex: 2018 Aug 07 12:00:00 AM" name="Approved" onChange={handleChange} />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h5 className='text-lg font-semibold'>Received</h5>
                                    <Input placeholder="Date permit application received from applicant. ex: 20180806" name="Received" onChange={handleChange} />
                                </div>
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>

                                <div className='flex flex-col gap-2'>
                                    <h5 className='text-lg font-semibold'>Prior Permit</h5>
                                    <Input placeholder="Prior existing permit with SFFD" name="PriorPermit" onChange={handleChange} />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h5 className='text-lg font-semibold'>Expiration Date</h5>
                                    <Input placeholder="Date permit expires" name="ExpirationDate" onChange={handleChange} />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h5 className='text-lg font-semibold'>Location</h5>
                                    <Input placeholder="Location LAT-LON" name="Location" onChange={handleChange} />
                                </div>
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
                                <div className='flex flex-col gap-2'>
                                    <Button type="submit" className="">Save & Publish</Button>
                                </div>
                            </div>

                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default EditListing