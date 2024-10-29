"use client";

import Image from "next/image";

const TrustedBy = () => {
  const brands = [
    {
      id: 1,
      name: "Brand One",
      logo: "/brands/logo1.png",
      width: 120, // Smaller dimensions for larger logos
      height: 60,
    },
    {
      id: 2,
      name: "Brand Two",
      logo: "/brands/logo2.webp",
      width: 120, // Smaller dimensions for larger logos
      height: 60,
    },
    {
      id: 3,
      name: "Brand Three",
      logo: "/brands/logo3.webp",
      width: 160, // Original dimensions for smaller logos
      height: 80,
    },
    {
      id: 4,
      name: "Brand Four",
      logo: "/brands/logo4.png",
      width: 160, // Original dimensions for smaller logos
      height: 80,
    },
  ];

  return (
    <section className="w-full py-12 rounded-lg drop-shadow-lg">
      <div className="container mx-auto px-4">
        <h1 className="text-black leading-tight text-4xl font-bold mb-4 sm:mb-8 text-center">
          Trusted By
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="relative transition-transform hover:scale-105"
              style={{
                width: brand.width,
                height: brand.height,
              }}
            >
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                fill
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70"
                sizes={`${brand.width}px`}
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
