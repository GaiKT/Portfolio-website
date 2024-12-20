import React from "react";

interface PreveiwProps {
  project_name: string;
  video_url: string;
}

export default function Preveiw({ video_url, project_name }: PreveiwProps) {
  return (
    <div>
      <div className="mockup-browser bg-base-300 border">
        <div className="mockup-browser-toolbar">
          <div className="input">{project_name}</div>
        </div>
        <div className="bg-base-200 flex justify-center h-96">
          <iframe
            src={`https://www.youtube.com/embed/${getYouTubeVideoID(video_url)}`}
            className="w-full h-full"
            allow="autoplay encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

// Helper function to extract YouTube video ID from URL
function getYouTubeVideoID(url: string): string {
  const match = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/);
  return match ? match[1] : "";
}
