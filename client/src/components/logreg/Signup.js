import { Form, Button, Alert, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { register,get_elements } from "../../js/actions/userAction";
import { React, useState } from "react";
import "./login.css";


const Signup = () => {
  

  const { email, password } = useSelector((state) => state.get_info);
  
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState("");
  const dispatch = useDispatch();
  
  const registerUser = (e) => {
    e.preventDefault();
    const newUser = {  name  ,lastName,age,sex,phone,email,password, photo };
    dispatch(register(newUser));
  };

  const { isAuth, loading, errors } = useSelector((state) => state.userReducer);
  return (
    <div className="singin">
      {errors.id === "register" && (
        <Alert variant="danger">{errors.err[0].msg}</Alert>
      )}
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : isAuth ? (
        <Redirect to="/profile" />
      ) : (
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>name</Form.Label>
            <Form.Control type="text" placeholder="Enter frist name" onChange={e => setName(e.target.value)} value={name}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" onChange={e => setLastName(e.target.value)} value={lastName}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>age</Form.Label>
            <Form.Control type="Number" placeholder="Enter age" onChange={e => setAge(e.target.value)} value={age}/>
          </Form.Group>
          <p>Select your sex:</p>

          <div>
            <input type="radio" id="huey" name="drone" value="Mal" onClick={e=> setSex(e.target.value)} />
            <label for="huey">Mal</label>

            <input type="radio" id="dewey" name="drone" value="Femele" onClick={e=> setSex(e.target.value)} />
            <label for="dewey">Femele</label>
          </div>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>phone</Form.Label>
            <Form.Control type="Number" placeholder="Enter phone" onChange={e => setPhone(e.target.value)} value={phone}/>
          </Form.Group>

          <Form.Group>
          
        </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>photo</Form.Label>
            <Form.Control type="text" placeholder="entre the url photo"onChange={e => setPhoto(e.target.value)} value={photo} />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={registerUser}>
            connecter
          </Button>
        </Form>
      )}
    </div>
  );
};
export default Signup;
