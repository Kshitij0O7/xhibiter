import React, { useRef, useState, useEffect } from "react";

import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { ThemeProvider } from "next-themes";
import { MetaMaskProvider } from "metamask-react";
import { store } from "../redux/store";
import Layout from "../components/layout";
import Meta from "../components/Meta";
import UserContext from "../components/UserContext";

import "../styles/globals.css";
import "../styles/index.css";
import Button from "../components/cta/Button";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const scrollRef = useRef({ scrollPos: 0 });

  // Define the paths where you want the button to appear
  const buttonVisiblePaths = ["/", "/mix", "/realEstate"];
  const isPathMatching = (path) => {
    if (path === "/" || path === "/mix") return true;
    if (path === "/realEstate") return true;
    return false;
  };

  const [currentPath, setCurrentPath] = useState(router.pathname);
  const showButton = isPathMatching(currentPath);

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentPath(router.pathname);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events, router.pathname]);

  return (
    <>
      <Meta title="Home 1" />

      <Provider store={store}>
        <ThemeProvider enableSystem={true} attribute="class">
          <MetaMaskProvider>
            <UserContext.Provider value={{ scrollRef: scrollRef }}>
              {router.pathname === "/login" ? (
                <Component {...pageProps} />
              ) : (
                <>
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                  {showButton && (
                    <div
                      style={{
                        position: "fixed",
                        zIndex: "1000",
                        bottom: "20px",
                        left: 0,
                        right: 0,
                        textAlign: "center",
                      }}
                    >
                      <Button />{" "}
                      {/* Button will only render on specified paths */}
                    </div>
                  )}
                </>
              )}
            </UserContext.Provider>
          </MetaMaskProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
