"use client";

import Image from "next/image";
import { title as titleStyles } from "@/components/primitives";

const TrustedBy = () => {
  const brands = [
    {
      id: 1,
      name: "Brand One",
      logo: "/brands/logo1.jpg",
    },
    {
      id: 2,
      name: "Brand Two",
      logo: "/brands/logo2.png",
    },
    {
      id: 3,
      name: "Brand Three",
      logo: "/brands/logo3.jpg",
    },
    {
      id: 4,
      name: "Brand Four",
      logo: "/brands/logo4.webp",
    },
  ];

  return (
    <section className="w-full py-12 bg-white rounded-lg drop-shadow-lg">
      <div className="container mx-auto px-4">
        <h1 className="text-black leading-tight text-4xl font-bold mb-4 sm:mb-8 text-center">
          Trusted By
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="relative w-48 h-24 sm:w-64 sm:h-32 transition-transform hover:scale-105" // Increased dimensions
            >
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                fill
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70"
                sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 384px" // Adjusted sizes
                quality={90}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
