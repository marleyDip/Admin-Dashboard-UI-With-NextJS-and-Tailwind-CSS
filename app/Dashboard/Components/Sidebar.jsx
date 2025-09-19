import {
  faBookmark,
  faClipboard,
  faHome,
  faMessage,
  faStar,
  faUserCircle,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const menuItems = [
  { href: "/Dashboard", icon: faHome, label: "Dashboard" },
  { href: "/Profile", icon: faUserCircle, label: "My Profile" },
  { href: "/Message", icon: faMessage, label: "Message" },
  { href: "/Courses", icon: faClipboard, label: "Courses" },
  { href: "/Wishlist", icon: faBookmark, label: "Wishlist" },
  { href: "/Reviews", icon: faStar, label: "Reviews" },
  // Admin Section / Items
  {
    href: "/Settings",
    icon: "ri-settings-5-line",
    label: "Settings",
    admin: true,
    remix: true,
  },
  {
    href: "/AdminUsers",
    icon: faUserCircle,
    label: "Users",
    admin: true,
  },
];

// Split items into normal and admin
const normalItems = menuItems.filter((item) => !item.admin);
const adminItems = menuItems.filter((item) => item.admin);

export default function Sidebar({ isOpen, setIsOpen }) {
  const pathname = usePathname();

  return (
    <>
      <div
        className={`h-screen w-[320px] min-h-screen pb-0 p-5 sidebar bg-white shadow-xl fixed lg:relative transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="nav-logo text-center py-2">
          <Link href="/" className="cursor-pointer">
            <h1 className="text-3xl font-semibold font-unbounded">
              Sofi
              <span className="text-[#066dca] font-unbounded">an</span>
            </h1>
          </Link>
        </div>

        <span className="h-[1.5px] bg-[#dfe0e4] w-full block my-2"></span>

        <p className="text-neutral-500 font-sora tracking-wide py-3">
          Welcome Dip,
        </p>

        <ul className="flex flex-col gap-3 sidebar-nav relative z-20 overflow-y-scroll">
          {/* Render Normal Items */}
          {normalItems.map((item) => (
            <li
              key={item.href}
              className={`p-4 rounded-xl font-sora transition-colors duration-300 ${
                pathname === item.href ? "active" : "text-neutral-500"
              }`}
            >
              <Link href={item.href} className="flex items-center text-lg">
                {item.remix ? (
                  <i
                    className={`${item.icon} mr-2 text-[#066dca] text-xl transition-colors duration-300`}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="mr-2 text-[#066dca] transition-colors duration-300"
                  />
                )}
                {item.label}
              </Link>
            </li>
          ))}

          {/* Render Admin section only if there are admin items */}
          {adminItems.length > 0 && (
            <>
              <p className="text-neutral-500 font-sora tracking-wide ">Admin</p>

              {adminItems.map((item) => (
                <li
                  key={item.href}
                  className={`p-4 rounded-xl font-sora transition-colors duration-300 ${
                    pathname === item.href ? "active" : "text-neutral-500"
                  }`}
                >
                  <Link href={item.href} className="flex items-center text-lg">
                    {item.remix ? (
                      <i
                        className={`${item.icon} mr-2 text-[#066dca] text-xl transition-colors duration-300`}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={item.icon}
                        className="mr-2 text-[#066dca] transition-colors duration-300"
                      />
                    )}
                    {item.label}
                  </Link>
                </li>
              ))}
            </>
          )}
        </ul>

        {/* logout */}
        <ul className="absolute bottom-0 left-0 right-0 sidebar-nav flex flex-col items-start justify-end w-full p-5 pb-2 gap-3">
          <li className="w-full p-4 rounded-xl text-neutral-500 font-sora transition-colors duration-300">
            <Link href="/logout" className="flex items-center text-lg">
              <i className="ri-logout-box-r-line mr-2 text-[#066dca] text-xl transition-colors duration-300" />
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

