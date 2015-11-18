
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
      expect(is.array("stephane")).to.be.false;
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
       expect(is.boolean("stephane")).to.be.false;
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
      expect(is.date("stephane")).to.be.false;
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
      expect(is.date("stephane")).to.be.false;
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
      expect(is.date("stephane")).to.be.false;
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
      expect(is.date("stephane")).to.be.false;
	  expect(is.date(123)).to.be.false;
	  expect(is.date(true)).to.be.false;
	  expect(is.date(null)).to.be.false;
    });
  });
  
  describe('is.null', function () {

    it('should return true if passed parameter type is null', function () {
	  expect(is.null(null)).to.be.true;
    });
    it("should return false if passed parameter type is not null", function () {
      expect(is.null("stephane")).to.be.false;
	  expect(is.null(123)).to.be.false;
      expect(is.null(true)).to.be.false;
    });
  });

 describe('is.number', function () {

    it('should return true if passed parameter type is number', function () {
	  expect(is.number(123)).to.be.true;
    });
    it("should return false if passed parameter type is not number", function () {
      expect(is.date("stephane")).to.be.false;
	  expect(is.date(true)).to.be.false;
	  expect(is.date(null)).to.be.false;
    });
  });

 describe('is.object', function () {

    it('should return true if passed parameter type is object', function () {
	  expect(is.object(new Object())).to.be.true;
    });
    it("should return false if passed parameter type is not object", function () {
	  expect(is.null("stephane")).to.be.false;
	  expect(is.null(123)).to.be.false;
      expect(is.null(true)).to.be.false;
    });
  });
  
  describe('is.json', function () {

    it('should return true if passed parameter type is JSON object', function () {
	  expect(is.json({foo: 'bar'})).to.be.true;
	  expect(is.any.json({}, 2)).to.be.true;
	  expect(is.any.json([{}, {foo: 'bar'}]).to.be.true;
    });
    it("should return false if passed parameter type is not JSON object", function () {
	  expect(is.json("stephane")).to.be.false;
	  expect(is.json(123)).to.be.false;
	  expect(is.date(null)).to.be.false;
	  expect(is.null(true)).to.be.false;
    });
  });

 describe('is.regexp', function () {

    it('should return true if passed parameter type is regExp', function () {
	  expect(is.regexp(new RegExp('/^[a-z0-9-]+$/'))).to.be.true;
    });
    it("should return false if passed parameter type is not regExp", function () {
	  expect(is.regexp("stephane")).to.be.false;
	  expect(is.regexp(123)).to.be.false;
	  expect(is.date(null)).to.be.false;
	  expect(is.null(true)).to.be.false;
    });
  });
  
   describe('is.string', function () {

    it('should return true if passed parameter type is string', function () {
	  expect(is.string("stephane")).to.be.true;
    });
    it("should return false if passed parameter type is not string", function () {
	  expect(is.string(123)).to.be.false;
	  expect(is.date(null)).to.be.false;
	  expect(is.string(true)).to.be.false;
    });
  });

 describe('is.char', function () {

    it('should return true if passed parameter type is string', function () {
	  expect(is.char('S')).to.be.true;
    });
    it("should return false if passed parameter type is not string", function () {
	  expect(is.char("stephane")).to.be.false;
	  expect(is.char(123)).to.be.false;
	  expect(is.date(null)).to.be.false;
	  expect(is.char(true)).to.be.false;
    });
  });

 describe('is.undefined', function () {

    it('should return true if passed parameter type is string', function () {
	  expect(is.undefined(undefined)).to.be.true;
    });
    it("should return false if passed parameter type is not string", function () {
	  expect(is.char("stephane")).to.be.false;
	  expect(is.char(123)).to.be.false;
	  expect(is.date(null)).to.be.false;
	  expect(is.char(true)).to.be.false;
    });
  });
  
  describe('is.sameType', function () {

    it('should return true if passed parameter type are same type', function () {
	  expect(is.sameType("stephane","leprevost")).to.be.true;
	  expect(is.sameType(1,2)).to.be.true;
	  expect(is.sameType(true,false)).to.be.true;
    });
    it("should return false if passed parameter type are not same type", function () {
	  expect(is.sameType("stephane",123)).to.be.false;
	  expect(is.sameType(true,null)).to.be.false;
	  expect(is.sameType('S',"stephane")).to.be.false;
	  expect(is.sameType(false,123)).to.be.false;	  
    });
  });



