/**
 * Created by arshad on 2/21/18.
 */

const mocha = require('mocha');
const describe = mocha.describe;
const it = mocha.it;
const assert = require('chai').assert;
const should = require('chai').should();
const DateValidator = require('../index');
const moment = require('moment');

describe("check if is date valid", function () {
  it("returns true for this as date is valid (2017-12-12, YYYY-MM-DD)", function () {
    DateValidator.isValidDate("2017-12-12", "YYYY-MM-DD").should.equal(true);
  });

  it("returns true for this as date is valid (2017/12/12, YYYY/MM/DD)", function () {
    DateValidator.isValidDate("2017/12/12", "YYYY/MM/DD").should.equal(true);
  });

  it("returns true for this as date is valid (20/12/2015, DD/MM/YYYY)", function () {
    DateValidator.isValidDate("20/12/2015", "DD/MM/YYYY").should.equal(true);
  });
});

describe("check if date is invalid", function () {
  it("returns false for this as date is valid (2017-30-12, YYYY-MM-DD)", function () {
    DateValidator.isValidDate("2017-30-12", "YYYY-MM-DD").should.equal(false);
  });

  it("returns false for this as date is valid (2017/12/40, YYYY/MM/DD)", function () {
    DateValidator.isValidDate("2017/12/40", "YYYY/MM/DD").should.equal(false);
  });

  it("returns false for this as date is valid (30/02/2015, DD/MM/YYYY)", function () {
    DateValidator.isValidDate("30/02/2015", "DD/MM/YYYY").should.equal(false);
  });

  it("returns false for this as date is valid (AA/BB/2017, DD/MM/YYYY)", function () {
    DateValidator.isValidDate("AA/BB/2017", "DD/MM/YYYY").should.equal(false);
  });
});

describe("check if date is in the past or not", function() {
  it("returns false for past check on a given random date in the future", function () {
    DateValidator.isDatePast(moment().add(5, 'days'), "YYYY-MM-DD").should.equal(false);
  });

  it("returns true for past check on given date random date in the past", function () {
    DateValidator.isDatePast(moment().subtract(10, 'years'), "YYYY-MM-DD").should.equal(true);
  });
})
