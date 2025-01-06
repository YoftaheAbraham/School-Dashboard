import React from 'react'
import ButtonDefault from '../Buttons/ButtonDefault'

const AnnounceOverallResult = () => {
    return (
        <div className="rounded-[10px] min-h-[300px] flex items-center justify-center border border-stroke bg-white px-4 py-2 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
            <div className="max-w-full flex flex-col items-center gap-3 overflow-x-auto no-scrollbar dark:scrollbar-thumb-dark-3 dark:scrollbar-track-gray-dark">
                <h1 className='font-semibold text-primary mb-2 flex flex-col items-center gap-2'><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
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
                    Announce Overall result</h1>
                <p className='text-sm mb-2 max-w-[500px] text-center'>Here, you can register new administrators who will play a crucial role in managing and maintaining our system. Once registered, they will have the appropriate permissions to oversee system operations, register students, and submit results.</p>
                <ButtonDefault label='Announce overall result' link='/root-actions/overall-result-announcement' customClasses='flex px-4 justify-center text-sm rounded-[3px] bg-primary p-[5px] font-medium text-white hover:bg-opacity-90' />
            </div>
        </div>
    )
}

export default AnnounceOverallResult