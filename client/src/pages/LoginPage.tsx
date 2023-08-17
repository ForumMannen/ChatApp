// import React, { useEffect } from "react";
// import { io, Socket } from "socket.io-client";

// function LoginPage() {
//   const socket: Socket = io("http://localhost:3000", { autoConnect: false });

//   const initChat = () => {
//     socket.connect();
//   };

//   useEffect(() => {
//     socket.on("test", (data) => {
//       console.log(data);
//     });
//   }, []);

//   return (
//     <div>
//       <input type="text" />
//       <button onClick={initChat}>Börja chatta</button>
//     </div>
//   );
// }

// export default LoginPage;

import { useUserContext } from "../context/UserContext";
import { useSocketContext } from "../context/socketContext";
import { useNavigate, Routes, Route } from "react-router-dom";
import ChatPage from "./ChatPage";

function LoginPage(): JSX.Element {
  const { username, setUsername, loggedIn, setLoggedIn } = useUserContext();
  const socket = useSocketContext();
  const navigate = useNavigate();

  const initChat = () => {
    setUsername(username); // Sätt användarnamnet här
    setLoggedIn(true);
    socket.emit("login", { username });
    navigate("/ChatPage");
  };

  return (
    <div>
      {!loggedIn ? (
        <div>
          <h2>Logga in för att börja chatta</h2>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Användarnamn"
          />
          <button onClick={initChat}>Börja chatta</button>
        </div>
      ) : (
        <div>
          <Routes>
            <Route path="/ChatPage" element={<ChatPage />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
