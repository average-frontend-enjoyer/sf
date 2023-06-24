"use strict";
exports.id = 613;
exports.ids = [613];
exports.modules = {

/***/ 2120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* reexport */ Content),
  "g": () => (/* reexport */ Social)
});

;// CONCATENATED MODULE: ./src/main/core/content/enums.ts
var Social;
(function(Social) {
    Social["Instagram"] = "instagram";
    Social["Reddit"] = "reddit";
    Social["Onlyfans"] = "onlyfans";
    Social["Twitter"] = "twitter";
})(Social || (Social = {}));

;// CONCATENATED MODULE: ./src/main/core/content/content.ts

class Content {
    static default() {
        return {
            common: {
                title: "",
                background: {
                    left: "",
                    right: ""
                }
            },
            header: {
                avatar: "",
                subtitle: "",
                description: ""
            },
            content: {
                default: []
            },
            footer: {
                socials: {
                    [Social.Instagram]: "",
                    [Social.Reddit]: "",
                    [Social.Onlyfans]: "",
                    [Social.Twitter]: ""
                }
            }
        };
    }
}


;// CONCATENATED MODULE: ./src/main/core/content/index.ts





/***/ }),

/***/ 7552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Eh": () => (/* reexport */ Arrow),
  "X1": () => (/* reexport */ Cross),
  "mr": () => (/* reexport */ Instagram),
  "NJ": () => (/* reexport */ Onlyfans),
  "JP": () => (/* reexport */ Reddit),
  "tL": () => (/* reexport */ Twitter)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/main/ui/common/icons/arrow/arrow.module.scss
// Exports
/* harmony default export */ const arrow_module = ({
	"arrow_right": "arrow_arrow_right__lzRfU",
	"arrow_left": "arrow_arrow_left__KeFPs"
});

;// CONCATENATED MODULE: ./src/main/ui/common/icons/arrow/arrow.tsx



const Arrow = ({ direction , className , ...props })=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: external_classnames_default()(arrow_module[`arrow_${direction}`], className),
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            id: "Vector",
            d: "M5 12H19M19 12L13 6M19 12L13 18",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    });

;// CONCATENATED MODULE: ./src/main/ui/common/icons/cross.tsx

const Cross = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M18.75 5.25L5.25 18.75",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M18.75 18.75L5.25 5.25",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });

;// CONCATENATED MODULE: ./src/main/ui/common/icons/instagram.tsx

const Instagram = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "1em",
        height: "1em",
        viewBox: "-2 -2 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M11 3.5H12M4.5 0.5H10.5C12.7091 0.5 14.5 2.29086 14.5 4.5V10.5C14.5 12.7091 12.7091 14.5 10.5 14.5H4.5C2.29086 14.5 0.5 12.7091 0.5 10.5V4.5C0.5 2.29086 2.29086 0.5 4.5 0.5ZM7.5 10.5C5.84315 10.5 4.5 9.15685 4.5 7.5C4.5 5.84315 5.84315 4.5 7.5 4.5C9.15685 4.5 10.5 5.84315 10.5 7.5C10.5 9.15685 9.15685 10.5 7.5 10.5Z",
            stroke: "currentColor",
            strokeWidth: 0.9
        })
    });

;// CONCATENATED MODULE: ./src/main/ui/common/icons/onlyfans.tsx

