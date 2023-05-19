import { useState } from "react";

const useGrade = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [isInputEnabled, setInputEnabled] = useState(true);

  const handleNumber1Change = (text) => {
    setNumber1(text);
  };

  const handleNumber2Change = (text) => {
    setNumber2(text);
  };

  const toggleInput = () => {
    setInputEnabled(!isInputEnabled);
  };

  return {
    number1,
    number2,
    handleNumber1Change,
    handleNumber2Change,
    toggleInput,
    isInputEnabled,
  };
};

export default useGrade;
