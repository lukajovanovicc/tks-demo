'use client';
import { FC, useRef, useState } from 'react';

interface Props {
  src: string;
  poster: string;
}

const VideoPlayer: FC<Props> = ({ src, poster }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className='relative w-full mx-auto'>
      <video
        ref={videoRef}
        className='w-full h-auto'
        src={src}
        poster={poster}
        onClick={togglePlay}
      ></video>
      <button
        onClick={togglePlay}
        className='absolute top-1/2 flex items-center justify-center text-blue border-b bg-opacity-50 white rounded-full hover:bg-opacity-75 focus:outline-none'
      >
        <svg
          className='w-16 h-16'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M12 19V6l-6 6m0 0l6 6m-6-6h12'
          />
        </svg>
      </button>
    </div>
  );
};

export default VideoPlayer;
