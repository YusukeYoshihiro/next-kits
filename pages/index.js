import Link from "next/link";
import Head from "components/templates/head.js";

const Index = () => {
  return (
    <div>
      <Head title="Index page" />
      <Link href="/">
        <p>Index page</p>
      </Link>
      <Link href="/about">
        <p>About</p>
      </Link>
    </div>
  );
};
export default Index;
