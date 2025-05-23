import React from "react";
import Logo from "../../assets/madaraLogo.png";
import { useNavigate, useLocation } from "react-router";
import { useTheme } from "@/components/theme-provider/theme-provider";
import AboutMeButton from "../aboutButton/aboutMe";

export const Footer: React.FC = () => {

  const { theme } = useTheme();

  const navigate = useNavigate();

  const location = useLocation();

  return (
    <footer className="z-50 bg-red-950 dark:bg-neutral-900 pt-10 pb-5">
      <div className="container mx-auto px-6 sm:px-12 md:px-20">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 sm:gap-0">

          {/* Left: Logo & Description */}
          <div className="text-center md:text-left max-w-lg">
            <img
              src={Logo}
              alt="Logo"
              className="h-30 w-auto mb-3 mx-auto md:mx-0 cursor-pointer"
              onClick={() => {
                if (location.pathname === "/") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  navigate("/");
                  window.scrollTo({ top: 0, behavior: "instant" });
                }
              }}
            />
            <p className="text-white dark:text-gray-400 text-sm pl-7">
              You are already under my Tsukuyomi !
            </p>
          </div>

          {/* Right: Links & Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 sm:gap-35 w-full md:w-auto text-center sm:text-left">

            {/* Quick Links */}
            <div>
              <h1 className="text-base mb-3 font-semibold text-amber-500">Quick Links</h1>
              <ul className="space-y-2 text-white dark:text-gray-400">
                <li className="cursor-pointer hover:text-amber-500">Mangekyō Sharingan</li>
                <li className="cursor-pointer hover:text-amber-500">Rinnegan</li>
                <li className="cursor-pointer hover:text-amber-500">Wood Release</li>
                <li className="cursor-pointer hover:text-amber-500">Storm Release</li>
              </ul>
            </div>

            {/* Contact & Follow Us */}
            <div>
              <h1 className="text-base mb-3 font-semibold text-amber-500">Contact Us</h1>
              <ul className="space-y-2 text-white dark:text-gray-400">
                <li className="cursor-pointer">Hokage's Castle</li>
                <li className="cursor-pointer">Konohagakure</li>
                <li className="cursor-pointer">madara@uchiha.com</li>
              </ul>

              {/* Follow Us (Inside Contact Section) */}
              <div className="mt-4">
                <div className="flex justify-center sm:justify-start space-x-5">
                  {/* <a href="#" className="text-white dark:text-gray-500 hover:text-amber-500">
                      <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z" />
                      </svg>
                    </a>
                    <a href="#" className="text-white dark:text-gray-500 hover:text-amber-500">
                      <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z" />
                      </svg>
                    </a>
                    <a href="#" className="text-white dark:text-gray-500 hover:text-amber-500">
                      <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                        <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
                      </svg>
                    </a> */}
                  <a href="https://www.linkedin.com/in/ritanjit-das-530b7b216" target="_blank" className="text-white dark:text-gray-500 hover:text-amber-500">
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  </a>
                  {theme === "dark" && (
                    <a href="https://github.com/Ritanjit" target="_blank" className="text-white dark:text-gray-500 hover:text-amber-500">
                    <svg width="22" height="22" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#6a7282" />
                    </svg>
                  </a>
                  )}
                  {theme === "light" && (
                    <a href="https://github.com/Ritanjit" target="_blank" className="text-white dark:text-gray-500 hover:text-amber-500">
                    <svg width="22" height="22" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff" />
                    </svg>
                  </a>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-white dark:border-gray-700 my-6"></div>

        {/* Copyright Section */}
        <div className="text-center text-white dark:text-gray-400 text-sm pb-15 sm:pb-0">
          © {new Date().getFullYear()} Madara's Den. All rights reserved by &nbsp;&nbsp;
          < AboutMeButton />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
