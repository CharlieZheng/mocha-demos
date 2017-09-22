var request = require('superagent');
var expect = require('chai').expect;

describe('async.test.js - 异步测试', function() {
  it('异步请求应该返回一个对象', function(done){
    request
      .get('https://api.github.com')
      .end(function(err, res){
          console.log("Hello");
        expect(res).to.be.an('object');
        done();
      });
  });
});
// 我的理解是end是異步的，所以需要done參數