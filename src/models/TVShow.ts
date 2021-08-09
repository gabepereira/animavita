export interface ITVShow {
  id: string;
  attributes: {
    canonicalTitle: string;
    coverImage?: {
      tiny?: string;
      small?: string;
      large?: string;
      original?: string;
    };
    description?: string;
    episodeCount?: string | null;
    episodeLength?: number;
    popularityRank?: number;
    posterImage?: {
      tiny?: string;
      small?: string;
      medium?: string;
      large?: string;
      original?: string;
    };
    slug?: 'one-piece';
    startDate?: '1999-10-20';
  };
}
