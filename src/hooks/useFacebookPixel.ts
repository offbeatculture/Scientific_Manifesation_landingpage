// src/hooks/useFacebookPixel.ts
import { useEffect } from "react";

const PIXEL_IDS = ["586972862820606", "1235272225360337"];

declare global {
  interface Window {
    fbq?: any;
    _fbq?: any;
  }
}

export function useFacebookPixel() {
  useEffect(() => {
    // if already loaded → init all pixels + PageView
    if (window.fbq) {
      PIXEL_IDS.forEach((id) => window.fbq("init", id));
      window.fbq("track", "PageView");
      return;
    }

    // load script once
    (function (f: any, b: any, e: any, v: any, n: any, t: any, s: any) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode!.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js", null, null, null);

    // init all pixels
    PIXEL_IDS.forEach((id) => window.fbq!("init", id));
    window.fbq!("track", "PageView");
  }, []);
}