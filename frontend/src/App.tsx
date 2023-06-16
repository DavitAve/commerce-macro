import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import HomePage from "./pages/page";
import SignInPage from "./pages/auth/signin/page";
import UserPage from "./pages/user/page";

const App: FC = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user/:userName" element={<UserPage />} />
            <Route path="/auth/sign-in" element={<SignInPage />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
};

export default App;
