import { useEffect } from "react";

const CLARITY_ID = "tiscw8by7m"; // your project ID

declare global {
  interface Window {
    clarity?: (...args: any[]) => void;
  }
}

export function useClarity() {
  useEffect(() => {
    if (window.clarity) return; // already loaded

    (function (c: any, l: any, a: any, r: any, i: any, t?: any, y?: any) {
      c[a] =
        c[a] ||
        function () {
          (c[a].q = c[a].q || []).push(arguments);
        };
      t = l.createElement(r);
      t.async = 1;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode!.insertBefore(t, y);
    })(window, document, "clarity", "script", CLARITY_ID);
  }, []);
}
