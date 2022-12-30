const webdriver = require("selenium-webdriver");
const By = webdriver.By;
var moment = require("moment");

// username: Username can be found at automation dashboard
const USERNAME = process.env.LT_USERNAME || "<Your_Username>";

// AccessKey:  AccessKey can be generated from automation dashboard or profile section
const KEY = process.env.LT_ACCESS_KEY || "<Your_Access_Key>";

const GRID_HOST =
  process.env.GRID_HOST || "@hub.lambdatest.com/wd/hub";    //connect to lambdatest hub

async function searchTextOnGoogle() {
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
    "smartUI.project": "smartuigithub",

    // will generate random smartUI build if not specified
    // "smartUI.build": "<Your Build Name for Selenium Tests>", 

    "smartUI.options": {
      "output": {
        "errorColor": {
          "red": 0,
          "green": 0,
          "blue": 255 
        },
        "errorType": "movement",
        "transparency": 0.3,
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

searchTextOnGoogle();

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
  let url = "https://demo.lambdatest.com/";
  let url2 = "https://demo.lambdatest.com/";
  console.log(url);
  console.log(url2);

  // Page 1
  await driver
    .get(url)
    .then(() => {
      // For Smartui TakeScreenshot
      console.log("taking screenshot ...")
      driver.executeScript(`smartui.takeScreenshot,{"screenshotName":"dom-screenshot"}`).then(out => {
        console.log("RESPONSE :", out)
        return
      });
    })
    .catch((err) => {
      console.log(error);
    });

  // Page 2 
  await driver
    .get(url2)
    .then(() => {

      // For Smartui TakeScreenshot
      console.log("taking screenshot ...")
      driver.executeScript("smartui.takeScreenshot").then(out => {
        console.log("RESPONSE :", out)
        return
      });

      driver.getTitle().then(() => {
        driver.executeScript("lambda-status=passed");
      });
    })
    .catch((err) => {
      error = JSON.stringify(err);
      console.log(error);
      console.log("test failed with reason " + err);
      driver.executeScript("lambda-status=failed");

    });
  driver.quit();
}

