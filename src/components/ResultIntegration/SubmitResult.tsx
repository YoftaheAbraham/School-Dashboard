"use client";

import { useEffect, useState } from "react";
import ButtonDefault from "../Buttons/ButtonDefault";
import MultiSelect from "../FormElements/MultiSelect";
import SelectGroupTwo from "../FormElements/SelectGroup/SelectGroupTwo";
import EditableTable from "../Tables/EditbleTable";
import ReadOnlyTable from "../Tables/ReadOnlyTable";

const students = [
    {
        name: "John Doe",
        id: "S12345",
        Math: 90
    },
    {
        name: "Jane Smith",
        id: "S67890",
        Math: 75
    },
    {
        name: "Alice Johnson",
        id: "S11223",
        Math: 92
    },
    {
        name: "Bob Brown",
        id: "S44556",
        Math: 84
    },
    {
        name: "Charlie Davis",
        id: "S77889",
        Math: 95,
    }
];

const SubmitResultHelper = () => {
    const [academicYear, setAcademicYear] = useState("");
    const [term, setTerm] = useState("");

    const handleTermSelect = (termID: string) => {
        setTerm(termID)
    }
    const handleAcademicYearSelect = (termID: string) => {
        setAcademicYear(termID)
    }
    useEffect(() => {
        console.log(term)
    }, [term])
    return (
        <div>
            <div className={`py-2 flex justify-between gap-3`}>
                <div className="flex gap-1">
                    <SelectGroupTwo handleSelect={handleAcademicYearSelect} options={[{
                        text: "2017",
                        value: "2017",
                        selected: true
                    }, {
                        text: "2016",
                        value: "2016"
                    }]} />
                    <SelectGroupTwo disabled={true} handleSelect={handleTermSelect} options={[{
                        text: "Term 1",
                        value: "662374hd676",
                        selected: true
                    }, {
                        text: "Term 2",
                        value: "6647381ejd834h"
                    }]} />

                </div>
                <button className="flex w-full justify-center items-center max-w-[230px] rounded-[7px] bg-primary p-[13px] font-medium text-white hover:bg-opacity-90">
                    Submit Result
                </button>
            </div>
            <EditableTable packageData={students} EditableField="Math" />
        </div>
    )
}

export default SubmitResultHelper;