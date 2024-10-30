
type Country = {
    flags: Flags;
    name: Name;
    capital: string[];
    languages: Record<string, string>;
    borders: string[];
    population: number;
    maps: Record<string, string>;
};

type Flags = {
    png: string;
    svg: string;
    alt: string;
};

type Name = {
    common: string;
    official: string;
    nativeName: Record<string, NativeName>;
};

type NativeName = {
    official: string;
    common: string;
};

export default Country;