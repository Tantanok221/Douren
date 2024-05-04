import { useQuery } from "@tanstack/react-query";
import { ArtistPageTypes, ArtistTypes } from "../types/Artist";
import { supabase } from "./supabase";

const fetchArtistPageData = async (
  id: number | undefined,
): Promise<ArtistPageTypes[] | null> => {
  const query = supabase
    .from("Author_Main")
    .select(
      `
  *,
  Author_Tag (
    Tag
  ),
  Author_Product(
    Title,Thumbnail,Preview
  ),
  Event_DM (
    DM,Booth_name,Location,Event(name
    )
  
  
  )
    `,
    )
    .eq("uuid", id);
  const { data } = await query;
  return data;
};

export const artistLoader = (id?: number) => {
  return useQuery({
    queryKey: ["artist", id],
    queryFn: () => fetchArtistPageData(id),
  });
};
