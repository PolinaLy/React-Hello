import axios from "axios";

export  async function asyncFunction(userData, setDisabledBtn, renderResults) {
    try {
        const response = await
        axios
        .post(`${process.env.REACT_APP_BFF_URL}/logindata`, userData);
        setDisabledBtn(false);
        if (!response) {
          throw new Error(response['statusText']);
        } else {
          console.log(response.data.email, response.data.password);
          console.log(response.statusText)
          renderResults(response);
        }
    } catch (error) {
        console.log(error);
    }
  }