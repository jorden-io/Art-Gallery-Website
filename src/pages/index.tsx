import Head from "next/head";
import { useState, useEffect } from "react";
import Wrapper from "@/components/Wrapper";
import TopContent from "@/components/TopContent";
import BodyContent from "@/components/BodyContent";
import Footer from "@/components/Footer";
import Body from "@/components/Body";

export default function Gallery() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  if (loading) {
    return <>loading</>;
  } else {
    return (
      <>
        <Head>
          <title>art gallery</title>
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Body>
          <Wrapper>
            <TopContent />
            <BodyContent />
            <Footer />
          </Wrapper>
        </Body>
      </>
    );
  }
}
