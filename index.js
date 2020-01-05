class AreyesWebpackPlugin {
    constructor(filename, prefix, postfix) {
        this.filename = filename;
        this.prefix = prefix;
        this.postfix = postfix;
    }

    apply(compiler) {
        compiler.hooks.emit.tapAsync('AreyesWebpackPlugin', (compilation, callback) => {

            let source = this.prefix + compilation.assets[this.filename].source() + this.postfix;

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
