// import React from "react";
import React, { useEffect, useState } from "react";

import "./User.css";

// bootstrap components

import Card from "react-bootstrap/Card";

function User() {
  const [data, setData] = useState();

  const apiData = async () => {
    // const response = await fetch(`https://reqres.in/api/users?page=${value}`);
    const response = await fetch(`https://randomuser.me/api/`);
    const data = await response.json();
    // console.log(data);
    setData(data);
  };

  useEffect(() => {
    apiData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div
        className="cardSetup"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "0px 10px 0px 10px",
        }}
      >
        <Card className="cardHeading">
          <Card.Img src={data.results[0]?.picture.large} variant="top" />
          <Card.Body>
            <Card.Title>
              <strong>Full Name :</strong> {data.results[0].name.first || "N/A"}{" "}
              {data.results[0].name.last || "N/A"}
            </Card.Title>
            <Card.Text>
              <strong>Age :</strong> {data.results[0].dob.age || "N/A"}
            </Card.Text>
            <Card.Text>
              <strong>Gender :</strong> {data.results[0].gender || "N/A"}
            </Card.Text>
            <Card.Text>
              <strong>Date Of Birth :</strong>{" "}
              {data.results[0].dob.date || "N/A"}
            </Card.Text>
            <Card.Text>
              <strong>Contact :</strong> {data.results[0].cell || "N/A"}
            </Card.Text>

            <Card.Text>
              <strong>Email :</strong> {data.results[0].email || "N/A"}
            </Card.Text>
            <Card.Text>
              <strong>User Login ID :</strong>{" "}
              {data.results[0].login.md5 || "N/A"}
            </Card.Text>
            <Card.Text>
              <strong>User Password :</strong>{" "}
              {data.results[0].login.password || "N/A"}
            </Card.Text>
            <Card.Text>
              <strong>UserName :</strong>{" "}
              {data.results[0].login.username || "N/A"}
            </Card.Text>

            <Card.Text>
              <strong>Location :</strong>{" "}
              {data.results[0].location.city || "N/A"}{" "}
              {data.results[0].location.country || "N/A"}{" "}
            </Card.Text>
            <Card.Text>
              <strong>State :</strong> {data.results[0].location.state || "N/A"}
            </Card.Text>
            <Card.Text>
              <strong>Postcode :</strong>{" "}
              {data.results[0].location.postcode || "N/A"}
            </Card.Text>
            <Card.Text>
              <strong>Street add :</strong>{" "}
              {data.results[0].location.street.name || "N/A"}{" "}
              {data.results[0].location.street.number || "N/A"}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default User;
