"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { DashboardIcon, ReaderIcon, TableIcon } from "@radix-ui/react-icons";

type RailProps = {
  className?: string;
};

export const Rail = ({ className }: RailProps) => {
  const params = useParams();
  const activeLink = params.slug;

  console.log(activeLink);
  return (
    <div className={`${className} flex flex-col min-h-screen border-r`}>
      <div
        className={`${
          activeLink === "dashboard" ? "bg-slate-100" : ""
        } p-2 m-2 rounded`}
      >
        {" "}
        <Link href="./teacher/dashboard">
          {" "}
          <DashboardIcon />
        </Link>{" "}
      </div>
      <div
        className={`${
          activeLink === "sessions" ? "bg-slate-100" : ""
        } p-2 m-2 rounded`}
      >
        {" "}
        <Link href="./teacher/sessions">
          {" "}
          <ReaderIcon />{" "}
        </Link>{" "}
      </div>
      <div
        className={`${
          activeLink === "students" ? "bg-slate-100" : ""
        } p-2 m-2 rounded`}
      >
        {" "}
        <Link href="./teacher/students">
          {" "}
          <TableIcon />{" "}
        </Link>{" "}
      </div>
    </div>
  );
};
