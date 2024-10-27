"use client";

interface CalendarIframeProps {
  calendarUrl: string;
  title?: string;
}

export default function CalendarIframe({
  calendarUrl,
  title = "Schedule a demo meeting",
}: CalendarIframeProps) {
  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden bg-white">
      <iframe
        title={title}
        src={calendarUrl}
        width="100%"
        height="600"
        frameBorder="0"
        className="w-full h-full"
      />
    </div>
  );
}
