
type Language = "C++" | "Javascript" | "C#";

type Skillset = "Web Development" | "3D Graphics";

type Project = {
    name: string;
    description: JSX.Element;
    languages: Language[];
    skillSets: Skillset[];
}

type Month = {
    year: number;
    month: number;
};

type Job = {
    company: string;
    startDate: Month;
    endDate: Month | "current";
    title: string;
    languages:Language[];
    skillSets: Skillset[];
    projects: Project[];
};