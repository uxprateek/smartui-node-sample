# SmartUI NodeJS Sample

### Prerequisites
1. Node version <=14 required
```
node --version
```

2. You can switch the node version by below command
```
nvm install 12.0.0
node --version
```

### Steps to Run the Test
Step 1. Set LambdaTest Username and Access Key in environment variables.

  <b>For Linux/macOS:</b>
 
```
export LT_USERNAME="YOUR_USERNAME"
export LT_ACCESS_KEY="YOUR ACCESS KEY"
```

   <b>For Windows:</b>

```
set LT_USERNAME="YOUR_USERNAME"
set LT_ACCESS_KEY="YOUR ACCESS KEY"
```

Step 2. Clone the smartui-node-sample Repo.
```
git clone https://github.com/LambdaTest/smartui-node-sample
```

Step 3. Install Dependencies.

```
npm i
```


### Running Test
We have many different examples revolving around different usecases. 
#### Test Cases
1. General Capability Change.
    * ErrorSetting.js - This Test is an example of how error settings can be modified. To run this test run.
    ```
    npm run error
    ```
    
    * Transparency.js - This Test is to show how to alter the opacity of the comparison screenshot. To run this test run.
    ```
    npm run transparency
    ```
    * BoundingBoxes.js - This Test shows an example of comparing only a certain area in the screenshot. To run this test run.
    ```
    npm run boundingBox
    ```
    * IgnoredBoxes.js - This test is for excluding certain areas in the screenshot for comparison. To run this test run.
    ```
    npm run ignoredBox
    ```
    

```


### Execute Tests on Multiple resolutions

If you want to execute visual regression tests on multiple resolutions, need to add capability `resolution` in capabilities option.
```
  let capabilities = {
      ...
      resolution = "1920x1080";
      ...
  }
```

Few common resolutions are
- 1024x768
- 1280x800
- 1600x1200
- 1920x1080
- 2560x1440

#### Run Test on `1024x768` resolution 
```
$ node custom-resolutions.js 1024x768
```

