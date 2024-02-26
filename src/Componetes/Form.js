import React from "react";
import ImageDay from "./ImageDay";

const Form = () => {
  const [date, setDate] = React.useState("");
  const [data, setData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const today = new Date().toISOString().split("T")[0];

  React.useEffect(() => {
    const fetchData = async () => {
      if (!date) return; // Não faz nada se a data estiver vazia
      setIsLoading(true); // Define isLoading como atrue enquanto carrega os dados
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?date=${date}&api_key=GXajyQSZi6drdTfSR6nN4PLYfOcBjDIibjWoWHTV`
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Erro ao bucas is dados: ", error);
      } finally {
        setIsLoading(false); // Define isLoading como false após o carregamento dos dados, independentemente do resultado
      }
    };
    fetchData();
  }, [date]);

  return (
    <div className={` container `}>
      <div className={`row text-center  justify-content-center  m-0  `}>
        <div className={`col-xl-12`}>
          <form>
            <input
              id="date"
              type="date"
              value={date}
              max={today}
              min="1995-06-16"
              onChange={(e) => setDate(e.target.value)}
            />
          </form>

          {isLoading ? ( // Renderiza o texto de "carregando" enquanto isLoading é true
            <div className={`text-white p-4`}>Carregando... </div>
          ) : (
            data && (
              <ImageDay
                title={data.title}
                url={data.url}
                explanation={data.explanation}
              ></ImageDay>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
