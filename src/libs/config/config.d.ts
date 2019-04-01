
interface IPage {
    url:string;
    component:React.StatelessComponent;
}

interface IConfig {
    site: {
        title: string;
        width: string;
        source: string;
    };
    menu: {
        tags: Tag[];
    }
    pages:IPage[];
}