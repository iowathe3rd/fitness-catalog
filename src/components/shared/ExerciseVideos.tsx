import PageSkeleton from "@/components/loaders/PageSkeleton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExerciseVideos = ({
  exerciseVideos,
  name,
}: {
  exerciseVideos: string[];
  name: string;
}) => {
  if (!exerciseVideos.length) return <PageSkeleton />;

  return (
    <div className="mt-20 p-4 lg:mt-40 lg:p-20">
      <h1 className="font-bold text-4xl lg:text-7xl text-black mb-8">
        Watch <span className="text-red-600 capitalize">{name}</span> exercise
        videos
      </h1>
      <div className="flex flex-wrap gap-8 lg:gap-24 justify-start">
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <Link
            key={index}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            passHref
          >
            <a
              className="exercise-video flex items-start gap-4 lg:gap-8"
              target="_blank"
              rel="noreferrer"
            >
              <div style={{ borderTopLeftRadius: "20px" }}>
                <Image
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                  width={200}
                  height={100}
                />
              </div>
              <div>
                <h2 className="text-2xl lg:text-4xl font-semibold text-black mb-2">
                  {item.video.title}
                </h2>
                <p className="text-sm lg:text-base text-black">
                  {item.video.channelName}
                </p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
