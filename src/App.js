import { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import { getApiToken } from "./backend-services";
import InfoChart from "./components/InfoChart";
import SubmitDemo from "./components/SubmitDemo";

const App = () => {
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    portfolio_url: "",
  });
  const [stats, setStats] = useState();
  const [demoURL, setDemoURL] = useState("");

  const handleTokenGeneration = async () => {
    const res = await getApiToken();
    console.log(res);
    // setToken()
  };

  useEffect(() => {
    handleTokenGeneration();
  }, []);

  return (
    <div>
      <h1>Alluvium Net</h1>
      <UserForm token={token} userInfo={userInfo} setUserInfo={setUserInfo} />
      <InfoChart stats={stats} />
      <SubmitDemo token={token} demoURL={demoURL} setDemoURL={setDemoURL} />
    </div>
  );
};

export default App;
