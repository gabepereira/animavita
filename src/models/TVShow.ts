export interface ITVShow {
  id: string;
  attributes: {
    abbreviatedTitles: string[];
    ageRating: 'PG';
    ageRatingGuide: 'Teens 13 or older';
    averageRating: string;
    canonicalTitle: string;
    coverImage: {
      tiny: string;
      small: string;
      large: string;
      original: string;
      meta: object;
    };
    description: string;
    episodeCount: string | null;
    episodeLength: number;
    popularityRank: number;
    posterImage: {
      tiny: string;
      small: string;
      medium: string;
      large: string;
      original: string;
    };
    showType: 'TV';
    slug: 'one-piece';
    startDate: '1999-10-20';
    subtype: 'TV';
    synopsis: string;
  };
}
