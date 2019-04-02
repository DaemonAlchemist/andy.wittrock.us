
interface IPage {
    url:string;
    page: IPageProps;
    Component:React.StatelessComponent;
}

interface IConfig {
    site: {
        tagLine: string;
        title: string;
        width: string;
        source: string;
    };
    menu: {
        tags: Tag[];
    }
    pages:IPage[];
}