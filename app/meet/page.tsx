import { Sparkles, Phone, Clock } from "lucide-react";
import CalendarIframe from "./_components/google-calender";

export default function BookMeetingPage() {
  const calendarUrl =
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3YiuvY6Mll7n9XFCJOlo2urjka3hB2n03HnGRpEe3Klr3FQtRRA4C8avvZrlAS9WRvjs0VtJdr?gv=true";

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-12 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          {/* Left side - Calendar */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="bg-black rounded-3xl p-8 lg:p-12">
              <div className="mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-[#E1FF41] mb-2">
                  Book Your Demo
                </h2>
                <p className="text-gray-400">
                  Choose a time that works best for you
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
                  Ready to take your CX to a{" "}
                  <span className="text-[#E1FF41] bg-black rounded-md px-2 py-1">
                    whole new level?
                  </span>
                </h1>
                <p className="text-xl text-gray-600">
                  Book a call to see how our AI voicebot can transform your
                  customer support and save you time and money.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-black rounded-full p-3">
                    <Clock className="text-[#E1FF41]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      Quick Requirements Check
                    </h3>
                    <p className="text-gray-600">
                      We&apos;ll ask a few questions to understand your needs
                      and where our voicebot can help
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-black rounded-full p-3">
                    <Phone className="text-[#E1FF41]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      Live Interaction
                    </h3>
                    <p className="text-gray-600">
                      Try our voicebot and see the magic happen in real-time
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-black rounded-full p-3">
                    <Sparkles className="text-[#E1FF41]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      Tailored to You
                    </h3>
                    <p className="text-gray-600">
                      See specific use cases for your business needs
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
