import React from 'react'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function FilterSection({ setFacilityType, setStatusType }) {
    return (
        <div className='grid grid-cols-2 gap-3'>

            <Select
                onValueChange={(value) => {
                    console.log('Selected FacilityType:', value);
                    setFacilityType(value === 'All' ? null : value)
                }}
            >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Facility Type" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="All">All</SelectItem>
                    <SelectItem value="Truck">Truck</SelectItem>
                    <SelectItem value="Push Cart">Push Cart</SelectItem>
                </SelectContent>
            </Select>

            <Select
                onValueChange={(value) => {
                    console.log('Selected StatusType:', value);
                    setStatusType(value === 'All' ? null : value)
                }}
            >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Status of Permit" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="All">All</SelectItem>
                    <SelectItem value="APPROVED">Approved</SelectItem>
                    <SelectItem value="REQUESTED">Requested</SelectItem>
                    <SelectItem value="EXPIRED">Expired</SelectItem>
                    <SelectItem value="SUSPEND">Suspend</SelectItem>
                </SelectContent>
            </Select>

        </div>
    )
}

export default FilterSection