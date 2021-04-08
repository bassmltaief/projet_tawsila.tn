import { useState } from "react";
import { Form, FormGroup, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addAnnance } from "../../js/actions/annanceAction";
import "./annance.css";
import image from "./covoiturage.jpg";

const AddAnnance = () => {
  // var DatePicker = require("react-bootstrap-date-picker");

  const dispatch = useDispatch();
  const [point_depart, setPoint_depart] = useState("");
  const [point_darriver, setPoint_darriver] = useState("");
  const [descreption, setDescreption] = useState("");
  const [date_depart, setDate_depart] = useState("");
  const [Nbr_place, setNbr_place] = useState("");
  const [voiture, setVoiture] = useState("");
  const [phone, setPhone] = useState("");
  const addNewAnnance = (e) => {
    e.preventDefault();
    dispatch(
      addAnnance({
        point_depart,
        point_darriver,
        date_depart,
        descreption,
        Nbr_place,
        voiture,
        phone,
        // id: Math.random(),
      })
    );
  };

  return (
    <div className="spanne">
      <h1>ajouter une annance de covoiturage</h1>
      <img src={image} className="adimg" />
      <Form className="addannances">
        <Form.Group>
          <Form.Label>selectionner le point de depart</Form.Label>
          <Form.Control
            as="select"
            size="sm"
            custom
            className="formcont"
            onChange={(e) => setPoint_depart(e.target.value)}
            value={point_depart}
          >
            <option>selectionner le point de depart</option>
            <option>Sfax</option>
            <option>Tunis</option>
            <option>Sousse</option>
            <option>Sidi Bouzide</option>
            <option>Gasserine</option>
            <option>Gafsa</option>
            <option>Gabes</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label className="spanne">
            selectionner le point d'arriver
          </Form.Label>
          <Form.Control
            className="formcont"
            as="select"
            size="sm"
            custom
            onChange={(e) => setPoint_darriver(e.target.value)}
            value={point_darriver}
          >
            <option>selectionner le point d'arriver</option>
            <option>Sfax</option>
            <option>Tunis</option>
            <option>Sousse</option>
            <option>Sidi Bouzide</option>
            <option>Gasserine</option>
            <option>Gafsa</option>
            <option>Gabes</option>
          </Form.Control>
        </Form.Group>
        <FormGroup>
          <span className="spanne">selectionner date</span>
          <input
            type="date"
            className="formcont"
            onChange={(e) => setDate_depart(e.target.value)}
            value={date_depart}
          />
        </FormGroup>

        <Form.Group controlId="formBasicEmail">
          <Form.Label className="spanne">Description</Form.Label>

          <textarea
            className="formcont1"
            rows="6"
            cols="33"
            placeholder="Enter discription cette case est facultative.."
            onChange={(e) => setDescreption(e.target.value)}
            value={descreption}
          ></textarea>
        </Form.Group>
        <Form.Group>
          <Form.Label className="spanne">
            selectionner le Nombre de place
          </Form.Label>
          <Form.Control
            className="formcont"
            as="select"
            size="sm"
            custom
            onChange={(e) => setNbr_place(e.target.value)}
            value={Nbr_place}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Form.Control>
        </Form.Group>
        <Form.Group >
          <Form.Label className="spanne">marque voiture</Form.Label>
          <input
            className="formcont"
            type="text"
            placeholder="Enter marque voiture"
            onChange={(e) => setVoiture(e.target.value)}
            // value={voiture}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="spanne">phone</Form.Label>
          <input
            className="formcont"
            type="text"
            placeholder="Enter votre phone"
            onChange={(e) => setPhone(e.target.value)}
             value={phone}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="butadd"
          onClick={addNewAnnance}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddAnnance;
