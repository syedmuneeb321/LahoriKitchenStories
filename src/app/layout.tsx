import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lahori Kitchen Stories",
  description: '"Lahori Kitchen Stories" is a website dedicated to showcasing the rich culinary heritage of Lahore, Pakistan. Through a diverse collection of recipes, vivid imagery, and engaging narratives, the site offers a flavorful journey into the heart of Lahori cuisine. Explore traditional dishes, learn about their cultural significance, and embark on a gastronomic adventure that celebrates the vibrant flavors and stories of this historic city. From iconic street food to cherished family recipes, "Lahori Kitchen Stories" is a tribute to the artistry and heritage of Lahori cooking.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f4e640]`}>
        <div className="flex flex-col h-screen">
          <div className="text-center top-0 mb-20">
            <Header />
          </div>
          <div className="flex-grow">
            {children}
          </div>
          <div className="text-center mt-14 bottom-0">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
