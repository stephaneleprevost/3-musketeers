
var expect = require('chai').expect;
var is = require('../lib/is/index');

describe('is micro-checking library', function() {
	
  describe('is.arguments', function () {
    it('should return true if passed parameter type is arguments', function () {
      var getArguments = function () {
          return arguments;
      };
      var arguments = getArguments('test');
      expect(is.arguments(arguments)).to.be.true;
    });
    it("should return false if passed parameter type is not arguments", function () {
      var notArguments = ['test'];
      expect(is.arguments(notArguments)).to.be.false;
    });
  });

  describe('is.array', function () {
    it('should return true if passed argument type is Array', function () {
      expect(is.array(['value1', 'value2'])).to.be.true;
    });
    it('should return false if passed argument type is not Array', function () {
      expect(is.array('stephane')).to.be.false;
	  expect(is.date(123)).to.be.false;
	  expect(is.date(true)).to.be.false;
	  expect(is.date(null)).to.be.false;
    });
  });

  describe('is.boolean', function () {
    it('should return true if passed parameter type is boolean', function() {
      expect(is.boolean(true)).to.be.true;
	  expect(is.boolean(false)).to.be.true;
    });
	it("should return false if passed parameter type is not boolean", function () {
       expect(is.boolean('stephane')).to.be.false;
	   expect(is.boolean(123)).to.be.false;
	   expect(is.boolean(null)).to.be.false;
    });
  });
});

  describe('is.date', function () {
    it('should return true if passed parameter type is date', function () {
	expect(is.date(new Date(2015-18-11))).to.be.true;
	
    });
	
	it("should return false if passed parameter type is not date", function () {
      expect(is.date('stephane')).to.be.false;
	  expect(is.date(123)).to.be.false;
	  expect(is.date(true)).to.be.false;
	  expect(is.date(null)).to.be.false;
    });
  });
});

  describe('is.error', function () {

    it('should return true if passed parameter type is error', function () {
	
	expect(is.error(new Error())).to.be.true;
	
    });
	
    it("should return false if passed parameter type is not error", function () {
      expect(is.date('stephane')).to.be.false;
	  expect(is.date(123)).to.be.false;
	  expect(is.date(true)).to.be.false;
	  expect(is.date(null)).to.be.false;
    });
  });
  
  describe('is.function', function () {

    it('should return true if passed parameter type is function', function () {
	var newfunction = function(){};
	  expect(is.function(newfunction)).to.be.true;
	
    });
	
    it("should return false if passed parameter type is not function", function () {
      expect(is.date('stephane')).to.be.false;
	  expect(is.date(123)).to.be.false;
	  expect(is.date(true)).to.be.false;
	  expect(is.date(null)).to.be.false;
    });
  });
  
  describe('is.nan', function () {

    it('should return true if passed parameter type is Nan', function () {
	  expect(is.nan(0/0)).to.be.true;
    });
    it("should return false if passed parameter type is not Nan", function () {
      expect(is.date('stephane')).to.be.false;
	  expect(is.date(123)).to.be.false;
	  expect(is.date(true)).to.be.false;
	  expect(is.date(null)).to.be.false;
    });
  });


