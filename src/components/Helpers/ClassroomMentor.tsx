import React from 'react'
import ButtonDefault from '../Buttons/ButtonDefault'
import EditMentorButton from '../Buttons/EditMentorButton'
const ClassroomMentorHelper = () => {
    return (
        <div className="rounded-[10px] border border-stroke bg-white px-4 py-2 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
            <div className="max-w-full overflow-x-auto no-scrollbar flex justify-between dark:scrollbar-thumb-dark-3 dark:scrollbar-track-gray-dark">
                <div>
                    <h1 className='font-semibold text-primary mb-2 flex gap-2'><svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20 8H4V6H2V20H4V18H20V20H22V6H20V8ZM4 10H20V14H4V10Z"
                            fill="currentColor"
                        />
                        <path
                            d="M10 16V14H14V16H10Z"
                            fill="currentColor"
                        />
                        <path
                            d="M20 2H16V4H20V2Z"
                            fill="currentColor"
                        />
                    </svg>
                        Grade 11(A) | 2017</h1>
                    <p className='text-sm mb-2'>Mentored by <span className='font-semibold text-green-600'>Dawit Getachew</span></p>
                    {/* <ButtonDefault label='Register New Admin' link='/root-actions/admin-registration' customClasses='flex px-4 justify-center text-sm rounded-[3px] bg-primary p-[5px] font-medium text-white hover:bg-opacity-90' /> */}
                </div>
                <EditMentorButton />
            </div>
        </div>
    )
}

export default ClassroomMentorHelper