import { number } from "prop-types";
import React from "react";
const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preecha um Email válido",
  },
  password: {
    regex: /^(?=.*\d)(?=(.*\W){1})(?=.*[a-zA-Z])(?!.*\s).{1,15}$/,
    message: "Senha Fraca",
  },
  number:{
    regex: /^\d+$/,
    message: "Utilize números apenas"
  }
};

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha o campo");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    setValue(target.value);
    if (error) validate(target.value);
  }
  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
