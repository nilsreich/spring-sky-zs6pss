import { Rail } from "@/components/teacher/Rail";
import { Topbar } from "@/components/Topbar";

export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      <Topbar className="border-b"/>
      <div className="flex grow">
        <Rail className="border-r h-full"/>
        <div>{children}</div>
      </div>
    </div>
  );
}
