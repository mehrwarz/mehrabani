import Script from "next/script";
import "./../CSS/DashboardLayout.css"
import { Metadata } from 'next';
import React from 'react';
import Sidebar from "@/app/(ui)/components/sidebar"
import Navbar from "@/app/(ui)/components/Navbar";

export const metadata: Metadata = {
  title: 'Dashboard - Mehrabani',
  description: 'Manage your application settings on Mehrabani.',
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Navbar />
            <Sidebar />
            <main className="contient">
                {children}
            </main>
            <Script src="/JS/DashboardLayout.js" />
        </>
    )
}