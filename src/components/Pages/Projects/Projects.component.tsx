import * as React from 'react';
import { ProjectCard } from 'src/components/ProjectCard';
import { DropCap } from "../../DropCap";

const ProjectsComponent = (props:IPageComponentProps) =>
    <>
        <p><DropCap preview={props.preview}>O</DropCap>ver the years, I've worked on many projects, both professional and personal.  The most significant ones are listed below.  Most of the projects are either websites/apps or 3D graphics related utilities and programs.</p>
        {!props.preview && <>
            <hr/>
            <ProjectCard
                title="Darkwynd Chronicles"
                technologies={["React", "Redux", "AWS", "S3", "MySQL", "API Gateway", "Serverless", "REST", "Lambda"]}
                languages={["Javascript", "HTML", "CSS"]}
                imageSrc="https://picsum.photos/512/256"
                url="https://www.darkwyndchronicles.com/"
            >
                <b>Darkwynd Chronicles</b> is a webcomic written by <a href="https://twitter.com/Anggell_X" target="blank">Andrea Gell</a> with art by <a href="https://twitter.com/card_queen">Gemma Moody</a>.  I manage the web infrastructure for the comic.  It includes a React public website and a React/Redux private admin site which are both backed by a REST api running on AWS.  
            </ProjectCard>
            <hr/>
            <ProjectCard
                title="Darkwynd Environment Viz Tool"
                technologies={["Unity", "3D Studio"]}
                languages={["C#", "GLSL"]}
                imageSrc="https://picsum.photos/512/256"
                url="https://viz.darkwyndchronicles.com/index.html"
            >
                To simplify the drawing process for the Darkwynd Chronicles project, I created a Unity-based viz tool to allow the artist to more clearly see environment layouts.  Sets are modeled in 3D Studio, and ported into Unity for viewing.  Creating a robust toon shader with crisp uniform lines required custom GLSL shader programming and post-processing effects.
            </ProjectCard>
            <hr/>
            <ProjectCard
                title="DoIt"
                technologies={["React", "Redux", "AWS", "CloudFront", "Api Gateway", "Serverless", "Lambda", "DynamoDB"]}
                languages={["Typescript", "HTML", "CSS"]}
                imageSrc="https://picsum.photos/512/256"
                url="https://do-it.wittrock.us"
            >
                <b>DoIt</b> is a personal task-tracking site built with a React/Redux frontend and REST API backend.  The application is completely serverless:  The frontend is served out of an S3 bucket behind a CloudFront distribution, and the backend API runs on AWS Lambda with a  DynamoDB datastore.  It provides a simple to-do list with basic task dependencies and workflow definitions.
            </ProjectCard>
            <hr/>
        </>}
    </>;

export const projects:IPage = {
    Component: ProjectsComponent,
    listed: false,
    published: "2020-04-16",
    tags: [],
    title: "Projects",
    updated: "",            
    url: "/projects",
};
