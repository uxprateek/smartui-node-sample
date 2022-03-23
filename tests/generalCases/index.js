let boundingBoxesTest= require( "./boundingBoxes");
let  errorTest= require("./errorSetting");
let ignoredBoxesTest= require("./ignoredBoxes");
let transparencyTest=require("./transparency");
let generalTest=require("./general");

async function test(){

    // username: Username can be found at automation dashboard
    const USERNAME = process.env.LT_USERNAME || "username";

    // AccessKey:  AccessKey can be generated from automation dashboard or profile section
    const KEY = process.env.LT_ACCESS_KEY || "accessKey";

    // gridUrl: gridUrl can be found at automation dashboard
    const GRID_HOST = process.env.GRID_HOST || "@beta-smartui-hub.lambdatest.com/wd/hub";    //connect to beta hub

    // Credentials Object
    let credentials={
        username:USERNAME,
        key:KEY,
        gridHost:GRID_HOST
    }

    // Setup Input capabilities
    let capabilities =require("../../config.json");
    capabilities["user"]=USERNAME;
    capabilities["accessKey"]=KEY;

    // Running General test.
    generalTest(capabilities,credentials).then(function(status){
        console.log("Successfully Executed Test.");
    }).catch(function(err){
        console.log("Test Failed "+err);
    });
    
    // Running Error Setting Test.
    errorTest(capabilities,credentials).then(function(status){
        console.log("Successfully Executed Error Settings Test.");
    }).catch(function(err){
        console.log("Error Seting Test Failed "+err);
    });

    // Running Transparency Test.
    transparencyTest(capabilities,credentials).then(function(status){
        console.log("Successfully Executed Transparency Test.");
    }).catch(function(err){
        console.log("Transparency test Failed "+err);
    });

    // Running Bounding Box test.
    boundingBoxesTest(capabilities,credentials).then(function(status){
        console.log("Successfully Executed Bounding Boxes Test.");
    }).catch(function(err){
        console.log("Bounding Boxes test Failed "+err);
    });

    // Running Ignored Box Test.
    ignoredBoxesTest(capabilities,credentials).then(function(status){
        console.log("Successfully Executed Ignored Boxes Test.");
    }).catch(function(err){
        console.log("Ignored Boxes test Failed "+err);
    });
    
}

test();