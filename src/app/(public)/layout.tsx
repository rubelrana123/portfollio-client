import Sidebar from "@/components/modules/Sidebar";
import "../../app/globals.css";
import MobileNavbar from "@/components/modules/MobileNavbar";
 

export default function RootLayout({ children } : { children: React.ReactNode }) {
  return (
  
<div className="bg-gray-50 text-gray-800">
  {/* Desktop & Tablet Layout */}
  <div className="hidden md:flex min-h-screen ">
    <Sidebar />
    <main className="flex-1 h-screen overflow-y-auto">{children}</main>
  </div>

  {/* Mobile Layout */}
  <div className="flex flex-col md:hidden min-h-screen">
    <MobileNavbar />
    <main className="flex-1 overflow-y-auto p-4">{children}</main>
  </div>
</div>

  );
}
