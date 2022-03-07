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


async function errorSearchGoogle(){

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
      name: "SmartUi Error Setting Test", // name of the test
      build: "SmartUi Error Setting Build", // name of the build
      "smartUI.project": "errorTest",  //******* NOTE - You need to replace this with your newly created project name. *****/
  
      "smartUI.options": {
        "output": {
          "errorColor": {   // Let's specify the error Color in it.
            "red": 255,
            "green": 0,
            "blue": 0 
          },
          "errorType": "movement",  // For this test we'll have the 'ERROR_TYPE' to be 'MOVEMENT'.
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
          console.log("RESPONSE :", out);
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