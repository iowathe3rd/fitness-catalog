import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetcher = async (url: string) => {
  const headers = new Headers();
  headers.append("X-RapidAPI-Key", process.env.NEXT_PUBLIC_RAPID_API_KEY!);
  headers.append("X-RapidAPI-Host", process.env.NEXT_PUBLIC_RAPID_API_HOST!);

  const response = await fetch(url, { headers });
  return await response.json();
};

export function createAPIUrl(
  domain: string,
  path: string,
  queries: { [key: string]: string } = {},
): string {
  let apiUrl = `https://${domain}/${path}`;
  const queryString = Object.keys(queries)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(queries[key])}`,
    )
    .join("&");
  if (queryString) {
    apiUrl += `?${queryString}`;
  }
  return apiUrl;
}
