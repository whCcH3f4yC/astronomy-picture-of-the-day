import React from "react";
import Title from "./Title";
import Form from "./Form";

const Home = () => {
  return (
    <div>
      <main className={` container  text-center  text-white `}>
        <div className={` row justify-content-center mt-5 pt-5`}>
          <div className={` col-xl-8 `}>
            <Title title={" Imagem do dia "}></Title>
            <p className={` lead `}>
              Descubra qual foto extraordinária foi capturada pela NASA no dia
              do seu aniversário e mergulhe na história do universo!
            </p>
          </div>
        </div>
      </main>
      <Form />
    </div>
  );
};

export default Home;
