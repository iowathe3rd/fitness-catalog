import { createAPIUrl, fetcher } from "@/lib/utils";
import useSWR from "swr";

export const useExercize = () => {
  const url = createAPIUrl(
    process.env.NEXT_PUBLIC_RAPID_API_HOST!,
    "exercises",
  );
  const { data, error, isLoading } = useSWR(url, fetcher);
  return {
    exercizes: data,
    isLoading,
    isError: error,
  };
};