const Onlyfans = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "1em",
        height: "1em",
        viewBox: "-1.5 -2 35 35",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M16.165 17.236h0.038c0.007-0 0.016-0 0.025-0 0.95 0 1.721 0.77 1.721 1.721 0 0.726-0.449 1.347-1.085 1.599l-0.012 0.004h-0.107v1.445c0 0.001 0 0.002 0 0.003 0 0.221-0.115 0.416-0.288 0.527l-0.002 0.002h-0.639c-0.18-0.116-0.298-0.315-0.3-0.542v-1.434c-0.647-0.257-1.096-0.878-1.096-1.603 0-0.95 0.77-1.721 1.721-1.721 0.009 0 0.018 0 0.027 0l-0.001-0zM15.585 10.743h1.006c0.853 0.003 1.626 0.348 2.187 0.905l-0-0c0.561 0.546 0.91 1.308 0.912 2.151v0l0.004 1.262h-7.21v-1.262c0.002-0.844 0.351-1.606 0.912-2.151l0.001-0.001c0.562-0.557 1.334-0.903 2.188-0.906h0.001zM15.585 8.281c-0.001 0-0.002 0-0.004 0-1.54 0-2.936 0.62-3.951 1.624l0.001-0.001c-1.016 0.986-1.646 2.365-1.646 3.89 0 0.002 0 0.003 0 0.005v-0 1.223l-0.695 1.253v1.804c0.003 1.696 0.703 3.228 1.829 4.325l0.001 0.001c1.133 1.113 2.688 1.799 4.403 1.799 0.003 0 0.006 0 0.008 0h1.119c1.714-0 3.267-0.687 4.4-1.8l-0.001 0.001c1.129-1.097 1.831-2.63 1.833-4.326v-1.806l-0.687-1.253v-1.225c-0.002-1.527-0.633-2.906-1.648-3.893l-0.001-0.001c-1.014-1.003-2.41-1.623-3.95-1.623-0.002 0-0.004 0-0.006 0h0zM15.985 2.574c0.001 0 0.002 0 0.003 0 7.415 0 13.427 6.011 13.427 13.427s-6.011 13.427-13.427 13.427c-7.415 0-13.427-6.011-13.427-13.427 0-0.002 0-0.003 0-0.005v0c0-0.001 0-0.001 0-0.002 0-7.412 6.009-13.421 13.421-13.421 0.001 0 0.002 0 0.003 0h-0zM16 1.004c0 0 0 0-0 0-8.282 0-14.996 6.714-14.996 14.996s6.714 14.996 14.996 14.996c8.282 0 14.996-6.714 14.996-14.996v0c-0-8.282-6.714-14.995-14.996-14.996h-0z",
            fill: "currentColor"
        })
    });

;// CONCATENATED MODULE: ./src/main/ui/common/icons/reddit.tsx

const Reddit = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 1024 1024",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M664.6 729.8c-9.6-2.6-21.198.8-35.398 10.201l-1.4 1.2c-23 23-64.8 34.6-124.2 34.6s-101.2-11.6-124.2-34.6c-9.6-9.6-29-9.6-38.6 0-10 10-10 28.6.6 39.2C384 816 437.6 832.6 509.8 832.6c75 0 135-18.8 169-52.8 4.8-4.8 7.6-11.8 7.6-19.2 0-6.8-2.4-13.4-6.4-18-4.6-8.4-10.8-11.6-15.4-12.8zM438.2 579.399c0-44.2-37.2-84.4-78.2-84.4s-78.2 40.2-78.2 84.4c0 42.4 35.8 78.2 78.2 78.2s78.2-35.8 78.2-78.2zm221.401-78.2c-42.4 0-78.2 35.8-78.2 78.2s35.8 78.2 78.2 78.2 78.2-35.8 78.2-78.2-35.8-78.2-78.2-78.2zm237-124.8c-25.6 0-55.6 11.6-75.8 28.6-68-43.2-159.8-70-267.2-77.8l50-167 140.2 33.6c4.2 51.8 50.4 95.599 102.801 95.599 55 0 103.2-48.2 103.2-103.2s-48.2-103.2-103.2-103.2c-37.8 0-76 23-92.8 54.6l-166.8-41.8-2.4-.2c-11.4 0-27.2 10-28.2 26.6l-66 204.2c-105.2 1.2-208.601 29.2-292.4 79.4-25-15.6-49.6-23.2-75-23.2-67.2 0-122 54.6-122 122 0 42 20.2 79.4 56.2 99.4V629.4c0 87.2 47 163.2 135.2 220 83 57.4 195.8 89 317.6 89s237.8-31.6 320.8-89c87.2-60.4 138.4-138.6 138.4-220v-26c26-22.8 52.8-63.6 52.8-105.2-.2-67.2-58-121.8-125.401-121.8zm65.4 128.201c0 11.4-6.401 27.6-17.001 39.6-12.6-33.4-36.4-65-74.6-99.4 7.6-3.2 16-5.4 26.4-5.4 38.401-.2 65.201 26.8 65.201 65.2zM905.8 629.399c0 78-59 137.201-107.8 172.801-84.8 52.2-184.399 79.8-288.199 79.8-107.2 0-212.2-29-288-79.6-74.8-49.8-114.2-109.6-114.2-173s39.4-123.2 114.2-173c77-51.2 177-79.6 281.8-79.6 107.2 0 212.2 29 288 79.6 74.6 49.799 114.199 109.6 114.199 173zM150.399 442.4c-32.2 25.6-59.6 59.8-78.8 98.6-7.8-12.599-14-25-14-36.4 0-38.4 26.8-65.2 65.2-65.2 13-.2 21 0 27.6 3zM800.2 186.401c0-26.2 20.4-46.6 46.6-46.6s46.601 20.4 46.601 46.6-20.4 46.6-46.6 46.6c-26.2-.2-46.601-20.6-46.601-46.6z",
            fill: "currentColor",
            strokeWidth: 0.5
        })
    });

