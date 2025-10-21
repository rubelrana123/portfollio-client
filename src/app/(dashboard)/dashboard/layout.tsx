import { DashboardSidebar } from "@/components/Dashboard/DashboardSidebar"
import type React from "react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <main className="flex-1">{children}</main>
    </div>
  )
}
