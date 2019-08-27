
interface ILink {
    url:string;
    Component:React.StatelessComponent<IPageComponentProps>;
}

interface IPage extends IPageProps, ILink {
}

interface IConfig {
    site: {
        author: string;
        tagLine: string;
        title: string;
        width: string;
        source: string;
        dateFormat: string;
    };
    menu: {
        links: ILink[];
        tags: Tag[];
    }
    pages:IPage[];
}