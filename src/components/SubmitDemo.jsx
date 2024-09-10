import React from "react";
import { SubmitDemoURL } from "../backend-services";
import "./../App.css";

const SubmitDemo = ({ token, demoURL, setDemoURL }) => {
  const handleSubmit = async () => {
    try {
      const res = await SubmitDemoURL(demoURL);
    } catch (error) {
      console.error("Error submitting demo URL:", error);
    }
  };

  return (
    <div className="submit">
      <input
        type="text"
        value={demoURL}
        onChange={(e) => setDemoURL(e.target.value)}
        placeholder="Demo URL"
      />
      <button style={{ marginTop: 20 }} onClick={handleSubmit}>
        Submit Demo URL
      </button>
    </div>
  );
};

export default SubmitDemo;
