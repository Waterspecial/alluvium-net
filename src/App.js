import { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import { getApiToken } from "./backend-services";
import InfoChart from "./components/InfoChart";
import SubmitDemo from "./components/SubmitDemo";

const App = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    portfolio_url: "",
  });
  const [stats, setStats] = useState({});
  const [demoURL, setDemoURL] = useState("");

  const handleTokenGeneration = async () => {
    await getApiToken();
  };

  useEffect(() => {
    handleTokenGeneration();
  }, []);

  return (
    <div>
      <h1>Alluvium Net</h1>
      <UserForm
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        setStats={setStats}
      />
      <InfoChart stats={stats} />
      <SubmitDemo demoURL={demoURL} setDemoURL={setDemoURL} />
    </div>
  );
};

export default App;
