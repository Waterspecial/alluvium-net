import React from "react";
import "./../App.css";

const UserForm = ({ handleSubmit, loading, userInfo, setUserInfo }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleInputChange}
            placeholder="Name"
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
        </div>
        <div>
          <label htmlFor="">PortFolio Url</label>
          <input
            type="text"
            name="portfolio_url"
            value={userInfo.portfolio_url}
            onChange={handleInputChange}
            placeholder="Portfolio Url"
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit your Data"}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
