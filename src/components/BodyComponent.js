import { restro } from "../constants";
import RestourantCards from "./RestourantCards";

const BodyComponent = () => {
  return (
    <>
      <div className="display-setting container">
        {restro.map((restData) => {
          return <RestourantCards {...restData} key={restData.id} />;
        })}
      </div>
    </>
  );
};

export default BodyComponent;
