import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your Name",
  description: "Your Name - Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster 
          position="bottom-right"
          toastOptions={{
            duration: 5000, 
            style: {
              background: '#1A1A1A',
              color: '#F4F4F4'
            }
          }}
        />
      </body>
    </html>
  );
}
