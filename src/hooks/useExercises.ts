import { createAPIUrl, fetcher } from "@/lib/utils";
import { Exercise } from "@/types";
import useSWR from "swr";

export const useExercises = (): {
  exercises: Exercise[];
  isLoading: boolean;
  isError: any;
} => {
  const url = createAPIUrl(
    process.env.NEXT_PUBLIC_RAPID_API_HOST!,
    "exercises",
  );
  const { data, error, isLoading } = useSWR(url, fetcher);
  return {
    exercises: data,
    isLoading,
    isError: error,
  };
};

export const useExercisesMock = (): {
  exercises: Exercise[];
  isLoading: boolean;
  isError: any;
} => {
  const url = createAPIUrl(
    process.env.NEXT_PUBLIC_RAPID_API_HOST!,
    "exercises",
  );
  const { data, error, isLoading } = useSWR(url, fetcher);
  return {
    exercises: data,
    isLoading,
    isError: error,
  };
};
