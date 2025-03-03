/* eslint-disable */
import { useEffect } from "react";

const LiveChat: React.FC = () => {
  useEffect(() => {
    // Define the LiveChat window object
    (window as any).__lc = (window as any).__lc || {};
    (window as any).__lc.license = 18979519;
    (window as any).__lc.integration_name = "manual_channels";
    (window as any).__lc.product_name = "livechat";

    // Initialize the LiveChat script
    (function (n, t, c) {
      function i(n: any) {
        return e._h ? e._h.apply(null, n) : e._q.push(n);
      }
      const e: any = {
        _q: [],
        _h: null,
        _v: "2.0",
        on: function () {
          i(["on", c.call(arguments)]);
        },
        once: function () {
          i(["once", c.call(arguments)]);
        },
        off: function () {
          i(["off", c.call(arguments)]);
        },
        get: function () {
          if (!e._h)
            throw new Error(
              "[LiveChatWidget] You can't use getters before load."
            );
          return i(["get", c.call(arguments)]);
        },
        call: function () {
          i(["call", c.call(arguments)]);
        },
        init: function () {
          const script = t.createElement("script");
          script.async = true;
          script.type = "text/javascript";
          script.src = "https://cdn.livechatinc.com/tracking.js";
          t.head.appendChild(script);
        },
      };
      if (!(n as any).__lc.asyncInit) {
        e.init();
      }
      (n as any).LiveChatWidget = (n as any).LiveChatWidget || e;
    })(window, document, [].slice);
  }, []);

  return (
    <noscript>
      <a href="https://www.livechat.com/chat-with/18979519/" rel="nofollow">
        Chat with us
      </a>
      , powered by{" "}
      <a
        href="https://www.livechat.com/?welcome"
        rel="noopener nofollow"
        target="_blank"
      >
        LiveChat
      </a>
    </noscript>
  );
};

export default LiveChat;
