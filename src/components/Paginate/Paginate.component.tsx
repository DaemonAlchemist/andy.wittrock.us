import * as React from 'react';
import { chunk } from 'ts-functional';
import { Paginator } from '../Paginator';

export const Paginate = <T extends {}>(props:IPaginateProps<T>) => {
    const [curPage, setCurPage] = React.useState(0);
    
    const data:T[][] = chunk<T>(props.pageSize)(props.data);

    return <>
        {props.top && <Paginator
            pageCount={data.length}
            curPage={curPage}
            onClick={setCurPage}
            pageSpread={props.pageSpread}
        />}
        <props.Wrapper>
            {data[curPage].map((item:T, i:number) =>
                <props.Component key={i} item={item} />
            )}
        </props.Wrapper>
        {props.bottom && <Paginator
            pageCount={data.length}
            curPage={curPage}
            onClick={setCurPage}
            pageSpread={props.pageSpread}
        />}
    </>;
}
