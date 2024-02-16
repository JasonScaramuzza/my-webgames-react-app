import { useQuery } from "@tanstack/react-query";
import FetchBreedList from "./FetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery({
    queryKey: ["pet-adoption/breeds", animal],
    queryFn: FetchBreedList,
  });

  return [results?.data?.breeds ?? [], results.status];
}
