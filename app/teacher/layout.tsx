import { Rail } from "@/components/teacher/Rail";
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
        <div>{children}</div>
      </div>
    </div>
  );
}
