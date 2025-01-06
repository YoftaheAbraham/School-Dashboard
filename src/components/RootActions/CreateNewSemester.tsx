import React from 'react'
import ButtonDefault from '../Buttons/ButtonDefault'
const CreateNewSemester = () => {
    return (
        <div className="rounded-[10px] border border-stroke bg-white px-4 py-2 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
            <div className="max-w-full overflow-x-auto no-scrollbar dark:scrollbar-thumb-dark-3 dark:scrollbar-track-gray-dark">
                <h1 className='font-semibold text-primary mb-2 flex gap-2'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-calendar">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                        <line x1="8" y1="14" x2="8" y2="14"></line>
                        <line x1="12" y1="14" x2="12" y2="14"></line>
                        <line x1="16" y1="14" x2="16" y2="14"></line>
                    </svg>
                    Create New Term | Semester </h1>
                <p className='text-sm mb-2'>Here, you can register new administrators who will play a crucial role in managing and maintaining our system. Once registered, they will have the appropriate permissions to oversee system operations, register students, and submit results.</p>
                <ButtonDefault label='Terms (Semesters)' link='/root-actions/terms' customClasses='flex px-4 justify-center text-sm rounded-[3px] bg-primary p-[5px] font-medium text-white hover:bg-opacity-90' />
            </div>
        </div>
    )
}

export default CreateNewSemester