;// CONCATENATED MODULE: ./src/main/ui/common/icons/twitter.tsx

const Twitter = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 62 62",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M56 16.46a67.49 67.49 0 0 0-8.11-.73 9.75 9.75 0 0 0-16.56 8.91c-8.08-.41-14.2-4.56-19.92-10.73-.78 1.52-2.26 6.37-1.11 9.87a19.1 19.1 0 0 0 6.75 8.59 26.05 26.05 0 0 1-8.52-1.85c1.41 4.63 6.25 11.35 13.86 12.4a19.46 19.46 0 0 1-12.07 4.19A19.66 19.66 0 0 1 8 47a27.42 27.42 0 0 0 14.9 4.39c17.87 0 27.65-14.89 27.65-27.81v-1.27z",
            stroke: "currentColor",
            strokeWidth: 3
        })
    });

;// CONCATENATED MODULE: ./src/main/ui/common/icons/index.ts








/***/ }),

/***/ 6253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Gx": () => (/* reexport */ ContentProvider),
  "r0": () => (/* reexport */ useContent),
  "_H": () => (/* reexport */ useContentWithInit)
});

// UNUSED EXPORTS: ContentContext

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/main/core/content/index.ts + 2 modules
var core_content = __webpack_require__(2120);
;// CONCATENATED MODULE: ./src/main/ui/features/content-provider/content-context.ts


const ContentContext = (0,external_react_.createContext)({
    content: core_content/* Content.default */.V["default"](),
    setContent: null
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/main/ui/features/content-provider/content-provider.tsx




const ContentProvider = ({ children  })=>{
    const [content, setContent] = (0,external_react_.useState)(core_content/* Content.default */.V["default"]());
    return /*#__PURE__*/ jsx_runtime_.jsx(ContentContext.Provider, {
        value: {
            content,
            setContent
        },
        children: children
    });
};

;// CONCATENATED MODULE: ./src/main/ui/features/content-provider/hooks/use-content.ts


function useContent() {
    return (0,external_react_.useContext)(ContentContext);
}

;// CONCATENATED MODULE: ./src/main/ui/features/content-provider/hooks/use-content-with-init.ts


function useContentWithInit(data) {
    const { content , setContent  } = (0,external_react_.useContext)(ContentContext);
    (0,external_react_.useEffect)(()=>{
        setContent && setContent(data);
    }, []);
    return content;
}

;// CONCATENATED MODULE: ./src/main/ui/features/content-provider/index.ts






/***/ }),

/***/ 5733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "DY": () => (/* reexport */ ModalProvider),
  "dd": () => (/* reexport */ useModal),
  "vR": () => (/* reexport */ useModalContext)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/main/ui/features/modal-provider/modal-context.ts

const ModalContext = (0,external_react_.createContext)({
    openModal () {},
    closeModal () {},
    setModalBody: null,
    modalContext: {
        isModalOpened: false,
        closeModal () {},
        modalBody: (0,external_react_.createElement)(external_react_.Fragment)
    }
});

;// CONCATENATED MODULE: ./src/main/ui/features/modal-provider/hooks/use-modal.ts


function useModal(modalBody) {
    const { openModal , closeModal , setModalBody  } = (0,external_react_.useContext)(ModalContext);
    const handleOpenModal = ()=>{
        if (modalBody && setModalBody) {
            setModalBody(modalBody);
        }
        openModal();
    };
    return {
        openModal: handleOpenModal,
        closeModal
    };
}

;// CONCATENATED MODULE: ./src/main/ui/features/modal-provider/hooks/use-modal-context.ts


function useModalContext() {
    const { modalContext  } = (0,external_react_.useContext)(ModalContext);
    return modalContext;
}

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/main/ui/features/modal-provider/modal-provider.tsx



const ModalProvider = ({ children  })=>{
    const [isModalOpened, setIsModalOpened] = (0,external_react_.useState)(false);
    const [modalBody, setModalBody] = (0,external_react_.useState)(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}));
    const closeModal = ()=>setIsModalOpened(false);
    return /*#__PURE__*/ jsx_runtime_.jsx(ModalContext.Provider, {
        value: {
            openModal: ()=>setIsModalOpened(true),
            closeModal,
            setModalBody: setModalBody,
            modalContext: {
                isModalOpened,
                modalBody,
                closeModal
            }
        },
        children: children
    });
};

;// CONCATENATED MODULE: ./src/main/ui/features/modal-provider/index.ts





/***/ })

};
;