export interface ICharacter {
  id: string;
  attributes: {
    canonicalName: string;
    image: {
      original: string;
    };
    description: string;
    otherNames: string[];
  };
}
