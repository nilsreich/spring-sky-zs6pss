"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import data from "@/lib/content.json";

type SidebarProps = {
  className?: string;
};

export const SessionSidebar = ({ className }: SidebarProps) => {
    const params = useParams();
    const activeLink = params.slug;
  

    return (
        <div className={className}>
      {data.content.map((item, index) => {
        return (
          <Link
            className={`${
              activeLink === item.title ? "bg-slate-200" : ""
            } block`}
            key={index}
            href={`./teacher/sessions/${item.title}`}
          >
            {item.title}
          </Link>
        );
      })}
    </div>
    )
}