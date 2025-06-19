import Navigation from "@/components/Navigation";
import "./globals.css";
import { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "F[ynary",
  description: "Thesis exhibition 2025 by ICT Silpakorn University",
  keywords: "Thesis, ICT SU, flynary, f[ynary",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
};
export default layout;
