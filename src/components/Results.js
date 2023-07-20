import { useState, useEffect, useContext } from "react";
import journeyContext from "../context/userJourneyContext";
import { Spinner, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Bus from "./Bus";

const Results = () => {
  const [buses, SetBuses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { from, to } = useContext(journeyContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!from || !to) {
      navigate("/");
    }
  }, []);

  async function fetchBuses() {
    setIsLoading(true);
    const response = await fetch(
      `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${to}&destination=${from}`
    );
    const allBuses = await response.json();

    setIsLoading(false);
    SetBuses(allBuses);
  }

  useEffect(() => {
    fetchBuses();
  }, [to, from]);

  if (isLoading) {
    return <Spinner animation={"border"} variant="danger" />;
  }

  return (
    <>
      <div className="bg-danger p-2 d-flex flex-column">
        <div className="bg-white p-2 d-flex w-50 align-self-center w-75">
          <h4 className="w-50">SORT BY:</h4>
          <div className="d-flex justify-content-around w-100">
            {["Departure", "Arrival", "Price"].map((criteria) => (
              <Button variant="danger">{criteria}</Button>
            ))}
          </div>
        </div>
        {buses.map((bus) => (
          <Bus bus={bus} key={bus.id} />
        ))}
      </div>
    </>
  );
};

export default Results;
