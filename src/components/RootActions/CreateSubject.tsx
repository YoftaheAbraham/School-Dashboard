import React from 'react'
import ButtonDefault from '../Buttons/ButtonDefault'
const CreateSubject = () => {
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
                        className="feather feather-book">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M20 22H6.5A2.5 2.5 0 0 1 4 19.5V3.5A2.5 2.5 0 0 1 6.5 1H20v21z"></path>
                    </svg>
                    Create New Subject </h1>
                <p className='text-sm mb-2'>Here, you can register new administrators who will play a crucial role in managing and maintaining our system. Once registered, they will have the appropriate permissions to oversee system operations, register students, and submit results.</p>
                <ButtonDefault label='Subjects' link='/root-actions/subjects' customClasses='flex px-4 justify-center text-sm rounded-[3px] bg-primary p-[5px] font-medium text-white hover:bg-opacity-90' />
            </div>
        </div>
    )
}

export default CreateSubject