"use client";

import { useExercises } from "@/hooks/useExercises";
import ExerciseCard from "./ExerciseCard";

const Exercises = () => {
  const { exercises, isError, isLoading } = useExercises();

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="container">
      {exercises.map((value, index) => {
        return <ExerciseCard key={index} exercise={value} />;
      })}
    </div>
  );
};

export default Exercises;
