import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";

export default function DashboardPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex min-h[100vh] h-100vh overflow-y-hidden">
        <Sidebar isOpen={isOpen} />
      </div>
    </>
  );
}
