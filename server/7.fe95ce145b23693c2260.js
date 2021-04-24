exports.ids = [7];
exports.modules = {

/***/ "7UEI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__("LZ34");

// EXTERNAL MODULE: external "@chakra-ui/layout"
var layout_ = __webpack_require__("k7wm");

// CONCATENATED MODULE: ./src/components/LogOutput.jsx




const LogOutput = props => {
  const {
    summary,
    minH,
    maxH
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(layout_["Flex"], {
    minH: minH || "auto",
    maxH: maxH || "auto",
    w: "100%",
    overflow: "auto",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(layout_["Flex"], {
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      children: summary.map((e, i) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(layout_["Code"], {
        mt: "0.8vh",
        w: "fit-content",
        overflowWrap: "break-word",
        variant: "outline",
        colorScheme: "blackAlpha",
        children: e
      }, i))
    })
  });
};

/* harmony default export */ var components_LogOutput = (LogOutput);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__("UlNW");
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);

// CONCATENATED MODULE: ./src/components/GamingBoard/Icon.jsx


const BuyIcon = Object(react_["createIcon"])({
  displayName: "BuyIcon",
  viewBox: "0 0 339.004 339.004",
  path: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    fill: "currentColor",
    d: "M262.122,232.344c0.197-26.82-10.405-48.031-31.552-63.01c-16.333-11.533-36.154-17.549-55.325-23.33 c-39.936-12.107-51.521-18.484-51.521-37.582c0-21.273,27.646-28.842,51.313-28.842c17.236,0,37.066,5.359,49.381,13.301 l24.415-37.812c-16.095-10.434-38.123-17.551-59.875-19.76V0H143.92v37.785c-40.035,8.807-65.255,34.973-65.255,70.637 c0,24.977,10.379,44.785,30.79,58.756c15.524,10.666,34.457,16.393,52.746,21.938c39.172,11.84,55.079,19.055,54.898,42.949 l-0.001,0.176c0,20.055-26.577,27.184-49.346,27.184c-21.508,0-44.897-9.426-58.155-23.441l-32.719,30.949 c16.79,17.758,41.184,30.313,67.041,35.234v36.838h45.039v-36.045C233.445,296.592,262.078,269.809,262.122,232.344z"
  })
});
const RerollIcon = Object(react_["createIcon"])({
  displayName: "RerollIcon",
  viewBox: "0 0 179.019 179.019",
  style: "enable-background:new 0 0 179.019 179.019;",
  path: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    fill: "currentColor",
    d: "M138.121,138.357c-13.02,13.008-30.312,20.174-48.714,20.174c-37.955,0-68.84-30.867-68.876-68.81 l14.046,14.064c0.931,0.925,2.429,0.925,3.359,0c0.919-0.931,0.919-2.434,0-3.359L19.315,81.797L0.698,100.426 c-0.931,0.925-0.931,2.429,0,3.359c0.459,0.465,1.068,0.692,1.671,0.692c0.615,0,1.223-0.233,1.677-0.692l11.826-11.832 c1.235,39.531,33.689,71.328,73.512,71.328c19.673,0,38.164-7.661,52.079-21.57c0.925-0.925,0.925-2.429,0-3.353 C140.562,137.426,139.052,137.426,138.121,138.357z"
  }, 1), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    fill: "currentColor",
    d: "M178.32,75.234c-0.919-0.925-2.423-0.925-3.353,0L163.152,87.06 c-1.247-39.531-33.701-71.322-73.518-71.322c-19.685,0-38.17,7.661-52.085,21.57c-0.931,0.925-0.931,2.429,0,3.353 c0.919,0.931,2.429,0.931,3.353,0c13.014-13.008,30.312-20.174,48.714-20.174c37.949,0,68.84,30.861,68.888,68.81l-14.058-14.064 c-0.925-0.925-2.429-0.925-3.359,0c-0.919,0.931-0.919,2.434,0,3.359l18.623,18.623l18.617-18.623 C179.251,77.668,179.251,76.164,178.32,75.234z"
  }, 2)]
});
const SellICon = Object(react_["createIcon"])({
  displayName: "SellICon",
  viewBox: "0 0 401.601 401.6",
  style: "enable-background:new 0 0 401.601 401.6;",
  path: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    fill: "currentColor",
    d: "M116.682,229.329c11.286,0,22.195-0.729,32.518-2.086V114.094c-10.322-1.356-21.232-2.085-32.518-2.085 c-64.441,0-116.681,23.693-116.681,52.921v11.477C0.001,205.634,52.241,229.329,116.682,229.329z"
  }, 1), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    fill: "currentColor",
    d: "M116.682,288.411c11.286,0,22.195-0.729,32.518-2.084v-33.166c-10.325,1.356-21.229,2.095-32.518,2.095 c-56.25,0-103.199-18.054-114.227-42.082c-1.606,3.5-2.454,7.124-2.454,10.839v11.477 C0.001,264.718,52.241,288.411,116.682,288.411z"
  }, 2), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    fill: "currentColor",
    d: "M149.199,314.823v-2.578c-10.325,1.356-21.229,2.095-32.518,2.095c-56.25,0-103.199-18.054-114.227-42.082 C0.848,275.757,0,279.381,0,283.096v11.477c0,29.229,52.24,52.922,116.681,52.922c12.887,0,25.282-0.95,36.873-2.7 c-2.873-5.877-4.355-12.075-4.355-18.496V314.823z"
  }, 3), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    fill: "currentColor",
    d: "M284.92,22.379c-64.441,0-116.681,23.693-116.681,52.921v11.477c0,29.228,52.24,52.921,116.681,52.921 c64.44,0,116.681-23.693,116.681-52.921V75.3C401.601,46.072,349.36,22.379,284.92,22.379z"
  }, 4), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    fill: "currentColor",
    d: "M284.92,165.626c-56.25,0-103.199-18.053-114.227-42.082c-1.606,3.499-2.454,7.123-2.454,10.839v11.477 c0,29.228,52.24,52.921,116.681,52.921c64.44,0,116.681-23.693,116.681-52.921v-11.477c0-3.716-0.848-7.34-2.454-10.839 C388.119,147.573,341.17,165.626,284.92,165.626z"
  }, 5), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    fill: "currentColor",
    d: "M284.92,224.71c-56.25,0-103.199-18.054-114.227-42.082c-1.606,3.499-2.454,7.123-2.454,10.839v11.477 c0,29.229,52.24,52.922,116.681,52.922c64.44,0,116.681-23.693,116.681-52.922v-11.477c0-3.716-0.848-7.34-2.454-10.839 C388.119,206.657,341.17,224.71,284.92,224.71z"
  }, 6), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    fill: "currentColor",
    d: "M284.92,286.983c-56.25,0-103.199-18.054-114.227-42.082c-1.606,3.5-2.454,7.123-2.454,10.838v11.478 c0,29.228,52.24,52.921,116.681,52.921c64.44,0,116.681-23.693,116.681-52.921v-11.478c0-3.715-0.848-7.34-2.454-10.838 C388.119,268.928,341.17,286.983,284.92,286.983z"
  }, 7), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    fill: "currentColor",
    d: "M284.92,346.066c-56.25,0-103.199-18.053-114.227-42.081c-1.606,3.5-2.454,7.125-2.454,10.838V326.3 c0,29.228,52.24,52.921,116.681,52.921c64.44,0,116.681-23.693,116.681-52.921v-11.478c0-3.715-0.848-7.34-2.454-10.838 C388.119,328.012,341.17,346.066,284.92,346.066z"
  }, 8)]
});
const SwapIcon = Object(react_["createIcon"])({
  displayName: "SwapIcon",
  viewBox: "0 0 24 24",
  path: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }, 1), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    fill: "currentColor",
    d: "M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"
  }, 2)]
});
// CONCATENATED MODULE: ./src/components/GamingBoard/Cards/Stats.jsx





