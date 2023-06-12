
import { StudentSidebar } from "@/components/teacher/StudentSidebar";

const teacher = () => {
    return <div className="flex h-full">
        <StudentSidebar className="h-full border-r"/>
        <div>students</div>
    </div>;
  };
  
  export default teacher;
  