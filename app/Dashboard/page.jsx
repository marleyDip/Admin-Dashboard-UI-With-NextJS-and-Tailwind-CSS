"use client";
import { useState } from "react";
import Sidebar from "./Components/Sidebar";


export default function DashboardPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex min-h-[100vh] h-screen overflow-y-hidden">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
}
