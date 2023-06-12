"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DashboardIcon, ReaderIcon, TableIcon } from "@radix-ui/react-icons";

type RailProps = {
  className?: string;
};

export const Rail = ({ className }: RailProps) => {
  const pathname = usePathname();

  return (
    <div className={`${className} flex flex-col min-h-screen border-r`}>
      <div
        className={`${
          pathname === "/teacher" ? "bg-slate-100" : ""
        } p-2 m-2 rounded`}
      >
        {" "}
        <Link href="./teacher">
          {" "}
          <DashboardIcon />
        </Link>{" "}
      </div>
      <div
        className={`${
          pathname === "/teacher/sessions" ? "bg-slate-100" : ""
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
          pathname === "/teacher/students" ? "bg-slate-100" : ""
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
