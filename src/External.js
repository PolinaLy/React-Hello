import {createContext, useContext} from "react";

const MyContext = createContext("Help, Misha!"); //запасной вариант на случай ошибки
 
export const External = () => {
  return (
    <MyContext.Provider value="Hello!">
      <Intermediate />
    </MyContext.Provider>
  );
};
 
const Intermediate = () => {
  return <Internal />;
};
 
const Internal = () => {
  const context = useContext(MyContext);
 
  return `Хук 2: useContext. "${context}"`;
};