const Stats = props => {
  const {
    card
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Flex"], {
    flexDirection: "column",
    w: "100%",
    h: "90%",
    justifyContent: "flex-start",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Heading"], {
      as: "h6",
      fontSize: "1vw",
      mb: 1,
      textAlign: "center",
      children: ["  ", card.displayName]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Box"], {
      h: "60%",
      overflow: "hidden",
      border: "solid 3px #101010",
      borderRadius: "3%",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Image"], {
        h: "100%",
        w: "100%",
        objectFit: "cover",
        src: `Ressources/cardImages/${card.displayImage}`
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Flex"], {
      flexDirection: "column",
      w: "100%",
      h: "20%",
      fontSize: 14,
      justifyContent: "center",
      bg: "gray.300",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Flex"], {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Flex"], {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Image"], {
            boxSize: "1.3vw",
            src: "/ressources/level.png"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Text"], {
            ml: 1,
            fontSize: "1vw",
            children: card.level
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Flex"], {
          flexDirection: "row",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Text"], {
            mr: 1,
            fontSize: "1vw",
            children: [" ", card.adaptative]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Image"], {
            boxSize: "1.3vw",
            src: "/ressources/star.png"
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Flex"], {
        flexDirection: "row",
        h: "10%",
        justifyContent: "space-between",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Flex"], {
          flexDirection: "row",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Image"], {
            boxSize: "1.3vw",
            src: "/ressources/battle.png"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Text"], {
            ml: 1,
            fontSize: "1vw",
            children: card.attack
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Flex"], {
          flexDirection: "row",
          h: "10%",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Text"], {
            fontSize: "1vw",
            mr: 1,
            children: card.life
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Image"], {
            boxSize: "1.3vw",
            src: "/ressources/heart.png"
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ var Cards_Stats = (Stats);
// CONCATENATED MODULE: ./src/components/GamingBoard/Cards/Card.jsx







const BorderedFlex = styled_default()(react_["Flex"])`
	border: 10px solid transparent;
	border-image: url("ressources/border${props => props.level}.png") 54 round;

`;

const Card = props => {
  const {
    card,
    sell,
    swap,
    interactable
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(BorderedFlex, {
    level: card.level,
    boxShadow: "xl",
    flexDirection: "column",
    p: 2,
    width: "9.4vw",
    h: "auto",
    mr: 3,
    justifyContent: "space-between",
    bg: "gray.300",
    borderRadius: "5%",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Cards_Stats, {
      card: card
    }), interactable && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Flex"], {
      flexDirection: "row",
      h: "10%",
      w: "7.4vw",
      alignItems: "flex-end",
      justifyContent: "space-between",
      flexWrap: "wrap",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["IconButton"], {
        "aria-label": "sell",
        icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SellICon, {
          w: "1vw",
          color: "white"
        }),
        onClick: sell,
        height: "100%",
        w: "1vw",
        children: " "
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["IconButton"], {
        "aria-label": "swap",
        icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SwapIcon, {
          color: "white"
        }),
        onClick: swap,
        height: "1.5vw",
        w: "3vw",
        children: " "
      })]
    })]
  });
};

