import * as React from 'react';
import Moment from "react-moment";
import { config } from "../../libs/config";

export const Date = (props:IDateProps) =>
    <Moment format={config.site.dateFormat}>
        {props.date}
    </Moment>;
