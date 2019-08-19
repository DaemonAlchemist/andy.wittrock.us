
type Project = {
    bullets: JSX.Element[];
    description: JSX.Element;
    languages: string[];
    name: string;
    skillSets: string[];
}

type Month = {
    year: number;
    month: number;
};

type Job = {
    bullets: JSX.Element[];
    company: string;
    endDate?: Month;
    projects: Project[];
    startDate: Month;
    title: string;
};