/* harmony default export */ var Cards_Card = (Card);
// CONCATENATED MODULE: ./src/components/GamingBoard/Bench/Bench.jsx





const Bench = props => {
  const {
    cards,
    sellCard,
    swapCard,
    interactable
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Flex"], {
    flexDirection: "row",
    p: 2,
    w: "100%",
    h: "100%",
    bgColor: "gray.100",
    justifyContent: "center",
    children: cards.map((e, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Cards_Card, {
      card: e,
      interactable: interactable,
      sell: () => sellCard(index, "bench"),
      swap: () => swapCard(index, "bench")
    }, `bench${index}`))
  });
};

/* harmony default export */ var Bench_Bench = (Bench);
// CONCATENATED MODULE: ./src/components/GamingBoard/Board/Board.jsx





const Board = props => {
  const {
    cards,
    sellCard,
    swapCard,
    interactable
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Flex"], {
    flexDirection: "row",
    p: 2,
    w: "100%",
    h: "100%",
    justifyContent: "center",
    children: cards.map((e, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Cards_Card, {
      card: e,
      interactable: interactable,
      sell: () => sellCard(index, "board"),
      swap: () => swapCard(index, "board")
    }, `board${index}`))
  });
};

/* harmony default export */ var Board_Board = (Board);
// CONCATENATED MODULE: ./src/components/GamingBoard/Management/Management.jsx





