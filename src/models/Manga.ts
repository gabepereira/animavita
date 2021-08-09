export interface IManga {
  id: string;
  attributes: {
    canonicalTitle: string;
    posterImage: {
      tiny: string;
      small: string;
      medium: string;
      large: string;
      original: string;
    };
    description: string;
  };
}
