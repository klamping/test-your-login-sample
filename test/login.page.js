const _ = require('lodash');

class Login {
  get form () { return $('form')}
  get username () { return $('input[name="email"]')}
  get password () { return $('input[name="password"]')}
  get submit () { return $('button')}
  get errorMsg () { return $('.error.message')}
  get forgotPwd () { return $('a[href="forgot.html"]')}
  get register () { return $('a[href="register.html"]')}

  login (user, pass) {
    this.username.setValue(user);
    this.password.setValue(pass);
    this.form.submitForm();
  }

  isLoggedIn () {
    if (_.contains(browser.getUrl(), 'logged-in.html')) {
      throw new Error('should not be on logged-in page');
    }
  }

  logout () {

  }

  hasErrorMessage (msg) {
    this.isLoggedIn()
    if (!this.errorMsg.isVisibleWithinViewport()) {
      throw new Error('error message should be visible');
    }
    if (!_.contains(this.errorMsg.getText(), msg)) {
      throw new Error('error message should contain ' + msg);
    }
  }
}

module.exports = Login;