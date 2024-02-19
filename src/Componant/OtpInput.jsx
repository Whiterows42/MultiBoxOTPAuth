import React, { useEffect, useRef, useState } from "react";
import "../App.css";
function OtpInput({ lenght = 4, onOtpSubmit = () => {} }) {
  const [opt, setOpt] = useState(new Array(lenght).fill(""));
  const inputRefs = useRef([]);
  console.log(opt);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...opt];

    newOtp[index] = value.substring(value.length - 1);
    setOpt(newOtp);

    const combineOtp = newOtp.join("");
    if (combineOtp.length === lenght) onOtpSubmit(combineOtp);

    // move the cursro next field
    if (value && index < lenght - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };
  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !opt[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };
  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);

    if (index > 0 && !opt[index - 1]) {
      inputRefs.current[opt.indexOf("")];
    }
  };

  return (
    <div>
      {opt.map((value, index) => {
        return (
          <input
            type="text"
            key={index}
            ref={(input) => (inputRefs.current[index] = input)}
            value={value}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="OtpInput"
          />
        );
      })}
    </div>
  );
}

export default OtpInput;
