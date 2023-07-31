(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/main/ui/common/hooks/use-vh-unit.ts

function useVhUnit() {
    const handleResize = ()=>{
        const viewportHeight = window.document.documentElement.clientHeight;
        window.document.documentElement.style.setProperty("--viewport-height-unit", `${viewportHeight / 100}px`);
    };
    (0,external_react_.useEffect)(()=>{
        handleResize();
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
}

// EXTERNAL MODULE: ./src/main/ui/features/content-provider/index.ts + 4 modules
var content_provider = __webpack_require__(6253);
// EXTERNAL MODULE: ./src/main/ui/features/modal-provider/index.ts + 4 modules
var modal_provider = __webpack_require__(5733);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/images/background-left.png
/* harmony default export */ const background_left = ({"src":"/_next/static/media/background-left.dbba29c4.png","height":1440,"width":800,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAIAAABRUclSAAAAcElEQVR42mNQsbSVMLJgUNOXMDBn4NUzsrE0j3Y0tQ4KYxA0sQhytc0McHLy8mSQMTZnYGB2MNAK8PNlMDQzr08JNtZSZVA3YAh3suxM8o1zNvIMDmTQ1VRzN9Iw11TW0NNnYJeQZuDgZ2Bg0DI0BQAhlBNqYQcQBQAAAABJRU5ErkJggg==","blurWidth":4,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/background-right.png
/* harmony default export */ const background_right = ({"src":"/_next/static/media/background-right.e7eb0b67.png","height":1852,"width":1232,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAIAAAC+k6JsAAAAgklEQVR42mOQEBQuLSqsKCmxsbTT1dJnEJWQra0o68+JsdM3NDW1ZBARlZzaWrO2q6w8JlBN14xBnIVxUV3W8aUTq2IDFTWNGYCgJSVkakGsrYObgT6YHxUZ5WJr62tnJSMoAeIHONt3JPqUR3p7unswsDBzmhvopbuZl8SHJyclAQC4EyGRr6T7SwAAAABJRU5ErkJggg==","blurWidth":5,"blurHeight":8});
// EXTERNAL MODULE: ./src/main/ui/widgets/background/background.styles.scss
var background_styles = __webpack_require__(7739);
;// CONCATENATED MODULE: ./src/main/ui/widgets/background/background.tsx






const Background = ()=>{
    const { content: { common: { title , background  }  }  } = (0,content_provider/* useContent */.r0)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
        className: "background",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "background__left",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: background.left || background_left,
                    alt: title,
                    fill: true,
                    style: {
                        objectFit: "cover"
                    },
                    priority: true
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "background__right",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: background.right || background_right,
                    alt: title,
                    fill: true,
                    style: {
                        objectFit: "cover"
                    },
                    priority: true
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/main/ui/widgets/background/index.ts


;// CONCATENATED MODULE: ./src/main/ui/common/hooks/use-scroll-on-top.ts

function useScrollOnTop() {
    return (0,external_react_.useCallback)(()=>{
        window.document.body.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);
}

// EXTERNAL MODULE: ./src/main/core/content/index.ts + 2 modules
var content = __webpack_require__(2120);
// EXTERNAL MODULE: ./src/main/ui/common/icons/index.ts + 7 modules
var icons = __webpack_require__(7552);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/main/ui/features/icon-gallery/__icon/icon.module.scss
// Exports
/* harmony default export */ const icon_module = ({
	"icon": "icon_icon__Ho0uM"
});

;// CONCATENATED MODULE: ./src/main/ui/features/icon-gallery/__icon/icon.tsx




const Icon = ({ className , icon , url  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        className: external_classnames_default()(icon_module.icon, className),
        href: url,
        target: "_blank",
        children: icon
    });
};

;// CONCATENATED MODULE: ./src/main/ui/features/icon-gallery/hooks/use-social-icons.tsx






const socialIcons = {
    [content/* Social.Instagram */.g.Instagram]: /*#__PURE__*/ jsx_runtime_.jsx(icons/* Instagram */.mr, {}),
    [content/* Social.Onlyfans */.g.Onlyfans]: /*#__PURE__*/ jsx_runtime_.jsx(icons/* Onlyfans */.NJ, {}),
    [content/* Social.Reddit */.g.Reddit]: /*#__PURE__*/ jsx_runtime_.jsx(icons/* Reddit */.JP, {}),
    [content/* Social.Twitter */.g.Twitter]: /*#__PURE__*/ jsx_runtime_.jsx(icons/* Twitter */.tL, {})
};
function useSocialIcons() {
    const { content: { footer: { socials  }  }  } = (0,content_provider/* useContent */.r0)();
    return (0,external_react_.useMemo)(()=>{
        return Object.entries(socials).map(([social, url], index)=>{
            if (!url) return null;
            return /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                className: "icon-gallery__icon",
                icon: socialIcons[social],
                url: url
            }, url + index);
        });
    }, [
        JSON.stringify(socials)
    ]);
}

// EXTERNAL MODULE: ./src/main/ui/features/icon-gallery/icon-gallery.styles.scss
var icon_gallery_styles = __webpack_require__(6640);
;// CONCATENATED MODULE: ./src/main/ui/features/icon-gallery/icon-gallery.tsx




const IconGallery = ({ className  })=>{
    const icons = useSocialIcons();
    return /*#__PURE__*/ jsx_runtime_.jsx("aside", {
        className: external_classnames_default()("icon-gallery", className),
        children: icons
    });
};

;// CONCATENATED MODULE: ./src/main/ui/features/icon-gallery/index.ts


// EXTERNAL MODULE: ./src/main/ui/widgets/footer/footer.styles.scss
var footer_styles = __webpack_require__(7349);
;// CONCATENATED MODULE: ./src/main/ui/widgets/footer/footer.tsx






const Footer = ({ className  })=>{
    const { content: { common: { title  }  }  } = (0,content_provider/* useContent */.r0)();
    const scrollOnTop = useScrollOnTop();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: external_classnames_default()("footer", className),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "footer__title",
                onClick: scrollOnTop,
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(IconGallery, {
                className: "footer__icon-gallery"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/main/ui/widgets/footer/index.ts


// EXTERNAL MODULE: ./src/main/ui/widgets/header/header.styles.scss
var header_styles = __webpack_require__(7262);
;// CONCATENATED MODULE: ./src/main/ui/widgets/header/header.tsx





const Header = ({ className  })=>{
    const { content: { header , common  }  } = (0,content_provider/* useContent */.r0)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: external_classnames_default()("header", className),
        children: [
            header.avatar && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: header.avatar,
                alt: common.title,
                width: 160,
                height: 160,
                className: "header__avatar",
                priority: true
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "header__text",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "header__title",
                        children: common.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "header__subtitle",
                        children: header.subtitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "header__description",
                        children: header.description
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/main/ui/widgets/header/index.ts


;// CONCATENATED MODULE: ./src/main/ui/common/hooks/use-click-outside.ts

function useClickOutside(ref, handler) {
    (0,external_react_.useEffect)(()=>{
        function handleClickOutside(event) {
            const element = ref?.current;
            if (!element || element.contains(event.target)) return;
            handler(event);
        }
        window.addEventListener("click", handleClickOutside);
        return ()=>{
            window.removeEventListener("click", handleClickOutside);
        };
    }, [
        ref,
        handler
    ]);
}

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(6405);
;// CONCATENATED MODULE: ./src/main/ui/common/utils/portal.ts


const Portal = ({ children  })=>{
    const [mounted, setMounted] = (0,external_react_.useState)(false);
    const portalRef = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        setMounted(true);
        const { documentElement: html  } = document;
        portalRef.current = document.createElement("portal");
        html.appendChild(portalRef.current);
        return ()=>{
            setMounted(false);
            portalRef.current && portalRef.current.remove();
        };
    }, []);
    return mounted && portalRef.current ? (0,external_react_dom_.createPortal)(children, portalRef.current) : null;
};

// EXTERNAL MODULE: ./src/main/ui/widgets/modal/modal.styles.scss
var modal_styles = __webpack_require__(6250);
;// CONCATENATED MODULE: ./src/main/ui/widgets/modal/modal.tsx







const Modal = ()=>{
    const { closeModal , modalBody , isModalOpened  } = (0,modal_provider/* useModalContext */.vR)();
    const modalContentRef = (0,external_react_.useRef)(null);
    useClickOutside(modalContentRef, closeModal);
    if (!isModalOpened) return null;
    return /*#__PURE__*/ jsx_runtime_.jsx(Portal, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("aside", {
            className: "modal",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                ref: modalContentRef,
                className: "modal__content",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("header", {
                        className: "modal__header",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* Cross */.X1, {
                            role: "button",
                            className: "modal__close-icon",
                            onClick: closeModal
                        })
                    }),
                    modalBody
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/main/ui/widgets/modal/index.ts


// EXTERNAL MODULE: ./src/main/ui/pages/layout/layout.styles.scss
var layout_styles = __webpack_require__(8543);
;// CONCATENATED MODULE: ./src/main/ui/pages/layout/layout.tsx










const Layout = ({ children  })=>{
    useVhUnit();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(content_provider/* ContentProvider */.Gx, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "layout__content",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(modal_provider/* ModalProvider */.DY, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                            className: "layout__header"
                        }),
                        children,
                        /*#__PURE__*/ jsx_runtime_.jsx(Footer, {
                            className: "layout__footer"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Modal, {})
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Background, {})
        ]
    });
};

;// CONCATENATED MODULE: ./src/main/ui/pages/layout/index.ts


// EXTERNAL MODULE: ./src/styles/index.scss
var styles = __webpack_require__(7195);
;// CONCATENATED MODULE: ./src/pages/_app.tsx



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6640:
/***/ (() => {



/***/ }),

/***/ 8543:
/***/ (() => {



/***/ }),

/***/ 7739:
/***/ (() => {



/***/ }),

/***/ 7349:
/***/ (() => {



/***/ }),

/***/ 7262:
/***/ (() => {



/***/ }),

/***/ 6250:
/***/ (() => {



/***/ }),

/***/ 7195:
/***/ (() => {



/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,121,675,613], () => (__webpack_exec__(5925)));
module.exports = __webpack_exports__;

})();