const Management = props => {
  const {
    levelUp,
    boardUp,
    user
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Flex"], {
    flexDirection: "column",
    p: 5,
    w: "100%",
    h: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Flex"], {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      w: "12vw",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Button"], {
        w: "100%",
        m: 3,
        fontSize: "1vw",
        onClick: boardUp,
        children: "Board size"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Heading"], {
        as: "h3",
        fontSize: "1.5vw",
        children: [" ", user.boardSize === 7 ? "MAX" : user.boardUpPrice]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Flex"], {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      w: "12vw",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Button"], {
        w: "100%",
        fontSize: "1vw",
        m: 3,
        onClick: levelUp,
        children: "Level up"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Heading"], {
        as: "h3",
        fontSize: "1.5vw",
        children: [" ", user.level === 3 ? "MAX" : user.levelUpPrice]
      })]
    })]
  });
};

/* harmony default export */ var Management_Management = (Management);
// CONCATENATED MODULE: ./src/components/GamingBoard/Cards/MarketCard.jsx






const MarketCard_BorderedFlex = styled_default()(react_["Flex"])`
	border: 10px solid transparent;
	border-image: url("ressources/border${props => props.level}.png") 54 round;

`;

const MarketCard = props => {
  const {
    card
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(MarketCard_BorderedFlex, {
    level: card.level,
    flexDirection: "column",
    width: "9.4vw",
    p: 3,
    h: "100%",
    justifyContent: "space-between",
    bg: "gray.300",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Cards_Stats, {
      card: card
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Text"], {
      fontSize: "1vw",
      textAlign: "center",
      children: ["Price: ", card.price]
    })]
  });
};

/* harmony default export */ var Cards_MarketCard = (MarketCard);
// CONCATENATED MODULE: ./src/components/GamingBoard/Market/Market.jsx







const Market = props => {
  const {
    buyCard,
    rerollCard,
    marketCard
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Flex"], {
    flexDirection: "row",
    p: 2,
    w: "100%",
    h: "100%",
    bgColor: "gray.300",
    justifyContent: "center",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Cards_MarketCard, {
      card: marketCard
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Flex"], {
      flexDirection: "column",
      justifyContent: "space-between",
      p: 2,
      h: "100%",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["IconButton"], {
        icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(RerollIcon, {
          color: "white"
        }),
        onClick: rerollCard
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["IconButton"], {
        icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(BuyIcon, {
          color: "white"
        }),
        onClick: buyCard
      })]
    })]
  });
};

/* harmony default export */ var Market_Market = (Market);
// CONCATENATED MODULE: ./src/components/GamingMap/AgentDisplayer/Agent/Agent.jsx





const calculateColor = life => {
  if (life > 50) {
    return "green";
  }

  return life > 25 ? "orange" : "red";
};

const Agent = props => {
  const {
    agent
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Flex"], {
    boxShadow: "xl",
    w: "12vw",
    h: "auto",
    flexDirection: "column",
    borderRadius: "5%",
    justifyContent: "space-between",
    alignItems: "center",
    p: 4,
    m: "2%",
    bg: "gray.300",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Text"], {
      stroke: "1px black",
      color: agent.color,
      textShadow: "0px 1px 0px rgba(150, 150, 150, 1)",
      fontSize: "1vw",
      children: agent.name
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Flex"], {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Flex"], {
        flexDirection: "column",
        justifyContent: "space-between",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Image"], {
          boxSize: "2vw",
          src: "/ressources/heart.png"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Text"], {
          color: calculateColor(agent.life),
          fontSize: "1vw",
          children: [" ", agent.life, " "]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Flex"], {
        flexDirection: "column",
        justifyContent: "space-between",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Image"], {
          boxSize: "2vw",
          src: "/ressources/coin.png"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Text"], {
          color: "yellow",
          fontSize: "1vw",
          children: [" ", agent.money]
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Flex"], {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Flex"], {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Image"], {
          boxSize: "2vw",
          src: "/ressources/size.png"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Text"], {
          color: "black",
          fontSize: "1vw",
          children: [" ", agent.boardSize, " "]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Flex"], {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Image"], {
          boxSize: "2vw",
          src: "/ressources/star.png"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Text"], {
          color: "black",
          fontSize: "1vw",
          children: [" ", agent.level]
        })]
      })]
    })]
  });
};

