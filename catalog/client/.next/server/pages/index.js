(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2873:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ ContentManager)
/* harmony export */ });
/* harmony import */ var _core_content_manager_strapi_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4795);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_content_manager_strapi_client__WEBPACK_IMPORTED_MODULE_0__]);
_core_content_manager_strapi_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



class ContentManager {
    async getContent() {
        const jsonDirectory = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), process.env.DATA_FOLDER || "");
        const contentFile = await fs__WEBPACK_IMPORTED_MODULE_1__.promises.readFile(jsonDirectory + "/mock-data.json", "utf8");
        if (process.env.USE_MOCK_DATA === "true") {
            return {
                ...JSON.parse(contentFile)
            };
        }
        const [mainContent, settingsContent] = await Promise.all([
            (0,_core_content_manager_strapi_client__WEBPACK_IMPORTED_MODULE_0__/* .getStrapiVideoContent */ .c)(),
            (0,_core_content_manager_strapi_client__WEBPACK_IMPORTED_MODULE_0__/* .getStrapiSettingsContent */ .e)()
        ]);
        return {
            ...settingsContent,
            content: mainContent
        };
    }
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8060:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* reexport safe */ _content_manager__WEBPACK_IMPORTED_MODULE_0__.P)
/* harmony export */ });
/* harmony import */ var _content_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2873);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_content_manager__WEBPACK_IMPORTED_MODULE_0__]);
_content_manager__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4795:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ getStrapiVideoContent),
/* harmony export */   "e": () => (/* binding */ getStrapiSettingsContent)
/* harmony export */ });
/* harmony import */ var _core_content_manager_strapi_client_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2085);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const strapiApiClient = axios__WEBPACK_IMPORTED_MODULE_1__["default"].create({
    baseURL: `${process.env.STRAPI_API_URL}/api`
});
const getStrapiVideoContent = async ()=>{
    const { data  } = await strapiApiClient.get("/videos", {
        params: {
            populate: "*"
        }
    });
    return (0,_core_content_manager_strapi_client_utils__WEBPACK_IMPORTED_MODULE_0__/* .mapStrapiVideoCollectionResponseToContent */ .Z)(data);
};
const getStrapiSettingsContent = async ()=>{
    const { data  } = await strapiApiClient.get("/setting", {
        params: {
            populate: "*"
        }
    });
    return (0,_core_content_manager_strapi_client_utils__WEBPACK_IMPORTED_MODULE_0__/* .mapStrapiSettingsResponseToContent */ .z)(data);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z": () => (/* binding */ mapStrapiSettingsResponseToContent),
  "Z": () => (/* binding */ mapStrapiVideoCollectionResponseToContent)
});

;// CONCATENATED MODULE: external "process"
const external_process_namespaceObject = require("process");
;// CONCATENATED MODULE: ./src/main/core/content-manager/strapi-client/utils.ts

const normalizeMediaUrl = (link)=>{
    return `${external_process_namespaceObject.env.STRAPI_API_URL}${link}`;
};
const extractMediaUrl = ({ data  })=>{
    const mediaData = Array.isArray(data) ? data[0] : data;
    return normalizeMediaUrl(mediaData.attributes.url);
};
const mapStrapiVideoCollectionResponseToContent = ({ data  })=>{
    return data.reduce((acc, { attributes  })=>{
        attributes.tags.forEach(({ name  })=>{
            if (Array.isArray(acc[name])) {
                acc[name].push({
                    preview: {
                        src: extractMediaUrl(attributes.previewVideo),
                        thumbnail: extractMediaUrl(attributes.previewImage),
                        duration: attributes.videoDuration
                    },
                    title: attributes.title,
                    description: attributes.description,
                    link: attributes.link,
                    messageId: attributes.messageId,
                    price: attributes.price,
                    discountedPrice: attributes.discountedPrice
                });
                return acc;
            }
            Object.assign(acc, {
                [name]: [
                    {
                        preview: {
                            src: extractMediaUrl(attributes.previewVideo),
                            thumbnail: extractMediaUrl(attributes.previewImage),
                            duration: attributes.videoDuration
                        },
                        title: attributes.title,
                        description: attributes.description,
                        messageId: attributes.messageId,
                        link: attributes.link,
                        price: attributes.price,
                        discountedPrice: attributes.discountedPrice
                    }
                ]
            });
        });
        return acc;
    }, {});
};
const mapStrapiSettingsResponseToContent = ({ data: { attributes  }  })=>{
    return {
        common: {
            background: {
                left: extractMediaUrl(attributes.backgroundLeft),
                right: extractMediaUrl(attributes.backgroundRight)
            },
            title: attributes.title
        },
        header: {
            subtitle: attributes.subtitle,
            description: attributes.description,
            avatar: extractMediaUrl(attributes.avatar)
        },
        footer: {
            socials: {
                onlyfans: attributes.onlyfans,
                instagram: attributes.instagram,
                reddit: attributes.reddit,
                twitter: attributes.twitter
            }
        }
    };
};


