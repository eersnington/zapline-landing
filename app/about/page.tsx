import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardBody } from "@nextui-org/card";
import { LinkedinIcon } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">About Zapline AI</h1>

      <div className="max-w-3xl mx-auto mb-16 text-justify">
        <p className="text-lg mb-4">
          At Zapline AI, we&apos;re on a mission to revolutionize customer
          support for e-commerce stores. Our journey began when we faced the
          challenges of receiving quick support during crucial moments while
          working closely with e-commerce businesses for over a year.
        </p>
        <p className="text-lg mb-4">
          We realized that traditional support methods were falling short,
          leaving customers frustrated and businesses overwhelmed. That&apos;s
          when we decided to create Zapline AI – a solution that provides zappy
          support to your customers, automating up to 60% of customer queries
          and resolving issues in under a minute.
        </p>
        <p className="text-lg">
          Our Alexa-like voicebot is built specifically for e-commerce, offering
          predefined actions for smooth operations and allowing your team to
          focus on what humans do best while AI handles the rest. With Zapline
          AI, we&apos;re not just improving customer support – we&apos;re
          elevating the entire customer experience.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardBody>
            <div className="flex flex-col items-center">
              <Image
                src="/profile-sarvesh-bw.png"
                alt="Sarvesh Sakthivel"
                width={256}
                height={256}
                className="rounded-full mb-4"
              />
              <h2 className="text-xl font-semibold">Sarvesh Sakthivel</h2>
              <h3 className="text-lg text-gray-600 mb-2">Co-Founder & CEO</h3>
              <Link
                href="https://www.linkedin.com/in/sarvesh-sakthivel-3162a51b0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <LinkedinIcon size={24} />
              </Link>
            </div>
            <p className="mt-4 text-justify px-4">
              As the visionary leader of Zapline AI, Sarvesh brings a wealth of
              experience in building automated call support systems for Shopify
              stores. His strategic insight and expertise in managing customer
              support and AI voice bots have been instrumental in business
              direction and vision of the company.
            </p>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <div className="flex flex-col items-center">
              <Image
                src="/profile-sree-bw.png"
                alt="Sree Narayanan"
                width={256}
                height={256}
                className="rounded-full mb-4"
              />
              <h2 className="text-xl font-semibold">Sree Narayanan</h2>
              <h3 className="text-lg text-gray-600 mb-2">Co-Founder & CTO</h3>
              <Link
                href="https://www.linkedin.com/in/sreenington/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <LinkedinIcon size={24} />
              </Link>
            </div>
            <p className="text-justify mt-4 px-4">
              Sree is the mastermind in shaping Zapline AI&apos;s core tech.
              With his expertise in machine learning, API development, and
              full-stack development, he ensures that our AI-powered support
              system is robust, scalable, and cutting-edge.
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
