"use client";

import exercises from "@/mock/exercises";
import ExerciseCard from "./ExerciseCard";

const Exercises = () => {
  // const { exercises, isError, isLoading } = useExercises();

  // if (isError) return <div>failed to load</div>;
  // if (isLoading) return <div>loading...</div>;
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {exercises.map((value, index) => {
        return <ExerciseCard key={index} exercise={value} />;
      })}
    </div>
  );
};

export default Exercises;
