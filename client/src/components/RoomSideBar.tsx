import { io, Socket } from "socket.io-client";

function RoomSideBar() {
  // FÖRSÖKER SKAPA RUM MED HJÄLP AV VIDEO
  const socket: Socket = io();
  console.log("Socket connected:", socket.connected);

  const enterRoom = () => {
    socket.emit("user_joins_room", "123");
  };

  return (
    <div>
      <div>
        <button onClick={enterRoom}>Gå in i rum</button>
      </div>
    </div>

    // HELA VÄGEN HIT.
  );
}

export default RoomSideBar;
