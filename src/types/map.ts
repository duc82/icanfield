export interface Region {
  name: string;
  propertyName: string;
  code: string;
  countries?: string[];
  flag: string;
}

export interface Program {
  title: string;
  slug: string;
  image: string;
  budget: string;
  duration: string;
  languages: string[];
  regionCode: string;
}
