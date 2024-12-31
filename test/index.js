
var fs = require('fs');
var dir = fs.readdirSync;
var read = fs.readFileSync;
var join = require('path').join;
var assert = require('assert');
var parse = require('..');

dir('test/cases').forEach(function(file){
  if (~file.indexOf('.json')) return;
  var base = file.replace('.md', '');
  describe(base, function(){
    it('should work', function(){
      var md = read(join('test/cases', file), 'utf8');
      var jsonfilename = file.replace('.md', '.json');
      var json = require(join('../test/cases', jsonfilename));
      var conf = parse(md);
      assert.deepEqual(conf, json);
    })
  })
});
