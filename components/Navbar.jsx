/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link';

const Navbar = () => (
    <nav>
        <div className="logo" />
        <Link href="/">
            <a>Home</a>
        </Link>
<<<<<<< HEAD
        <Link href="/tags">
            <a>Tags</a>
        </Link>
=======
        {/* <Link href="/crawler">
      <a>Crawler</a>
    </Link> */}
>>>>>>> 7c70430c8616e8cf483e24c5753c9de4ce772fbe
        {/* <Link href="/drafts/">
        <a>Drafts</a>
      </Link> */}
        <style jsx>
            {`
        nav {
          margin: 10px auto 80px;
          padding: 10px 0;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          border-bottom: 1px solid #ddd;
          padding-right: 3rem;
        }
        nav a {
          margin-left: 12px;
          text-decoration: none;
          color: grey;
        }
      `}
        </style>
    </nav>
);

export default Navbar;