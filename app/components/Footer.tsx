import React from 'react'

export default function Footer() {
  return (
    <footer className="footer text-accent bg-primary items-center justify-center p-4">
      <aside className="grid-flow-col items-center">
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
    </footer>
  )
}
