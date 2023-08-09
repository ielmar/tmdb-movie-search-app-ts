export interface Movie {
  id: number;
  title: string;
  year: number;
  image: string;
  overview: string;
}

export type Movies = Movie[];

export interface Error {
  message: string;
}
