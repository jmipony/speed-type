import { useEffect, useState } from "react";

export function Response() {
  useEffect(() => {
    const takeRes = async () => {
      try {
        const res = await fetch(
          "https://quotes.rest/quote/random?language=en&limit=1",
        );
        if (!res.ok) {
          throw new Error("Network gg");
        }
        const data = await res.json();
        console.log(data.contents.quotes[0].quote);
      } catch (err) {
        console.log(`Error = ${err.message}`);
      } finally {
        console.log("jara poshla");
      }
    };

    takeRes();
  }, []);
  return null;
}
