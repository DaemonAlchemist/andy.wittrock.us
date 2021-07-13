import { Node, Provider } from "@nteract/mathjax";
import * as React from 'react';
import { DropCap } from "../../DropCap";
import "./Wormholes.less";

const WormholesComponent = (props:IPageComponentProps) =>
    <Provider>
        <p><DropCap preview={props.preview}>I</DropCap>'ve been tinkering with a science fiction setting for a while as a backdrop for possible stories with a galactic scope.  One of the methods of long distance travel I've been considering are wormholes as a way to quickly get from one star system to another.  There are numerous papers describing the space-time metrics of various types of wormholes.  However, from a story-telling perspective, it is useful to know how ships crossing through a wormhole would behave.  Thus, in this article, I attempt to determine how a ship's velocity and energy would change when passing through a wormhole.</p>

        {!props.preview && <>
            <h2>Assumptions</h2>

            <ol>
                <li>Masses of the wormhole mouths are nearly identical</li>
                <li>Masses of the wormhole mouths are much larger than the ship mass</li>
                <li>A wormhole mouth that accepts a ship gains mass equal to the mass of the ship <sup><a href="#">[1]</a></sup></li>
                <li>A wormhole mouth that discharges a ship loses mass equal to the mass of the ship <sup><a href="#">[1]</a></sup></li>
                <li>From 3 and 4, we can ignore the potential energy difference between the entrance and exit systems.  The total mass of both the entrance and exit system does not change as the ship passes through, so there is no potential energy change at either end.</li>
            </ol>

            <h2>Definitions</h2>

            <ul>
                <li>m = mass of ship</li>
                <li>M = mass of entrance wormhole</li>
                <li>N = mass of exit wormhole</li>
                <li>A = total momentum of entrance system</li>
                <li>B = total momentum of exit system</li>
                <li>V<sub>e</sub> = final velocity of the entrance wormhole</li>
                <li>v<sub>x</sub> = initial velocity of the exit wormhole</li>
                <li>v<sub>i</sub> = initial velocity of the ship</li>
                <li>v<sub>f</sub> = final velocity of the ship</li>
                <li>d = velocity change of the exit wormhole</li>
                <li>G = initial kinetic energy of the exit wormhole</li>
            </ul>

            <h2>Initial Conditions</h2>

            <p>For the initial condition calculations, we choose a coordinate system in which the entrance wormhole is stationary.  The ship travels directly into the wormhole on a straight line, so we can keep the calculations all on one axis.</p>

            <h3>The initial ship momentum and energy:</h3>
            <Node>{`A = mv_i`}</Node>
            <Node>{`E = \\frac{1}{2}mv_i^2`}</Node>

            <h3>Final entrance wormhole momentum:</h3>
            <Node>{`A = (M+m)V_e`}</Node>
            <Node>{`V_e=\\frac{A}{M+m}`}</Node>
            <Node>{`V_e=\\frac{mv_i}{M+m}`}</Node>

            <h3>Final entrance wormhole energy</h3>
            <Node>{`F = \\frac{1}{2}(M+m)V_e^2`}</Node>
            <Node>{`=\\frac{1}{2}(M+m)\\left(\\frac{mv_i}{M+m}\\right)^2`}</Node>
            <Node>{`= \\frac{1}{2}\\frac{m^2v_i^2}{M+m}`}</Node>

            <h3>Energy loss:</h3>
            <Node>{`2L=2E-2F`}</Node>
            <Node>{`=mv_i^2 - \\frac{m^2v_i^2}{M+m}`}</Node>
            <Node>{`=v_i^2\\left[m - \\frac{m^2}{M+m}\\right]`}</Node>
            <Node>{`=v_i^2\\frac{mM+m^2-m^2}{M+m}`}</Node>
            <Node>{`=mv_i^2\\frac{M}{M+m}`}</Node>

            <h2>Exit Conditions</h2>

            <p>For the exit condition calculations, we choose a coordinate system where the exit wormhole is traveling in the positive x direction, and align the y plane with the ship's exit vector.  This allows us to ignore one dimension in our calculations.</p>

            <h3>Initial exit momentum:</h3>
            <Node>{`\\mathbf{B}=N<V_x, 0>`}</Node>

            <h3>Final exit momentum (wormhole + ship)</h3>
            <Node>{`\\mathbf{B}=(N-m)<V_x-d\\cos \\theta, -d\\sin \\theta>`}</Node>
            <Node>{`+ m<V_x-d\\cos \\theta+v_f\\cos\\theta, v_f\\sin\\theta-d\\sin\\theta>`}</Node>

            <h3>Solving for the unknown delta-v of the exit wormhole in X and Y, respectively.</h3>
            <p>X:</p>
            <Node>{`(N-m)(V_x-d\\cos\\theta) + m(V_x-d\\cos\\theta+v_f\\cos\\theta) = NV_x`}</Node>
            <Node>{`NV_x-mV_x-Nd\\cos\\theta+md\\cos\\theta + mV_x - md\\cos\\theta + mv_f\\cos\\theta = NV_x`}</Node>
            <Node>{`-Nd\\cos\\theta + mv_f\\cos\\theta = 0`}</Node>
            <Node>{`mv_f\\cos\\theta = Nd\\cos\\theta`}</Node>
            <Node>{`mv_f = Nd, \\text{ }\\theta \\neq \\pm\\frac{\\pi}{2}`}</Node>
            <Node>{`d = \\frac{mv_f}{N}`}</Node>

            <p>Y:</p>
            <Node>{`(N-m)(d\\sin\\theta) = m(v_f\\sin\\theta-d\\sin\\theta)`}</Node>
            <Node>{`Nd\\sin\\theta - md\\sin\\theta = mv_f\\sin\\theta - md\\sin\\theta`}</Node>
            <Node>{`Nd\\sin\\theta = mv_f\\sin\\theta`}</Node>
            <Node>{`Nd = mv_f, \\text{ }\\theta \\neq 0, \\pi`}</Node>
            <Node>{`d = \\frac{mv_f}{N}`}</Node>

            <h3>Initial exit energy</h3>
            <Node>{`2G = NV_x^2`}</Node>

            <h3>Final exit energy</h3>
            <Node>{`2H = (N-m)\\big((V_x-d\\cos\\theta)^2 + (-d\\sin\\theta)^2\\big)`}</Node>
            <Node>{`+ m\\big((V_x-d\\cos\\theta+v_f\\cos\\theta)^2 + (v_f\\sin\\theta-d\\sin\\theta)^2\\big)`}</Node>
            <Node>{`=(N-m)(V_x^2 - 2V_xd\\cos^2\\theta + d^2\\cos^2\\theta + d^2\\sin^2\\theta)`}</Node>
            <Node>{`+ m(V_x^2 - 2V_xd\\cos\\theta + 2V_xv_f\\cos\\theta + d^2*cos^2\\theta - 2dv_f\\cos^2\\theta`}</Node>
            <Node>{`+ v_f^2\\cos^2\\theta + v_f^2\\sin^2\\theta - 2dv_f\\sin^2\\theta + d^2\\sin^2\\theta)`}</Node>
            <Node>{`=(N-m)(V_x^2 - 2V_xd\\cos^2\\theta + d^2) + m(V_x^2 - 2V_xd\\cos\\theta + 2V_xv_f\\cos\\theta + d^2 - 2dv_f + v_f^2)`}</Node>
            <Node>{`=NV_x^2 - 2NV_xd\\cos^2\\theta + Nd^2 - mV_x^2 + 2V_xmd\\cos^2\\theta - md^2`}</Node>
            <Node>{`+ mV_x^2 - 2V_xmd\\cos\\theta + 2V_xmv_f\\cos\\theta + md^2 - 2mdv_f + mv_f^2`}</Node>
            <Node>{`= NV_x^2 - 2NV_xd\\cos^2\\theta + Nd^2 + 2V_xmd\\cos^2\\theta - 2V_xmd\\cos\\theta + 2V_xmv_f\\cos\\theta - 2mdv_f + mv_f^2`}</Node>
            <Node>{`=NV_x^2 + \\frac{m^2v_f^2}{N} - \\frac{2m2v_f2}{N} + mv_f^2`}</Node>
            
            <h3>Energy gain:</h3>
            <Node>{`2J = 2H - 2G`}</Node>
            <Node>{`= NV_x^2 + \\frac{m^2v_f^2}{N} - \\frac{2m^2v_f^2}{N} + mv_f^2 - NV_x^2`}</Node>
            <Node>{`\\frac{m^2v_f^2}{N} - \\frac{2m^2v_f^2}{N} + mv_f^2`}</Node>
            <Node>{`=mv_f^2(\\frac{m}{N} - \\frac{2m}{N} + 1)`}</Node>
            <Node>{`= mv_f^2\\left(\\frac{N - m}{N}\\right)`}</Node>

            <h2>Energy Transfer</h2>

            <h3>Energy lost at entrance = energy gained at exit.</h3>
            <Node>{`2L = 2J`}</Node>
            <Node>{`mv_i^2\\left(\\frac{M}{M+m}\\right) = mv_f^2\\left(\\frac{N-m}{N}\\right)`}</Node>
            <Node>{`v_i^2\\left(\\frac{M}{M+m}\\right) = v_f^2\\left(\\frac{N-m}{N}\\right)`}</Node>
            <Node>{`\\left(\\frac{v_f}{v_i}\\right)^2 = \\frac{MN}{(N-m)(M+m)}`}</Node>
            <Node>{`assume \\text{ }m \\ll M,N`}</Node>
            <Node>{`(\\frac{v_f}{v_i})^2 = \\frac{MN}{MN}`}</Node>
            <Node>{`(\\frac{v_f}{v_i})^2 = 1`}</Node>
            <Node>{`v_f^2=v_i^2`}</Node>
            <Node>{`v_f=v_i`}</Node>

            <h2>Conclusion</h2>

            <p>From this analysis, we can conclude that when a ship travels through a wormhole, it does not change speed relative to the wormhole mouths regardless of the ship's direction of travel, the velocity of the wormhole mouths relative to each other, or the potential energy difference between the wormhole mouths.</p>

            <h2>Non-ideal wormholes</h2>

            <p>In the final energy transfer calculation above, we made the assumption that the ship mass was very much smaller than the wormhole mouths.  However, if that assumption is false, then we can reach a more general result.</p>

            <Node>{`\\left(\\frac{v_f}{v_i}\\right)^2 = \\frac{MN}{(N-m)(M+m)}`}</Node>

            <p>Graphing this out, we find some interesting results.  In the limit of m=0, we have the same result as above:  The ship's velocity does not change as it traverses the wormhole.  However, as m approaches N, v<sub>f</sub> increases without bound relative to v<sub>i</sub>.  This makes intuitive sense.  The exit wormhole loses mass equal to the exiting ship.  If the ship has the same mass as the exit wormhole, it will end up with no mass, and must accelerate to an infinite velocity to balance the momentum of the exiting ship.  What this would mean in reality is that the wormhole would end up being destroyed if a ship with too large of a mass tried to pass through.</p>

        </>}
    </Provider>;

export const wormholes:IPage = {
    Component: WormholesComponent,
    listed: true,
    published: "2021-05-24",
    tags: ["Physics", "Writing"],
    title: "Wormholes",
    updated: "",            
    url: "/wormholes",
};
