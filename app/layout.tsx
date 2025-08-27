import Navbar from '@/components/Navbar'
import React from 'react'
import './globals.css'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title:"Mentoss Learning NextJS",
  description:"NextJS",
  keywords:"Mentoss Webadmin"
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div className="layout-container">
          <Navbar />
          <main className="content">{children}</main>
        </div>
      </body>
    </html>
  )
}