import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const { pathname } = useRouter();
  return (
    <div className="navbar" style={{height: '10vh'}}>
      <div className="flex text-white items-center justify-between py-2 px-3 lg:px-20">
        <a>
          <Link href="/">
            <div className="flex space-x-4 cursor-pointer items-center">
              <img
                src="/assets/logo.png"
                className="object-contain w-12 h-12"
                alt="logo"
              />
              <div className="hidden md:block">
                <p>Father Husband and Teacher</p>
                <p>Save Mr. White</p>
              </div>
            </div>
          </Link>
        </a>
        <div className="flex space-x-6 uppercase md:text-xl">
          <p className={pathname === "/donate" ? "text-yellow" : null}>
            <Link href="/donate">donate</Link>
          </p>
          <p className={pathname === "/stats" ? "text-yellow" : null}>
            <Link href="/stats">stats</Link>
          </p>
          <p className={pathname === "/family" ? "text-yellow" : null}>
            <Link href="/family">family</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
