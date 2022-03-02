/**************************************************************************************************
 *                          Demo For Test Setting Option - ErrorType and Error Color
 * 
 * While we specify the test settings in capabilities under 'SMARTUI.OPTIONS' we specify the type of error 
 * and what color to display that color in.
 * 
 * Example :  
            let capabilities = {
            ...
                "smartUI.options": {
                "output": {
                    "errorColor": {   // This color is to specify the color the mismatched pixels.
                    "red": 200,
                    "green": 0,
                    "blue": 255
                    },
                    "errorType": "movement",  // This specify the type of error. It can have two values 'MOVEMENT' or 'FLAT'.
                    ...
                },
                ...
                }
            ...
            }
 

 *                                             How to run this test
    * First go to your Smart Ui project and create a new project.(eg name="errorTest")
    * Next, Update value of "smartUI.project": "errorTest".
    * Then, Run the test by using command 'node errorSetting.js' on line 70 . This will run your first build and create the first screenshot
      which will be BASELINE Screenshot by default.

    * To run the comparison test you need to Update the value of 'waitTime=4' on line 38.  
***************************************************************************************************/

const webdriver = require("selenium-webdriver");
var moment = require("moment");
var waitTime = 2

// username: Username can be found at automation dashboard
const USERNAME = process.env.LT_USERNAME || "username";

// AccessKey:  AccessKey can be generated from automation dashboard or profile section
const KEY = process.env.LT_ACCESS_KEY || "accessKey";

// gridUrl: gridUrl can be found at automation dashboard
//const GRID_HOST = process.env.GRID_HOST || "@hub.sushobhit.dev.lambdatest.io/wd/hub";    //dev
const GRID_HOST =
process.env.GRID_HOST || "@beta-smartui-hub.lambdatest.com/wd/hub";    //connect to beta hub

async function errorSearchGoogle(){
    var keys = process.argv;
    let parallelCount = keys[2] || 1;
    let tunnel = keys[3] || false;
    let platform = keys[4] || "Windows 10";
    let browserName = keys[5] || "chrome";
    let version = keys[6] || "latest";
  
    // Setup Input capabilities
    let capabilities = {
      platform: platform,
      browserName: browserName,
      version: version,
      queueTimeout: 300,
      visual: true,
      "user": USERNAME,
      "accessKey": KEY,
      name: browserName + platform + version, // name of the test
      build: platform + browserName + version, // name of the build
      "smartUI.project": "errorTest",  //******* NOTE - You need to replace this with your newly created project name. *****/
  
      "smartUI.options": {
        "output": {
          "errorColor": {   // Let's specify the error Color in it.
            "red": 255,
            "green": 0,
            "blue": 0 
          },
          "errorType": "movement",  // For this test we'll have the 'ERROR_TYPE' to be 'MOVEMENT'.
          "transparency": 1,
          "largeImageThreshold": 100,
          "useCrossOrigin": false,
          "outputDiff": true
        },
        "scaleToSameSize": true,
        "ignore": "antialiasing"
      }
    };
  
    var gridUrl = "https://" + USERNAME + ":" + KEY + GRID_HOST;
    console.log(gridUrl);
    console.log(capabilities);
    console.log("Running " + parallelCount + " parallel tests ");
    let i = 1;
    for (i = 1; i <= parallelCount; i++) {
      startTest(gridUrl, capabilities, "Test " + i);
    }
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
  console.log(url);


  await driver
    .get(url)
    .then(function () {
      const session = driver.getSession();

      // For Smartui TakeScreenshot
      setTimeout(function () {
        console.log("taking screenshot ...")
        driver.executeScript("smartui.takeScreenshot").then(out => {
          console.log("RESPONSE :", out)
          return;
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

errorSearchGoogle();