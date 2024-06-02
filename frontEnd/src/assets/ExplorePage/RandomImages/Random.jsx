import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import "./Random.css";

// bootstrap components
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Random() {
  const [data, setData] = useState(null);

  const imgApi = async () => {
    try {
      const response = await fetch(
        "https://api.unsplash.com/photos/random?client_id=FAlsimQlJz_0_ZexxMaUr0tbflLJJWN3WZSVtvAmkhs"
      );
      const apiData = await response.json();
      // console.log(apiData);
      setData(apiData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    imgApi();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="setUpCard">
        <Card style={{ width: "100%", marginBottom: "50px" }}>
          <Card.Img variant="top" src={data.urls?.raw} />
          <Card.Body>
            <Card.Title>
              <strong>Photo Title :</strong>{" "}
              {data.alt_description || "No title available"}
            </Card.Title>
            <Card.Text>
              <strong>Full Name :</strong> {data.user?.first_name || "Unknown"}{" "}
              {data.user?.last_name || ""}
            </Card.Text>
            <Card.Text>
              <strong>Bio :</strong> {data.user?.bio || "No bio available"}
            </Card.Text>
            <Card.Text>
              <strong>Instagram Username :</strong>{" "}
              {data.user?.instagram_username || "N/A"}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <strong>Created at :</strong> {data.created_at || "N/A"}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Promoted at :</strong> {data.promoted_at || "N/A"}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Photo ID :</strong> {data.id || "N/A"}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Photo Clicked in :</strong>{" "}
              {data.location?.city || "Unknown"},{" "}
              {data.location?.country || "Unknown"}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Photo Location :</strong> {data.location?.name || "N/A"}
            </ListGroup.Item>
          </ListGroup>
          <Card.Body></Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Random;
