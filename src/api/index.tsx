export type ShowType = {
    id: number;
    title: string;
    image?: string;
  };
  
  type ShowApiResType = {
    show: {
      id: number;
      name: string;
      image?: {
        medium: string;
      };
    };
  };
  
  type ShowApiDetailType = {
    id: number;
    name: string;
    premiered: string;
    ended?: string;
    genres?: string[];
    rating?: {
        average: number;
    };
    image?: {
      medium: string;
    };
    summary?: string;
  };
  
  export type ShowDetailType = {
    id: number;
    title: string;
    startDate: string;
    endDate?: string;
    genres?: string[];
    avgRating?: number;
    image?: string;
    summary?: string;
  };
  
  const link = "https://api.tvmaze.com";
  
  /**
   * Function that executes the search query to the api
   * @param {string} query a query from the user
   * @returns {ShowType[]} mappedData the data of each show with names for each attribute
   */
  export const getShowsBySearch = async (query: string) => {
    // remove whitespaces from query
    query = query.trim();
  
    // return an empty array if the query is empty
    if (query.length === 0) return [];
  
    // waiting for the data to be fetched from the api
    const res = await fetch(`${link}/search/shows?q=${query}`);
  
    // asigning the result from the api as an array of shows
    const data: ShowApiResType[] = (await res.json()) as ShowApiResType[];
  
    // each show gets mapped in the mapped data array
    const mappedData: ShowType[] = data.map((el) => ({
      id: el.show.id,
      title: el.show.name,
      image: el.show.image?.medium,
    }));
  
    return mappedData;
  };
  
  export const getShowById = async (id: number) => {
    if (id < 0) {
      return null;
    }
  
    const res = await fetch(`${link}/shows/${id}`);
  
    const data: ShowApiDetailType = (await res.json()) as ShowApiDetailType;
  
    const mappedData: ShowDetailType = {
      id: data.id,
      title: data.name,
      startDate: data.premiered,
      endDate: data.ended,
      genres: data.genres,
      avgRating: data.rating?.average,
      image: data.image?.medium,
      summary: data.summary,
    };
  
    return mappedData;
  };