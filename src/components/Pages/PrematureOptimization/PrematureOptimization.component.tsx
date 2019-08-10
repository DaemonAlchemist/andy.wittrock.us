import * as React from 'react';
import { DropCap } from 'src/components/DropCap';
import { Quote } from "../../Quote";

const PrematureOptimizationComponent = (props:IPageComponentProps) =>
    <>
        <Quote author="Donald Knuth">
            &#8220;We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil&#8221;
        </Quote>

        <h2> Correct &gt; Fast</h2>

        <p><DropCap preview={props.preview}>I</DropCap>'ve always tried to keep the above quote in mind when programming.  My first priority is to get my programs working correctly, and only then do I go back and try to make them more efficient, usually with the help of a good profiler.  Recently, the importance of profiling before optimizing was re-inforced in a big way.</p>

        {!props.preview && <>
            <h2>Filling the gaps</h2>

            <p>When converting clothing from one Poser figure to another, my <a href="http://www.evilinnocence.com/crossdresser">CrossDresser</a> clothing conversion application welds the seams of the clothing together.  Different figures often have different polygon groupings, and when regrouping a clothing for a new figure, seams can appear at the boundaries of the original groups if the clothing creator didn't weld the original object.</p>

            <p>Welding an object in a consistent way is a somewhat complicated algorithm.  I decided to tackle it in the following way:</p>
            
            <ol>
                <li>Create a nearest neighbor class using a kd-tree containing the vertices of the object.</li>
                <li>Create a graph object with each vertex of the object being a vertex in the graph.</li>
                <li>For each vertex in the object, use the nearest neighbor class to find all vertices within the weld tolerance.</li>
                <li>Add edges to the graph between each pair of vertices that are within the weld tolerance of each other.</li>
                <li>Walk the graph until each vertex has been visited, and generate a list of vertices to weld.</li>
                <li>Weld the specified vertices.</li>
            </ol>

            <h2>Too slow</h2>

            <p>Given the complex nature of the weld algorithm, I wasn't surprised when it was somewhat slow.  After being annoyed with it for several months, I found the time to go back and try to optimize it.  Initially, I guessed that the algorithm I was using was simply inefficient, and needed to be redesigned from scratch to be more efficient.  However, before I invested my time in a massive rewrite, I ran the code through the a code profiler to see where the bottlenecks were.</p>

            <h2>Nothing can stop us now</h2>

            <p>As it turns out, my guess was completely wrong!  The actual bottleneck was in a place that I would have never guessed.  In the code that implemented a breadth-first search of the graph, I needed a way to track which vertices had been accessed, so I initializing a boolean array filled with false.  This array had one entry for each vertex in the graph, and the entry was set to true when the vertex was visited.  Unfortunately, this array was initialized every time a new breadth-first search was started.  Since the weld graph was very sparse (almost all subgraphs consisted of two or less vertices), this happened a huge number of times.  Almost 90% of the running time was taken up with initializing an empty variable!  When I replaced the array with an empty set of vertices which was given a new entry whenever a vertex was visited, the running time dropped immensely.</p>

            <h2>Don't guess.  Know.</h2>
            <p>Although I was already a believer in profiling before optimizing, this was a very good example of why you should do so.  I've found in most cases that when it comes to guessing where a bottleneck might be, I might as well be blind.</p>					
        </>}
    </>;

export const prematureOptimization:IPage = {
    Component: PrematureOptimizationComponent,
    published: "2014-06-26",
    tags: ["3D Graphics", "Algorithms", "C++"],
    title: "Premature Optimization",
    updated: "",
    url: "/premature-optimization",
};
