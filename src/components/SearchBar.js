import { useState, useContext } from "react";

import { InputGroup, Form, Container, Button } from "react-bootstrap";
import { BsArrowLeftRight } from "react-icons/bs";

import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import journeyContext from "../context/userJourneyContext";

function SearchBar() {
  const [deaprtureDate, setDepartureDATE] = useState("");
  const naviagte = useNavigate();
  const { from, to, setFrom, setTo } = useContext(journeyContext);

  const interChange = () => {
    const startPoint = from;
    const endPoint = to;
    setTo(startPoint);
    setFrom(endPoint);
  };

  const searchResult = () => {
    if (!to || !from || !deaprtureDate) {
      toast.error("Please provide the details");
    } else {
      naviagte("/results");
    }
  };

  return (
    <Container>
      <div className={"m-5"}>
        <InputGroup className="mb-3 flex align-items-center">
          <Form.Control
            placeholder="From"
            aria-label="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
          <BsArrowLeftRight onClick={interChange} />
          <Form.Control
            placeholder="To"
            aria-label="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
          <Form.Control
            placeholder="Date"
            aria-label="departDate"
            type="date"
            value={deaprtureDate}
            onChange={(e) => setDepartureDATE(e.target.value)}
          />
          <Button variant="danger" onClick={searchResult}>
            Searh Buses
          </Button>
        </InputGroup>
      </div>
    </Container>
  );
}

export default SearchBar;
