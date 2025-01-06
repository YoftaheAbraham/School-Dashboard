import React from 'react'
import ButtonDefault from '../Buttons/ButtonDefault'

const SetMentorTeacher = () => {
    return (
        <div className="rounded-[10px] border border-stroke bg-white px-4 py-2 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
            <div className="max-w-full overflow-x-auto no-scrollbar dark:scrollbar-thumb-dark-3 dark:scrollbar-track-gray-dark">
                <h1 className='font-semibold text-primary mb-2 flex gap-2'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-user-check">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <polyline points="16 11 18 13 22 9"></polyline>
                    </svg>
                    Classroom Mentor Assignment</h1>
                <p className='text-sm mb-2'>Here, you can register new administrators who will play a crucial role in managing and maintaining our system. Once registered, they will have the appropriate permissions to oversee system operations, register students, and submit results.</p>
                <ButtonDefault label='Classroom Mentors' link='/root-actions/classroom-mentors' customClasses='flex px-4 justify-center text-sm rounded-[3px] bg-primary p-[5px] font-medium text-white hover:bg-opacity-90'/>
            </div>
        </div>
    )
}

export default SetMentorTeacher