/* harmony default export */ var Agent_Agent = (Agent);
// CONCATENATED MODULE: ./src/components/GamingBoard/Profile/Profile.jsx





const Profile = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Agent_Agent, {
  agent: props.user
});

/* harmony default export */ var Profile_Profile = (Profile);
// CONCATENATED MODULE: ./src/components/GamingBoard/GamingBoard.jsx




/* eslint-disable no-magic-numbers */









function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const GamingBoard = props => {
  const {
    gInterface
  } = props;
  const {
    0: playerBoard,
    1: setPlayerBoard
  } = Object(external_react_["useState"])(gInterface.getBoard());
  const {
    0: playerBench,
    1: setPlayerBench
  } = Object(external_react_["useState"])(gInterface.getBench());
  const {
    0: playerProfile,
    1: setPlayerProfile
  } = Object(external_react_["useState"])(gInterface.getProfile());
  const {
    0: marketCard,
    1: setMarketCard
  } = Object(external_react_["useState"])(gInterface.getMarketCard());
  const {
    0: combatSummary
  } = Object(external_react_["useState"])(gInterface.getLastCombat(playerProfile.name));
  const {
    0: detailedCombats,
    1: setDetailedCombats
  } = Object(external_react_["useState"])([]);
  Object(external_react_["useEffect"])(async () => {
    const allSum = gInterface.getLastCombat(playerProfile.name);

    if (!allSum) {
      return;
    }

    const combatSum = allSum.detailedCombat;

    for (const combat of combatSum) {
      detailedCombats.push(combat);
      setDetailedCombats([...detailedCombats]);
      await sleep(300);
    }
  }, []);

  const sellCard = (index, location) => {
    gInterface.sellCard(index, location);

    if (location === "bench") {
      setPlayerBench(gInterface.getBench());
    } else {
      setPlayerBoard(gInterface.getBoard());
    }

    setPlayerProfile(gInterface.getProfile());
  };

  const swapCard = (index, location) => {
    if (gInterface.swapCard(index, location)) {
      setPlayerBench(gInterface.getBench());
      setPlayerBoard(gInterface.getBoard());
    }
  };

  const rerollNewCard = () => {
    setPlayerProfile(gInterface.getProfile());
    setMarketCard(gInterface.getMarketCard());
  };

  const reroll = () => {
    if (gInterface.rerollCard()) {
      rerollNewCard();
    }
  };

  const buy = () => {
    const res = gInterface.buyCard();

    if (!res[0]) {
      return false;
    }

    if (res[1] === "board") {
      setPlayerBoard(gInterface.getBoard());
    } else if (res[1] === "bench") {
      setPlayerBench(gInterface.getBench());
    }

    setPlayerProfile(gInterface.getProfile());
    rerollNewCard();
    return true;
  };

  const levelUp = () => {
    if (gInterface.levelUp()) {
      setPlayerProfile(gInterface.getProfile());
    }
  };

  const boardUp = () => {
    if (gInterface.boardUp()) {
      setPlayerProfile(gInterface.getProfile());
    }
  };

  const handleKeyPress = e => {
    switch (e.code) {
      case "KeyR":
        {
          rerollNewCard();
          break;
        }

      case "KeyB":
        {
          buy();
          break;
        }

      case "KeyS":
        {
          boardUp();
          break;
        }

      case "KeyL":
        {
          levelUp();
          break;
        }
    }
  };

  const onCombat = combatSummary !== null;
  const agentCombat = combatSummary !== null && (combatSummary.agent1 === playerProfile.name ? combatSummary.agent2 : combatSummary.agent1);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Grid"], {
      templateColumns: "repeat(25, 4%)",
      templateRows: "repeat(25, 4%)",
      bgPosition: "center",
      bgSize: "cover",
      bgRepeat: "no-repeat",
      h: "100vh",
      w: "100vw",
      bg: "yellow.50",
      onKeyDown: handleKeyPress,
      tabIndex: -1,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["GridItem"], {
        rowStart: 1,
        colStart: 1,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Button"], {
          w: "10%",
          onClick: props.onClickHandler,
          children: "<<"
        })
      }), onCombat && /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["GridItem"], {
        rowStart: 3,
        colStart: 1,
        rowSpan: 5,
        colSpan: 3,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Profile_Profile, {
          user: gInterface.getProfile(agentCombat)
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["GridItem"], {
        rowStart: 9,
        colStart: 1,
        rowSpan: 7,
        colSpan: 6,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_LogOutput, {
          maxH: "27.5vh",
          summary: detailedCombats
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["GridItem"], {
        rowStart: 16,
        colStart: 1,
        rowSpan: 5,
        colSpan: 3,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Profile_Profile, {
          user: playerProfile
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["GridItem"], {
        rowStart: 20,
        colStart: 3,
        rowSpan: 8,
        colSpan: 2,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Management_Management, {
          user: playerProfile,
          levelUp: levelUp,
          boardUp: boardUp
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["GridItem"], {
        rowStart: 18,
        colStart: 5,
        rowSpan: 8,
        colSpan: 4,
        mb: 2,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Market_Market, {
          buyCard: buy,
          rerollCard: reroll,
          marketCard: marketCard
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["GridItem"], {
        rowStart: 2,
        colStart: 8,
        rowSpan: 16,
        colSpan: 18,
        bgColor: "blackAlpha.300",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Flex"], {
          h: "100%",
          flexDirection: "column",
          justifyContent: "flex-end ",
          children: [onCombat && /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Flex"], {
            h: "50%",
            flexDirection: "column",
            justifyContent: "center",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Board_Board, {
              cards: gInterface.getBoard(agentCombat),
              interactable: false
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Flex"], {
            h: "50%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Board_Board, {
              cards: playerBoard,
              interactable: true,
              sellCard: sellCard,
              swapCard: swapCard
            })
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["GridItem"], {
        rowStart: 18,
        colStart: 10,
        rowSpan: 8,
        colSpan: 14,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Bench_Bench, {
          cards: playerBench,
          interactable: true,
          sellCard: sellCard,
          swapCard: swapCard
        })
      })]
    })
  });
};

/* harmony default export */ var GamingBoard_GamingBoard = (GamingBoard);
// CONCATENATED MODULE: ./src/components/GamingMap/AgentDisplayer/AgentDisplayer.jsx





const AgentDisplayer = props => {
  const {
    agents
  } = props; // const [agents, setAgents] = useState(manager.getAgents());

  const sortedAgents = agents.sort((a, b) => b.life - a.life).map(agent => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Agent_Agent, {
    agent: agent
  }, agent.color));
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Flex"], {
    wrap: "wrap",
    h: "100%",
    children: sortedAgents
  });
};

