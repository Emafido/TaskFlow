export default function Footer() {
  return (
    <>
      <hr className="my-3 text-[#eeecec]" />
      <div className="grid gap-5 sm:grid-cols-3 p-4">
        <div>
          <p className="font-bold text-[1.3rem] sm:text-[1.5rem] ">TaskFlow</p>
          <p className="font-light w-[220px] sm:text-[1.1rem] lg:text-[1.3rem] lg:w-[350px] ">
            The ultimate app for managing your tasks and boosting your
            productivity.
          </p>
        </div>
        <div>
          <p className="font-[600] text-[1.1rem] lg:text-[1.4rem] mb-2.5 ">
            Quick Links
          </p>
          <ul>
            <li className="font-light cursor-pointer hover:scale-105 hover:font-[400] w-fit transition-all ease-in-out delay-100 sm:text-[1.1rem] lg:text-[1.3rem] ">
              Contact Us
            </li>
            <li className="font-light cursor-pointer hover:scale-105 hover:font-[400] w-fit transition-all ease-in-out delay-100 sm:text-[1.1rem] lg:text-[1.3rem] ">
              Privacy Policy
            </li>
            <li className="font-light cursor-pointer hover:scale-105 hover:font-[400] w-fit transition-all ease-in-out delay-100 sm:text-[1.1rem] lg:text-[1.3rem] ">
              Terms of Service
            </li>
          </ul>
        </div>
        <div>
          <p className="font-[600] text-[1.1rem] lg:text-[1.4rem] mb-2.5 ">
            Follow Us
          </p>
          <div className="flex gap-[20px]">
            <a href="#">
              <img className="w-[25px]" src="/facebook.svg" />
            </a>
            <a href="#">
              <img className="w-[25px]" src="/twitter.svg" />
            </a>
            <a href="#">
              <img className="w-[25px]" src="/instagram.svg" />
            </a>
          </div>
        </div>
      </div>
      <hr className="m-4 text-[#b2b2b2]" />
      <p className="mx-4 my-2 text-center">
        &copy; 2025 TaskFlow. All rights reserved.
      </p>
    </>
  );
}
