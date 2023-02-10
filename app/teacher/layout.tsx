import { Rail } from "@/components/teacher/Rail";
import { Sidebar } from "@/components/teacher/Sidebar";
import { Topbar } from "@/components/Topbar";

export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Topbar />
      <div className="flex">
        <Rail />
        <Sidebar />
        <div>{children}</div>
      </div>
    </div>
  );
}
