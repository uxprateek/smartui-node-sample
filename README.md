 Smart UI Testing With Selenium Node.JS ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

<img height="400" src="https://user-images.githubusercontent.com/126776938/232535511-8d51cf1b-1a33-48fc-825c-b13e7a9ec388.png">


<p align="center">
  <a href="https://www.lambdatest.com/blog/?utm_source=github&utm_medium=repo&utm_campaign=playwright-sample" target="_bank">Blog</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.lambdatest.com/support/docs/?utm_source=github&utm_medium=repo&utm_campaign=playwright-sample" target="_bank">Docs</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.lambdatest.com/learning-hub/?utm_source=github&utm_medium=repo&utm_campaign=playwright-sample" target="_bank">Learning Hub</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.lambdatest.com/newsletter/?utm_source=github&utm_medium=repo&utm_campaign=playwright-sample" target="_bank">Newsletter</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.lambdatest.com/certifications/?utm_source=github&utm_medium=repo&utm_campaign=playwright-sample" target="_bank">Certifications</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.youtube.com/c/LambdaTest" target="_bank">YouTube</a>
</p>
&emsp;
&emsp;
&emsp;

*Learn the how to get started with Smart UI testing with Selenium Node.JS on the LambdaTest platform.*

[<img height="58" width="200" src="https://user-images.githubusercontent.com/70570645/171866795-52c11b49-0728-4229-b073-4b704209ddde.png">](https://accounts.lambdatest.com/register?utm_source=github&utm_medium=repo&utm_campaign=playwright-sample)


## Table of Contents:

* [Pre-requisites](#pre-requisites)
* [Running Your First Selenium Node JS Test](#running-your-first-selenium-node-js-test)
* [Examples For Different Use Cases](#examples-for-different-use-cases)

## Pre-requisites

1. To get started, you would require the Node version >=14.
  ```
  node --version
  ```

2. You can switch the Node version by running the below command:
  ```
  nvm install 12.0.0
  node --version
  ```

## Running Your First Selenium Node JS Test

1. Before getting started, set the LambdaTest Username and Access Key in environment variables.

 **Windows**

```js
set LT_USERNAME="YOUR_USERNAME" 
set LT_ACCESS_KEY="YOUR ACCESS KEY"
```

**macOS/Linux**

```js
export LT_USERNAME="YOUR_USERNAME" 
export LT_ACCESS_KEY="YOUR ACCESS KEY"
```

2. Clone the `smartui-node-sample` Repo.
  ```
  git clone https://github.com/LambdaTest/smartui-node-sample
  ```

3. Install the Dependencies.
  ```
  npm i
  ```


## Examples For Different Use Cases

We have many different examples revolving around different use cases. They are as follows:

### General Capability Change Test Cases

   * `index.js` - This Test is an example of all the **advanced funtionalities** possible with Smart UI.
  
      ```
      npm start
      ```
   * `general.js` - This Test is an example of all the **general test**
   
        ```
        npm start general
        ```
       
   * `errorSetting.js` - This Test is an example of how **error settings** can be modified.
   
      ```
      npm start error
      ```
      
   * `transparency.js` - This Test is to show how to **alter the opacity** of the comparison screenshot.
   
      ```
      npm start transparency
      ```
      
   * `BoundingBoxes.js` - This Test shows an example of comparing only a **certain area** in the screenshot.
   
      ```
      npm start boundingBoxes
      ```
      
   * `ignoredBoxes.js` - This test is for **excluding certain areas** in the screenshot for comparison.
   
      ```
      npm start ignoredBoxes
      ```
      
   * `ignoreAreasColoredWith.js` - This test is for **removing the colored content** from the comparison.
   
      ```
      npm start ignoreAreasColoredWith
      ```
      
### Execute Tests on Multiple Resolutions

If you want to execute Visual Regression tests on multiple resolutions, you need to add the capability `resolution` in capabilities option.
```
  let capabilities = {
      ...
      resolution = "1920x1080";
      ...
  }
```
Few common resolutions are:
- 1024x768
- 1280x800
- 1600x1200
- 1920x1080
- 2560x1440

Here is the code for all the commonly used resolutions:

#### Run Test on `1024x768` resolution 
```
$ node custom-resolutions.js 1024x768
```

#### Run Test on `1280x800` resolution 
```
$ node custom-resolutions.js 1280x800
```

#### Run Test on `1600x1200` resolution 
```
$ node custom-resolutions.js 1600x1200
```


#### Run Test on `1920x1080` resolution 
```
$ node custom-resolutions.js 1920x1080
```


#### Run Test on `2560x1440` resolution 
```
$ node custom-resolutions.js 2560x1440
```

## Documentation & Resources :books:
      
Visit the following links to learn more about LambdaTest's features, setup and tutorials around test automation, mobile app testing, responsive testing, and manual testing.

* [LambdaTest Documentation](https://www.lambdatest.com/support/docs/?utm_source=github&utm_medium=repo&utm_campaign=playwright-sample)
* [LambdaTest Blog](https://www.lambdatest.com/blog/?utm_source=github&utm_medium=repo&utm_campaign=playwright-sample)
* [LambdaTest Learning Hub](https://www.lambdatest.com/learning-hub/?utm_source=github&utm_medium=repo&utm_campaign=playwright-sample)    

## LambdaTest Community :busts_in_silhouette:

The [LambdaTest Community](https://community.lambdatest.com/?utm_source=github&utm_medium=repo&utm_campaign=playwright-sample) allows people to interact with tech enthusiasts. Connect, ask questions, and learn from tech-savvy people. Discuss best practises in web development, testing, and DevOps with professionals from across the globe 🌎

## What's New At LambdaTest ❓

To stay updated with the latest features and product add-ons, visit [Changelog](https://changelog.lambdatest.com/) 
      
## About LambdaTest

[LambdaTest](https://www.lambdatest.com?utm_source=github&utm_medium=repo&utm_campaign=playwright-sample) is an intelligent unified digital experience testing cloud that helps businesses drastically reduce time to market through faster test execution, ensuring quality releases and accelerated digital transformation. The platforms allows you to perform both real time and automation testing across 3000+ environments and real mobile devices, making it a top choice among other cloud testing platforms. Over 10,000+ enterprise customers and 2+ million users across 130+ countries rely on LambdaTest for their testing needs. 

### Features

* Run Selenium, Cypress, Puppeteer, Playwright, and Appium automation tests across 3000+ real desktop and mobile environments.
* Real-time cross browser testing on 3000+ environments.
* Test on Real device cloud
* Blazing fast test automation with HyperExecute
* Accelerate testing, shorten job times and get faster feedback on code changes with Test At Scale.
* Smart Visual Regression Testing on cloud
* 120+ third-party integrations with your favorite tool for CI/CD, Project Management, Codeless Automation, and more.
* Automated Screenshot testing across multiple browsers in a single click.
* Local testing of web and mobile apps.
* Online Accessibility Testing across 3000+ desktop and mobile browsers, browser versions, and operating systems.
* Geolocation testing of web and mobile apps across 53+ countries.
* LT Browser - for responsive testing across 50+ pre-installed mobile, tablets, desktop, and laptop viewports
    
[<img height="58" width="200" src="https://user-images.githubusercontent.com/70570645/171866795-52c11b49-0728-4229-b073-4b704209ddde.png">](https://accounts.lambdatest.com/register?utm_source=github&utm_medium=repo&utm_campaign=playwright-sample)
      
## We are here to help you :headphones:

* Got a query? we are available 24x7 to help. [Contact Us](mailto:support@lambdatest.com)
* For more info, visit - [LambdaTest](https://www.lambdatest.com/?utm_source=github&utm_medium=repo&utm_campaign=playwright-sample)
