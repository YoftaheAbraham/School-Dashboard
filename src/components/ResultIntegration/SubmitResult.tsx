"use client";

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
    return (
        <div>
            <div className={`py-2 flex justify-between gap-3`}>
                <div className="flex gap-1">
                    <SelectGroupTwo />
                    <SelectGroupTwo />
                </div>
                <button className="flex w-full justify-center max-w-[230px] rounded-[7px] bg-primary p-[13px] font-medium text-white hover:bg-opacity-90">
                    Submit Result
                </button>
            </div>
            <EditableTable packageData={students} EditableField="Math" />
        </div>
    )
}

export default SubmitResultHelper;