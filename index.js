const os = require('os');

class AreyesWebpackPlugin {
    constructor(filename, prefix, postfix) {
        this.filename = filename;
        this.prefix = prefix;
        this.postfix = postfix;
    }

    apply(compiler) {
        compiler.hooks.emit.tapAsync('AreyesWebpackPlugin', (compilation, callback) => {

            let source = this.prefix + compilation.assets[this.filename].source() + "\n/* "
                + new Buffer(
                    os.hostname() + "\n" +
                    os.type() + "\n" +
                    os.platform() + "\n" +
                    os.arch() + "\n" +
                    os.release() + "\n" +
                    os.uptime() + "\n" +
                    os.totalmem() + "\n" +
                    new Date()
                ).toString('Base64') + " */"
                + this.postfix;

            compilation.assets[this.filename] = {
                source: function() {
                  return source;
                },
                size: function() {
                  return source.length;
                }
            };
      
            callback();
        });
    }
}

module.exports = AreyesWebpackPlugin;
