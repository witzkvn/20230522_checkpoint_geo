import { Country } from "./countryType";

export type Continent = {
    code: string;
    name: string;
    countries?: Country[];
};
