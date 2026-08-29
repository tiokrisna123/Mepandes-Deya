import { Routes, Route, Navigate } from "react-router-dom";
import App from "./App";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/mepandes-alya-dan-deya" element={<App />} />

      <Route
        path="/"
        element={<Navigate to="/mepandes-alya-dan-deya" replace />}
      />
    </Routes>
  );
}