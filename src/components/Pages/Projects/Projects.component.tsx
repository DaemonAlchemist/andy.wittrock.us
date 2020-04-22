import * as React from 'react';
import { Blink, Flicker, Jitter } from 'react-flicker';
import { ProjectCard } from 'src/components/ProjectCard';
import { DropCap } from "../../DropCap";

const ProjectsComponent = (props:IPageComponentProps) =>
    <>
        <p><DropCap preview={props.preview}>O</DropCap>ver the years, I've worked on many projects, both professional and personal.  The most significant ones are listed below.  Most of the projects are either websites/apps or 3D graphics related utilities and programs.</p>
        {!props.preview && <>

            <ProjectCard
                title="EvilInnocence"
                technologies={["Apache", "Magento", "MySQL", "S3"]}
                languages={["PHP", "HTML", "CSS"]}
                imageSrc="/img/projects/EvilInnocence.png"
                url="https://www.evilinnocence.com/"
            >
                <b>EvilInnocence</b> is an e-commerce site focusing on content for the 3D graphics programs Poser and DAZ Studio.  It is built on a custom CMS platform integrated with the Magento e-commerce system.  Several custom Magento modules were also created to handle the specific business requirements of the site.
            </ProjectCard>

            <ProjectCard
                title="CrossDresser"
                technologies={["3D Graphics", "Algorithms", "Qt"]}
                languages={["C++"]}
                imageSrc="/img/projects/CrossDresser.png"
                url="https://www.evilinnocence.com/crossdresser"
            >
                <b>CrossDresser</b> is a clothing conversion utility for the Poser and DAZ studio programs.  It is designed to automatically convert clothing from one charater to another.  It is build in C++ and a Qt user interface, and utilizes numerous complex algorithms to provide fast and accurate conversions.  Most clothing can be converted in as little as a few seconds.
            </ProjectCard>

            <ProjectCard
                title="Digital Alchemy"
                technologies={["3D Graphics", "Procedural Content", "Poser", "DAZ Studio", "Unity"]}
                languages={["C++", "C#"]}
                imageSrc="/img/projects/DigitalAlchemy.png"
                url="https://www.evilinnocence.com/shop/store/shop-by-theme/digital-alchemy.html"
            >
                <b>Digital Alchemy</b> is a line of procedural content products for Poser and DAZ Studio.  They provide the ability to automatically create randomly generated plants, props, and environments.  The product line is currently being re-implemented into a Unity library in order to provide procedural content for games as well.
            </ProjectCard>

            <ProjectCard
                title="Darkwynd Chronicles"
                technologies={["React", "Redux", "AWS", "S3", "MySQL", "API Gateway", "Serverless", "REST", "Lambda"]}
                languages={["Javascript", "HTML", "CSS"]}
                imageSrc="/img/projects/DarkwyndChronicles.png"
                url="https://www.darkwyndchronicles.com/"
            >
                <b>Darkwynd Chronicles</b> is a webcomic written by <a href="https://twitter.com/Anggell_X" target="blank">Andrea Gell</a> with art by <a href="https://twitter.com/card_queen">Gemma Moody</a>.  I manage the web infrastructure for the comic.  It includes a React public website and a React/Redux private admin site which are both backed by a REST api running on AWS.  
            </ProjectCard>

            <ProjectCard
                title="Darkwynd Environment Viz Tool"
                technologies={["Unity", "3D Studio"]}
                languages={["C#", "GLSL"]}
                imageSrc="/img/projects/DarkwyndViz.png"
                url="https://viz.darkwyndchronicles.com/index.html"
            >
                To simplify the drawing process for the Darkwynd Chronicles project, I created a Unity-based viz tool to allow the artist to more clearly see environment layouts.  Sets are modeled in 3D Studio, and ported into Unity for viewing.  Creating a robust toon shader with crisp uniform lines required custom GLSL shader programming and post-processing effects.
            </ProjectCard>

            <ProjectCard
                title="Darkwynd Story Bible"
                technologies={["React", "AWS", "S3", "Api Gateway", "Lambda"]}
                languages={["Typescript", "HTML", "CSS"]}
                imageSrc="/img/projects/DarkwyndStoryBible.png"
            >
                The Darkwynd story bible is a React site that provides access to story information to the Darkwynd team.  The frontend is built in React, and reads data from a serverless API running on AWS Lambda.  The API pulls the story bible data from an S3 bucket.
            </ProjectCard>

            <ProjectCard
                title="15"
                technologies={["Android", "Unity"]}
                languages={["C#"]}
                imageSrc="/img/projects/15.png"
                url="https://play.google.com/store/apps/details?id=com.evilinnocence.tilepuzzle"
            >
                <b>15</b> is a sliding tile mobile game.  It is built in Unity and the tile movement is run via the Unity physics engine rather than scripted.  The game framework is generalized and new versions can be made by just swapping the images.
            </ProjectCard>

            <ProjectCard
                title="DoIt"
                technologies={["React", "Redux", "AWS", "CloudFront", "Api Gateway", "Serverless", "Lambda", "DynamoDB"]}
                languages={["Typescript", "HTML", "CSS"]}
                imageSrc="/img/projects/DoIt.png"
                url="https://do-it.wittrock.us"
            >
                <b>DoIt</b> is a personal task-tracking site built with a React/Redux frontend and REST API backend.  The application is completely serverless:  The frontend is served out of an S3 bucket behind a CloudFront distribution, and the backend API runs on AWS Lambda with a  DynamoDB datastore.  It provides a simple to-do list with basic task dependencies and workflow definitions.
            </ProjectCard>

             <ProjectCard
                title="Seven"
                technologies={["React", "Redux", "AWS", "Serverless"]}
                languages={["Typescript", "HTML", "CSS"]}
                imageSrc="/img/projects/Seven.png"
                url="https://seven.wittrock.us"
             >
                <b>Seven</b> is a scoring app for a family card game.  It is build in React/Redux and has no backend.  All game data is stored in localstorage.
             </ProjectCard>

             <ProjectCard
                title="Poser Utilities"
                technologies={["React", "Redux", "Qt"]}
                languages={["C++", "Typescript"]}
             >
                To increase throughput, several workflow utilities were created to speed up the development of Poser and DAZ studio content.  Examples include automatic character rigger, product quality checker, and bulk morph extractor.  These utilities together removed about 80% of the non-creative boilerplate work necessary to create, package, and release new content.
             </ProjectCard>

             <ProjectCard
                title="Libraries"
                technologies={["React", "Redux"]}
                languages={["Typscript", "C++"]}
                url="https://github.com/DaemonAlchemist"
             >
                I also am the creator of several useful libraries, including:
                <ul>
                    <li><a href="https://www.npmjs.com/package/the-reducer">the-reducer</a>:  A fully typed Redux reducer creator for relational data.</li>
                    <li><a href="https://www.npmjs.com/package/ts-functional">ts-functional</a>:  A library of useful functional programming utilities.</li>
                    <li><a href="https://www.npmjs.com/package/react-flicker">react-flicker</a>:  For when the <Blink>blink tag</Blink> is <Flicker>not</Flicker> <Jitter>annoying</Jitter> <Jitter count={3}><Flicker>enough</Flicker></Jitter>.</li>
                    <li>C++ libraries:  A large number of proprietary 3d graphics, math, and procedural content libraries written in C++ in the processs of being open-sourced.</li>
                </ul>
             </ProjectCard>
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
