const Bus = ({ bus }) => {
  return (
    <div className="bg-white pd-4 d-flex justify-content-between m-3 align-items-center p-2">
      <h4>{bus.busName}</h4>
      <div className="d-flex flex-column ">
        <div>DEPARTURE</div>
        <h4>{bus.departureTime}</h4>
      </div>
      <div className="d-flex flex-column ">
        <div>ARRIVAL</div>
        <h4>{bus.arrivalTime}</h4>
      </div>

      <h4>₹{bus.ticketPrice}</h4>
    </div>
  );
};

export default Bus;
