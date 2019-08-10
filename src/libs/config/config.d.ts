
interface IPage extends IPageProps {
    url:string;
    Component:React.StatelessComponent<IPageComponentProps>;
}

interface IConfig {
    site: {
        author: string;
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