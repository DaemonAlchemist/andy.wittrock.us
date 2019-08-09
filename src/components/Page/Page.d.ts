type Tag = "Minecraft" | "C++" | "Front End" | "3D Graphics" | "Algorithms" | "Procedural Content" | "Utilities";

interface IPageProps {
    published:string;
    tags:Tag[];
    title:string;
    updated?:string;
    children?:any;
}

