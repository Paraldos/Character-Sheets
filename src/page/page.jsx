import "./page.css";

function Page({ children, className }) {
  return <div className={`page ${className}`}>{children}</div>;
}

export default Page;
