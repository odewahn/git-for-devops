(function (extension) {
  if (typeof showdown !== 'undefined') {
    // global (browser or nodejs global)
    extension(showdown);
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['showdown'], extension);
  } else if (typeof exports === 'object') {
    // Node, CommonJS-like
    module.exports = extension(require('showdown'));
  } else {
    // showdown was not found so we throw
    throw Error('Could not find showdown library');
  }
}(function (showdown) {
  // loading extension into shodown
  showdown.extension('oriolize', function () {
    var code_blocks = { 
      type: 'output',
      regex: /<pre><code class="(\w+).+?">([\s\S]+?)<\/code><\/pre>/g,
      replace: '<pre data-code-language="$1" data-executable="true" data-type="programlisting">$2</pre>'
    };
    var output_blocks = { 
      type: 'output',
      regex: /<pre><code>([\s\S]+?)<\/code><\/pre>/g,
      replace: '<pre data-output="true">$1</pre>'
    };
    return [output_blocks, code_blocks];
  });
}));