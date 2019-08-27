import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

export const Paginator = (props:IPaginatorProps) => {
    const click = (page:number) => () => {
        if(page >= 0 && page < props.pageCount) {
            props.onClick(page);
        }
    }
    const getClass = (thisPage:number, curPage:number) => curPage === thisPage ? "paginator-link current" : "paginator-link"

    const allPages = Array.from(Array(props.pageCount).keys());
    const minSize = props.pageSpread * 2 + 1;
    const start = Math.max(0, Math.min(props.pageCount - minSize, props.curPage - props.pageSpread));
    const end = Math.min(props.pageCount, Math.max(minSize, props.curPage + props.pageSpread + 1));
    const pageList = allPages.slice(start, end);

    return props.pageCount === 1 ? <></> : <div className="paginator">
        <span
            className={getClass(1, 0)}
            key={"first"}
            onClick={click(0)}
        >
            <FontAwesomeIcon icon={faChevronLeft}/>
            <FontAwesomeIcon icon={faChevronLeft}/>
        </span>
        <span
            className={getClass(1, 0)}
            key={"prev"}
            onClick={click(props.curPage - 1)}
        >
            <FontAwesomeIcon icon={faChevronLeft}/>
        </span>
        {(start > 0) && <span>...</span>}
        {pageList.map((i:number) => 
            <span
                className={getClass(props.curPage, i)}
                key={i}
                onClick={click(i)}
            >
                {i + 1}
            </span>
        )}
        {(end < props.pageCount) && <span>...</span>}
        <span
            className={getClass(1, 0)}
            key={"next"}
            onClick={click(props.curPage + 1)}
        >
            <FontAwesomeIcon icon={faChevronRight}/>
        </span>
        <span
            className={getClass(1, 0)}
            key={"last"}
            onClick={click(props.pageCount - 1)}
        >
            <FontAwesomeIcon icon={faChevronRight}/>
            <FontAwesomeIcon icon={faChevronRight}/>
        </span>
    </div>;
}
