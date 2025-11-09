'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';
import Image from 'next/image';

interface VideoPlayerProps {
  src: string;
  thumbnail: string;
  ariaLabel?: string;
}

export default function VideoPlayer({ src, thumbnail, ariaLabel }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    const video = document.getElementById('tutorial-video') as HTMLVideoElement;
    if (video) {
      video.play();
    }
  };

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
      {/* Video Element */}
      <video
        id="tutorial-video"
        className="absolute inset-0 h-full w-full object-cover"
        controls={isPlaying}
        preload="metadata"
        aria-label={ariaLabel || "Tutorial video"}
        onPlay={() => setIsPlaying(true)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Thumbnail Overlay */}
      {!isPlaying && (
        <div
          className="absolute inset-0 z-10 cursor-pointer"
          onClick={handlePlay}
        >
          {/* Thumbnail Image */}
          <Image
            src={thumbnail}
            alt="Video thumbnail"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-all hover:bg-black/40">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-rose-500/90 shadow-2xl transition-all hover:scale-110 hover:bg-rose-500">
              <Play className="ml-1 h-10 w-10 text-white" fill="white" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
