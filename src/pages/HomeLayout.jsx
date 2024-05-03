import React, { Fragment } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Header, Loading, Navbar } from "../components";
const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <Fragment>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </Fragment>
  );
};
export default HomeLayout;