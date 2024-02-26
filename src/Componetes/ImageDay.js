import React from "react";
import SubTitle from "./SubTitle";

const ImageDay = ({ title, url, explanation }) => {
  return (
    <div className={`bg-dark p-xl-5 p-3  mt-5 mb-5 rounded `}>
      <div className={` d-xl-flex  align-items-xl-center `}>
        <div className={`col-xl-6 `}>
          <img style={{ width: " 100% " }} src={url} alt=" Imagem do dia " />
        </div>
        <div className={`col-xl-6  ps-xl-5  mt-xl-0 mt-4`}>
          <SubTitle subtitle={title}></SubTitle>
          <p className={` text-white lead text-center  text-xl-start`}>
            {explanation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageDay;
