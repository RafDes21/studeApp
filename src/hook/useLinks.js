import { useState } from "react";

const useLinks = () => {
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);
  const [links, setLinks] = useState([]);
  const [link, setLink] = useState("");

  const linksArrayWithId = links.map((link, index) => ({
    id: `${index}`,
    title: link,
  }));

  const handleAddLink = () => {
    setLinks([...links, link]);
    setLink("");
    setIsButtonEnabled(true);
  };

  const handleChangeInput = (text) => {
    const isInputFilled = text.trim().length > 0;
    setIsButtonEnabled(!isInputFilled);
    setLink(text);
  };

  return {
    isButtonEnabled,
    linksArrayWithId ,
    link,
    handleAddLink,
    handleChangeInput,
  };
};

export default useLinks;
