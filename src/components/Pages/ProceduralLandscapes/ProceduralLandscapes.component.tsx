import * as React from 'react';
import { Grid } from 'src/components/Grid';
import { DropCap } from "../../DropCap";
import { Image } from "../../Image";

const ProceduralLandscapesComponent = () =>
    <>
        <p><DropCap>O</DropCap>ne of the first 3d graphics programs I tried way back when was the <a href="http://www.povray.org/">Persistence of Vision raytracer</a>.  POV-Ray really appealed to me since I was a hard-core programmer and not much of an artist.  I could make high-quality graphics, even though I could barely draw tolerable stick-figures.  I've since moved on to using more advanced programs such as 3d Studio, but the idea of creating art with pure code has never left me.</p>

        <h2>Playing God</h2>

        <p>Recently, I've spent some time playing <a href="http://www.minecraft.net/">Minecraft</a>, which generates unique randomized worlds that are created on the fly and are virtually infinite in extent.  By using properly designed procedural algorithms, Minecraft creates a surface world of plains, mountains, and oceans populated by trees, plants, and villages with elaborate cave systems below.  Granted, the worlds are still very blocky and simple, but the variety is still <a href="http://www.reddit.com/r/Minecraftscenery">pretty amazing</a>.  One of my more ambitious projects is to extend this idea beyond blocky voxel worlds, and be able to create a full 3d world completely procedural.</p>

        <h2>Let there be light!' ... *Click*</h2>

        <p>I recently started on the first step of this journey.  You can't have a world without ground, so for the past few months, I've been working on a procedural landscape generator.  I already had modules for handling geometry meshes, so I just needed a method for creating procedural heightmaps.  It's easy enough to iterate over the vertices in a high resolution plane, and set the height as a function of the vertex's x and y coordinates.  However, I didn't want to limit the landscape to a set of pre-canned functions.  I wanted to be able to make whatever landscape I could think of without needed to add new equations to the program and re-compile it every time I had a new idea.</p>

        <h2>The Genesis Machine</h2>

        <p>The solution I decided on was to parse a Lisp-style domain specific language into opcodes and use a custom-built virtual machine to execute the landscape heightmap function.  This was my first experience with virtual machine programming, and it was very enlightening.  In future posts, I'll describe the pieces of this prototype landscape generator.  But in the meantime, here are a few samples of what it's capable of right now.</p>

        <Grid columns={2}>
            <Image src="/img/procedural-landscapes/crater-clay-400x300.png" alt="Crater">Mountains</Image>
            <Image src="/img/procedural-landscapes/volcano-clay-400x300.png" alt="Volcano">Volcano</Image>
            <Image src="/img/procedural-landscapes/valley-clay-400x300.png" alt="Valley">Valley</Image>
            <Image src="/img/procedural-landscapes/mountains-clay-400x300.png" alt="Mountains">Mountains</Image>
        </Grid>
    </>;

export const proceduralLandscapes:IPage = {
    Component: ProceduralLandscapesComponent,
    published: "2014-05-15",
    tags: [],
    title: "Procedural Landscapes",
    updated: "",
    url: "/procedural-landscapes",
};
