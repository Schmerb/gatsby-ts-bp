/**
 *
 * SWR utils
 *
 *  */

import useSWR from "swr"
import { syncWithLocalStorage } from "swr-sync-storage"

//
// use localStorage for caching mechanism
//
syncWithLocalStorage()

const isDev = process.env.NODE_ENV !== "production"

const URL = isDev ? "https://www.our-url.com" : "https://www.our-url.com"

/**
 *
 * Standard swr fetcher
 *
 * */
export const fetchSWR = (key: string | null, fetcher: any) =>
  useSWR(key, fetcher)

/**
 *
 * Query fetcher
 *
 *  */
export const getQueryFetcher = (query: any) => () =>
  fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query,
    }),
  }).then((res: any) => res.json())

export const fetchQuerySWR = (key: string | null, query = "") =>
  useSWR(key, getQueryFetcher(query))
