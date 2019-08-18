import * as React from 'react';
import { Page } from "../Page";
import { PageList } from "../PageList";

export const fullPage = (page:IPage) => () =>
  <Page {...page}>
    <page.Component />
  </Page>;

export const tagPage = (tag:Tag) => () =>
  <Page title={`${tag} Pages`} published={""} tags={[]}>
    <PageList tags={[tag]} />
  </Page>;

export const ScrollToTop = ({history}:any) => {
  React.useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, []);

  return (null);
}
