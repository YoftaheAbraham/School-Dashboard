import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/EditbleTable";
import ReadOnlyTable from "@/components/Tables/ReadOnlyTable";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { Package } from "@/types/package";

export const metadata: Metadata = {
  title: "Next.js Tables Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Tables page for NextAdmin Dashboard Kit",
};

const TablesPage = () => {
  const admins: Package[] = [
    {
      Name: "Jordan Sheik Ahmed",
      Email: "jofab08@gmail.com",
      Phone_Number: "+251949441604",
      Role: "Root",
      Status: "Active"
    },
    {
      Name: "Emily Johnson",
      Email: "emily.johnson@example.com",
      Phone_Number: "+251947751204",
      Role: "Admin",
      Status: "Active"
    },
    {
      Name: "Michael Brown",
      Email: "michael.brown@example.com",
      Phone_Number: "+251912345678",
      Role: "Moderator",
      Status: "Inactive"
    },
    {
      Name: "Sara Williams",
      Email: "sara.williams@example.com",
      Phone_Number: "+251931234567",
      Role: "Admin",
      Status: "Active"
    },
    {
      Name: "David Smith",
      Email: "david.smith@example.com",
      Phone_Number: "+251945678912",
      Role: "Viewer",
      Status: "Pending"
    }
  ];
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Admins" />
      <div className="flex flex-col gap-10">
        <ReadOnlyTable packageData={admins} />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
