import { useEffect, useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import image from "./avatar.jpg";
import "./annance.css";
import {
  modifiedAnnance,
  deleteAnnance,
  getAllannance,
} from "../../js/actions/annanceAction";
import Modannance from "./Modannance";

const Annance = () => {
  const dispatch = useDispatch();

  const annances = useSelector((state) => state.annanceReducer.annances);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const [search, setSearch] = useState("");
  useEffect(() => {
    dispatch(getAllannance());
  }, [dispatch]);
  return (
    <div>
      <div className="Recherche">
        <h3>Recherche annance</h3>
        <input
          className="formcont"
          type="text"
          placeholder="Enter la point de distination"
          id="searchs"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        ></input>
        {isAuth ? (
          <div className="ann">
            <Link to="/newannance">
              <Button variant="primary">add annance</Button>
            </Link>
          </div>
        ) : (
          <div className="ann">
            <Link to="/register">
              <Button variant="primary">add annance</Button>
            </Link>
          </div>
        )}
      </div>

      <div className="affichage">
        {annances
          .filter((el) =>
            el.point_darriver.toUpperCase().includes(search.toUpperCase())
          )
          .map((annance) => (
            <Card
              className=" annancecard "
              key={annance._id}
              style={{ width: "30rem" }}
            >
              <Card.Img variant="top" src={image} />
              <Card.Text>point arrive : {annance.point_darriver} </Card.Text>
              <Card.Body>
                <Card.Text> point depart : {annance.point_depart} </Card.Text>

                <Card.Text>date depart : {annance.date_depart} </Card.Text>
                <Card.Text>nombre de place: {annance.Nbr_place} </Card.Text>
                <Card.Text>marque voiture : {annance.voiture} </Card.Text>
                <Card.Text>numero telephone : {annance.phone} </Card.Text>
                <Card.Text>description:{annance.descreption}</Card.Text>

                <div>
                  <Link to={`/modifiedannance/${annance._id}`}>
                    <Button
                      variant="primary"
                    >
                      Edit
                    </Button>
                  </Link>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(deleteAnnance(annance._id))}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Annance;
