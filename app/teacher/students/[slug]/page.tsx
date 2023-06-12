import { StudentSidebar } from "@/components/teacher/StudentsSidebar";

export default function Page({ params }: { params: { slug: string } }) {

    return (
        <div className="flex">
            <StudentSidebar className="border-r" />

            <div>{params.slug}</div>
        </div>
    );
}
