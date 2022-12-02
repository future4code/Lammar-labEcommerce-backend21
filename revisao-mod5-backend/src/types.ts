export type movie = {
  id: number;
  title: string;
  year: number;
};

export enum GENDER {
  MALE = "Male",
  FEMALE = "Female",
  OTHER = "Other",
}

export type character = {
  id: number;
  name: string;
  gender: GENDER;
  description?: string;
};
