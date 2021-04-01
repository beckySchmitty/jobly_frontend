import './App.css';
import jwt from "jsonwebtoken";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes/Routes";
import JoblyApi from "./api";
import UserContext from "./auth/UserContext";



function App() {

  const [userInfo, setUserInfo] = useState(false);

  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage("token");


  // LOAD USER INFO - side effect
  // Runs with token change
  // "Loading" shown while making API call
  // related to userInfo state

  useEffect(function loadUserFromAPI() {

  // *********
    async function getCurrentUser() {
      if (token) {
        try {
          // grab username
          let { username } = jwt.decode(token);
          // save token to Api class so it can be used in API call
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username);

          // Update currentUser state
          setCurrentUser(currentUser);

        } catch (error) {
          console.error("loadUserFromAPI Error (App)", error);
          setCurrentUser(null);
        }
      }
      // udpate userInfo state if sucessful
      setUserInfo(true);
    }
  // *********

    // setting to false while making API call
    setInfoLoaded(false);

    getCurrentUser();
  }, [token]);


    // Handles site-wide signup
    // logs in user and sets token
     async function signup(signupData) {
      try {
        let token = await JoblyApi.signup(signupData);
        setToken(token);
        return { success: true };
      } catch (errors) {
        console.error("signup failed", errors);
        return { success: false, errors };
      }
    }


    // Handles site-wide login
    // logs user in, saves token
    async function login(loginData) {
      try {
        let token = await JoblyApi.login(loginData);
        setToken(token);
        return { success: true };
      } catch (errors) {
        console.error("login failed", errors);
        return { success: false, errors };
      }
    }

    if (!userInfo) return "LOADING..."
  
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={currentUser, setCurrentUser}>      
          <div>
          <Routes login={login} signup={signup} />
        </div>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
