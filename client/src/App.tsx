import LoginPage from "./pages/LoginPage";
import { UserProvider } from "./context/UserContext";
import { SocketProvider } from "./context/socketContext";

function App() {
  return (
    <div>
      <UserProvider>
        <SocketProvider>
          <LoginPage />
        </SocketProvider>
      </UserProvider>
    </div>
  );
}

export default App;
