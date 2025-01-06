import DefaultLayout from "@/components/Layouts/DefaultLaout"
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb"
import AdminRegister from "@/components/RootActions/AdminRegister"
import SetMentorTeacher from "@/components/RootActions/SetMentorTeacher"
import CreateNewSemester from "@/components/RootActions/CreateNewSemester"
import CreateSubject from "@/components/RootActions/CreateSubject"
import AnnounceOverallResult from "@/components/RootActions/AnnounceOverallResult"
import SelectGroupTwo from "@/components/FormElements/SelectGroup/SelectGroupTwo"
import ClassroomMentorHelper from "@/components/Helpers/ClassroomMentor"
import TermsDisplayHelper from "@/components/Helpers/TermsDisplayCard"
import CreateTermButton from "@/components/Buttons/CreateTermButton"

const Page = () => {
    return (
        <DefaultLayout>
            <div className="mx-auto w-full max-w-[970px]">
                <div className="flex justify-between p-2 items-center">
                    <h1></h1>
                    <CreateTermButton />
                </div>
                <div className="flex gap-2 my-2 items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="orange"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-alert-triangle">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                        <line x1="12" y1="9" x2="12" y2="13"></line>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>

                    <p className="text-sm font-bold text-orange-600">Only root admins are authorized to make changes. Unauthorized actions are prohibited.</p>
                </div>
                <div className="flex flex-col gap-3 p-3 rounded">
                    <TermsDisplayHelper />
                    <TermsDisplayHelper />
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Page