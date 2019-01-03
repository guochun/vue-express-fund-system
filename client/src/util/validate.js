const validateUserName = [
  {
    required: true,
    message: '用户名不能为空',
    trigger: 'blur',
  },
  {
    min: 5,
    max: 15,
    message: '用户名为5-15个字符之间',
    trigger: 'blur',
  },
];

const validateEmail = [
  {
    required: true,
    message: '邮箱不能为空',
    trigger: 'blur',
  },
  {
    type: 'email',
    message: '邮箱格式不正确',
    trigger: 'blur',
  },
];

const validatePassword = [
  {
    required: true,
    message: '密码不能为空',
    trigger: 'blur',
  },
  {
    min: 7,
    max: 30,
    message: '用户名为7-30个字符之间',
    trigger: 'blur',
  },
];

export {
  validateUserName,
  validateEmail,
  validatePassword,
};
