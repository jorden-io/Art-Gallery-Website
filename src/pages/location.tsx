import Wrapper from "@/components/Wrapper";
import Map from "@/components/location/Map";
import React from "react";
import LocationBody from "@/components/location/LocationBody";
import LocationFooter from "@/components/location/LocationFooter";
import Body from "@/components/Body";
import { useState, useEffect } from "react";
import Head from "next/head";
const Location = () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  if (loading) {
    <>loading</>;
  } else {
    return (
      <>
        <Head>
          <title>location</title>
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Body>
          <Wrapper>
            <Map />
            <LocationBody />
            <LocationFooter />
          </Wrapper>
        </Body>
      </>
    );
  }
};
export default Location;
