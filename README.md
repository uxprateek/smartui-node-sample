# SmartUI NodeJS Sample

### Set LambdaTest Username and Access Key in environment variables.

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

### Install Dependencies and Execute tests


#### Prerequisite

#### Node version <=14 required
```
node --version
```

<b>You can switch the node version by below command</b>

```
nvm install 12.0.0
node --version
```

#### Install Dependencies

```
$ npm i
$ node test.js

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
