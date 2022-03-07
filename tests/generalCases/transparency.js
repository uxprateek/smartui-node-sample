/**************************************************************************************************
 *                          Demo For Test Setting Option - Transparency
 * 
 * While we specify the test settings in capabilities under 'SMARTUI.OPTIONS' we can spacify the Traparency of the comparison
 * Screenshots so that the error color can be spotted more easily.
 * 
 * Example :  
            let capabilities = {
            ...
                "smartUI.options": {
                "output": {
                     "transparency": 0.3,  // This specify the opacity of the comparison screenshot.
                    ...
                },
                ...
                }
            ...
            }
 
 *                                             How to run this test
    * First go to your Smart Ui project and create a new project.(eg name="transparencyTest")
    * Next, Update value of "smartUI.project": "tranparencyTest".
    * Then, Run the test by using command 'node transparency.js' on line 74 . This will run your first build and create the first screenshot
      which will be BASELINE Screenshot by default.

    * To run the comparison test you need to Update the value of 'waitTime=4' on line 32.  
***************************************************************************************************/

const webdriver = require("selenium-webdriver");
var moment = require("moment");
var waitTime = 4

async function transparencySearchGoogle(){
      
    // username: Username can be found at automation dashboard
    const USERNAME = process.env.LT_USERNAME || "username";

    // AccessKey:  AccessKey can be generated from automation dashboard or profile section
    const KEY = process.env.LT_ACCESS_KEY || "accessKey";

    // gridUrl: gridUrl can be found at automation dashboard
    //const GRID_HOST = process.env.GRID_HOST || "@hub.sushobhit.dev.lambdatest.io/wd/hub";    //dev
    const GRID_HOST =
    process.env.GRID_HOST || "@beta-smartui-hub.lambdatest.com/wd/hub";    //connect to beta hub

    // Setup Input capabilities
    let capabilities = {
      platform: "Windows 10",
      browserName: "chrome",
      version: "latest",
      queueTimeout: 300,
      visual: true,
      "user": USERNAME,
      "accessKey": KEY,
      name: "SmartUi Transparency Test", // name of the test
      build: "Smart Ui Transparency Build", // name of the build
      "smartUI.project": "transparencyTest",  //******* NOTE - You need to replace this with your newly created project name. *****/
  
      "smartUI.options": {
        "output": {
          "transparency": 0.5,  // This specify the opacity.
        }
      }
    };
  
    var gridUrl = "https://" + USERNAME + ":" + KEY + GRID_HOST;
    console.log("Running tests ");
    startTest(gridUrl, capabilities, "Test 1");
    
}

async function startTest(gridUrl, capabilities, name) {
  const caps = capabilities;
  var start_date = moment();

  const driver = await new webdriver.Builder()
    .usingServer(gridUrl)
    .withCapabilities(caps)
    .build();

  var end_date = moment();
  var duration = moment.duration(end_date.diff(start_date));
  console.log(caps.name, " : Setup Time :", duration.asSeconds());

  // navigate to a url
  let url = "https://www.lambdatest.com";

  await driver
    .get(url)
    .then(function () {
      // For Smartui TakeScreenshot
      setTimeout(function () {
        console.log("taking screenshot ...")
        driver.executeScript("smartui.takeScreenshot").then(out => {
          console.log("RESPONSE :", out)
        });
      }, waitTime * 1000);


      driver.getTitle().then(function (title) {
        setTimeout(function () {
          driver.executeScript("lambda-status=passed");
          driver.quit();
        }, 15000);
      });
    })
    .catch(function (err) {
      error = JSON.stringify(err);
      console.log(error);
      console.log("test failed with reason " + err);
      driver.executeScript("lambda-status=failed");
      driver.quit();
    });
}

transparencySearchGoogle();