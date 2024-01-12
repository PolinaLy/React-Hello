export const validateEmail = (event, setFormValid, setEmailValid) => {
    var regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

        if ((!regex.test(event.target.value)) && (event.target.value.length !== 0)) {
            setFormValid(false);
            setEmailValid("Почта написана некорректно");
        } else {
            setEmailValid("");
            setFormValid(true);
        }
  };