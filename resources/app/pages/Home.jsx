import React, { Fragment } from 'react';

import Header from "@/components/Header";
import NumberingSectionStart from "@/components/NumberingSectionStart";
import AboutUs from "@/components/AboutUs"

export default function Home() {
  return (
    <Fragment>
      {/* <!-- Numbering Section Start --> */}
      <Header/>
      {/* <!-- Numbering Section End --> */}
      {/* <!-- Main Services Wrapper Start --> */}
      <NumberingSectionStart />
      {/* <!-- Main Services Wrapper End --> */}
      {/* <!-- About Us Start --> */}
      <AboutUs />
       {/* <!-- Our Team Start --> */}
    </Fragment>
  );
}