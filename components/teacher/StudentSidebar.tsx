"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import data from "@/lib/content.json";

type SidebarProps = {
  className?: string;
};

export const StudentSidebar = ({ className }: SidebarProps) => {
    const params = useParams();
    const activeLink = params.slug;
  

    return (
        <div className={className}>
      {data.user.map((item, index) => {
        return (
          <Link
            className={`${
              activeLink === item.name ? "bg-slate-200" : ""
            } block`}
            key={index}
            href={`./teacher/students/${item.name}`}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
    )
}