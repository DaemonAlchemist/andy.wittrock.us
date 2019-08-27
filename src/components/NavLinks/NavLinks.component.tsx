import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sortBy } from 'atp-pointfree';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { at, reverse } from 'ts-functional';
import { config } from "../../libs/config";
import "./NavLinks.less";

export const NavLinks = (props:INavLinksProps) => {
    const allPages = config.pages
        .filter((page:IPage) => page.listed)
        .sort(sortBy("published"));

    const prevPage:IPageProps|undefined = at<IPageProps>(0)(reverse(allPages.filter((page:IPage) => page.published < props.page.published)));
    const nextPage:IPageProps|undefined = at<IPageProps>(0)(allPages.filter((page:IPage) => page.published > props.page.published));        

    return <div className="nav-links" style={{display: "grid", gridTemplateColumns: "50% 50%"}}>
        <div>
            {prevPage && <Link to={prevPage.url}>
                <FontAwesomeIcon icon={faArrowLeft} /> Prev: {prevPage.title}
            </Link>}
        </div>
        <div style={{textAlign: "right"}}>
            {nextPage && <Link to={nextPage.url}>
                Next: {nextPage.title} <FontAwesomeIcon icon={faArrowRight} />
            </Link>}
        </div>
    </div>;
}
