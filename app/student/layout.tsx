import { Sidebar } from "@/components/student/Sidebar";
import { Topbar } from "@/components/Topbar";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Topbar />
      <div className="flex">
        <Sidebar className="border-r min-h-screen" />
        <div>{children}</div>
      </div>
    </div>
  );
}
