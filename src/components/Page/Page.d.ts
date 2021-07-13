type Tag = "Minecraft" | "C++" | "Front End" | "3D Graphics" | "Algorithms" | "Procedural Content" | "Utilities" | "Physics" | "Writing";

interface IPageProps {
    children?:any;
    listed:boolean;
    preview?:number;
    published:string;
    tags:Tag[];
    title:string;
    updated?:string;
    url:string;
}

interface IPageComponentProps {
    preview?:boolean;
}