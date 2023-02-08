# Webpack Compilation Modifier Plugin
A simple and flexible plugin that enhances the webpack compilation process by adding a custom prefix and suffix to it.

## Installation

    npm i @areyes-studio/webpack-compilation-modifier-plugin

## Usage
In your project's webpack.config.js file, add the following under the plugins key in config:

const WebpackCompilationModifierPlugin = require('@areyes-studio/webpack-compilation-modifier-plugin')

    module.exports = {
    // ...
    plugins: [
        new WebpackCompilationModifierPlugin(
        'script.js',
        '/* \n' 
            + 'Copyright AREYES ENTERTAINMENT INC. All Rights Reserved.'
            
            + '\n */ \n\n',
        '\n' + '/* © AREYES ENTERTAINMENT INC. ' + (new Date()).getFullYear() + ' */'
        )
    ]
    };

## Options
The constructor for the plugin takes three parameters:

**fileName (string):** The file name that the prefix and suffix should be added to.
**prefix (string):** The text to add before the compiled code.
**suffix (string):** The text to add after the compiled code.

## License
This project is licensed under the MIT license.