import React from 'react'
import ButtonDefault from '../Buttons/ButtonDefault'
const AdminRegister = () => {
    return (
        <div className="rounded-[10px] border border-stroke bg-white px-4 py-2 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
            <div className="max-w-full overflow-x-auto no-scrollbar dark:scrollbar-thumb-dark-3 dark:scrollbar-track-gray-dark">
                <h1 className='font-semibold text-primary mb-2 flex gap-2'><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-shield-star">
                    <path d="M12 22s8-4 8-10V5l-8-4-8 4v7c0 6 8 10 8 10z"></path>
                    <polygon points="12 9.5 10.5 11 11 13 12 12.5 13 13 13.5 11 12 9.5"></polygon>
                </svg>New Admin Registration (Root | Teacher | Registrar )</h1>
                <p className='text-sm mb-2'>Here, you can register new administrators who will play a crucial role in managing and maintaining our system. Once registered, they will have the appropriate permissions to oversee system operations, register students, and submit results.</p>
                <ButtonDefault label='Register New Admin' link='/root-actions/admin-registration' customClasses='flex px-4 justify-center text-sm rounded-[3px] bg-primary p-[5px] font-medium text-white hover:bg-opacity-90' />
            </div>
        </div>
    )
}

export default AdminRegister