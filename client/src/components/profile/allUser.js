import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {load_users,block_User}from "../../js/actions/userAction";

const AllUsers=()=>{
    const dispatch = useDispatch();
    const users= useSelector((state) => state.userReducer.user);
    useEffect(() => {
        dispatch(load_users());
      }, [dispatch]);
     return(
       
       <h1>all users</h1>
       // <div className="affichageusers">
     
    //    {users.map((user) => (

    //    <Card
    //        className=" usercard "
    //        key={users._id}
    //        style={{ width: "25rem" }}
    //      >
    //      <Card.Img variant="top" src={users.photo} />
    //        <Card.Text>name : {users.name} </Card.Text>
    //        <Card.Body>
    //          <Card.Text> Last name : {users.lastName} </Card.Text>

    //          <Card.Text>age : {users.aget} </Card.Text>
    //          <Card.Text>sex: {users.sex} </Card.Text>
    //          <Card.Text>phone : {users.phone} </Card.Text>
   //           <Card.Text>email : {users.email} </Card.Text>

    //          </Card.Body>
    //          </Card>

    //    ))}


                
     //   </div>




     )
};
export default AllUsers