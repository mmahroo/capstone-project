const Confirmation = ({ conf }) => {
  const render = conf;
  return (
    <>
      <section className="container1">
        <h2 id="headingConfirmation">Reservation Confirmed</h2>
        <div className="containerConfirmation" style={{ height: "180px", width: "60%", marginTop:"10px", margin: "0 auto", background: "rgba(244, 206, 20, 0.7)", borderRadius: "15px" }}>
          <h2 style={{fontSize:"22px", fontWeight:"bold", textAlign:"center", marginBottom:"10px",}}>{`${render.line1}`}</h2>
          <p style={{fontSize:"16px"}}>{`${render.line2}`}</p>
          <p style={{fontSize:"16px"}}>{`${render.line3}`}</p>
        </div>
      </section>
    </>
  );
};

Confirmation.propTypes = {};

export default Confirmation;