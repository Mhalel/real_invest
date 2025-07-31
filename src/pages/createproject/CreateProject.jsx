import { useState } from "react";

import Foot from "./components/Foot";
import Head from "./components/Head";
import Main from "./components/Main";
import { useNavigate } from "react-router-dom";

const CreateProject = () => {
  const [step, setStep] = useState(1);
  const Nav = useNavigate();
  const [fullData, setFullData] = useState({
    studyType: "",
    region: "",
    propertyType: "",
    area: "",
  });
  const handleSubmit = async () => {
    localStorage.setItem("reqData", fullData);
    Nav("/");
  };
  return (
    <div className="flex flex-col gap-[32px] py-[32px] px-[64px]">
      <Head
        setFullData={setFullData}
        fullData={fullData}
        setStep={setStep}
        step={step}
      />
      <Main
        setFullData={setFullData}
        fullData={fullData}
        setStep={setStep}
        step={step}
      />
      <Foot
        handleSubmit={handleSubmit}
        setFullData={setFullData}
        fullData={fullData}
        setStep={setStep}
        step={step}
      />
    </div>
  );
};

export default CreateProject;
