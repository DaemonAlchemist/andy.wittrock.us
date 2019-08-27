import * as React from 'react';
import { DropCap } from "../../DropCap";
import { Image } from "../../Image";

const GravityComponent = (props:IPageComponentProps) =>
    <>
        <p><DropCap preview={props.preview}>Y</DropCap>ears ago, when I was still in college and had lots of free time, I played around with physics simulations of various kinds.  One that most programmers try at some point is a classic gravitational simulation.  It's great fun to setup complex arrangements of planets and stars, turn on the simulation, and watch star systems evolve.</p>

        {!props.preview && <>
            <h2>I am become death, the destroyer of worlds</h2>

            <p>After trying numerous generic simulations, I decided to try something a bit more complex:  A collision simulator.  I altered the force equations for the particles, so that when they got close enough together, they would repulse instead of attract.  This caused particles to stick together in clumps.  By simulating small systems, then saving the results, and throwing the clumps into more clumps, I eventually worked up to a planetery collision simulation with over 1,000 particles.  I exported the results to the <a href="http://www.povray.org/">POV-Ray</a> renderer, and entered the animation into the <a href="http://exether.free.fr/irtc/index.php?sub=pg2002&lang=en&auth=andrew_wittrock">Internet Ray Tracing Competition</a>.</p>

            <h2>Is this simulation <em>ever</em> going to finish?</h2>

            <p>Recently, I started thinking about better ways to do animations like that.  The major issue I ran into when creating the full planetary collision was slowness.  A gravity simulation with <em>n</em> particles needed to calculate <em>n<sup>2</sup></em> forces every frame in order to update the particles' positions.  This becomes slow very quickly when you increase the number of particles.  If you're doing scientific simulations, then this is probably the best you can do since accuracy is more important than speed.  However, if your goal is to make a &#8220;cool&#8221; animation, then you can get away with some &#8220;cheating&#8221; as long as it's not too drastic.</p>

            <h2>From up here, they all look like little ants</h2>

            <p>I've done some recent work with <a href="http://en.wikipedia.org/wiki/K-d_tree">kd-trees</a> as a way to create a more efficient nearest neighbor algorithm.  This data structure is useful for organizing points in space so that you can search more efficiently in multiple dimensions.  Another similar data structure is the <a href="http://en.wikipedia.org/wiki/Octree">octree</a> which has a more regular structure than the kd-tree.</p>

            <p>Since my goal is aesthetic rather than scientific, I can speed up force calculations by grouping all of the particles into an octree.  Since a group of points becomes more and more like a single point the further away they get, I can get the force from a particular octree node by averaging the positions of the particles inside the node and treating the node as a single particle.  Thus, the force from a large group of points far away from another point can be calculated with a single operation instead of many.</p>

            <p>Although complete accuracy isn't necessary for a purely visual effect, I don't want the simulation to be <em>too</em> unrealistic.  So, before I start implementing an octree-based simulation, I need to know how much &#8220;cheating&#8221; I can get away with.  To do this, I wrote a PHP script (pasted below) that creates 2x2x2 cubes of 10 random masses at various distances from the origin, and then calculates the magnitude and angle error of the averaged force compared to the actual force.</p>

            <h2>Results</h2>

            <p>As shown in the graphs below, the accuracy is acceptable at surprisingly low distances.  When the edge of the cube is as close to the origin as it is to the center of the cube, the magnitude error is less than 10%, and the angle error is less than 6 degrees.  In order to bring the errors down to 1% and 1 degres respectively, the distance of the cube from the origin needs to be only 2.5 times the side length of the cube!  So, even if there are 100,000 points in the scene, a point which is even somewhat isolated from the rest of the points may only need a handful of force calculations to determine its next position.</p>

            <Image src="/img/gravity/grav_test.png" alt="Simulation Results">Errors for a 2x2x2 cube of 10 points at a distance X from the origin</Image>
        </>}
    </>;

export const gravity:IPage = {
    Component: GravityComponent,
    listed: true,
    published: "2014-04-13",
    tags: ["Algorithms"],
    title: "Gravity",
    updated: "",            
    url: "/gravity",
};
