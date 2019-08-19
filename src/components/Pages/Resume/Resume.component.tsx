import * as React from 'react';
import { Grid } from 'src/components/Grid';
import { formatDate } from './Resume.helpers';
import { jobs } from './Resume.jobs';
import "./Resume.less";

const ResumeComponent = (props:IPageComponentProps) =>
    <>
        <h1 style={{textAlign: "center", border: "none"}}>Software Engineer</h1>
        {!props.preview && <>
            <hr />
            {jobs.map((job:Job, i:number) => 
                <div key={i}>
                    <div className="resume-job-title">
                        <h2 style={{marginBottom: "0"}}>{job.title}</h2>
                        <Grid columns={2}>
                            <div><i>{job.company}</i></div>
                            <div style={{textAlign: "right"}}><i>{formatDate(job.startDate)} - {job.endDate ? formatDate(job.endDate) : "Current"}</i></div>
                        </Grid>
                    </div>
                    {!!job.bullets.length && 
                        <>
                            <h3 className="resume-section-header">Highlights</h3>
                            <ul>
                                {job.bullets.map((bullet:JSX.Element, j:number) => 
                                    <li key={j}>{bullet}</li>
                                )}
                            </ul>
                        </>
                    }
                    {!!job.projects.length && 
                        <>
                            <h3 className="resume-section-header">Projects</h3>
                            <Grid columns={2}>
                                {job.projects.map((project:Project, j:number) =>
                                    <div key={j}>
                                        <h3 style={{marginBottom: 0}}>{project.name}</h3>
                                        <p style={{marginTop: 0}}>{project.description}</p>
                                    </div>
                                )}
                            </Grid>
                        </>
                    }
                    <hr />
                </div>
            )}
        </>}
    </>;

export const resume:IPage = {
    Component: ResumeComponent,
    published: "2019-04-07",
    tags: [],
    title: "Résumé",
    updated: "",            
    url: "/resume",
};
