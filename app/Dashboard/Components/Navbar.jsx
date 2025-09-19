"use client";

import {
  faBars,
  faBell,
  faCommentDots,
  faSearch,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import user from "@/public/user.jpg";
import Image from "next/image";

export default function Navbar({ setIsOpen }) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
    setIsNotificationOpen(false);
  };

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
    setIsUserMenuOpen(false);
  };

  return (
    <>
      <div className="bg-white h-[90px] shadow-lg flex items-center justify-between gap-3 px-[2%]">
        {/* Search bar */}
        <div
          className="relative hidden search-box border border-[#dfe0e4] h-[45px] lg:flex items-center shadow-xs rounded-full w-70
        outline-none"
        >
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-[45px] pl-4 pr-12 rounded-full border border-gray-300 bg-gray-50 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#066dca] focus:border-[#066dca] transition"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute right-1 p-3 rounded-[50%] bg-[#066dca] text-white  cursor-pointer"
          />
        </div>
        {/* Search bar */}

        {/* Mobile Navbar */}
        <div
          onClick={() => setIsOpen(true)}
          className="toggle lg:hidden flex text-2xl cursor-pointer"
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
        {/* Mobile Navbar */}

        {/* Create New Course */}
        <div className="flex items-center gap-3">
          <span className="hidden lg:flex border border-[#066dca] hover:bg-[#066dca] hover:text-white px-4 py-2 rounded-full shadow-sm transition-colors duration-200 cursor-pointer">
            Create a New Course
          </span>
          {/* Create New Course */}

          {/* Notification */}
          <div
            onClick={toggleNotification}
            className="notification relative hidden lg:flex items-center justify-center min-h-[45px] min-w-[45px] p-2 text-xl border border-[#c1c4cc] hover:bg-[#066dca] hover:text-white rounded-full  transform-colors duration-300 cursor-pointer"
          >
            <FontAwesomeIcon icon={faBell} />
            <span className="absolute top-0 right-0 badge text-xs text-white bg-[#066dca] px-1 rounded-2xl">
              2
            </span>

            {isNotificationOpen && (
              <ul className="absolute top-14 right-0 flex flex-col w-[350px] bg-white p-3 gap-2 rounded-2xl shadow-xl animate-fade-in">
                <li className="text-sm text-gray-700">
                  <Link
                    href="/"
                    className="w-full flex items-start justify-between"
                  >
                    <div className="flex items-start gap-2">
                      <Image
                        src={user}
                        alt="user-image"
                        className="w-14 h-14"
                      />

                      <div>
                        <span className="text-[#212529] font-sora text-lg">
                          Dip Akand
                        </span>
                        <p className="text-[#4f586d] text-xs">
                          You can switch dashboards
                        </p>
                      </div>
                    </div>

                    <span className="text-[#4f586d] text-xs font-medium">
                      23 Mins ago
                    </span>
                  </Link>
                </li>

                <li className="text-sm text-gray-700">
                  <Link
                    href="/"
                    className="w-full flex items-start justify-between"
                  >
                    <div className="flex items-start gap-2">
                      <Image
                        src={user}
                        alt="user-image"
                        className="w-14 h-14"
                      />

                      <div>
                        <span className="text-[#212529] font-sora text-lg">
                          Dip Akand
                        </span>
                        <p className="text-[#4f586d] text-xs">
                          You can switch dashboards
                        </p>
                      </div>
                    </div>

                    <span className="text-[#4f586d] text-xs font-medium">
                      23 Mins ago
                    </span>
                  </Link>
                </li>
              </ul>
            )}
          </div>
          {/* Notification */}

          {/* Comments */}
          <div className="comment relative hidden lg:flex items-center justify-center p-2 min-h-[45px] min-w-[45px] text-xl border border-[#c1c4cc] hover:bg-[#066dca] hover:text-white rounded-full transition-colors duration-300 cursor-pointer">
            <FontAwesomeIcon icon={faCommentDots} />
          </div>
          {/* Comments */}

          {/* user */}
          <div
            onClick={toggleUserMenu}
            className="user relative flex items-center justify-center w-[50px] h-[50px] rounded-[50%] cursor-pointer"
          >
            <Image
              src={user}
              alt="user-image"
              className="w-full h-full relative"
            />

            {isUserMenuOpen && (
              <ul className="absolute top-15 right-0 flex flex-col p-3 gap-3 bg-white w-[200px] rounded-2xl shadow-xl animate-fade-in">
                <li className="">
                  <Link
                    href="/Profile"
                    className="text-lg hover:text-[#066dca] transition-colors duration-300"
                  >
                    <FontAwesomeIcon
                      icon={faUserCircle}
                      className="pr-2 text-lg"
                    />
                    My Profile
                  </Link>
                </li>

                <li className="">
                  <Link
                    href="/settings"
                    className="text-lg hover:text-[#066dca] transition-colors duration-300"
                  >
                    <i className="ri-settings-5-line pr-2 text-lg" />
                    Settings
                  </Link>
                </li>

                <li className="">
                  <Link
                    href="/logout"
                    className="text-lg hover:text-[#066dca] transition-colors duration-300"
                  >
                    <i className="ri-shut-down-line pr-2 text-lg" />
                    Logout
                  </Link>
                </li>
              </ul>
            )}
          </div>
          {/* user */}
        </div>
      </div>
    </>
  );
}
