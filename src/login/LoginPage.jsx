import React, { useState } from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import "./LoginPage.css";

export function LoginPage () {
  const { register, formState: { errors } } = useForm();
  const [data, setData] = useState({ email: "", password: "" });
  const [formValid, setFormValid] = useState(false);
  const [emailValid, setEmailValid] = useState("");
  const [formValidText, setFormValidText] = useState("");
  const [emailResult, setEmailResult] = useState("");
  const [passwordResult, setPasswordResult] = useState("");
  const [disabledBtn, setDisabledBtn] = useState(false);

  const validateEmail = (event) => {
    var regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

        if ((!regex.test(event.target.value)) && (event.target.value.length !== 0)) {
            setFormValid(false);
            setEmailValid("Почта написана некорректно");
        } else {
            setEmailValid("");
            setFormValid(true);
        }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setData({ ...data, [e.target.name]: value });
  };

  const renderResults = (response) => {
    setEmailResult(["Почта: ",response.data.email]);
    setPasswordResult(["Пароль: ", response.data.password]);
    setData({ email: "", password: "" });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email: data.email, password: data.password };
    if (!formValid) {
      return setFormValidText("Форма не валидна");
    } else{
      setDisabledBtn(true);
      async function asyncFunction() {
        try {
            const response = await
            axios
            .post(process.env.REACT_APP_BFF_URL, userData);
            setDisabledBtn(false);
            if (!response) {
              throw Error(response.statusText);
            } else {
              console.log(response.data.email, response.data.password);
              renderResults(response);
            }
        } catch (error) {
            console.log(error);
        }
      }
        asyncFunction();
    }
  };

  return (
    <div className="LoginPage">
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="email">
          Почта
          <input
          type="email"
          name="email"
          {...register("email", { 
            required: {
              value: true,
              message: 'Поле обязательно для заполнения'
          }})}
            value={data.email}
            onChange={handleChange}
            onBlur={validateEmail}           
          />
        </label>
        <p style={{margin: 0, color: "red"}}>{emailValid}</p>
        {errors.email && 
        <span style={{ color: "red" }}>{errors.email.message}</span>}
        <label htmlFor="password">
          Пароль
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" disabled={disabledBtn}>Отправить</button>
      </form>
      <p>{formValidText}</p>
      <p>{emailResult}</p>
      <p>{passwordResult}</p>
    </div>
  );
};