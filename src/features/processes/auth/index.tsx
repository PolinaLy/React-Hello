import { useState } from "react";
import {useForm} from "react-hook-form";
import {sendLoginData} from "./api";
import {isValidateEmail} from "./lib";
import "./style.css";

export function LoginPage () {
  const { register, formState: { errors } } = useForm();
  const [data, setData] = useState({ email: "", password: "" });
  const [formValid, setFormValid] = useState(false);
  const [emailValid, setEmailValid] = useState("");
  const [formValidText, setFormValidText] = useState("");
  const [emailResult, setEmailResult] = useState("");
  const [passwordResult, setPasswordResult] = useState("");
  const [disabledBtn, setDisabledBtn] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setData({ ...data, [e.target.name]: value });
  };

  const renderResults = (response) => {
    setEmailResult(`Почта: ${response.data.email}`);
    setPasswordResult(`Пароль: ${response.data.password}`);
    setData({ email: "", password: "" });
  }

  async function asyncLogin(userData) {
    try {
        const response = await sendLoginData(userData);
        setDisabledBtn(false);
        if (!response) {
          throw new Error(response['statusText']);
        } else {
          renderResults(response);
        }
    } catch (error) {}
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email: data.email, password: data.password };
    if (!formValid) {
      return setFormValidText("Форма не валидна");
    } 
    setDisabledBtn(true);
    asyncLogin(userData);  
  };

  return (
    <div className="LoginPage">
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Почта
          <input
          type="email"
          {...register("email", { 
            required: {
              value: true,
              message: 'Поле обязательно для заполнения'
          }})}
            value={data.email}
            onChange={handleChange}
            onBlur={(e) => {
              let emailValid = isValidateEmail(e);
              if (!emailValid) {
                  setFormValid(false);
                  setEmailValid("Почта написана некорректно");
              } else {
                  setEmailValid("");
                  setFormValid(true);
              }
            }}        
          />
        </label>
        <p style={{margin: 0, color: "red"}}>{emailValid}</p>
        {errors.email && 
        <span style={{ color: "red" }}>{`${errors.email.message}`}</span>}
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

export {}