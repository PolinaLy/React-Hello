import styled from "styled-components";
import {useForm} from "react-hook-form";
import { useState } from "react";
import axios from "axios";

const StyledFrom = styled.section `
    width: fit-content;
    margin: 0 auto;

    input {
        display: block;
    }

    input:arror {
        border-color: red;
    }
`;

export function LoginPage () {
    const { register, formState: { errors } } = useForm();
    const {data, setData} = useState({ email: "", password: "" });

    const [emailValid, setEmailValid] = useState("");
    const [formValid, setFormValid] = useState(false);
    const [response, setResponse] = useState("");

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

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formValid) {
            axios
            .post("https://jsonplaceholder.typicode.com/users", data)
            .then((response) => {
                setResponse(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        };
    }

    return (
        <StyledFrom>
        <h2>Registration form</h2>
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" value={data.email} {...register("mail", { required: true })} onBlur={validateEmail}  onChange={handleChange} placeholder="example@mail.ru"/>
            <p style={{margin: 0, color: "red"}}>{emailValid}</p>
                {errors.mail && <span style={{ color: "red" }}>
                    Почта обязательна для заполнения </span>}
           
            <input type="password" name="password" value={data.password} {...register("pass", { required: true })} onChange={handleChange} placeholder="********"/>
                {errors.pass && <span style={{ color: "red" }}>
                    Пароль обязателен для заполнения </span>}
            <input type={"submit"} />
        </form>
        {response && (
            <div>
                <p>Данные успешно отправлены:</p>
                <p>Почта:{response.email}</p>
                <p>Пароль:{response.password}</p>
            </div>
            )
        }
        </StyledFrom>
    )
}
