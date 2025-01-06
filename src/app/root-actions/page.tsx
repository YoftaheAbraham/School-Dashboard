import DefaultLayout from "@/components/Layouts/DefaultLaout"
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb"
import AdminRegister from "@/components/RootActions/AdminRegister"
import SetMentorTeacher from "@/components/RootActions/SetMentorTeacher"
import CreateNewSemester from "@/components/RootActions/CreateNewSemester"
import CreateSubject from "@/components/RootActions/CreateSubject"
import AnnounceOverallResult from "@/components/RootActions/AnnounceOverallResult"

const Page = () => {
    return (
        <DefaultLayout>
            <div className="mx-auto w-full max-w-[970px]">
                <Breadcrumb pageName="Root-actions" />
                <AnnounceOverallResult />
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
                <div className="flex flex-col gap-3">
                    <AdminRegister />
                    <SetMentorTeacher />
                    <CreateNewSemester />
                    <CreateSubject />
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Page