interface IPaginateProps<T> {
    Wrapper:React.StatelessComponent<{}>;
    Component:React.StatelessComponent<{item:T}>;
    data: T[];
    pageSize:number;
    pageSpread:number;
    top?:boolean;
    bottom?:boolean;
}
