import "./App.css";
import {useState} from "react"
import Content from "./components/content/index.jsx";
import Modal from "./components/modal/index.jsx";
import Edit from "./components/edit/index.jsx";
function App() {
  const [isShow, setIsShow] = useState('');
  const [currentUserId, setCurrentUserId] = useState(null);
  const [users, setUsers] = useState([
    {
      id: 17235300675181,
      email: "thangvd2312@gmail.com",
      firstName: "Vu",
      lastName: "The Vang",
      city: "Ha Noi",
      phoneNumber: "0964055094",
      address: "Gemek 1 - An Khanh - Hoai Duc",
    },
    {
      id: 17235300675182,
      email: "thangvd2312@gmail.com",
      firstName: "Vu",
      lastName: "The Vang",
      city: "Ha Noi",
      phoneNumber: "0964055094",
      address: "Gemek 1 - An Khanh - Hoai Duc",
    },
    {
      id: 17235300675183,
      email: "thangvd2312@gmail.com",
      firstName: "Vu",
      lastName: "The Vang",
      city: "Ha Noi",
      phoneNumber: "0964055094",
      address: "Gemek 1 - An Khanh - Hoai Duc",
    },
    {
      id: 17235300675184,
      email: "thangvd2312@gmail.com",
      firstName: "Vu",
      lastName: "The Vang",
      city: "Ha Noi",
      phoneNumber: "0964055094",
      address: "Gemek 1 - An Khanh - Hoai Duc",
    },
    {
      id: 17235300675185,
      email: "thangvd2312@gmail.com",
      firstName: "Vu",
      lastName: "The Vang",
      city: "Ha Noi",
      phoneNumber: "0964055094",
      address: "Gemek 1 - An Khanh - Hoai Duc",
    },
    {
      id: 17235300675186,
      email: "thangvd2312@gmail.com",
      firstName: "Vu",
      lastName: "The Vang",
      city: "Ha Noi",
      phoneNumber: "0964055094",
      address: "Gemek 1 - An Khanh - Hoai Duc",
    },
    {
      id: 17235300675187,
      email: "thangvd2312@gmail.com",
      firstName: "Vu",
      lastName: "The Vang",
      city: "Ha Noi",
      phoneNumber: "0964055094",
      address: "Gemek 1 - An Khanh - Hoai Duc",
    },
  ]);
  function setShowModal(type){
    setIsShow(type);
  }
  function addUser(newUser){
    setUsers([...users, newUser]);
  }
  console.log(users)
  return(
    <>
      <Content setShowModal={setShowModal} users={users} setEditUserId={setCurrentUserId} setUsers={setUsers}/>
      <Modal isShow={isShow} setShowModal={setShowModal} addUser={addUser} users={users}/>
      <Edit isShow={isShow} setEdit={setShowModal} users={users} setUsers={setUsers} currentUserId={currentUserId}/>
    </>
  );
}

export default App;
