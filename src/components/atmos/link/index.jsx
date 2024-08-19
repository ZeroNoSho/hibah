import Link from "next/link";
const Links = ({ href, children, className, onclick }) => {
  return (
    <Link href={href} onClick={onclick} className={className}>
      {children}
    </Link>
  );
};
export default Links;
