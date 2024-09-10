import { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import { getApiToken, submitUserInfo } from "./backend-services";
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
  const [loading, setLoading] = useState(false);

  const handleTokenGeneration = async () => {
    await getApiToken();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await submitUserInfo(userInfo);
      setStats(res);
    } catch (error) {
      console.error("Error submitting user info:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleTokenGeneration();
  }, []);

  return (
    <div>
      <h1>Alluvium Frontend Developer Test</h1>
      <UserForm
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        handleSubmit={handleSubmit}
        loading={loading}
      />
      <InfoChart stats={stats} />
      <SubmitDemo demoURL={demoURL} setDemoURL={setDemoURL} />
    </div>
  );
};

export default App;
