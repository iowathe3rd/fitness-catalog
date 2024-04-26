"use client";
import { useExercize } from "@/hooks/useExercize";

const Home = () => {
  const { exercizes, isError, isLoading } = useExercize();

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(exercizes)}
    </main>
  );
};

export default Home;