/***/ }),

/***/ 3305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o": () => (/* reexport */ Button)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/main/ui/common/icons/index.ts + 7 modules
var icons = __webpack_require__(7552);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/main/ui/components/button/button.styles.scss
var button_styles = __webpack_require__(8287);
;// CONCATENATED MODULE: ./src/main/ui/components/button/button.tsx





const Button = ({ type , isSelected , text , action , link , className , isNewTab  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
            //TODO: Add External Link Support
            className: external_classnames_default()("button", {
                "button_selected": isSelected,
                "button_primary": type === "primary",
                "button_secondary": type === "secondary",
                "button_tag": type === "tag"
            }, className),
            onClick: action,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "button__content",
                children: [
                    isSelected && /*#__PURE__*/ jsx_runtime_.jsx(icons/* Cross */.X1, {
                        className: "button__icon"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "button__text",
                        children: text
                    }),
                    link && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: "button__link",
                        href: link,
                        target: isNewTab ? "_blank" : "_self"
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/main/ui/components/button/index.ts



/***/ }),

/***/ 6179:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ CardSwiper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_common_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7552);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3015);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2996);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_use_controls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7925);
/* harmony import */ var _hooks_use_delayed_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2444);
/* harmony import */ var _hooks_use_swiper_with_callback__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7730);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _card_swiper_styles_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7255);
/* harmony import */ var _card_swiper_styles_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_card_swiper_styles_scss__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_4__, swiper_react__WEBPACK_IMPORTED_MODULE_5__]);
([swiper__WEBPACK_IMPORTED_MODULE_4__, swiper_react__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const CardSwiper = ({ slides , slidesPerView , spaceBetween , scrollDelay =700 , breakpoints , hasScreenWidth , classNames ={} , onSwiper  })=>{
    const nextButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const prevButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { swiper , initSwiper  } = (0,_hooks_use_swiper_with_callback__WEBPACK_IMPORTED_MODULE_9__/* .useSwiperWithCallback */ .L)(onSwiper);
    const controls = (0,_hooks_use_controls__WEBPACK_IMPORTED_MODULE_7__/* .useControls */ .M)(swiper);
    const mouseHandlers = (0,_hooks_use_delayed_scroll__WEBPACK_IMPORTED_MODULE_8__/* .useDelayedScroll */ .f)(swiper, scrollDelay);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("card-swiper", classNames.root),
        onMouseEnter: mouseHandlers.onEnter,
        onMouseLeave: mouseHandlers.onLeave,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("card-swiper__control-button", "card-swiper__control-button_left", classNames.controls),
                ref: prevButtonRef,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_common_icons__WEBPACK_IMPORTED_MODULE_2__/* .Arrow */ .Eh, {
                    direction: "left"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("card-swiper__control-button", "card-swiper__control-button_right", classNames.controls),
                ref: nextButtonRef,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_common_icons__WEBPACK_IMPORTED_MODULE_2__/* .Arrow */ .Eh, {
                    direction: "right"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_5__.Swiper, {
                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("card-swiper__swiper", {
                    ["card-swiper__swiper_screen-width"]: hasScreenWidth
                }, classNames.swiper),
                onSwiper: initSwiper,
                slidesPerView: slidesPerView,
                spaceBetween: spaceBetween,
                modules: [
                    swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation,
                    swiper__WEBPACK_IMPORTED_MODULE_4__.Mousewheel
                ],
                mousewheel: {
                    releaseOnEdges: true,
                    forceToAxis: true
                },
                breakpoints: breakpoints,
                navigation: {
                    nextEl: nextButtonRef.current,
                    prevEl: prevButtonRef.current,
                    lockClass: "card-swiper__lock"
                },
                children: slides.map((slide)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_5__.SwiperSlide, {
                        onFocus: controls.onSlideFocus,
                        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("card-swiper__slide", classNames.slide),
                        children: slide.element
                    }, slide.key))
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ useControls)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useControls(swiper) {
    const slideTo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({ currentTarget: slide  })=>{
        if (!swiper || !slide?.parentElement?.children) return;
        const slideIndex = Array.from(slide.parentElement.children).indexOf(slide);
        swiper.slideTo(slideIndex);
    }, [
        swiper
    ]);
    return {
        onSlideFocus: slideTo
    };
}


/***/ }),

/***/ 2444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ useDelayedScroll)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Enable mousewheel after hovering over swiper area for `delay` milliseconds
 * @returns Mouse events handlers that need to be hung on the container with a swiper
 */ function useDelayedScroll(swiper, delay = 550) {
    const timeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const [mouseEventsHandler, setMouseEventsHandler] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
    const clearMousewheelTimeout = ()=>{
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!swiper) {
            return;
        }
        setMouseEventsHandler({
            onEnter: ()=>{
                if (!swiper.mousewheel) {
                    return;
                }
                swiper.mousewheel.disable();
                // Enable mousewheel after delay
                timeoutRef.current = setTimeout(()=>{
                    swiper.mousewheel.enable();
                    clearMousewheelTimeout();
                }, delay);
            },
            onLeave: ()=>{
                if (!swiper.mousewheel) {
                    return;
                }
                swiper.mousewheel.disable();
                clearMousewheelTimeout();
            }
        });
        return ()=>{
            clearMousewheelTimeout();
        };
    }, [
        swiper
    ]);
    return mouseEventsHandler;
}


