"use client";
import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";

export default function DashboardPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Overlay for Mobile */}
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          ></div>
        )}

        {/* Main Content */}
        {/* <div className="flex-1 bg-gray-100 h-screen min-h-screen overflow-y-auto">
          <Navbar setIsOpen={setIsOpen} />
          <div className="main-content p-5 bg-[#f3f8fe]">
            <Main />
          </div>
        </div> */}

        {/* Main Content & Navbar */}
        <div className="flex-1 flex flex-col bg-gray-100 overflow-y-auto">
          <Navbar setIsOpen={setIsOpen} />
          <div className="main-content flex-1 p-5 bg-[#f3f8fe] overflow-y-auto">
            <Main />
          </div>
        </div>
      </div>
    </>
  );
}
