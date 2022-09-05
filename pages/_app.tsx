import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  // const isNotServer = typeof window !== "undefined";
  // if (
  //   isNotServer &&
  //   (localStorage.theme === "dark" ||
  //     (!("theme" in localStorage) &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches))
  // ) {
  //   document.documentElement.classList.add("dark");
  // } else {
  //   document.documentElement.classList.remove("dark");
  // }

  // // Whenever the user explicitly chooses light mode
  // localStorage.theme = "light";

  // // Whenever the user explicitly chooses dark mode
  // localStorage.theme = "dark";

  // // Whenever the user explicitly chooses to respect the OS preference
  // localStorage.removeItem("theme");
  const DARK = "dark";
  const LIGHT = "light";
  const [theme, setTheme] = useState(DARK);
  useEffect(() => {
    if (window.matchMedia(`(prefers-color-scheme: ${DARK}`).matches) {
      console.log(`dark mode set ${DARK}`);
      setTheme(DARK);
    } else {
      console.log(`light mode set ${LIGHT}`);
      setTheme(LIGHT);
    }
  }, []);

  useEffect(() => {
    if (theme === DARK) {
      document.documentElement.classList.add(DARK);
    } else {
      document.documentElement.classList.add(LIGHT);
    }
  }, [theme]);

  return (
    <div className="container mx-auto h-full w-full bg-gray-200 text-black dark:bg-red-900 dark:text-white">
      hi
    </div>
  );
}

export default MyApp;
