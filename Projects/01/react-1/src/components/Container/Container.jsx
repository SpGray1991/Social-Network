import React, { Suspense } from "react";
import s from "../Container/Container.module.css";
import { Routes, Route } from "react-router-dom";
/* import DialogsContainer from "../Dialogs/DialogsContainer"; */
import NavbarContainer from "../Navbar/NavbarContainer";
import UsersContainer from "../Users/UsersContainer";
/* import ProfileContainer from "../Profile/ProfileContainer"; */
import LoginPage from "../Login/Login";
import Preloader from "../Common/Preloader/Preloader";

const DialogsContainer = React.lazy(() =>
  import("../Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("../Profile/ProfileContainer")
);

const Container = () => {
  return (
    <container className={s.container}>
      <NavbarContainer />
      <content className={s.content}>
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path="/profile/*" element={<ProfileContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/users/*" element={<UsersContainer />} />
            <Route path="/login/*" element={<LoginPage />} />
          </Routes>
        </Suspense>
      </content>
    </container>
  );
};

export default Container;
