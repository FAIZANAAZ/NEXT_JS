import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <header className="border-b font-[sans-serif] tracking-wide relative z-50">
        <section className="py-3 bg-green-600 text-white text-center px-10">
          <p className="text-sm">
            Pak Army: Defenders of the Nation, Guardians of Peace and Pride.
          </p>
        </section>

        <div className="flex flex-wrap items-center gap-4 px-10 py-4 relative bg-white min-h-[70px]">
          <div className="hidden max-lg:flex w-[70px] h-[70px] items-center justify-center">
            <Image src="/logo.png" alt="logo" width={160} height={40} />
          </div>

          <div
            id="collapseMenu"
            className="w-full max-lg:hidden lg:!block max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
          >
            <button
              id="toggleClose"
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>

            <div className="lg:flex max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <ul className="lg:flex lg:gap-x-8 max-lg:space-y-2">
                <li className="mb-6 hidden max-lg:block">
                  <div
                    className="mb-6 hidden max-lg:flex w-[70px] h-[70px] items-center justify-center"
                  >
                    <Image src="/logo.png" alt="logo" width={160} height={40} />
                  </div>
                </li>
                <li className="max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-green-600 font-semibold text-green-600 block text-[15px]"
                  >
                    Home
                  </a>
                </li>
                <li className="max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-green-600 font-semibold text-[#333] block text-[15px]"
                  >
                    Defense
                  </a>
                </li>
                <li className="max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-green-600 font-semibold text-[#333] block text-[15px]"
                  >
                    Forces
                  </a>
                </li>
                <li className="text-[15px] max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-green-600 font-semibold text-[#333] block text-[15px]"
                  >
                    News
                  </a>
                </li>
              </ul>

              <div className="m-auto absolute lg:left-2/4 lg:top-0.5 lg:-translate-x-1/2 max-lg:hidden  w-[70px] h-[70px] flex items-center justify-center">
                <Image src="/logo.png" alt="logo" width={160} height={40} />
              </div>

              <ul className="lg:flex lg:space-x-8 max-lg:space-y-2 max-lg:mt-2 ml-auto">
                <li className="max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-green-600 font-semibold text-[#333] block text-[15px]"
                  >
                    About Pak Army
                  </a>
                </li>
                <li className="max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-green-600 font-semibold text-[#333] block text-[15px]"
                  >
                    Contact
                  </a>
                </li>
                <li className="max-lg:border-b max-lg:py-3">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-green-600 font-semibold text-[#333] block text-[15px]"
                  >
                    Careers
                  </a>
                </li>
                
              </ul>
            </div>
          </div>

          <div className="flex ml-auto lg:hidden">
            <button id="toggleOpen">
              <svg
                className="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
