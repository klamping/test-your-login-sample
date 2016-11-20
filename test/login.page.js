class Login {
  get form () { return $('form')}
  get username () { return $('input[name="email"]')}
  get password () { return $('input[name="password"]')}
  get submit () { return $('button')}
  get errorMsg () { return $('.errorMsg')}
  get forgotPwd () { return $('.forgot')}
  get register () { return $('.register-link')}

  login (user, pass) {
    this.username.setValue(user);
    this.password.setValue(pass);
    this.form.submitForm();
  }
}

module.exports = Login;