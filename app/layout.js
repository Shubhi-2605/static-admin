// app/layout.js

import './globals.css';
import Navbar from '../components/Navbar'; // Make sure the path is correct

export const metadata = {
  title: 'admin-Panel',
  description: 'Admin panel for offers',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