/* where admin section => not mix with Font Awesome & Remix Icon
    
    <ul className="flex flex-col gap-3 sidebar-nav relative z-20 overflow-y-scroll">
      {menuItems.map((item) => (
        <React.Fragment key={item.href}>
          Insert Admin Heading before the admin item
          {item.admin && (
            <p className="text-neutral-500 font-sora tracking-wide ">
              Admin
            </p>
          )}

          <li
            key={item.href}
            className={`p-4 rounded-xl font-sora transition-colors duration-300 ${
              pathname === item.href ? "active" : "text-neutral-500"
            }`}
          >
            <Link href={item.href} className="flex items-center text-lg">
              {item.remix ? (
                <i
                  className={`${item.icon} mr-2 text-[#066dca] text-xl transition-colors duration-300`}
                />
              ) : (
                <FontAwesomeIcon
                  icon={item.icon}
                  className="mr-2 text-[#066dca] transition-colors duration-300"
                />
              )}
              {item.label}
            </Link>
          </li>
        </React.Fragment>
      ))}
    </ul>
*/

/* With logic =>
   
  Normal category => 
    <ul className="flex flex-col gap-3 sidebar-nav relative z-20 overflow-y-scroll">
      {menuItems.map((item) => (
        <li
          key={item.href}
          className={`p-4 rounded-xl font-sora transition-colors duration-300 ${
            pathname === item.href ? "active" : "text-neutral-500"
          }`}
        >
          <Link href={item.href} className="flex items-center text-lg">
            {item.remix ? (
              <i
                className={`${item.icon} mr-2 text-[#066dca] text-xl transition-colors duration-300`}
              />
            ) : (
              <FontAwesomeIcon
                icon={item.icon}
                className="mr-2 text-[#066dca] transition-colors duration-300"
              />
            )}
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  
  Admin Category => 
    <p className="text-neutral-500 font-sora tracking-wide py-3">Admin</p>

      <ul className="flex flex-col sidebar-nav gap-3">
        <li className="p-4 rounded-xl text-neutral-500 font-sora transition-colors duration-300">
          <Link href="/Settings" className="flex items-center text-lg">
            <i className="ri-settings-5-line pr-2 text-[#066dca] text-xl transition-colors duration-300" />
            Settings
          </Link>
        </li>
      </ul>
*/

/* Direct Show Without Logic =>

    <ul className="flex flex-col gap-3 sidebar-nav relative z-20">   
      <li className="px-4 py-4 rounded-xl active text-neutral-500 font-sora         transition-colors duration-300">
        <Link href="/Dashboard" className="flex items-center text-lg">
          <FontAwesomeIcon icon={faHome} className="mr-2 text-[#066dca]" />
          Dashboard
        </Link>
      </li>

      <li className="px-4 py-4 rounded-xl text-neutral-500 font-sora transition-colors duration-300">
        <Link href="/Profile" className="flex items-center text-lg">
          <FontAwesomeIcon
            icon={faUserCircle}
            className="mr-2 text-[#066dca] transition-colors duration-300"
          />
          My Profile
        </Link>
      </li>

      <li className="px-4 py-4 rounded-xl text-neutral-500 font-sora transition-colors duration-300">
        <Link href="/Message" className="flex items-center text-lg">
          <FontAwesomeIcon
            icon={faMessage}
            className="mr-2 text-[#066dca] transition-colors duration-300"
          />
          Message
        </Link>
      </li>

      <li className="px-4 py-4 rounded-xl text-neutral-500 font-sora transition-colors duration-300">
        <Link href="/Courses" className="flex items-center text-lg">
          <FontAwesomeIcon
            icon={faClipboard}
            className="mr-2 text-[#066dca] transition-colors duration-300"
          />
          Courses
        </Link>
      </li>

      <li className="px-4 py-4 rounded-xl text-neutral-500 font-sora transition-colors duration-300">
        <Link href="/Wishlist" className="flex items-center text-lg">
          <FontAwesomeIcon
            icon={faBookmark}
            className="mr-2 text-[#066dca] transition-colors duration-300"
          />
          Wishlist
        </Link>
      </li>

      <li className="px-4 py-4 rounded-xl text-neutral-500 font-sora transition-colors duration-300">
        <Link href="/Reviews" className="flex items-center text-lg">
          <FontAwesomeIcon
            icon={faStar}
            className="mr-2 text-[#066dca] transition-colors duration-300"
          />
          Reviews
        </Link>
      </li>

      <li className="px-4 py-4 rounded-xl text-neutral-500 font-sora transition-colors duration-300">
        <Link href="/Settings" className="flex items-center text-lg">
          <i className="ri-settings-5-line mr-2 text-[#066dca] text-xl transition-colors duration-300"></i>
          Settings
        </Link>
      </li> 
    </ul>
*/