/* harmony default export */ var AgentDisplayer_AgentDisplayer = (AgentDisplayer);
// CONCATENATED MODULE: ./src/components/GamingMap/Grid/Box/Box.jsx


/* eslint-disable no-magic-numbers */



const percentageCalc = (colors, i) => Math.round(100 / colors.length) * (i + 1);

const colorCalc = colors => {
  if (colors.length === 1) {
    return colors[0];
  }

  let str = `linear-gradient(${colors.length === 2 ? 45 : 90}deg`;

  for (let i = 0; i < colors.length - 1; i++) {
    str += `, ${colors[i]} ${percentageCalc(colors, i)}%, ${colors[i + 1]} ${percentageCalc(colors, i)}%`;
  }

  return `${str});`;
};

const Box = props => {
  const {
    x,
    y,
    selectable,
    colors,
    perc,
    disable,
    activeColors
  } = props;
  const {
    0: colorBg,
    1: setColor
  } = Object(external_react_["useState"])(null);

  const handleOnClick = () => {
    if (!selectable(x, y)) {
      setTimeout(() => setColor(null), 400);
      setColor("red");
    }
  };

  const bgColor = colorCalc(colors);
  let activeColor = colorCalc(activeColors);

  if (!bgColor.includes("%")) {
    activeColor = activeColor !== bgColor ? activeColor : "black";
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["GridItem"], {
    h: `${perc}vw`,
    w: `${perc}vw`,
    border: `solid ${activeColor} ${activeColor === "black" ? "1px" : "5px"}`,
    borderRadius: "none",
    _active: {
      borderColor: activeColor // borderColor: "#FF0000",

    },
    _focus: {
      borderColor: activeColor // borderColor: "#FF0000",

    },
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Button"], {
      disabled: disable,
      borderRadius: "none",
      bg: colorBg !== null && colorBg !== void 0 ? colorBg : bgColor,
      w: "100%",
      h: "100%",
      _hover: {
        bg: colorBg !== null && colorBg !== void 0 ? colorBg : bgColor
      },
      _active: {},
      _focus: {},
      onClick: handleOnClick
    })
  });
};

