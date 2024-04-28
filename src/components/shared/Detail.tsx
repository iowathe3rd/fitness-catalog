import { Exercise } from "@/types";
import Image from "next/image";

export const Detail = (props: Exercise) => {
  return (
    <div className="flex flex-col">
      <Image src={props.gifUrl} width={400} height={400} alt={props.name} />
      <div className="flex flex-col">
        <h1 className="font-bold text-4xl lg:text-7xl text-blue-900 capitalize">
          {props.name}
        </h1>
        <p className="text-lg lg:text-3xl text-gray-700">
          Exercises keep you strong.{" "}
          <span className="capitalize">{props.name}</span> bup is one of the
          best exercises to target your {props.target}. It will help you improve
          your mood and gain energy.
        </p>
      </div>
    </div>
  );
};
