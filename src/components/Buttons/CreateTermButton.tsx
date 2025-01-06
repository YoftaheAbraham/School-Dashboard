"use client";
import React, { useState } from 'react'
import Popup from 'reactjs-popup';

const CreateTermButton = () => {
    const [isEditPopupOpen, setEditPopupOpen] = useState(false);
    return (
        <>
            <Popup open={isEditPopupOpen} closeOnDocumentClick={false} overlayStyle={{
                background: "rgba(0,0,0,0.6)"
            }}>
                <div className="rounded-[10px] flex border border-stroke bg-white px-4 flex-col py-2 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
                    <button className=' self-end' onClick={() => {
                        setEditPopupOpen(false)
                    }}><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-x"
                    >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                    <div className="max-w-[600px] flex flex-col items-center justify-between gap-3 overflow-x-auto no-scrollbar dark:scrollbar-thumb-dark-3 dark:scrollbar-track-gray-dark">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="54"
                            height="54"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-megaphone">
                            <path d="M20 8h2a2 2 0 0 1 0 4h-2"></path>
                            <path d="M2 12v-2a2 2 0 0 1 2-2h10l4-5v16l-4-5H4a2 2 0 0 1-2-2z"></path>
                            <line x1="4" y1="15" x2="4" y2="21"></line>
                            <line x1="9" y1="18" x2="4" y2="18"></line>
                        </svg>

                        <p className='text-sm text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, fugiat molestias ab quo quidem id! Quas pariatur iusto reiciendis omnis, maxime suscipit tempore libero incidunt ipsum impedit modi? Dolore, in?</p>
                        <div className='border rounded min-h-[50px] w-full flex'>
                            <div className=' bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark px-2 border-r h-full max-w-[120px] flex flex-col justify-center
                    '>
                                <span className='text-center text-sm'>Academic Year</span>
                            </div>
                            <div className='flex-1 px-3'>
                                <select name="" id="" className='outline-none h-full w-full flex-1 bg-white p-4 dark:border-dark-3 dark:bg-gray-dark'>
                                    <option value="">2017</option>
                                    <option value="">2016</option>
                                </select>
                            </div>
                        </div>
                        <button className="flex px-4 justify-center w-full text-sm rounded-[3px] bg-primary py-[8px] font-medium text-white hover:bg-opacity-90">
                            Announce Result
                        </button>
                    </div>
                </div>
            </Popup>
            <button className='flex px-4 justify-center max-w-[300px] text-sm rounded-[3px] bg-primary py-[8px] font-medium text-white hover:bg-opacity-90' onClick={() => {
                setEditPopupOpen(true)
            }}>
                Create New Term (Semester)
            </button>
        </>
    )
}

export default CreateTermButton