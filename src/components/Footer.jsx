import Logo from "../assets/images/logo_transparent.png";

const Footer = () => {
  return (
    <footer className="bg-[#3DA495]  shadow dark:bg-gray-900 mt-4 w-full h-72">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-8 bg-white" alt="Flowbite Logo" />
            <span className="self-center text-2xl text-white font-semibold whitespace-nowrap dark:text-white">
              E-mart
            </span>
          </a>
          <ul className="flex flex-wrap text-white items-center mb-6 text-sm font-medium  sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 text-white border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm  sm:text-center text-white ">
          © 2023{" "}
          <a
            href="https://flowbite.com/"
            className="hover:underline text-white"
          >
            E-Mart™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
