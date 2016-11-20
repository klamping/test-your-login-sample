const expect = require('chai').expect;
const Login = require('./login.page.js');

let login = new Login();

describe('Login Page', function () {
  it('should let you log in', function () {
    browser.url('/');

    login.login('valid@user.com', 'asdasdfasdfasd');

    expect(browser.getUrl()).to.contain('logged-in.html');
  })
})