/* harmony default export */ var Box_Box = (Box);
// CONCATENATED MODULE: ./src/components/GamingMap/Grid/grid.js
const grid_bgColor = (x, y, agents, gInterface, selectedBox) => {
  const colors = [];
  const fAgents = agents.filter(a => a.x === x && a.y === y);

  if ((fAgents === null || fAgents === void 0 ? void 0 : fAgents.length) > 0) {
    fAgents.forEach(a => colors.push(a.color));
  }

  if (colors.length === 0) {
    if (gInterface.willBeDisabled(x, y)) {
      return ["yellow"];
    }

    if ((selectedBox === null || selectedBox === void 0 ? void 0 : selectedBox.x) === x && (selectedBox === null || selectedBox === void 0 ? void 0 : selectedBox.y) === y) {
      return ["green"];
    }
  }

  return colors.length !== 0 ? colors : ["gray"];
};
const grid_activeColors = (x, y, gInterface, selectedBox) => {
  const colors = [];

  if (gInterface.willBeDisabled(x, y)) {
    colors.push("yellow");
  }

  if ((selectedBox === null || selectedBox === void 0 ? void 0 : selectedBox.x) === x && (selectedBox === null || selectedBox === void 0 ? void 0 : selectedBox.y) === y) {
    colors.push("green");
  }

  return colors.length !== 0 ? colors : ["black"];
};
// CONCATENATED MODULE: ./src/components/GamingMap/Grid/Grid.jsx







const Grid = props => {
  const {
    gInterface,
    columns,
    rows,
    selectedBox,
    selectable,
    agents
  } = props; // Grid creation

  const boxes = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      boxes.push( /*#__PURE__*/Object(jsx_runtime_["jsx"])(Box_Box, {
        x: j,
        y: i // eslint-disable-next-line no-magic-numbers
        ,
        perc: 50 / columns,
        disable: gInterface.isDisabled(j, i),
        colors: grid_bgColor(j, i, agents, gInterface, selectedBox),
        activeColors: grid_activeColors(j, i, gInterface, selectedBox),
        selectable: selectable
      }, `${j}-${i}`));
    }
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["SimpleGrid"], {
      id: "grid",
      columns: columns,
      w: "50vw",
      alignSelf: "baseline",
      children: boxes
    })
  });
};

/* harmony default export */ var Grid_Grid = (Grid);
// CONCATENATED MODULE: ./src/components/GamingMap/GamingMap.jsx



/* eslint-disable no-magic-numbers */





const TIMEOUT_MOVEMENT = 1000;

