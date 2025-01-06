"use client";
import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';

interface FormData {
    Name?: string;
    Classes: string[];
    AcademicYear?: string
}

const CreateSubjectButton: React.FC = () => {
    const [isEditPopupOpen, setEditPopupOpen] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        Classes: []
    });

    const Classrooms: string[] = ["G9A", "G9B", "G10A", "G10B", "G11A", "G11B", "G12A", "G12B"];

    const toggleClassroom = (classroom: string) => {
        setFormData(prevData => {
            const updatedClasses = prevData.Classes.includes(classroom)
                ? prevData.Classes.filter(c => c !== classroom)
                : [...prevData.Classes, classroom];
            return { ...prevData, Classes: updatedClasses };
        });
    };
    useEffect(() => {
        console.log(formData)
    })
    return (
        <>
            <Popup open={isEditPopupOpen} closeOnDocumentClick={false} overlayStyle={{ background: "rgba(0,0,0,0.6)" }}>
                <div className="rounded-[10px] flex border border-stroke bg-white px-4 flex-col py-2 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
                    <button className='self-end' onClick={() => setEditPopupOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                    <div className="max-w-[600px] w-[95%] flex flex-col items-center justify-between gap-3 overflow-x-auto no-scrollbar dark:scrollbar-thumb-dark-3 dark:scrollbar-track-gray-dark">
                        <form>
                            <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                                <div className="w-full sm:w-1/2">
                                    <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white" htmlFor="fullName">Subject Name</label>
                                    <div className="relative">
                                        <input
                                            onChange={(e) => setFormData({ ...formData, Name: e.target.value })}
                                            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-white pl-2.5 py-2.5 pr-4.5 text-dark focus:border-primary focus-visible:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                                            type="text"
                                            name="fullName"
                                            id="fullName"
                                            placeholder="Enter Subject Name"
                                            value={formData.Name || ''}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="w-full sm:w-1/2">
                                    <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white" htmlFor="academicYear">Academic Year</label>
                                    <div className="relative">
                                        <select
                                            onChange={(e) => setFormData({ ...formData, AcademicYear: e.target.value })}
                                            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-white py-2.5 pl-2.5 pr-4.5 text-dark focus:border-primary focus-visible:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                                            id="academicYear"
                                            value={formData.AcademicYear || ''}
                                            required
                                        >
                                            <option value="">Select Academic Year</option>
                                            <option value="2017">2017 E.C</option>
                                            <option value="2018">2018 E.C</option>
                                            <option value="2019">2019 E.C</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5.5">
                                <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white" htmlFor="learningClassrooms">Learning Classrooms</label>
                                <div className="relative">
                                    <div className='flex flex-wrap gap-2'>
                                        {Classrooms.map((classroom, index) => (
                                            <div
                                                key={index}
                                                onClick={() => toggleClassroom(classroom)}
                                                className={`flex p-2 cursor-pointer justify-center items-center border min-w-20 h-8 text-sm text-center rounded ${formData.Classes.includes(classroom) ? "border-2 border-primary" : "border-stroke"}`}
                                            >
                                                {classroom}
                                            </div>
                                        ))}
                                    </div>
                                    <br />
                                    <p className='text-sm'>{formData.Classes.length} classroom(s) selected</p>
                                </div>
                            </div>

                            <div className="flex justify-end gap-3">
                                <button
                                    className="flex justify-center rounded-[7px] border border-stroke px-6 py-[7px] font-medium text-dark hover:shadow-1 dark:border-dark-3 dark:text-white"
                                    type="button"
                                    onClick={() => setEditPopupOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="flex justify-center rounded-[7px] bg-primary px-6 py-[7px] font-medium text-gray-2 hover:bg-opacity-90"
                                    type="submit"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Popup>
            <button
                className='flex px-4 gap-2 justify-center items-center max-w-[300px] text-sm rounded-[3px] bg-primary py-[8px] font-medium text-white hover:bg-opacity-90'
                onClick={() => setEditPopupOpen(true)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                Create New Subject
            </button>
        </>
    );
}

export default CreateSubjectButton;