/***/ }),

/***/ 7730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ useSwiperWithCallback)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useSwiperWithCallback(callback) {
    const initSwiper = (swiper)=>{
        setSwiper(swiper);
        callback && callback(swiper);
    };
    const [swiper, setSwiper] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    return {
        swiper,
        initSwiper
    };
}


/***/ }),

/***/ 1521:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* reexport safe */ _card_swiper__WEBPACK_IMPORTED_MODULE_0__.t)
/* harmony export */ });
/* harmony import */ var _card_swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6179);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_card_swiper__WEBPACK_IMPORTED_MODULE_0__]);
_card_swiper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 781:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Category)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_components_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3305);
/* harmony import */ var _ui_components_card_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1521);
/* harmony import */ var _ui_features_category_utils_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4796);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_use_cards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2499);
/* harmony import */ var _hooks_use_swiper_breakpoints__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3085);
/* harmony import */ var _hooks_use_view_switcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2885);
/* harmony import */ var _category_styles_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6975);
/* harmony import */ var _category_styles_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_category_styles_scss__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components_card_swiper__WEBPACK_IMPORTED_MODULE_2__]);
_ui_components_card_swiper__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const Category = ({ title , content  })=>{
    const breakpoints = (0,_hooks_use_swiper_breakpoints__WEBPACK_IMPORTED_MODULE_8__/* .useSwiperBreakpoints */ ._)();
    const { isExpandedView , toggleView , forceExpandedView , showExpandButton  } = (0,_hooks_use_view_switcher__WEBPACK_IMPORTED_MODULE_6__/* .useViewSwitcher */ .p)();
    const contentCards = (0,_hooks_use_cards__WEBPACK_IMPORTED_MODULE_5__/* .useCards */ .K)(isExpandedView, content);
    if (!content.length) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "category",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                className: "category__header",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "category__title",
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "category__badge",
                        children: content.length
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("category__content", {
                    "category__content_expanded": isExpandedView
                }),
                children: !isExpandedView ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_components_card_swiper__WEBPACK_IMPORTED_MODULE_2__/* .CardSwiper */ .t, {
                    spaceBetween: 10,
                    slides: _ui_features_category_utils_format__WEBPACK_IMPORTED_MODULE_3__/* .format.asSlides */ .W.asSlides(contentCards),
                    slidesPerView: 1,
                    breakpoints: breakpoints,
                    classNames: {
                        controls: "category__controls",
                        slide: "category__slide"
                    },
                    onSwiper: forceExpandedView
                }) : contentCards
            }),
            showExpandButton && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_components_button__WEBPACK_IMPORTED_MODULE_1__/* .CustomButton */ .o, {
                text: `${isExpandedView ? "Collapse" : "Show All"} ${title}`,
                type: "secondary",
                className: "category__button",
                action: toggleView
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "K": () => (/* binding */ useCards)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/main/ui/components/button/index.ts + 1 modules
var components_button = __webpack_require__(3305);
;// CONCATENATED MODULE: ./src/main/ui/features/category/__card/card.module.scss
// Exports
/* harmony default export */ const card_module = ({
	"card": "card_card__qJfa0",
	"content": "card_content__eqTDh",
	"preview": "card_preview__tQpmX",
	"play": "card_play__kmB5t",
	"preview-image": "card_preview-image__3gGA9",
	"previewImage": "card_preview-image__3gGA9",
	"duration": "card_duration__blJwh",
	"title": "card_title__wyHTW",
	"description": "card_description__JswJJ",
	"button": "card_button__WgijD",
	"messageId": "card_messageId__jYpKa"
});

;// CONCATENATED MODULE: ./src/main/ui/features/category/__card/hooks/use-card-button.tsx



function useCardButton(data) {
    return (0,external_react_.useMemo)(()=>{
        const { link  } = data;
        return /*#__PURE__*/ (0,external_react_.createElement)(components_button/* CustomButton */.o, {
            type: "primary",
            text: "CLICK TO BUY",
            link,
            className: card_module.button,
            isNewTab: true
        });
    }, [
        JSON.stringify(data)
    ]);
}

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/main/ui/components/video/video.styles.scss
var video_styles = __webpack_require__(2017);
;// CONCATENATED MODULE: ./src/main/ui/components/video/video.tsx



const Video = ({ src , width ="100%" , controls =true , autoPlay =true , className , ...props })=>{
    return /*#__PURE__*/ (0,external_react_.createElement)("video", {
        src,
        width,
        controls,
        autoPlay,
        className: external_classnames_default()("video", className),
        ...props
    });
};

;// CONCATENATED MODULE: ./src/main/ui/components/video/index.ts


;// CONCATENATED MODULE: ./src/main/ui/features/category/__card/__video-teaser/video-teaser.module.scss
// Exports
/* harmony default export */ const video_teaser_module = ({
	"teaser": "video-teaser_teaser__0U3fv",
	"header": "video-teaser_header__BmJ_G",
	"button": "video-teaser_button__r_d3S"
});

;// CONCATENATED MODULE: ./src/main/ui/features/category/__card/__video-teaser/video-teaser.tsx





const VideoTeaser = ({ title , src , button , className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
        className: external_classnames_default()(video_teaser_module.teaser, className),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: video_teaser_module.header,
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Video, {
                src: src
            }),
            /*#__PURE__*/ (0,external_react_.cloneElement)(button, {
                className: video_teaser_module.button
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/main/ui/features/modal-provider/index.ts + 4 modules
var modal_provider = __webpack_require__(5733);
;// CONCATENATED MODULE: ./src/main/ui/features/category/__card/hooks/use-video-teaser.ts



function useVideoTeaser(videoTeaserProps) {
    const teaser = (0,external_react_.createElement)(VideoTeaser, videoTeaserProps);
    const { openModal: openTeaser  } = (0,modal_provider/* useModal */.dd)(teaser);
    return openTeaser;
}

;// CONCATENATED MODULE: ./src/main/ui/features/category/__card/card.tsx





const Card = ({ preview: { thumbnail , src , duration  } , title , description , messageId , className , ...buttonData })=>{
    const button = useCardButton(buttonData);
    const openTeaser = useVideoTeaser({
        title,
        src,
        button
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
        className: external_classnames_default()(card_module.card, className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: card_module.preview,
                onClick: openTeaser,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: thumbnail,
                        alt: title,
                        sizes: "100%",
                        className: card_module.previewImage
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        role: "button",
                        className: card_module.play
                    }),
                    duration && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: card_module.duration,
                        children: duration
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: card_module.content,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: card_module.title,
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: card_module.description,
                        children: description
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        children: [
                            "Message me: ",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: card_module.messageId,
                                children: messageId
                            })
                        ]
                    }),
                    button
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/main/ui/features/category/hooks/use-cards.ts


function useCards(isExpandedView, content) {
    return (0,external_react_.useMemo)(()=>{
        return content.map((contentCard, index)=>{
            const key = contentCard.messageId + index;
            return (0,external_react_.createElement)(Card, {
                ...contentCard,
                key
            });
        });
    }, [
        isExpandedView,
        content
    ]);
}


/***/ }),

