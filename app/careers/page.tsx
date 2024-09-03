import React from "react";
import Link from "next/link";
import { Card, CardBody } from "@nextui-org/card";
import { MailIcon } from "lucide-react";

export default function CareersPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">
        Careers at Zapline AI
      </h1>

      <div className="max-w-3xl mx-auto mb-16">
        <p className="text-lg mb-4 text-justify">
          Zapline AI is a lean startup on a mission to revolutionize customer
          support for e-commerce stores. We&apos;re growing rapidly and looking
          for passionate individuals to join our team and make a significant
          impact in the AI-powered customer service space.
        </p>
        <p className="text-lg mb-4 text-justify">
          As a fast-moving startup, we offer a dynamic environment where your
          ideas and contributions can directly shape the future of our product
          and company. We value innovation, creativity, and a strong drive to
          excel in the fast-paced world of AI and e-commerce.
        </p>
        <p className="text-lg mb-4 text-justify">
          While we may not have specific job openings listed at the moment,
          we&apos;re always interested in connecting with talented individuals
          who are excited about our mission and can bring unique skills to our
          team.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-center mb-8">
        Why Join Zapline AI?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardBody>
            <h3 className="text-xl font-semibold mb-4">Rapid Growth</h3>
            <p>
              Be part of a startup that&apos;s quickly making waves in the
              e-commerce and AI industries. Your contributions will have a
              direct and visible impact on our success.
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <h3 className="text-xl font-semibold mb-4">
              Innovative Technology
            </h3>
            <p>
              Work with cutting-edge AI and voice technologies to solve
              real-world problems in customer support and e-commerce.
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <h3 className="text-xl font-semibold mb-4">
              Collaborative Environment
            </h3>
            <p>
              Join a tight-knit team where your voice is heard, and your ideas
              can shape the direction of the product and company.
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <h3 className="text-xl font-semibold mb-4">
              Learning Opportunities
            </h3>
            <p>
              Gain hands-on experience in multiple areas of a growing startup,
              from technology development to business strategy.
            </p>
          </CardBody>
        </Card>
      </div>

      <div className="bg-gray-100 p-8 rounded-lg max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">
          Interested in Joining Our Team?
        </h2>
        <p className="text-lg mb-6">
          We&apos;re always on the lookout for talented individuals who are
          passionate about AI, customer support, and e-commerce. If you think
          you&apos;d be a great fit for Zapline AI, we&apos;d love to hear from
          you!
        </p>
        <Link
          href="mailto:contact@zaplineai.cloud"
          className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <MailIcon className="mr-2" size={20} />
          Send us an email
        </Link>
        <p className="mt-4 text-sm text-gray-600">
          Please include your resume and a brief note about why you&apos;re
          interested in joining Zapline AI.
        </p>
      </div>
    </div>
  );
}
