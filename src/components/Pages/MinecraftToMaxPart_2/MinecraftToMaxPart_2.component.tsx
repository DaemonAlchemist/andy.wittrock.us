import * as React from 'react';
import { DropCap } from "../../DropCap";
import { Grid } from "../../Grid";
import { Image } from "../../Image";

const MinecraftToMaxPart2Component = (props:IPageComponentProps) =>
    <>
        <p><DropCap preview={props.preview}>A</DropCap>s I wrote about <a href="http://andy.wittrock.us/minecraft-to-max-converter/">previously</a>, I'm working on a utility to convert <a href="http://www.minecraft.net/">Minecraft</a> levels into a Wavefront OBJ format so I can render my worlds in 3ds Max.  Since my last post, I've added the following features:</p>

        {!props.preview && <>
            <ul>
                <li>You can now choose the region to render.  This reduces the polygon count on the final object, especially if you're just doing a surface render, and don't need all of the cave polygons.</li>
                <li>I exported the default texture set from Minecraft so I could apply the in-game textures to my final model.</li>
                <li>Fixed some chunk boundary issues.  Previously, if a block was at the edge of a chunk, it couldn't tell if it should be rendered or not, since there was no next block to compare to.  This resulted in holes in the final object.  Now, the converter imports all of the chunks before doing the export, so it can check conditions across chunk boundaries.</li>
                <li>The biggest feature I added was the ability to use custom geometry for certain blocks.  So, now the exporter will automatically insert actual torches, doors, fences, flowers and steps where appropriate.  It will also check the extra info for those objects in the level data, so the torches and doors are rotated correctly.  There are many other custom geometries that I could add, but I don't have any in the scenes I wanted to render, so I haven't done them yet.</li>
            </ul>

            <h2>Rendering Minecraft scenes in 3ds Max</h2>

            <p>Once I have the level object imported into 3ds Max, I still need to hook up the materials and setup the lighting.  I used the Mental Ray rendering engine with a dim skylight for ambient light.  I also added a glowing material to the torch flames to get more dynamic lighting in the scene.</p>
            
            <h2>Renders</h2>
            
            <Grid columns={4}>
                <Image src="/img/mc2max/front-door-day-150x150.png" />
                <Image src="http://andy.wittrock.us/wp-content/uploads/2011/12/front-door-night-150x150.png" />
                <Image src="/img/mc2max/valley-day-150x150.png" />
                <Image src="/img/mc2max/valley-night-150x150.png" />
                <Image src="/img/mc2max/overlook-day-150x150.png" />
                <Image src="/img/mc2max/overlook-night-150x150.png" />
                <Image src="/img/mc2max/walkway-day-150x150.png" />
                <Image src="/img/mc2max/walkway-night-150x150.png" />
                <Image src="/img/mc2max/overview-day-150x150.png" />
                <Image src="/img/mc2max/overview-night-150x150.png" />
            </Grid>

            <h2>Still to-do</h2>

            <p>I still need to wrap the utility in a nice interface, and perhaps add some more custom geometry.  Once I find the time to do that, I'll package up the utility and release it here.</p>
        </>}
    </>;

export const minecraftToMaxPart2:IPage = {
    Component: MinecraftToMaxPart2Component,
    published: "2010-06-21",
    tags: ["Minecraft", "3D Graphics", "C++"],
    title: "Minecraft to Max (Part 2)",
    updated: "",            
    url: "/minecraft-to-max-part-2",
};