/***/ 3085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_": () => (/* binding */ useSwiperBreakpoints)
});

;// CONCATENATED MODULE: ./src/main/ui/common/styles/export/breakpoints.module.scss
// Exports
/* harmony default export */ const breakpoints_module = ({
	"mobile": "720px",
	"tablet": "1140px",
	"desktop": "1440px"
});

;// CONCATENATED MODULE: ./src/main/ui/features/category/hooks/use-swiper-breakpoints.ts

function useSwiperBreakpoints() {
    return {
        [tablet()]: {
            slidesPerView: "auto"
        }
    };
}
function tablet() {
    return parseInt(breakpoints_module.mobile);
}


/***/ }),

/***/ 2885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ useViewSwitcher)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useViewSwitcher() {
    const [isExpandedView, setIsExpandedView] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [showExpandButton, setShowExpandButton] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const toggleView = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setIsExpandedView((isExpanded)=>!isExpanded);
    }, []);
    const forceExpandedView = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((swiper)=>{
        if (swiper.isBeginning && !swiper.allowSlideNext) {
            setShowExpandButton(false);
        }
    }, []);
    return {
        isExpandedView,
        toggleView,
        forceExpandedView,
        showExpandButton
    };
}


/***/ }),

/***/ 5652:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* reexport safe */ _category__WEBPACK_IMPORTED_MODULE_0__.W)
/* harmony export */ });
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(781);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_category__WEBPACK_IMPORTED_MODULE_0__]);
_category__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ format)
/* harmony export */ });
const format = {
    asSlides (elements) {
        return elements.map((element, index)=>({
                element,
                key: `${element.key} ${index}`
            }));
    }
};


