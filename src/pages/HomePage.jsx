import { useNavigate } from "react-router-dom";
import "../index.css";
import { useEffect } from "react";

export default function HomePage() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/product/Drops Nepal");
  });

  return null;
}
