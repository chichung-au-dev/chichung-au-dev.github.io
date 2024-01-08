"use strict";
(self.webpackChunkchichung_au_dev_github_io =
  self.webpackChunkchichung_au_dev_github_io || []).push([
  [141],
  {
    141: (e, s, l) => {
      l.r(s), l.d(s, {default: () => r});
      l(2791);
      var a = l(1394),
        i = l(184);
      function r(e) {
        let {repo: s, isDark: l} = e;
        return (0, i.jsx)(a.pT, {
          bottom: !0,
          duration: 1e3,
          distance: "20px",
          children: (0, i.jsx)("div", {
            children: (0, i.jsxs)("div", {
              className: l ? "dark-card-mode repo-card-div" : "repo-card-div",
              onClick: () => {
                return (
                  (e = s.link),
                  (l = s.repo),
                  void (e
                    ? window.open(e, "_blank").focus()
                    : console.log(`URL in ${l} is undefined`))
                );
                var e, l;
              },
              children: [
                (0, i.jsxs)("div", {
                  className: "repo-name-div",
                  children: [
                    (0, i.jsx)("svg", {
                      "aria-hidden": "true",
                      className: "octicon repo-svg",
                      height: "20",
                      role: "img",
                      viewBox: "0 0 12 16",
                      width: "14",
                      children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                      })
                    }),
                    (0, i.jsx)("p", {className: "repo-name", children: s.repo})
                  ]
                }),
                (0, i.jsx)("p", {
                  className: "repo-description",
                  children: s.description
                }),
                (0, i.jsx)("div", {
                  className: "repo-stats",
                  children: (0, i.jsxs)("div", {
                    className: "repo-left-stat",
                    children: [
                      (null !== s.language || null != s.languageColor) &&
                        (0, i.jsxs)("span", {
                          children: [
                            (0, i.jsx)("div", {
                              className: "language-color",
                              style: {backgroundColor: s.languageColor}
                            }),
                            (0, i.jsx)("p", {
                              className: "repo-element",
                              children: s.language
                            })
                          ]
                        }),
                      (0, i.jsxs)("span", {
                        children: [
                          (0, i.jsx)("svg", {
                            "aria-hidden": "true",
                            className: "octicon repo-star-svg",
                            height: "20",
                            role: "img",
                            viewBox: "0 0 10 16",
                            width: "12",
                            fill: "rgb(106, 115, 125)",
                            children: (0, i.jsx)("path", {
                              fillRule: "evenodd",
                              d: "M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                            })
                          }),
                          (0, i.jsx)("p", {
                            className: "repo-element",
                            children: s.forks
                          })
                        ]
                      }),
                      (0, i.jsxs)("span", {
                        children: [
                          (0, i.jsx)("svg", {
                            "aria-hidden": "true",
                            className: "octicon repo-star-svg",
                            height: "20",
                            role: "img",
                            viewBox: "0 0 14 16",
                            width: "14",
                            fill: "rgb(106, 115, 125)",
                            children: (0, i.jsx)("path", {
                              fillRule: "evenodd",
                              d: "M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                            })
                          }),
                          (0, i.jsx)("p", {
                            className: "repo-element",
                            children: s.stars
                          })
                        ]
                      })
                    ]
                  })
                })
              ]
            })
          })
        });
      }
    }
  }
]);
//# sourceMappingURL=141.5f1f4719.chunk.js.map