/***/ }),

/***/ 7577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "P": () => (/* reexport */ TagList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/main/ui/components/button/index.ts + 1 modules
var components_button = __webpack_require__(3305);
;// CONCATENATED MODULE: ./src/main/ui/features/tag-list/hooks/use-tags.tsx



function useTags(tags) {
    return (0,external_react_.useMemo)(()=>{
        return tags.map((tag, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(components_button/* CustomButton */.o, {
                type: "tag",
                ...tag
            }, tag.text + index);
        });
    }, [
        JSON.stringify(tags)
    ]);
}

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/main/ui/features/tag-list/tag-list.styles.scss
var tag_list_styles = __webpack_require__(8346);
;// CONCATENATED MODULE: ./src/main/ui/features/tag-list/tag-list.tsx




const TagList = ({ tags , className  })=>{
    const tagItems = useTags(tags);
    return /*#__PURE__*/ jsx_runtime_.jsx("aside", {
        className: external_classnames_default()("tag-list", className),
        children: tagItems
    });
};

;// CONCATENATED MODULE: ./src/main/ui/features/tag-list/index.ts



/***/ }),

/***/ 7471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ useDocumentTitle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_features_content_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6253);


function useDocumentTitle() {
    const { content: { common: { title  }  }  } = (0,_ui_features_content_provider__WEBPACK_IMPORTED_MODULE_1__/* .useContent */ .r0)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        document.title = title;
    }, [
        title
    ]);
}


/***/ }),

