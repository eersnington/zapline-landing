import { Sparkles, Phone, Clock } from "lucide-react";
import CalendarIframe from "./_components/google-calender";
import TrustedBy from "@/components/landing/trusted-by";

export default function BookMeetingPage() {
  const calendarUrl =
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3YiuvY6Mll7n9XFCJOlo2urjka3hB2n03HnGRpEe3Klr3FQtRRA4C8avvZrlAS9WRvjs0VtJdr?gv=true";

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 rounded-2xl">
      <TrustedBy />
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center mb-8">
          {/* Left side - Calendar */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="bg-black rounded-3xl p-8 lg:p-12">
              <div className="mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-[#E1FF41] mb-2">
                  Book a brief intro call with the founders
                </h2>
                <p className="text-gray-400">
                  Pick a time that works for a quick look at how Zapline AI can
                  boost your support and revenue—no prep needed.
                </p>
              </div>
              <CalendarIframe calendarUrl={calendarUrl} />
            </div>
          </div>

          {/* Right side - Info */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-black mb-6">
                  Ready to take CX and sales to a{" "}
                  <span className="text-[#E1FF41] bg-black rounded-md px-2 py-1">
                    new level?
                  </span>
                </h1>
                <p className="text-xl text-gray-600">
                  We&apos;ll walk you through Zapline&apos;s features in a
                  quick, no-strings-attached demo. You&apos;ll see how it can
                  ease support and increase sales without lifting a finger.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-black rounded-full p-3">
                    <Clock className="text-[#E1FF41]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      Quick Intro to Break the Ice
                    </h3>
                    <p className="text-gray-600">
                      Just a friendly chat to get to know your brand and see
                      where our voicebot could make an impact.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-black rounded-full p-3">
                    <Phone className="text-[#E1FF41]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      Live Demo, Real Results
                    </h3>
                    <p className="text-gray-600">
                      See our voicebot in action, responding to typical customer
                      scenarios with speed and accuracy.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-black rounded-full p-3">
                    <Sparkles className="text-[#E1FF41]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      Post-Call Report
                    </h3>
                    <p className="text-gray-600">
                      After our call, we’ll send a summary report highlighting
                      potential impact areas and next steps tailored to your
                      brand.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
