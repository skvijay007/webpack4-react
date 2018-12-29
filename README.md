### Webpack

Webpack is a static module bundler for applications build on Javascript frameworks. While processing it bundles all JS/JSX files and its dependencies like CSS, Images etc..

https://webpack.js.org/concepts/

### What's new?

The core concepts of Webpack are,

  #### Entry, 
  #### Output, 
  #### Mode, 
  #### Loaders, 
  #### Plugins

In the previous webpack version <4, configurations for all the above concepts has to be done manually in "webpack.config.js" file.
But webpack 4 comes as a zero configuration module bundler. The breakthrough is webpack 4 doesn’t need a configuration file by default!.

## Advantages of Webpack 4

### Entry : 
In Webpack 4 there is no need to define the entry point: it will take ./src/index.js as the default!

### Output :
Webpack 4 will spit out the bundle in ./dist/main.js by default!

You can still override the defaults entry/output like below example,

        "scripts": {
            "dev": "webpack --mode development ./foo/src/js/index.js --output ./foo/main.js",
            "build": "webpack --mode production ./foo/src/js/index.js --output ./foo/main.js"
        }

### Mode :
No need to have different Webpack configuration files for development or production. 
Webpack 4 introduces production and development mode in the npm script itself.

        "scripts": {
            "dev": "webpack --mode development",
            "build": "webpack --mode production"
        }

If you are not specifying mode then by default "production" mode is considered while bundling.

**_Loader and Plugins are yet to configured using webpack configuration files because the concept of zero configuration in webpack 4 applies to:_**
```
the entry point. Default to ./src/index.js
the output. Default to ./dist/main.js
production and development mode (no need to create 2 separate confs for production and development)
```


### To learn & try yourself:

* https://webpack.js.org
* https://www.valentinog.com/blog/webpack-tutorial/
