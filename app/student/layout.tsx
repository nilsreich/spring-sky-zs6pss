import { Sidebar } from "@/components/student/Sidebar";
import { Topbar } from "@/components/Topbar";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      <Topbar className="border-b"/>
      <div className="flex grow">
        <Sidebar className="border-r h-full " />
        <div>{children}</div>
      </div>
    </div>
  );
}