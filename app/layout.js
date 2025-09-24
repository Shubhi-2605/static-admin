// app/layout.js

import './globals.css';
import Navbar from '../components/Navbar'; 
import { FormProvider } from '../context/FormContext';  // <-- import provider

export const metadata = {
  title: 'admin-Panel',
  description: 'Admin panel for offers',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Wrap everything in FormProvider */}
        <FormProvider>
          <Navbar />
          <main className="p-6">{children}</main>
        </FormProvider>
      </body>
    </html>
  );
}
