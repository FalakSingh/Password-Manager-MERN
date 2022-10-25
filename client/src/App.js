import Login from "./pages/Login";
import Register from "./pages/Register"
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        {/* <Route exact path="/forgotPasswd" element={<ForgotPasswd />} />
        <Route exact path="/resetPasswd/:resetToken" element={<ResetPass />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
