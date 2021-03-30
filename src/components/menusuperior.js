import Link from "next/link";

export const MenuSuperior = () => {
  return (
    <div className="space-x-16">
      <Link href="/">Index</Link>
      <Link href="/login">Login</Link>
    </div>
  );
};
