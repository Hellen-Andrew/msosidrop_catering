import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="dark:bg-primary">
      <footer className="footer px-4 py-2 md:px-8 xl:px-16 text-white border-t border-gray-600 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 items-center  ">
        <div className=" max-w-sm flex flex-col items-start p-4 col-span-1 ">
          <Link
            href=" / "
            className=" hidden dark:flex justify-center items-center "
          >
            <Image
              src="/Msosidropdarklogo.webp"
              alt="Msosidrop logo"
              width={200}
              height={65}
            />
          </Link>
          <Link
            href=" / "
            className="dark:hidden flex justify-center items-center "
          >
            <Image
              src="/Msosidroplightlogo.webp"
              alt="Msosidrop logo"
              width={200}
              height={65}
            />
          </Link>

          <p className="dark:dark:text-gray-400 text-gray-600 ">
            Msosidrop is a Tanzania-based business that operates an online food
            ordering and food delivery service, providing fast and high-quality
            service from the best local restaurants in Dar es Salaam.
          </p>
        </div>
        <div className="flex flex-col p-4 col-span-1 gap-2">
          <header className="footer-title text-black dark:text-white">
            Msosidrop
          </header>
          <Link
            href={"/restaurants"}
            className="link link-hover dark:text-gray-400 text-gray-600 "
          >
            Add Your Restaurant
          </Link>
          <Link
            href={"/droppers"}
            className="link link-hover dark:text-gray-400 text-gray-600 "
          >
            Become a Dropper
          </Link>
          <Link
            href={"/downloads"}
            className="link link-hover dark:text-gray-400 text-gray-600 "
          >
            Our Apps
          </Link>
        </div>
        <div className="flex flex-col p-4 col-span-1 gap-2">
          <header className="footer-title text-black dark:text-white">
            Get to Know Us
          </header>
          <Link
            href={"/about"}
            className="link link-hover dark:dark:text-gray-400 text-gray-600"
          >
            About us
          </Link>
          <Link
            href={"/contacts"}
            className="link link-hover dark:text-gray-400 text-gray-600 "
          >
            Contact
          </Link>
          <Link
            href={"https://careers.msosidrop.co.tz/job-openings/"}
            className="link link-hover dark:dark:text-gray-400 text-gray-600 "
          >
            Jobs
          </Link>
        </div>
        <div className="flex flex-col p-4 col-span-1 gap-2">
          <header className="footer-title text-black dark:text-white">
            Legal & Resources
          </header>
          <Link
            href={"/terms"}
            className="link link-hover dark:dark:text-gray-400 text-gray-600 "
          >
            Terms of Services
          </Link>
          <Link
            href={"/privacy"}
            className="link link-hover dark:dark:text-gray-400 text-gray-600 "
          >
            Privacy Policy
          </Link>
          <Link
            href={"https://resources.msosidrop.co.tz"}
            className="link link-hover dark:dark:text-gray-400 text-gray-600 "
          >
            Resources
          </Link>
        </div>
      </footer>

      <footer className="footer flex justify-center items-center px-10 py-4 dark:dark:text-gray-400 text-gray-600">
        <div className="items-center">
          <p>Copyright © 2024 - All right reserved</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          {/* <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a> */}
          {/* <Link href={""}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </Link> */}
          {/* <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a> */}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
