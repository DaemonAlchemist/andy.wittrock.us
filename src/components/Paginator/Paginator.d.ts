interface IPaginatorProps {
    curPage:number;
    onClick: (newPage:number) => void;
    pageCount:number;
    pageSpread:number;
}
