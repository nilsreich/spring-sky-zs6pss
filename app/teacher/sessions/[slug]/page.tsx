import { SessionSidebar } from "@/components/teacher/SessionSidebar";

export default function Page({ params }: { params: { slug: string } }) {

    return (
        <div className="flex">
            <SessionSidebar className="border-r" />

            <div>{params.slug}</div>
        </div>
    );
}
