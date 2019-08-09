import * as React from 'react';
import { DropCap } from "../../DropCap";
import { Image } from "../../Image";

const MinecraftToMaxConverterComponent = () =>
    <>
        <Image src="/img/mc2max/house-300x212.png" alt="Home Sweet Home" left>Home sweet home</Image>

        <p><DropCap>T</DropCap>here's a new computer game that has become rather popular lately.</p>

        <p><a href="http://www.minecraft.net/">Minecraft</a> is the perfect game for people who enjoyed building with Lego bricks as a kid.  The player wanders around an infinite natural landscape during the day gather natural resources such as wood from trees, and coal from caves.  The player then uses these resources to build whatever they desire.  However, when night falls, the player had better have made at least one shelter, because the darkness spawns zombies, skeletons, and other baddies whose sole purpose is to kill the player.  You can only survive by crafting a secure shelter, or if that fails, a sword and armor.</p>
        
        <p>Minecraft is a sandbox game, which means that there is no goal other than what the player decides to do.  There are no levels to finish, bosses to defeat, or damsels to rescue.  It is limited only by your imagination.  Some Minecraft players have created very complex creations, including <a href="http://www.youtube.com/watch?v=9Ot39sgEMic">waterslides</a>, the <a href="http://www.reddit.com/r/Minecraft/comments/dlagp/i_have_barred_the_gates_but_cannot_hold_them_for/">Mines of Moria</a>, a recreation of the battle at <a href="http://www.youtube.com/watch?v=qx7UKLCNYjw">Minas Tirith</a> from the Lord of the Rings, and even a working <a href="http://www.youtube.com/watch?v=LGkkyKZVzug">computer</a>!  Yes, you read that right.  Someone made a simulation of a computer inside a computer game.</p>

        <Image src="/img/mc2max/tree-farm-300x212.png" alt="Tree farm" right>
            Torches are just as good as sunlight, right?
        </Image>
        
        <p>I'm not quite that ambitious.  My world consists of a modest house on a hillside, the start of a castle, and a few underground mines.  The underground tree farm is pretty cool, though!</p>
        
        <h2>Beyond 8-bit graphics</h2>
        
        <p>The graphics for Minecraft are very simple compared to most modern computer games.  Every piece of the terrain is a simple cube.  Dynamic lighting is crude, and shadows are non-existent.  Granted, these limitations are natural given the player's ability to alter virtually anything in the environment, but as a hard-core 3D graphics snob, I thought it would be cool to see if I could render my world at a higher quality.  Fortunately, <a href="http://notch.tumblr.com/">notch</a>, the author of Minecraft, decided to publish the <a href="http://minecraftwiki.net/wiki/Development_Resources">file formats</a> for the game's level data.  As a result, many people have created <a href="http://minecraftwiki.net/wiki/Programs_and_Editors">third-party utilities</a> to visualize and interact with the game's data.  So, I decided to jump on the band-wagon, and write a Minecraft to 3D Studio converter.</p>
        
        <p>I wrote up a nice C++ library to read notch's NBT file format, and then created a test harness to iterate over the chunk files for my world, and convert the block data into a Wavefront Object, which I could then import into 3D Studio.  After a few long nights of gnarly pointer shenanigans (death to the Big Endians!), scaling mismatches, and out-of-memory errors, I finally have a prototype.  The gaps in the model are due to Minecraft's level data being saved in strips.  I stopped the conversion early once I could see that it was working correctly.</p>
        
        <Image src="/img/mc2max/max-test-01-1024x608.png" alt="Minecraft world converted to 3D Studio">It works!</Image>
        
        <h2>Future Plans</h2>
        
        <p>My next steps include building a base texture for the world, creating low-poly models for the in-game objects such as chests, workbenches, and furnaces, and lighting the world model with dynamically places torches and sunlight.  I will also need an option to limit the region to convert.  The region in the image above has over 1.6 <em>million</em> polygons, and is probably not even a quarter of my world.  Then, once I wrap a nice interface around the converter, I'll probably put it up for download here for everyone else to enjoy.</p>
	</>;

export const minecraftToMaxConverter:IPage = {
    Component: MinecraftToMaxConverterComponent,
    published: "2010-06-13",
    tags: ["Minecraft", "3D Graphics", "C++"],
    title: "Minecraft to Max Converter",
    updated: "",            
    url: "/minecraft-to-max-converter",
};
