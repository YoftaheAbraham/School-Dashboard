"use client";

import { useEffect, useState } from "react";
import SelectGroupTwo from "../FormElements/SelectGroup/SelectGroupTwo";
import ReadOnlyTable from "../Tables/ReadOnlyTable";

const students = [
    {
        name: "John Doe",
        id: "S12345",
        average: 85.3,
        total: 598,
        Math: 90,
        English: 88,
        Science: 84,
        History: 82,
        Geography: 80,
        Art: 89,
        PhysicalEducation: 85
    },
    {
        name: "Jane Smith",
        id: "S67890",
        average: 78.6,
        total: 550,
        Math: 75,
        English: 80,
        Science: 79,
        History: 77,
        Geography: 76,
        Art: 82,
        PhysicalEducation: 81
    },
    {
        name: "Alice Johnson",
        id: "S11223",
        average: 88.1,
        total: 617,
        Math: 92,
        English: 87,
        Science: 90,
        History: 85,
        Geography: 86,
        Art: 89,
        PhysicalEducation: 88
    },
    {
        name: "Bob Brown",
        id: "S44556",
        average: 82.4,
        total: 577,
        Math: 84,
        English: 83,
        Science: 81,
        History: 79,
        Geography: 80,
        Art: 85,
        PhysicalEducation: 85
    },
    {
        name: "Charlie Davis",
        id: "S77889",
        average: 91.2,
        total: 638,
        Math: 95,
        English: 90,
        Science: 93,
        History: 89,
        Geography: 91,
        Art: 92,
        PhysicalEducation: 88
    }
];

const AnnounceResultHelper = () => {
    const [termID, setTermID] = useState("")
    const handleTermSelect = (value: string) => {
        setTermID(value)
    }

    useEffect(() => {
        console.log(termID)
    }, [termID])
    return (
        <div>
            <div className={`py-2 flex justify-between gap-3`}>
                <SelectGroupTwo handleSelect={handleTermSelect} options={[
                    {
                        text: "Term 1",
                        value: "6637yd766T1"
                    },
                    {
                        text: "Term 2",
                        value: "6637yd766T2"
                    }
                ]} />
                <button className="flex w-full justify-center items-center max-w-[230px] rounded-[7px] bg-primary p-[13px] font-medium text-white hover:bg-opacity-90">
                    Announce Result
                </button>
            </div>
            <ReadOnlyTable packageData={students} />
        </div>
    )
}

export default AnnounceResultHelper;