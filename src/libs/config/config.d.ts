
interface IPage {
    url:string;
    component:React.StatelessComponent;
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