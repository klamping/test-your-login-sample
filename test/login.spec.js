const expect = require('chai').expect;
const Login = require('./login.page.js');

const login = new Login();

describe('Login Page', function () {
  let validUser = 'valid@user.com';
  let validPass = 'fadadsfasdfad';

  beforeEach(function () {
    browser.url('/');
  })

  it('should let you log in', function () {
    login.login(validUser, validPass);

    expect(browser.getUrl()).to.contain('logged-in.html');
  })

  it('should error on missing username', function () {
    login.login('', validPass);

    login.hasErrorMessage('Please enter a valid e-mail');
  });

  it('should error on invalid username', function () {
    login.login('invalid', validPass);

    login.hasErrorMessage('Please enter a valid e-mail');
  });

  it('should error on unknown username', function () {
    login.login('invalid@user.com', validPass);

    login.hasErrorMessage('Your username or password is incorrect');
  });

  it('should error on missing password', function () {
    login.login(validUser, '');

    login.hasErrorMessage('Please enter your password');
  });

  it('should error on bad password', function () {
    login.login(validUser, 'as');

    login.hasErrorMessage('Your password must be at least 6 characters');
  });

  it('should have forgot password link', function () {
    expect(login.forgotPwd.isVisibleWithinViewport()).to.be.true;
  })

  it('should have register link', function () {
    expect(login.register.isVisibleWithinViewport()).to.be.true;
  })
})