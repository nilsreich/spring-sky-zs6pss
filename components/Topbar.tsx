import Link from "next/link";

type TopbarProps = {
  className?: string;
};

export const Topbar = ({ className }: TopbarProps) => {
  return <div className={className}>
    <Link href="./">Logout</Link>;
  </div>
};
