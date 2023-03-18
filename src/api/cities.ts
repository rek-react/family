import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CitiesType } from "../types/ResponseCities";

export const citiesApi = createApi({
  reducerPath: "citiesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URI}/api/cities`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getCities: builder.query<CitiesType[], { limit?: number; city: string }>({
      query: (arg) => {
        const { limit = 75, city } = arg;
        return {
          url: "/",
          params: {
            limit,
            city,
          },
        };
      },
      transformResponse: (response: CitiesType) => {
        const cities = response;
        let splitCities = [];
        const size = 25;
        for (let i = 0; i < Math.ceil(cities.length / size); i++) {
          splitCities[i] = cities.slice(i * size, i * size + size);
        }
        return splitCities;
      },
    }),
  }),
});
export const { useGetCitiesQuery } = citiesApi;