function GamingMap_sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const GamingMap = props => {
  const {
    gInterface,
    onClickHandler
  } = props;
  const {
    0: selectedBox,
    1: setSelectedBox
  } = Object(external_react_["useState"])(null);
  const {
    0: isNextButtonDisabled,
    1: setNextButtonDisabled
  } = Object(external_react_["useState"])(false);
  const {
    0: agentsPosition,
    1: setAgentsPosition
  } = Object(external_react_["useState"])(gInterface.getAgentsPosition());
  const {
    0: agents,
    1: setAgents
  } = Object(external_react_["useState"])(gInterface.getAgentsProfile());
  const {
    0: battleSummary,
    1: setBattleSummary
  } = Object(external_react_["useState"])(gInterface.getBattleSummary()); // movePriorPlayers

  async function phaseOne() {
    const l = gInterface.getPriorAgentsPosition();

    for (let i = 0; i < l; ++i) {
      setAgentsPosition(gInterface.getUpdatedAgentsPosition());
      await GamingMap_sleep(TIMEOUT_MOVEMENT);
    }
  } // moveLaterPlayers
  // Fights
  // Managements


  async function phaseTwo() {
    const l = gInterface.getLaterAgentsPosition();

    for (let i = 0; i < l; ++i) {
      setAgentsPosition(gInterface.getUpdatedAgentsPosition());
      await GamingMap_sleep(TIMEOUT_MOVEMENT);
    }

    setBattleSummary([]);
    const summary = gInterface.getBattleSummary();

    for (const sum of summary) {
      battleSummary.push(sum);
      setBattleSummary([...battleSummary]);
      await GamingMap_sleep(400);
    }

    setAgents(gInterface.getAgentsProfile());
  }
  /**
   * Main frontend gameloop logic
   */


  const handleNext = async () => {
    const phase = gInterface.next(selectedBox); // If selectedBox not valid, phase = -1

    if (phase === -1) {
      return;
    }

    setNextButtonDisabled(true);

    if (phase === 1) {
      // waiting for position
      await phaseOne(); // display enemies movement
    } else if (phase === 2) {
      // waiting for next turn
      setSelectedBox(null);
      await phaseTwo(); // display battles / management
    }

    setNextButtonDisabled(false);
  };

  const selectable = (x, y) => {
    if (!gInterface.isSelectable(x, y)) {
      return false;
    }

    setSelectedBox({
      x,
      y
    });
    return true;
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Flex"], {
    h: "100vh",
    bg: "gray.200",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Grid_Grid, {
      gInterface: gInterface,
      columns: gInterface.getGridSize(),
      rows: gInterface.getGridSize(),
      agents: agentsPosition,
      selectable: selectable,
      selectedBox: selectedBox
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Flex"], {
      h: "70vh",
      flexDirection: "column",
      justifyContent: "space-between",
      w: "100%",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Flex"], {
        h: "100%",
        alignItems: "flex-start",
        justifyContent: "space-between",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(AgentDisplayer_AgentDisplayer, {
          agents: agents
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Flex"], {
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-end",
          h: "100%",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["Button"], {
            w: "10%",
            disabled: isNextButtonDisabled,
            onClick: onClickHandler,
            children: [">>", " "]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Box"], {
            w: "7vw",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Button"], {
              w: "100%",
              disabled: isNextButtonDisabled,
              onClick: handleNext,
              fontSize: "0.7vw",
              children: "Suivant"
            })
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_LogOutput, {
        minH: "30vh",
        summary: battleSummary
      })]
    })]
  });
};

/* harmony default export */ var GamingMap_GamingMap = (GamingMap);
// CONCATENATED MODULE: ./src/components/Game.jsx





const Game = props => {
  const {
    gInterface
  } = props;
  const {
    0: view,
    1: setView
  } = Object(external_react_["useState"])(true);

  const changeView = () => {
    setView(!view);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: view === true ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(GamingMap_GamingMap, {
      gInterface: gInterface,
      onClickHandler: changeView
    }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(GamingBoard_GamingBoard, {
      gInterface: gInterface,
      onClickHandler: changeView
    })
  });
};

/* harmony default export */ var components_Game = __webpack_exports__["default"] = (Game);

/***/ })

};;