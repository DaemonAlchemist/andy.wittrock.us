import * as React from 'react';

const jobSorter = (a:Job, b:Job):number => 
    typeof a.endDate === 'undefined' ? -1 :
    typeof b.endDate === 'undefined' ?  1 :
    a.endDate.year !== b.endDate.year ? b.endDate.year - a.endDate.year :
    b.endDate.month - a.endDate.month;


export const jobs:Job[] = [{
    bullets: [
        <>Licensed technology to a leading company in the hobbyist 3d graphics industry.</>,
        <>Designed, implemented, and released several 3d graphics utility products, which received numerous favorable reviews.  Also administered a semi-public beta test, performed technical support for customers, and continued the development life-cycle through several releases.</>,
        <>Designed and implemented a procedural content generation system.</>,
        <>Designed and implemented in-house 3d graphics utilities which reduced product time-to-market by 75%.  Responsible for all aspects of projects, including design, coding, and testing.</>,
        <>Implemented several custom enhancements to the Magento e-commerce system.</>,
        <>Created a library of reusable 3d graphics components in C++, including classes for object meshes, complex algorithms, procedural content generation, and Poser file handling.</>,
    ],
    company: "Self-Employed",
    projects: [{
        bullets: [],
        description: <>Implemented several mobile SEO auditing tools.</>,
        languages: ["PHP", "Javascript"],
        name: "Pure Oxygen Mobile",
        skillSets: [],
    },{
        bullets: [],
        description: <>Inherited partially finished website from previous developer, fixed and implemented several features and launched website.</>,
        languages: ["Ruby on Rails"],
        name: "Simpaction",
        skillSets: [],
    },{
        bullets: [],
        description: <>Cleaned up existing code, ported several forms from Cold Fusion to PHP, and assisted in transferring website to new hosting company.</>,
        languages: ["PHP"],
        name: "Wisconsin Restaurant Association",
        skillSets: [],
    },{
        bullets: [],
        description: <>Implemented a customizable dashboard that integrated data from numerous sources for display to end users as charts, graphs, and data tables.</>,
        languages: ["PHP"],
        name: "Power Systems Engineering",
        skillSets: [],
    },{
        bullets: [],
        description: <>Fixed bugs and implemented new features in an existing site.</>,
        languages: ["PHP", "Javascript"],
        name: "Milio's Subs",
        skillSets: [],
    },{
        bullets: [],
        description: <>Designed and implemented an e-commerce store based on the Magento platform with several custom modules and enhancements.</>,
        languages: ["PHP", "Javascript"],
        name: "EvilInnocence Studios",
        skillSets: [],
    },{
        bullets: [],
        description: <>Designed and implemented a custom webcomic platform, including a single-page application admin interface in React/Redux.</>,
        languages: ["Javascript"],
        name: "Darkwynd Chronicles",
        skillSets: [],
    }],
    startDate: {year: 2002, month: 12},
    title: "Senior Software Engineer",
},{
    bullets: [
        <>Lead the team in developing an API contract between the front-end and middle-tier, standardizing the responses and refactoring the API into a RESTful web service.</>,
        <>Lead designer and front-end architect for several greenfield projects.</>,
        <>Architected a responsive, modularized React/Redux single-page application framework that integrated seamlessly with the legacy framework.</>,
        <>Developed several proofs of concept to evaluate various technology stacks including Angular and React.</>,
        <>Developed intranet applications for internal users utilizing the LAMP stack with PHP and the CodeIgniter framework.</>,
        <>Refactored applications to make them more modular and maintainable, drastically reducing the amount of boilerplate code.</>,
        <>Maintained over a dozen brand sites powered by WordPress.</>,
    ],
    company: "Lemans",
    projects: [],
    startDate: {year: 2015, month: 7},
    title: "Senior Frontend Developer",
},{
    bullets: [
        <>Designed and implemented a weather application library in PHP for use in various weather applications.</>,
        <>Designed and implemented a highly scalable real time severe weather warning service.</>,
        <>Performed extensive load-testing and performance optimization on applications.</>,
        <>Launched web applications via Amazon Web Services.</>,
    ],
    company: "Weather Central, LLC.",
    endDate: {year: 2012, month: 11},
    projects: [],
    startDate: {year: 2011, month: 9},
    title: "Software Engineeer",
},{
    bullets: [
        <>Lead a team of programmers in developing e-commerce solutions for internet retailers.</>,
        <>Streamlined development and release processes.</>,
        <>Refactored core framework to use industry standard technologies such as Zend Framework.</>,
        <>Managed product backlog, and assigned tasks to junior developers</>,
        <>Estimated backlog items, and assisted with sprint planning.</>,
    ],
    company: "Acumium, LLC.",
    endDate: {year: 2011, month: 6},
    projects: [],
    startDate: {year: 2011, month: 1},
    title: "Lead GravityMarket Developer",
},{
    bullets: [
        <>Responsible for enhancing the core engine and admin interface of GravityStream, Covario’s SaaS SEO solution.</>,
        <>Refactored the core of the GravityStream framework to use an object oriented DOM, reducing client specific programming time and lines of code by a factor of 20.</>,
        <>Added Unicode support to GravityStream, allowing the system to be internationalized.</>,
        <>Created a standardized configurable client implementation, reducing custom code for clients by 80% and reducing the need for programmers when rolling out a new client build.</>,
    ],
    company: "Covario, Inc.",
    endDate: {year: 2010, month: 12},
    projects: [],
    startDate: {year: 2010, month: 1},
    title: "Senior GravityStream Developer",
},{
    bullets: [
        <>Developed customized SaaS SEO solutions for numerous clients.</>,
        <>Designed and implemented a new SaaS product to automatically create mobile versions of client websites.</>,
    ],
    company: "Netconcepts, LLC.",
    endDate: {year: 2009, month: 12},
    projects: [],
    startDate: {year: 2009, month: 1},
    title: "GravityStream Implementation Developer",
},{
    bullets: [
        <>Implemented highly customized e-commerce solutions for mid-market internet retailers built on an MVC based website platform.</>,
        <>Initiated several refactoring projects to increase the flexibility and extensibility of the core platform.</>,
        <>Performed back-end integrations with several third-party vendors, including PayPal, Authorize.net, Givex, and Prism.</>,
    ],
    company: "Netconcepts, LLC.",
    endDate: {year: 2008, month: 12},
    projects: [],
    startDate: {year: 2008, month: 2},
    title: "GravityMarket Developer",
},{
    bullets: [
        <>Designed and programmed internet applications using PHP and MS-SQL.</>,
        <>
            Solely responsible for several large projects, including:
            <ul>
                <li>Project tracking system for a commercial construction company.</li>
                <li>Online exam management system for a cosmetic dentistry accreditation organization.</li>
            </ul>
        </>,
        <>
            Participated in design and development of several projects, including:
            <ul>
                <li>Object oriented website application framework</li>
                <li>Customer relationship management system</li>
                <li>Time clock/payroll system</li>
                <li>Interactive weight loss competition website</li>
            </ul>
        </>,
    ],
    company: "Clarity Technology Group",
    endDate: {year: 2007, month: 12},
    projects: [],
    startDate: {year: 2007, month: 5},
    title: "Web Application Programmer",
}, {
    bullets: [
        <>Designed and implemented large-scale medical software projects</>,
        <>Specialized in EMFI (Enterprise Master File Index), which handles transferring data between separate deployments of Epic software.</>,
        <>Took ownership of broad project areas, including version skew (transforming data between different versions of Epic software), and general usability.</>,
        <>Responsible for entire project life-cycles, from analysis and design, through coding, testing, and support.</>,
    ],
    company: "Epic Systems",
    endDate: {year: 2007, month: 4},
    projects: [],
    startDate: {year: 2005, month: 2},
    title: "Software Developer",
}].sort(jobSorter);