/***/ 6443:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* reexport safe */ _main_page__WEBPACK_IMPORTED_MODULE_0__.h)
/* harmony export */ });
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9660);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_main_page__WEBPACK_IMPORTED_MODULE_0__]);
_main_page__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9660:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ MainPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_features_content_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6253);
/* harmony import */ var _ui_pages_main_page_hooks_use_document_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7471);
/* harmony import */ var _ui_widgets_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9030);
/* harmony import */ var _main_page_styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4792);
/* harmony import */ var _main_page_styles_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_main_page_styles_scss__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_widgets_content__WEBPACK_IMPORTED_MODULE_4__]);
_ui_widgets_content__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const MainPage = ({ content  })=>{
    (0,_ui_features_content_provider__WEBPACK_IMPORTED_MODULE_2__/* .useContentWithInit */ ._H)(content);
    (0,_ui_pages_main_page_hooks_use_document_title__WEBPACK_IMPORTED_MODULE_3__/* .useDocumentTitle */ .j)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_widgets_content__WEBPACK_IMPORTED_MODULE_4__/* .Content */ .V, {});
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3249:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ Content)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_features_tag_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7577);
/* harmony import */ var _ui_widgets_content_hooks_use_main_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4068);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _content_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1238);
/* harmony import */ var _content_styles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_content_styles_scss__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_widgets_content_hooks_use_main_content__WEBPACK_IMPORTED_MODULE_2__]);
_ui_widgets_content_hooks_use_main_content__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Content = ({ className  })=>{
    const { tags , displayedCategories  } = (0,_ui_widgets_content_hooks_use_main_content__WEBPACK_IMPORTED_MODULE_2__/* .useMainContent */ .e)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("content", className),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "content__tags",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_features_tag_list__WEBPACK_IMPORTED_MODULE_1__/* .TagList */ .P, {
                    tags: tags
                })
            }),
            displayedCategories
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4068:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ useMainContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_features_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5652);
/* harmony import */ var _ui_features_content_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6253);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_features_category__WEBPACK_IMPORTED_MODULE_1__]);
_ui_features_category__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function useMainContent() {
    const { content: { content: mainContent  }  } = (0,_ui_features_content_provider__WEBPACK_IMPORTED_MODULE_2__/* .useContent */ .r0)();
    const categoryTags = Object.keys(mainContent);
    const [selectedTags, setSelectedTags] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const tagAction = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((targetTag)=>{
        setSelectedTags((selectedTags)=>{
            if (selectedTags.includes(targetTag)) {
                return selectedTags.filter((tag)=>tag !== targetTag);
            }
            return [
                ...selectedTags,
                targetTag
            ];
        });
    }, []);
    const tags = categoryTags.reduce((tags, tag)=>{
        // excluding empty categories from tag list
        if (!mainContent[tag].length) return tags;
        return [
            ...tags,
            {
                text: tag,
                action: ()=>tagAction(tag),
                isSelected: selectedTags.includes(tag)
            }
        ];
    }, []).sort((tag)=>{
        if (tag.text.toLowerCase() === "popular") return -1;
        return 0;
    });
    const displayedCategories = Object.entries(mainContent).sort(([tag])=>{
        if (tag.toLowerCase() === "popular") return -1;
        return 0;
    }).reduce((categories, [tag, content], index)=>{
        if (!selectedTags.length || selectedTags.includes(tag)) {
            const category = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ui_features_category__WEBPACK_IMPORTED_MODULE_1__/* .Category */ .W, {
                title: tag,
                content,
                key: tag + index
            });
            return [
                ...categories,
                category
            ];
        }
        return categories;
    }, []);
    return {
        tags,
        displayedCategories
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9030:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* reexport safe */ _content__WEBPACK_IMPORTED_MODULE_0__.V)
/* harmony export */ });
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3249);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_content__WEBPACK_IMPORTED_MODULE_0__]);
_content__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5970:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_content_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8060);
/* harmony import */ var _ui_pages_main_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6443);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_content_manager__WEBPACK_IMPORTED_MODULE_1__, _ui_pages_main_page__WEBPACK_IMPORTED_MODULE_2__]);
([_core_content_manager__WEBPACK_IMPORTED_MODULE_1__, _ui_pages_main_page__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const getServerSideProps = async ()=>{
    const contentManager = new _core_content_manager__WEBPACK_IMPORTED_MODULE_1__/* .ContentManager */ .P();
    try {
        const content = await contentManager.getContent();
        return {
            props: {
                content
            }
        };
    } catch (error) {
        console.error(error);
        return {
            notFound: true
        };
    }
};
const Home = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_pages_main_page__WEBPACK_IMPORTED_MODULE_2__/* .MainPage */ .h, {
        ...props
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2996:
/***/ (() => {



/***/ }),

/***/ 8722:
/***/ (() => {



/***/ }),

/***/ 8287:
/***/ (() => {



/***/ }),

/***/ 7255:
/***/ (() => {



/***/ }),

/***/ 2017:
/***/ (() => {



/***/ }),

/***/ 6975:
/***/ (() => {



/***/ }),

/***/ 8346:
/***/ (() => {



/***/ }),

/***/ 4792:
/***/ (() => {



/***/ }),

/***/ 1238:
/***/ (() => {



/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

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

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 3877:
/***/ ((module) => {

"use strict";
module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,613], () => (__webpack_exec__(5970)));
module.exports = __webpack_exports__;

})();