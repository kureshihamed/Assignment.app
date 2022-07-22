import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "react-bootstrap";
import { Modal } from "react-bootstrap";
const EmployerDetails = () => {
  const [shopData, setShopData] = useState([]);

  const [EmployerID, setEmployerID] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [image, setImage] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const finalResult = useSelector(
    (state) => state.employerNameReducer.ShopData
  );
  useEffect(() => {
    setShopData(finalResult);
  }, [finalResult]);

  const dispatch = useDispatch();

  console.log("Is data is dispatching", shopData);
  const handle = () => {
    localStorage.setItem("name", firstName);
  };
  const handleAddShop = () => {
    dispatch({
      type: "ADD_EMPLOYER",
      data: { EmployerID, firstName, lastName },
    });
  };
  return (
    <>
      <div style={{ float: "center" }}>
        <button
          onClick={handleShow}
          style={{
            marginLeft: "80%",
            marginTop: "10%",
            color: "white",
            backgroundColor: "red",
            borderRadius: "20%",
          }}
        >
          Add Employer Data
        </button>
        <h1 style={{ marginTop: "20px", textAlign: "center" }}>
          Employer Details
        </h1>

        {shopData.map((item) => {
          return (
            <Card
              style={{
                width: "15.8rem",
                display: "inline-block",
                marginTop: "25px",
              }}
            >
              <Card.Header>Employer ID{item.EmployerID}</Card.Header>
              <Card.Body>
                <img
                  src={item.image}
                  alt="ShopImage"
                  width={"150px"}
                  height="150px"
                />
              </Card.Body>
              <Card.Footer>First Name : {item.firstName}</Card.Footer>
              <Card.Footer>Last Name : {item.lastName}</Card.Footer>
            </Card>
          );
        })}
      </div>
      <div>
        <Modal
          show={show}
          onHide={handleClose}
          centered
          style={{ backdropFilter: "blur(5px)", width: "100%" }}
        >
          <Modal.Header closeButton>
            <Modal.Title>ADD EMPLOYER DETAILS</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              style={{
                margin: "30px",
                display: "flex",
                flexDirection: "column",
                width: "80%",
              }}
            >
              <input
                type="text"
                placeholder="Enter Employer ID"
                onChange={(e) => setEmployerID(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter Employer Image URL"
                onChange={(e) => setImage(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter Employer First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter Employer Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />

              <button
                style={{ color: "white", backgroundColor: "blue" }}
                onClick={handleAddShop}
              >
                ADD-Employer
              </button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      <div style={{}}></div>
    </>
  );
};

export default EmployerDetails;
