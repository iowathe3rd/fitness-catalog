import { fetcher } from "@/lib/utils";
import { SWRConfiguration } from "swr";

export default {
  fetcher: fetcher,
} satisfies SWRConfiguration;
