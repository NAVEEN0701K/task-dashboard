export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePassword = (password) => {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
  return re.test(password);
};

export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

export const validateTaskTitle = (title) => {
  return title && title.trim().length > 0 && title.trim().length <= 100;
};

export const validateTaskDescription = (description) => {
  return !description || description.trim().length <= 500;
};
