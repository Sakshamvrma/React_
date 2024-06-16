import {useNavigate} from 'react-router-dom'
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "black", color: "white", width: "100vw", height: "5vh" }}>
      <button style={{ margin: "4px" }} onClick={() => navigate("/")}>Home</button>
      <button style={{ margin: "4px" }} onClick={() => navigate("/About")}>About</button>
    </div>
  );
}