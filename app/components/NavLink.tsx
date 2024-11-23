import Link from "next/link";

interface props {
  children: React.ReactNode;
  href: string;
}

export default function NavLink(props: props) {
  return (
    <Link href={props.href} className="hover:underline">
      {props.children}
    </Link>
  );
}
