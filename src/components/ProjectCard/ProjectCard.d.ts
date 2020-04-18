interface IProjectCardProps {
    title: string;
    technologies?:string[];
    languages?:string[];
    imageSrc?:string;
    url?:string;
    sourceCodeUrl?:string;
    children:string | JSX.Element | (string | JSX.Element)[];
}
