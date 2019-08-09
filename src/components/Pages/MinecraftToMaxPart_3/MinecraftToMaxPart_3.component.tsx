import * as React from 'react';
import { DropCap } from "../../DropCap";
import { Image } from "../../Image";

const MinecraftToMaxPart3Component = () =>
    <>
        <p><DropCap>N</DropCap>ow that the time-consuming hassles of the holidays, hard drive crashes, new computers, and new jobs are out of the way, I finally have time to work on the Minecraft exporter again.  I dusted off the project a few days ago, and found that despite not working on the exporter since the Halloween update, it still mostly worked.  It only required a few minor changes to exclude the Nether chunk files.</p>

        <h2>Refactoring the Code</h2>

        <p>I've never liked projects which require code changes to incorporate what are essentially configuration changes.  The original version of the exporter contained custom code and a big set of ifs and switches to determine what geometry to load for a particular block.  In other words, if the block IDs ever change or new objects are added, code changes and a re-compile would have been needed to include those changes into the exporter.  So my first task this time around was to generalize the handling of the various Minecraft blocks and objects.</p>

        <Image src="/img/mc2max/missing-object-test-day-150x150.png" left small alt="Missing Object Test">
            Error: torch geometry not found!
        </Image>

        <p>I removed all of the <em>if torch do this else if door do this else if bleh</em> code and replaced it with a new method that reads the block ids and custom object definitions out of a configuration file.  The advantage of this is that changes to block IDs or objects now require a few changes to a text file instead of a re-compile.  It also allows any users of the program to customize the output of the exporter to their needs.  You can use the standard cube for objects like workbenches and furnaces, or replace them with custom objects of your own design.  You can even do things like replace the bottom-most part of a tree with a custom object that has roots!</p>

        <p> The new config system also allows you to test out your config file changes without needing the new custom objects immediately.  If the exporter can't find one of the objects specified in the config file, it will just put a nice big exclamation point in your scene in place of the object.  That way, you can see at a glance which objects are missing.  This test render shows a part of my world which contains numerous missing objects.  I'm remaking all of the custom objects, including the torches and fences, which is why they show up as missing now.</p>

        <h2>Next Steps</h2>

        <p>Now that the geometry creation system has been revamped, the next step will be to create an actual interface around the test rig.  Once that's done, the utility should be ready for a beta release!</p>
	</>;

export const minecraftToMaxPart3:IPage = {
    Component: MinecraftToMaxPart3Component,
    published: "2011-01-13",
    tags: ["Minecraft", "3D Graphics", "C++"],
    title: "Minecraft to Max (Part 3)",
    updated: "",            
    url: "/minecraft-to-max-part-3",
};
