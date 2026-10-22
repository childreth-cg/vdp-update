/* @ds-bundle: {"format":3,"namespace":"CarGurusDesignSystem_a90bbd","components":[{"name":"Badge","sourcePath":"components/badges/Badge.jsx"},{"name":"Eyebrow","sourcePath":"components/badges/Eyebrow.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Pathway","sourcePath":"components/brand/Pathway.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"DealRating","sourcePath":"components/deal-rating/DealRating.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"},{"name":"VehicleCard","sourcePath":"components/listings/VehicleCard.jsx"}],"sourceHashes":{"components/badges/Badge.jsx":"c39a2103e912","components/badges/Eyebrow.jsx":"9bd83d60046d","components/brand/Logo.jsx":"9227fcbc915b","components/brand/Pathway.jsx":"303461b0caee","components/buttons/Button.jsx":"58bdb7d0a471","components/deal-rating/DealRating.jsx":"b7dac2600fa2","components/forms/Input.jsx":"4248fb6a8929","components/layout/Card.jsx":"39cde063d000","components/listings/VehicleCard.jsx":"877526599e69","ui_kits/marketplace/App.jsx":"27c030d6194e","ui_kits/marketplace/DetailScreen.jsx":"599aaf9f9780","ui_kits/marketplace/Header.jsx":"10261b65a975","ui_kits/marketplace/HomeScreen.jsx":"73ebae2ed0ff","ui_kits/marketplace/ResultsScreen.jsx":"42207236132f","ui_kits/marketplace/data.jsx":"df6b4b694a3e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CarGurusDesignSystem_a90bbd = window.CarGurusDesignSystem_a90bbd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/badges/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// CarGurus Badge — compact status / highlight label.
// tone: neutral | info | success | warning | danger | brand | ai
// appearance: soft (default) | solid | outline

const TONES = {
  neutral: {
    fg: 'var(--gray-600)',
    soft: 'var(--fog)',
    solid: 'var(--gray-600)'
  },
  info: {
    fg: 'var(--blue-600)',
    soft: 'var(--blue-300)',
    solid: 'var(--blue-600)'
  },
  success: {
    fg: 'var(--green-700)',
    soft: '#E3F5E4',
    solid: 'var(--green-600)'
  },
  warning: {
    fg: '#8A5A00',
    soft: 'var(--yellow-400)',
    solid: 'var(--yellow-500)'
  },
  danger: {
    fg: 'var(--red-700)',
    soft: 'var(--red-300)',
    solid: 'var(--cg-red)'
  },
  brand: {
    fg: 'var(--cg-navy)',
    soft: 'var(--blue-300)',
    solid: 'var(--cg-navy)'
  },
  ai: {
    fg: 'var(--text-inverse)',
    soft: 'transparent',
    solid: 'transparent'
  }
};
function Badge({
  children,
  tone = 'neutral',
  appearance = 'soft',
  icon = null,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  let look;
  if (tone === 'ai') {
    look = {
      background: 'var(--gradient-ai)',
      color: 'var(--text-inverse)'
    };
  } else if (appearance === 'solid') {
    look = {
      background: t.solid,
      color: tone === 'warning' ? 'var(--cg-midnight)' : 'var(--text-inverse)'
    };
  } else if (appearance === 'outline') {
    look = {
      background: 'transparent',
      color: t.fg,
      boxShadow: `inset 0 0 0 1px ${t.fg}`
    };
  } else {
    look = {
      background: t.soft,
      color: t.fg
    };
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-1)',
      height: 24,
      padding: '0 10px',
      borderRadius: 'var(--radius-xs)',
      font: 'var(--fw-semibold) 12px/1 var(--font-body)',
      letterSpacing: '0.02em',
      whiteSpace: 'nowrap',
      ...look,
      ...style
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/Badge.jsx", error: String((e && e.message) || e) }); }

// components/badges/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// CarGurus Eyebrow — small rounded pill label that sits above a headline.
// tone: light (on light bg) | dark (on dark bg) | ai

function Eyebrow({
  children,
  tone = 'light',
  style = {},
  ...rest
}) {
  const looks = {
    light: {
      background: 'var(--blue-300)',
      color: 'var(--cg-navy)'
    },
    dark: {
      background: 'rgba(255,255,255,0.16)',
      color: 'var(--text-inverse)'
    },
    ai: {
      background: 'var(--gradient-ai)',
      color: 'var(--text-inverse)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 32,
      padding: '0 14px',
      borderRadius: 'var(--radius-pill)',
      font: 'var(--fw-semibold) var(--fs-eyebrow)/1 var(--font-body)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      ...(looks[tone] || looks.light),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// CarGurus Logo — renders the wordmark, CG bug, or Guru mark as inline SVG.
// variant: wordmark | bug | guru
// color:   full (two-color brand) | white | midnight | navy
// Two-color is reserved for white & midnight backgrounds; use white on
// blue/red/photography. (Per brand logo usage rules.)

function Logo({
  variant = 'wordmark',
  color = 'full',
  height,
  style = {},
  title = 'CarGurus',
  ...rest
}) {
  const pick = (full, mono) => color === 'full' ? full : mono;
  const mono = color === 'white' ? '#FFFFFF' : color === 'navy' ? '#05317B' : '#000049';
  if (variant === 'bug') {
    const h = height || 18;
    return /*#__PURE__*/React.createElement("svg", _extends({
      height: h,
      viewBox: "0 0 33 16",
      fill: "none",
      role: "img",
      "aria-label": "CarGurus",
      style: style
    }, rest), /*#__PURE__*/React.createElement("path", {
      d: "M 12.568 10.064 C 11.878 11.921 10.196 13.15 8.032 13.15 C 5.178 13.15 3.142 10.973 3.142 7.966 C 3.142 4.959 5.178 2.872 8.032 2.872 C 10.202 2.872 11.888 4.09 12.575 5.936 L 15.81 5.936 C 15.001 2.383 11.981 0 8.032 0 C 3.385 0 0 3.366 0 7.989 C 0 12.612 3.363 16 8.032 16 C 11.971 16 15.007 13.589 15.808 10.064 L 12.568 10.064 Z",
      fill: pick('#F5333F', mono),
      fillRule: "nonzero"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 25.05 7.598 L 25.05 10.249 L 29.501 10.249 C 28.908 12.028 27.17 13.284 25.05 13.284 C 22.213 13.284 20.13 11.041 20.13 7.967 C 20.13 4.893 22.19 2.693 25.05 2.693 C 27.223 2.693 28.908 4.018 29.528 5.947 L 32.743 5.947 C 32.056 2.491 28.886 0 25.029 0 C 20.373 0 16.982 3.367 16.982 7.989 C 16.982 12.61 20.351 16 25.029 16 C 29.708 16 33.075 12.62 32.999 7.598 L 25.05 7.598 Z",
      fill: pick('#0499FD', mono),
      fillRule: "nonzero"
    }));
  }
  if (variant === 'guru') {
    const h = height || 22;
    const fill = color === 'white' ? '#FFFFFF' : '#05317B';
    return /*#__PURE__*/React.createElement("svg", _extends({
      height: h,
      viewBox: "0 0 75.886 25",
      fill: "none",
      role: "img",
      "aria-label": "Guru",
      style: style
    }, rest), /*#__PURE__*/React.createElement("g", {
      fill: fill
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 11.217 13.258 L 11.217 16.963 L 17.405 16.963 C 16.58 19.449 14.164 21.205 11.217 21.205 C 7.273 21.205 4.376 18.069 4.376 13.775 C 4.376 9.481 7.242 6.404 11.217 6.404 C 14.237 6.404 16.58 8.256 17.443 10.951 L 21.912 10.951 C 20.957 6.122 16.549 2.641 11.188 2.641 C 4.715 2.641 0 7.346 0 13.805 C 0 20.264 4.682 25 11.188 25 C 17.693 25 22.374 20.278 22.266 13.258 L 11.217 13.258 Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 38.629 9.225 L 34.399 9.225 L 34.399 18.337 C 34.287 19.446 33.742 20.043 33.247 20.478 C 31.215 22.082 28.265 20.648 28.204 18.177 L 28.204 9.225 L 24.046 9.225 L 24.046 18.543 C 24.307 26.888 38.188 27.312 38.633 18.833 L 38.629 9.225 Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 49.815 9.225 L 49.815 12.942 L 48.382 12.942 C 46.066 12.943 44.678 14.01 44.678 16.173 L 44.678 24.716 L 40.576 24.716 L 40.576 15.496 C 40.576 11.515 43.424 9.225 48.341 9.225 L 49.815 9.225 Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 66.166 9.225 L 61.936 9.225 L 61.936 18.337 C 61.824 19.446 61.279 20.043 60.784 20.478 C 58.752 22.082 55.802 20.648 55.741 18.177 L 55.741 9.225 L 51.583 9.225 L 51.583 18.543 C 51.844 26.888 65.725 27.312 66.17 18.833 L 66.166 9.225 Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 70.839 0 C 71.176 0 71.468 0.233 71.542 0.561 L 71.941 2.316 C 72.126 3.127 72.759 3.761 73.571 3.945 L 75.325 4.344 C 75.653 4.419 75.886 4.711 75.886 5.047 C 75.886 5.384 75.653 5.676 75.325 5.75 L 73.571 6.149 C 72.759 6.334 72.126 6.967 71.941 7.779 L 71.542 9.533 C 71.468 9.862 71.176 10.095 70.839 10.095 C 70.503 10.095 70.211 9.862 70.136 9.533 L 69.737 7.779 C 69.553 6.967 68.919 6.334 68.107 6.149 L 66.353 5.75 C 66.025 5.676 65.792 5.384 65.792 5.047 C 65.792 4.711 66.025 4.419 66.353 4.344 L 68.107 3.945 C 68.919 3.761 69.553 3.127 69.737 2.316 L 70.136 0.561 C 70.211 0.233 70.503 0 70.839 0 Z",
      fillRule: "evenodd"
    })));
  }

  // wordmark
  const h = height || 24;
  return /*#__PURE__*/React.createElement("svg", _extends({
    height: h,
    viewBox: "0 0 151 24",
    fill: "none",
    role: "img",
    "aria-label": title,
    style: style
  }, rest), /*#__PURE__*/React.createElement("g", {
    transform: "translate(0.236 0.515)",
    fill: pick('#F5333F', mono)
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.76 15.474 C 16.482 18.312 13.899 19.999 10.89 19.999 C 6.577 19.999 3.088 16.197 3.088 11.512 C 3.088 6.827 6.603 3.025 10.89 3.025 C 14.006 3.025 16.508 4.685 17.76 7.55 L 17.813 7.684 L 21.062 7.684 L 20.955 7.362 C 19.517 2.811 15.656 0 10.89 0 C 4.872 0 0 5.14 0 11.485 C 0 17.83 4.872 22.997 10.89 22.997 C 15.603 22.997 19.464 20.159 20.955 15.608 L 21.061 15.287 L 17.839 15.287 L 17.76 15.474 Z M 30.62 20.079 C 27.798 20.079 25.508 17.563 25.508 14.457 C 25.508 11.298 27.798 8.754 30.62 8.754 C 33.443 8.754 35.812 11.378 35.812 14.457 C 35.786 17.509 33.416 20.079 30.62 20.079 Z M 35.892 8.299 C 35.251 7.515 34.447 6.88 33.536 6.441 C 32.626 6.001 31.63 5.768 30.62 5.756 C 26.014 5.756 22.393 9.557 22.393 14.43 C 22.393 19.276 26.014 23.078 30.62 23.078 C 31.633 23.064 32.63 22.827 33.541 22.383 C 34.452 21.939 35.255 21.299 35.892 20.507 L 35.892 22.676 L 38.901 22.676 L 38.901 6.158 L 35.892 6.158 L 35.892 8.299 Z M 49.099 5.756 C 48.282 5.746 47.472 5.903 46.717 6.215 C 45.963 6.528 45.278 6.991 44.705 7.576 L 44.705 6.157 L 41.697 6.157 L 41.697 22.675 L 44.812 22.675 L 44.812 12.636 C 44.812 10.334 46.463 8.674 48.753 8.674 C 50.697 8.674 52.028 9.825 52.347 11.753 L 52.347 11.806 L 55.436 11.78 L 55.436 11.699 C 55.01 8.058 52.614 5.756 49.099 5.756 Z",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10.198 8.995 L 12.222 8.995 L 12.222 14.966 L 10.198 14.966 L 10.198 8.995 Z",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 16.136 9.906 C 16.136 10.556 15.611 11.084 14.964 11.084 M 14.964 8.728 C 15.611 8.728 16.136 9.255 16.136 9.906 M 13.792 9.906 C 13.792 9.255 14.317 8.728 14.964 8.728 M 14.964 11.084 C 14.317 11.084 13.792 10.556 13.792 9.906 Z",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.6 9.906 C 8.6 10.556 8.076 11.084 7.429 11.084 M 7.429 8.728 C 8.076 8.728 8.6 9.255 8.6 9.906 M 6.257 9.906 C 6.257 9.255 6.781 8.728 7.429 8.728 M 7.429 11.084 C 6.781 11.084 6.257 10.556 6.257 9.906 Z",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(57.51 0.408)",
    fill: pick('#0499FD', mono)
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 62.492 23.033 C 58.584 23.033 55.747 20.18 55.747 16.251 L 55.747 6.443 L 58.48 6.443 L 58.48 16.25 C 58.48 18.695 60.093 20.338 62.492 20.338 C 64.876 20.338 66.477 18.695 66.477 16.25 L 66.477 6.443 L 69.237 6.443 L 69.237 16.25 C 69.237 20.181 66.4 23.033 62.492 23.033 Z M 30.7 23.033 C 26.791 23.033 23.955 20.18 23.955 16.251 L 23.955 6.443 L 26.688 6.443 L 26.688 16.25 C 26.688 18.695 28.3 20.338 30.7 20.338 C 33.084 20.338 34.685 18.695 34.685 16.25 L 34.685 6.443 L 37.445 6.443 L 37.445 16.25 C 37.445 20.181 34.608 23.033 30.7 23.033 Z M 78.947 12.315 C 75.699 11.806 75.113 11.378 75.113 10.494 C 75.113 9.37 76.604 8.487 78.495 8.487 C 80.465 8.487 81.77 9.37 82.089 10.869 L 82.142 11.057 L 85.284 11.057 L 85.258 10.789 C 84.912 7.576 82.329 5.569 78.522 5.569 C 74.048 5.569 72.025 8.165 72.025 10.575 C 72.025 13.761 74.475 14.752 78.442 15.314 C 82.276 15.822 82.57 16.599 82.57 17.562 C 82.57 18.74 81.291 19.945 78.815 19.945 C 76.552 19.945 74.901 18.847 74.582 17.107 L 74.555 16.92 L 71.44 16.92 L 71.466 17.188 C 71.919 20.641 74.794 22.89 78.815 22.89 C 82.862 22.89 85.578 20.695 85.578 17.429 C 85.604 13.68 82.728 12.904 78.947 12.315 Z M 9.958 14.697 L 16.801 14.697 L 16.881 14.563 C 17.078 14.137 17.221 13.687 17.307 13.225 C 17.394 12.801 17.447 12.371 17.467 11.939 L 9.958 11.939 L 9.958 14.697 Z",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.691 11.94 C 18.531 16.545 15.23 20.025 11.049 20.025 C 6.683 20.025 3.115 16.224 3.115 11.592 C 3.115 6.933 6.683 3.132 11.049 3.132 C 14.005 3.132 16.535 4.819 17.839 7.657 L 17.893 7.791 L 21.221 7.791 L 21.115 7.469 C 19.544 2.918 15.603 0 11.05 0 C 4.952 0 0 5.194 0 11.565 C 0 17.937 4.952 23.131 11.05 23.131 C 12.427 23.135 13.792 22.863 15.063 22.33 C 16.334 21.797 17.486 21.013 18.452 20.025 C 19.491 18.958 20.309 17.694 20.858 16.306 C 21.406 14.917 21.675 13.433 21.647 11.94 L 18.691 11.94 Z M 47.66 5.863 C 46.844 5.853 46.034 6.01 45.279 6.322 C 44.524 6.635 43.84 7.098 43.267 7.683 L 43.267 6.264 L 40.258 6.264 L 40.258 22.782 L 43.374 22.782 L 43.374 12.743 C 43.374 10.441 45.024 8.781 47.314 8.781 C 49.258 8.781 50.59 9.932 50.909 11.86 L 50.909 11.913 L 53.997 11.887 L 53.997 11.806 C 53.572 8.165 51.176 5.863 47.66 5.863 Z",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 12.141 8.807 C 12.141 9.488 11.592 10.039 10.916 10.039 M 10.916 7.576 C 11.592 7.576 12.141 8.127 12.141 8.807 M 9.692 8.807 C 9.692 8.127 10.24 7.576 10.916 7.576 M 10.916 10.039 C 10.24 10.039 9.692 9.488 9.692 8.807 Z",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 16.8 8.807 C 16.8 9.488 16.252 10.039 15.576 10.039 M 15.576 7.576 C 16.252 7.576 16.8 8.127 16.8 8.807 M 14.351 8.807 C 14.351 8.127 14.899 7.576 15.576 7.576 M 15.576 10.039 C 14.899 10.039 14.351 9.488 14.351 8.807 Z",
    fillRule: "evenodd"
  })));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/Pathway.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// CarGurus Pathway — the signature brand motif: a rounded "road bend"
// (quarter-circle elbow) used as a background/connective graphic.
// fill: any CSS color (default Fog). gradient: 'none' | 'blue' | 'navy' | 'red' | 'ai'
// flipX / flipY / rotate orient the bend. Decorative (aria-hidden).

const PATH = "M 0 508.787 C 0 227.791 227.498 0 508.131 0 L 656 0 L 656 296.118 L 508.131 296.118 C 390.83 296.118 295.737 391.333 295.737 508.787 L 295.737 673 L 0 673 L 0 508.787 Z";
const GRADS = {
  blue: [['0%', '#04A3FD'], ['100%', '#0763D3']],
  navy: [['0%', '#044691'], ['100%', '#05317B']],
  red: [['0%', '#F5333F'], ['100%', '#B7061B']],
  ai: [['0%', '#F5333F'], ['54%', '#05317B'], ['100%', '#0763D3']]
};
function Pathway({
  fill = 'var(--fog)',
  gradient = 'none',
  width = 320,
  height,
  flipX = false,
  flipY = false,
  rotate = 0,
  style = {},
  ...rest
}) {
  const h = height ?? Math.round(width * (673 / 656));
  const gid = `cg-pw-${gradient}-${Math.round(Math.random() * 1e6)}`;
  const useGrad = gradient !== 'none' && GRADS[gradient];
  const tf = [flipX ? 'scaleX(-1)' : '', flipY ? 'scaleY(-1)' : '', rotate ? `rotate(${rotate}deg)` : ''].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: width,
    height: h,
    viewBox: "0 0 656 673",
    fill: "none",
    "aria-hidden": "true",
    style: {
      display: 'block',
      transform: tf || undefined,
      ...style
    }
  }, rest), useGrad && /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: gid,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, GRADS[gradient].map(([off, c]) => /*#__PURE__*/React.createElement("stop", {
    key: off,
    offset: off,
    stopColor: c
  })))), /*#__PURE__*/React.createElement("path", {
    d: PATH,
    fill: useGrad ? `url(#${gid})` : fill,
    fillRule: "nonzero"
  }));
}
Object.assign(__ds_scope, { Pathway });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Pathway.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// figma node: 0:411 — CarGurus Button
// Pill-shaped action. Variants: primary (filled royal blue), secondary
// (outline), ghost (text), ai (red→navy→blue gradient + sparkle). Sizes
// default (44px) and small (36px).

const SparkleMark = ({
  size = 16,
  color = 'currentColor'
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 21",
  fill: "none",
  "aria-hidden": "true",
  style: {
    flexShrink: 0
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "M 7.63 5.6 C 8.139 5.6 8.58 5.955 8.693 6.456 L 9.296 9.133 C 9.575 10.371 10.533 11.337 11.759 11.619 L 14.411 12.227 C 14.908 12.341 15.26 12.786 15.26 13.3 C 15.26 13.813 14.908 14.259 14.411 14.373 L 11.759 14.981 C 10.533 15.263 9.575 16.229 9.296 17.467 L 8.693 20.144 C 8.58 20.645 8.139 21 7.63 21 C 7.121 21 6.68 20.645 6.567 20.144 L 5.964 17.467 C 5.685 16.229 4.727 15.263 3.5 14.981 L 0.848 14.373 C 0.352 14.259 0 13.813 0 13.3 C 0 12.786 0.352 12.341 0.848 12.227 L 3.5 11.619 C 4.727 11.337 5.685 10.371 5.964 9.133 L 6.567 6.456 C 6.68 5.955 7.121 5.6 7.63 5.6 Z",
  fill: color,
  fillRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  d: "M 18.451 0 C 18.821 0 19.142 0.258 19.224 0.623 L 19.663 2.569 C 19.865 3.47 20.562 4.173 21.454 4.377 L 23.383 4.82 C 23.744 4.903 24 5.227 24 5.6 C 24 5.974 23.744 6.297 23.383 6.38 L 21.454 6.823 C 20.562 7.027 19.865 7.731 19.663 8.631 L 19.224 10.577 C 19.142 10.942 18.821 11.2 18.451 11.2 C 18.081 11.2 17.76 10.942 17.678 10.577 L 17.239 8.631 C 17.037 7.731 16.34 7.027 15.448 6.823 L 13.519 6.38 C 13.158 6.297 12.902 5.974 12.902 5.6 C 12.902 5.227 13.158 4.903 13.519 4.82 L 15.448 4.377 C 16.34 4.173 17.037 3.47 17.239 2.569 L 17.678 0.623 C 17.76 0.258 18.081 0 18.451 0 Z",
  fill: color,
  fillRule: "evenodd"
}));
function Button({
  children,
  variant = 'primary',
  size = 'default',
  icon = null,
  // leading React node (e.g. an <img>/<svg> icon)
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const isAi = variant === 'ai';
  const height = size === 'small' ? 36 : 44;
  const padX = size === 'small' ? 16 : 22;
  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    height,
    padding: `0 ${padX}px`,
    borderRadius: 'var(--radius-pill)',
    font: `var(--fw-medium) ${size === 'small' ? '15px' : '16px'}/1 var(--font-body)`,
    letterSpacing: 'var(--ls-body)',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    whiteSpace: 'nowrap',
    transition: 'background var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard)',
    WebkitTapHighlightColor: 'transparent'
  };
  const variants = {
    primary: {
      background: 'var(--action-primary)',
      color: 'var(--action-on-action)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--action-primary)',
      boxShadow: 'inset 0 0 0 1px var(--action-primary)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--action-primary)',
      paddingLeft: size === 'small' ? 10 : 12,
      paddingRight: size === 'small' ? 10 : 12
    },
    ai: {
      background: 'var(--gradient-ai)',
      color: 'var(--text-inverse)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    className: `cg-btn cg-btn--${variant}`,
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), isAi && /*#__PURE__*/React.createElement(SparkleMark, {
    size: size === 'small' ? 14 : 16
  }), icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/deal-rating/DealRating.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// figma node: 0:3 — CarGurus Deal Rating
// The signature CarGurus badge. A gauge arrow inside a colored disc rotates
// from up (Great) clockwise to down (Overpriced); color sweeps green→red.

const RATINGS = {
  great: {
    label: 'Great Deal',
    color: 'var(--deal-great)',
    rotate: 180
  },
  good: {
    label: 'Good Deal',
    color: 'var(--deal-good)',
    rotate: 225
  },
  fair: {
    label: 'Fair Deal',
    color: 'var(--deal-fair)',
    rotate: 270
  },
  high: {
    label: 'High Priced',
    color: 'var(--deal-high)',
    rotate: 315
  },
  over: {
    label: 'Overpriced',
    color: 'var(--deal-over)',
    rotate: 0
  }
};
function DealRating({
  rating = 'great',
  label,
  showLabel = true,
  size = 16,
  style = {},
  ...rest
}) {
  const r = RATINGS[rating] || RATINGS.great;
  const text = label ?? r.label;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-1)',
      font: `var(--fw-bold) ${size === 16 ? 14 : Math.round(size * 0.875)}px/1 var(--font-display)`,
      color: 'var(--text-primary)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      background: r.color
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 16 16",
    fill: "none",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      transform: `rotate(${r.rotate}deg)`
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.9 8 L 12 7.15 L 8.46 10.5 L 8.46 3.2 L 7.19 3.2 L 7.19 10.5 L 3.66 7.15 L 2.76 8 L 7.83 12.8 Z",
    fill: "#fff",
    fillRule: "nonzero"
  }))), showLabel && /*#__PURE__*/React.createElement("span", null, text));
}
Object.assign(__ds_scope, { DealRating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/deal-rating/DealRating.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// CarGurus Input — labeled text field with optional leading icon.
// Rounded 8px, hairline border, royal-blue focus ring (via .cg-input).

function Input({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  type = 'text',
  icon = null,
  hint,
  error,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? `cg-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      font: 'var(--fw-semibold) 13px/1.2 var(--font-body)',
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "cg-input",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      height: 44,
      padding: '0 14px',
      borderRadius: 'var(--radius-sm)',
      background: disabled ? 'var(--fog)' : 'var(--surface-page)',
      boxShadow: `inset 0 0 0 1px ${error ? 'var(--cg-red)' : 'var(--border-default)'}`,
      transition: 'box-shadow var(--dur-base) var(--ease-standard)'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--text-muted)',
      flexShrink: 0
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: 'var(--type-body)',
      color: 'var(--text-primary)'
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) 12px/1.3 var(--font-body)',
      color: error ? 'var(--cg-red)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// CarGurus Card — soft, cool-shadowed container.
// elevation: flat | sm | md | lg ; interactive adds hover lift.

function Card({
  children,
  elevation = 'sm',
  interactive = false,
  padding = 'var(--space-5)',
  radius = 'var(--radius-md)',
  border = true,
  style = {},
  className = '',
  ...rest
}) {
  const shadows = {
    flat: 'none',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `cg-card${interactive ? ' cg-card--interactive' : ''}${className ? ' ' + className : ''}`,
    style: {
      background: 'var(--surface-page)',
      borderRadius: radius,
      boxShadow: shadows[elevation] ?? shadows.sm,
      border: border ? '1px solid var(--border-default)' : 'none',
      padding,
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

// components/listings/VehicleCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// CarGurus VehicleCard — a marketplace listing card.
// Composes Card + DealRating. Shows photo, title, price, deal rating,
// savings line, mileage/location, and an optional save (heart) action.

function VehicleCard({
  image,
  title,
  price,
  rating = 'great',
  savings,
  mileage,
  location,
  badge = null,
  saved = false,
  onSave,
  onClick,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    interactive: true,
    padding: "0",
    elevation: "sm",
    onClick: onClick,
    style: {
      width: 300,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '16 / 11',
      background: 'var(--fog)'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%'
    }
  }), badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, badge), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: e => {
      e.stopPropagation();
      onSave && onSave();
    },
    "aria-label": saved ? 'Saved' : 'Save',
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      width: 36,
      height: 36,
      borderRadius: '50%',
      border: 'none',
      background: 'rgba(255,255,255,0.92)',
      boxShadow: 'var(--shadow-sm)',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center',
      color: saved ? 'var(--cg-red)' : 'var(--gray-600)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: saved ? 'currentColor' : 'none',
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s-7.5-4.6-10-9.1C.4 8.9 1.8 5.5 5 5.2c2-.2 3.4 1 4 2 .6-1 2-2.2 4-2 3.2.3 4.6 3.7 3 6.7C19.5 16.4 12 21 12 21z"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--fw-semibold) 16px/1.25 var(--font-body)',
      color: 'var(--text-primary)',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) 22px/1 var(--font-display)',
      color: 'var(--text-heading)'
    }
  }, price), mileage && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, mileage)), /*#__PURE__*/React.createElement(__ds_scope.DealRating, {
    rating: rating
  }), savings && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-semibold) 13px/1.3 var(--font-body)',
      color: 'var(--green-700)'
    }
  }, savings), location && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, location)));
}
Object.assign(__ds_scope, { VehicleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/listings/VehicleCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketplace/App.jsx
try { (() => {
// Marketplace app shell — routes between home, results, and detail.
function App() {
  const [view, setView] = React.useState('home'); // home | results | detail
  const [make, setMake] = React.useState('');
  const [vehicle, setVehicle] = React.useState(null);
  const [query, setQuery] = React.useState('');
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [view, vehicle]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    query: query,
    onQuery: setQuery,
    onHome: () => {
      setView('home');
      setMake('');
    }
  }), view === 'home' && /*#__PURE__*/React.createElement(HomeScreen, {
    onSearch: m => {
      setMake(m);
      setView('results');
    }
  }), view === 'results' && /*#__PURE__*/React.createElement(ResultsScreen, {
    initialMake: make,
    onOpen: v => {
      setVehicle(v);
      setView('detail');
    }
  }), view === 'detail' && vehicle && /*#__PURE__*/React.createElement(DetailScreen, {
    v: vehicle,
    onBack: () => setView('results')
  }));
}
window.MarketplaceApp = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketplace/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketplace/DetailScreen.jsx
try { (() => {
// Marketplace vehicle detail page.
function DetailScreen({
  v,
  onBack
}) {
  const {
    Button,
    Badge,
    DealRating,
    Card,
    Eyebrow
  } = window.CarGurusDesignSystem_a90bbd;
  const [shot, setShot] = React.useState(0);
  const gallery = [v.image, v.front, v.image];
  const specs = [['Mileage', v.mileage.toLocaleString() + ' mi'], ['Exterior', v.color], ['Drivetrain', v.drivetrain], ['Engine', v.engine], ['MPG', v.mpg + ' city/hwy'], ['Body style', v.body]];
  const history = [[v.accidents === 0 ? 'No accidents reported' : `${v.accidents} accident reported`, v.accidents === 0], [`${v.owners} previous owner${v.owners > 1 ? 's' : ''}`, v.owners === 1], ['Personal use only', true], [v.certified ? 'Manufacturer certified' : 'Standard listing', v.certified]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      padding: 'var(--space-5) var(--space-8) var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      font: 'var(--fw-medium) 14px/1 var(--font-body)',
      color: 'var(--text-link)',
      padding: '8px 0',
      marginBottom: 'var(--space-3)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(Icon.back, {
    size: 16
  }), " Back to results"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--fog)',
      aspectRatio: '16 / 10',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: gallery[shot],
    alt: `${v.make} ${v.model}`,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), v.certified && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    appearance: "solid"
  }, "Certified Pre-Owned"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-3)'
    }
  }, gallery.map((g, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setShot(i),
    style: {
      width: 96,
      aspectRatio: '16/11',
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      boxShadow: i === shot ? '0 0 0 2.5px var(--action-primary)' : 'inset 0 0 0 1px var(--border-default)',
      background: 'var(--fog)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: g,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })))), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 'var(--space-8) 0 var(--space-4)',
      font: 'var(--fw-semibold) var(--fs-h3)/1.2 var(--font-body)',
      color: 'var(--text-heading)'
    }
  }, "Vehicle details"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-3) var(--space-8)'
    }
  }, specs.map(([k, val]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: 'var(--space-3) 0',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-semibold) 14px/1.3 var(--font-body)',
      color: 'var(--text-primary)'
    }
  }, val))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      position: 'sticky',
      top: 84,
      alignSelf: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "light",
    style: {
      whiteSpace: 'nowrap'
    }
  }, v.city, " \xB7 ", v.dist, " mi away"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '12px 0 2px',
      font: 'var(--fw-semibold) 30px/1.05 var(--font-display)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--text-heading)'
    }
  }, v.year, " ", v.make, " ", v.model), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)',
      color: 'var(--text-secondary)'
    }
  }, v.trim)), /*#__PURE__*/React.createElement(Card, {
    elevation: "md",
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) 34px/1 var(--font-display)',
      color: 'var(--text-heading)'
    }
  }, fmt(v.price)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, v.mileage.toLocaleString(), " mi")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 'var(--space-3) 0 var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(DealRating, {
    rating: v.rating,
    size: 22
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-semibold) 13px/1.3 var(--font-body)',
      color: v.market - v.price > 200 ? 'var(--green-700)' : 'var(--text-muted)'
    }
  }, savings(v))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true
  }, "Check availability"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true
  }, "Get financing")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-3) 0 0',
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      textAlign: 'center'
    }
  }, "Est. ", fmt(Math.round(v.price / 60)), "/mo \xB7 60 mo at 6.9% APR")), /*#__PURE__*/React.createElement(Card, {
    elevation: "sm",
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 var(--space-3)',
      font: 'var(--fw-semibold) 15px/1 var(--font-body)',
      color: 'var(--text-heading)'
    }
  }, "Vehicle history"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, history.map(([label, good]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      font: 'var(--type-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: good ? 'var(--green-600)' : 'var(--gray-500)',
      display: 'flex',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon.shield, {
    size: 16
  })), label)))))));
}
window.DetailScreen = DetailScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketplace/DetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketplace/Header.jsx
try { (() => {
// Marketplace top navigation bar.
function Header({
  onHome,
  query,
  onQuery
}) {
  const {
    Logo,
    Button
  } = window.CarGurusDesignSystem_a90bbd;
  const links = ['Buy', 'Sell', 'Finance', 'Research'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      height: 68,
      padding: '0 var(--space-8)',
      background: 'var(--surface-page)',
      borderBottom: '1px solid var(--border-default)',
      position: 'sticky',
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onHome,
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      padding: 0,
      display: 'flex'
    },
    "aria-label": "CarGurus home"
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "wordmark",
    height: 26
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      font: 'var(--fw-medium) 15px/1 var(--font-body)',
      color: 'var(--text-primary)',
      textDecoration: 'none',
      padding: '6px 2px'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: 420,
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      height: 40,
      padding: '0 14px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-subtle)',
      boxShadow: 'inset 0 0 0 1px var(--border-default)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon.search, {
    size: 18
  }), /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: e => onQuery(e.target.value),
    placeholder: "Search make, model, or keyword",
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: 'var(--type-body-sm)',
      color: 'var(--text-primary)'
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "small"
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "small"
  }, "Saved"));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketplace/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketplace/HomeScreen.jsx
try { (() => {
// Marketplace home — hero search, Deal Rating explainer, browse tiles.
function HomeScreen({
  onSearch
}) {
  const {
    Logo,
    Button,
    Eyebrow,
    Card,
    DealRating
  } = window.CarGurusDesignSystem_a90bbd;
  const [make, setMake] = React.useState('All makes');
  const [zip, setZip] = React.useState('02451');
  const bodies = ['SUV', 'Sedan', 'Truck', 'Hatchback', 'Coupe', 'Minivan'];
  const makes = ['Kia', 'Honda', 'Toyota', 'Ford', 'BMW', 'Tesla'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--gradient-pathway-navy)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 656 673",
    width: "520",
    height: "533",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: -120,
      bottom: -160,
      opacity: 0.16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 508.787 C 0 227.791 227.498 0 508.131 0 L 656 0 L 656 296.118 L 508.131 296.118 C 390.83 296.118 295.737 391.333 295.737 508.787 L 295.737 673 L 0 673 L 0 508.787 Z",
    fill: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      padding: '64px var(--space-8) 72px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "dark"
  }, "The #1 most-visited car-shopping site"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '18px 0 0',
      font: 'var(--fw-semibold) 56px/0.98 var(--font-display)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--text-inverse)',
      maxWidth: 560
    }
  }, "Search less.", /*#__PURE__*/React.createElement("br", null), "Find more."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      font: 'var(--fw-regular) 19px/1.5 var(--font-body)',
      color: 'rgba(255,255,255,0.82)',
      maxWidth: 440
    }
  }, "The most inventory, ranked by value \u2014 so you get the best deal, without the hassle."), /*#__PURE__*/React.createElement(Card, {
    elevation: "lg",
    border: false,
    padding: "var(--space-5)",
    style: {
      marginTop: 32,
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-end',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Make & model",
    value: make,
    options: ['All makes', ...makes],
    onChange: setMake,
    flex: 2
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Distance",
    value: "50 mi",
    options: ['10 mi', '25 mi', '50 mi', '100 mi', 'Nationwide'],
    flex: 1
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1)',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      font: 'var(--fw-semibold) 13px/1.2 var(--font-body)',
      color: 'var(--text-primary)'
    }
  }, "ZIP"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 44,
      padding: '0 14px',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'inset 0 0 0 1px var(--border-default)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon.pin, {
    size: 16
  }), /*#__PURE__*/React.createElement("input", {
    value: zip,
    onChange: e => setZip(e.target.value),
    style: {
      width: '100%',
      border: 'none',
      outline: 'none',
      font: 'var(--type-body)',
      color: 'var(--text-primary)'
    }
  }))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: /*#__PURE__*/React.createElement(Icon.search, {
      size: 18
    }),
    onClick: () => onSearch(make === 'All makes' ? '' : make),
    style: {
      height: 44
    }
  }, "Search"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      padding: 'var(--space-12) var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 'var(--space-12)',
      alignItems: 'center',
      marginBottom: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "light"
  }, "How it works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 12px',
      font: 'var(--fw-semibold) 34px/1.05 var(--font-display)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--text-heading)'
    }
  }, "See the deal before you drive"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)',
      color: 'var(--text-secondary)',
      maxWidth: 420
    }
  }, "Every listing gets a Deal Rating built from the real market \u2014 comparing price, mileage, and features against similar cars near you. Know what's fair before you talk to a dealer.")), /*#__PURE__*/React.createElement(Card, {
    elevation: "md",
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, [['great', '$2,310 below market'], ['good', '$840 below market'], ['fair', 'Right at market'], ['high', '$1,100 above market'], ['over', '$3,400 above market']].map(([r, note]) => /*#__PURE__*/React.createElement("div", {
    key: r,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(DealRating, {
    rating: r,
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, note)))))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 var(--space-5)',
      font: 'var(--fw-semibold) var(--fs-h3)/1.2 var(--font-body)',
      color: 'var(--text-heading)'
    }
  }, "Browse by body style"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: 'var(--space-3)'
    }
  }, bodies.map(b => /*#__PURE__*/React.createElement("button", {
    key: b,
    onClick: () => onSearch(''),
    className: "cg-card cg-card--interactive",
    style: {
      border: '1px solid var(--border-default)',
      background: 'var(--surface-page)',
      cursor: 'pointer',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-5) var(--space-3)',
      textAlign: 'center',
      font: 'var(--fw-semibold) 15px/1 var(--font-body)',
      color: 'var(--text-brand)'
    }
  }, b)))));
}

// Lightweight select-like field used in the hero search card.
function Field({
  label,
  value,
  options = [],
  onChange,
  flex = 1
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1)',
      flex
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      font: 'var(--fw-semibold) 13px/1.2 var(--font-body)',
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      height: 44,
      padding: '0 14px',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'inset 0 0 0 1px var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: e => onChange && onChange(e.target.value),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: 'var(--type-body)',
      color: 'var(--text-primary)',
      width: '100%',
      cursor: 'pointer'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      color: 'var(--text-muted)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon.chevron, {
    size: 16
  }))));
}
window.HomeScreen = HomeScreen;
window.Field = Field;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketplace/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketplace/ResultsScreen.jsx
try { (() => {
// Marketplace search results — filter rail + sortable VehicleCard grid.
function ResultsScreen({
  initialMake,
  onOpen
}) {
  const {
    Badge,
    DealRating
  } = window.CarGurusDesignSystem_a90bbd;
  const [makeFilter, setMakeFilter] = React.useState(initialMake || '');
  const [bodyFilter, setBodyFilter] = React.useState('');
  const [maxPrice, setMaxPrice] = React.useState(45000);
  const [greatOnly, setGreatOnly] = React.useState(false);
  const [sort, setSort] = React.useState('Best deals first');
  const [saved, setSaved] = React.useState({});
  const rank = {
    great: 0,
    good: 1,
    fair: 2,
    high: 3,
    over: 4
  };
  let list = INVENTORY.filter(v => (!makeFilter || v.make === makeFilter) && (!bodyFilter || v.body === bodyFilter) && v.price <= maxPrice && (!greatOnly || v.rating === 'great'));
  list = [...list].sort((a, b) => sort === 'Lowest price' ? a.price - b.price : sort === 'Lowest mileage' ? a.mileage - b.mileage : rank[a.rating] - rank[b.rating]);
  const makes = ['Kia', 'Honda'];
  const bodies = ['SUV', 'Sedan', 'Hatchback'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: 'var(--space-6) var(--space-8) var(--space-16)',
      display: 'grid',
      gridTemplateColumns: '252px 1fr',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      position: 'sticky',
      top: 84,
      alignSelf: 'start'
    }
  }, /*#__PURE__*/React.createElement(FilterGroup, {
    title: "Make"
  }, /*#__PURE__*/React.createElement(Radio, {
    label: "All makes",
    checked: !makeFilter,
    onChange: () => setMakeFilter('')
  }), makes.map(m => /*#__PURE__*/React.createElement(Radio, {
    key: m,
    label: m,
    checked: makeFilter === m,
    onChange: () => setMakeFilter(m)
  }))), /*#__PURE__*/React.createElement(FilterGroup, {
    title: "Body style"
  }, /*#__PURE__*/React.createElement(Radio, {
    label: "All styles",
    checked: !bodyFilter,
    onChange: () => setBodyFilter('')
  }), bodies.map(b => /*#__PURE__*/React.createElement(Radio, {
    key: b,
    label: b,
    checked: bodyFilter === b,
    onChange: () => setBodyFilter(b)
  }))), /*#__PURE__*/React.createElement(FilterGroup, {
    title: "Max price"
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "28000",
    max: "45000",
    step: "500",
    value: maxPrice,
    onChange: e => setMaxPrice(+e.target.value),
    style: {
      width: '100%',
      accentColor: 'var(--action-primary)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-semibold) 14px/1 var(--font-body)',
      color: 'var(--text-heading)',
      marginTop: 6
    }
  }, fmt(maxPrice))), /*#__PURE__*/React.createElement(FilterGroup, {
    title: "Deal Rating"
  }, /*#__PURE__*/React.createElement(Check, {
    label: "Great Deals only",
    checked: greatOnly,
    onChange: () => setGreatOnly(v => !v)
  }))), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: 'var(--fw-semibold) 28px/1.1 var(--font-display)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--text-heading)'
    }
  }, makeFilter || 'All', " cars near Waltham, MA"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, list.length, " matches \xB7 within 50 miles")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      height: 40,
      padding: '0 36px 0 14px',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'inset 0 0 0 1px var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: sort,
    onChange: e => setSort(e.target.value),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: 'var(--fw-medium) 14px/1 var(--font-body)',
      color: 'var(--text-primary)',
      cursor: 'pointer'
    }
  }, ['Best deals first', 'Lowest price', 'Lowest mileage'].map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      color: 'var(--text-muted)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon.chevron, {
    size: 16
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-5)'
    }
  }, list.map(v => /*#__PURE__*/React.createElement(ListingCard, {
    key: v.id,
    v: v,
    saved: !!saved[v.id],
    onSave: () => setSaved(s => ({
      ...s,
      [v.id]: !s[v.id]
    })),
    onClick: () => onOpen(v)
  }))), list.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-muted)',
      padding: 'var(--space-12) 0',
      textAlign: 'center'
    }
  }, "No cars match these filters. Try widening your price range.")));
}

// A results-grid listing card (full-width within its column).
function ListingCard({
  v,
  saved,
  onSave,
  onClick
}) {
  const {
    Card,
    DealRating,
    Badge
  } = window.CarGurusDesignSystem_a90bbd;
  return /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    padding: "0",
    elevation: "sm",
    onClick: onClick,
    style: {
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '16 / 11',
      background: 'var(--fog)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: v.image,
    alt: `${v.year} ${v.make} ${v.model}`,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), v.certified && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    appearance: "solid"
  }, "Certified")), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onSave();
    },
    "aria-label": "Save",
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      width: 36,
      height: 36,
      borderRadius: '50%',
      border: 'none',
      background: 'rgba(255,255,255,0.92)',
      boxShadow: 'var(--shadow-sm)',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center',
      color: saved ? 'var(--cg-red)' : 'var(--gray-600)'
    }
  }, /*#__PURE__*/React.createElement(Icon.heart, {
    size: 18,
    fill: saved
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--fw-semibold) 16px/1.25 var(--font-body)',
      color: 'var(--text-primary)'
    }
  }, v.year, " ", v.make, " ", v.model), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, v.trim), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-2)',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) 22px/1 var(--font-display)',
      color: 'var(--text-heading)'
    }
  }, fmt(v.price)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, v.mileage.toLocaleString(), " mi")), /*#__PURE__*/React.createElement(DealRating, {
    rating: v.rating
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-semibold) 13px/1.3 var(--font-body)',
      color: v.market - v.price > 200 ? 'var(--green-700)' : 'var(--text-muted)'
    }
  }, savings(v)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, v.city, " (", v.dist, " mi)")));
}
function FilterGroup({
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 var(--space-3)',
      font: 'var(--fw-semibold) 14px/1 var(--font-body)',
      color: 'var(--text-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, children));
}
function Radio({
  label,
  checked,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      cursor: 'pointer',
      font: 'var(--type-body-sm)',
      color: checked ? 'var(--text-heading)' : 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      boxShadow: `inset 0 0 0 ${checked ? '5px var(--action-primary)' : '1.5px var(--border-strong)'}`,
      transition: 'box-shadow var(--dur-fast) var(--ease-standard)'
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    checked: checked,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0
    }
  }), label);
}
function Check({
  label,
  checked,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      cursor: 'pointer',
      font: 'var(--type-body-sm)',
      color: checked ? 'var(--text-heading)' : 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-xs)',
      display: 'grid',
      placeItems: 'center',
      background: checked ? 'var(--action-primary)' : 'transparent',
      boxShadow: checked ? 'none' : 'inset 0 0 0 1.5px var(--border-strong)',
      color: '#fff'
    }
  }, checked && /*#__PURE__*/React.createElement(Icon.check, {
    size: 13
  })), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0
    }
  }), label);
}
window.ResultsScreen = ResultsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketplace/ResultsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketplace/data.jsx
try { (() => {
// Marketplace shared data + icon helpers. Loaded as a babel script; exports to window.
const VEH = '../../assets/vehicles/';
const INVENTORY = [{
  id: 1,
  year: 2024,
  make: 'Kia',
  model: 'Telluride',
  trim: 'SX Prestige X-Pro',
  body: 'SUV',
  price: 41995,
  market: 44305,
  rating: 'great',
  mileage: 12400,
  city: 'Waltham, MA',
  dist: 4,
  image: VEH + 'telluride-navy-side.png',
  front: VEH + 'telluride-navy-front.png',
  certified: true,
  color: 'Sangria Navy',
  mpg: '19/24',
  drivetrain: 'AWD',
  engine: '3.8L V6',
  accidents: 0,
  owners: 1
}, {
  id: 2,
  year: 2023,
  make: 'Honda',
  model: 'Civic',
  trim: 'Sport Touring Hatchback',
  body: 'Hatchback',
  price: 28450,
  market: 29290,
  rating: 'good',
  mileage: 21900,
  city: 'Cambridge, MA',
  dist: 7,
  image: VEH + 'civic-red-front.png',
  front: VEH + 'civic-red-front.png',
  certified: false,
  color: 'Rallye Red',
  mpg: '26/36',
  drivetrain: 'FWD',
  engine: '1.5L Turbo',
  accidents: 0,
  owners: 1
}, {
  id: 3,
  year: 2024,
  make: 'Kia',
  model: 'Telluride',
  trim: 'EX',
  body: 'SUV',
  price: 38900,
  market: 38450,
  rating: 'fair',
  mileage: 9800,
  city: 'Newton, MA',
  dist: 9,
  image: VEH + 'telluride-white-side.png',
  front: VEH + 'telluride-navy-front.png',
  certified: true,
  color: 'Glacial White',
  mpg: '20/26',
  drivetrain: 'FWD',
  engine: '3.8L V6',
  accidents: 0,
  owners: 1
}, {
  id: 4,
  year: 2023,
  make: 'Kia',
  model: 'Telluride',
  trim: 'S',
  body: 'SUV',
  price: 36750,
  market: 39100,
  rating: 'great',
  mileage: 18200,
  city: 'Quincy, MA',
  dist: 12,
  image: VEH + 'telluride-navy-side.png',
  front: VEH + 'telluride-navy-front.png',
  certified: false,
  color: 'Ebony Navy',
  mpg: '20/26',
  drivetrain: 'AWD',
  engine: '3.8L V6',
  accidents: 0,
  owners: 2
}, {
  id: 5,
  year: 2024,
  make: 'Honda',
  model: 'Civic',
  trim: 'Si Sedan',
  body: 'Sedan',
  price: 31200,
  market: 31180,
  rating: 'fair',
  mileage: 6400,
  city: 'Somerville, MA',
  dist: 6,
  image: VEH + 'civic-red-front.png',
  front: VEH + 'civic-red-front.png',
  certified: true,
  color: 'Rallye Red',
  mpg: '27/37',
  drivetrain: 'FWD',
  engine: '1.5L Turbo',
  accidents: 0,
  owners: 1
}, {
  id: 6,
  year: 2022,
  make: 'Kia',
  model: 'Telluride',
  trim: 'SX',
  body: 'SUV',
  price: 34995,
  market: 37600,
  rating: 'great',
  mileage: 31500,
  city: 'Lowell, MA',
  dist: 22,
  image: VEH + 'telluride-white-side.png',
  front: VEH + 'telluride-navy-front.png',
  certified: false,
  color: 'Glacial White',
  mpg: '19/24',
  drivetrain: 'AWD',
  engine: '3.8L V6',
  accidents: 1,
  owners: 1
}];
const fmt = n => '$' + n.toLocaleString('en-US');
const savings = v => {
  const d = v.market - v.price;
  if (d > 200) return fmt(d) + ' below market';
  if (d < -200) return fmt(-d) + ' above market';
  return 'At market price';
};

// Inline icon helpers (CarGurus flat line style)
const Icon = {
  search: p => /*#__PURE__*/React.createElement("svg", {
    width: p?.size || 20,
    height: p?.size || 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  })),
  pin: p => /*#__PURE__*/React.createElement("svg", {
    width: p?.size || 18,
    height: p?.size || 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })),
  chevron: p => /*#__PURE__*/React.createElement("svg", {
    width: p?.size || 18,
    height: p?.size || 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      transform: p?.up ? 'rotate(180deg)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })),
  back: p => /*#__PURE__*/React.createElement("svg", {
    width: p?.size || 18,
    height: p?.size || 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m15 18-6-6 6-6"
  })),
  check: p => /*#__PURE__*/React.createElement("svg", {
    width: p?.size || 18,
    height: p?.size || 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })),
  heart: p => /*#__PURE__*/React.createElement("svg", {
    width: p?.size || 20,
    height: p?.size || 20,
    viewBox: "0 0 24 24",
    fill: p?.fill ? 'currentColor' : 'none',
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s-7.5-4.6-10-9.1C.4 8.9 1.8 5.5 5 5.2c2-.2 3.4 1 4 2 .6-1 2-2.2 4-2 3.2.3 4.6 3.7 3 6.7C19.5 16.4 12 21 12 21z"
  })),
  shield: p => /*#__PURE__*/React.createElement("svg", {
    width: p?.size || 18,
    height: p?.size || 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 12 2 2 4-4"
  })),
  gauge: p => /*#__PURE__*/React.createElement("svg", {
    width: p?.size || 18,
    height: p?.size || 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 14 8 9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.34 19a10 10 0 1 1 17.32 0"
  }))
};
Object.assign(window, {
  INVENTORY,
  fmt,
  savings,
  Icon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketplace/data.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Pathway = __ds_scope.Pathway;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.DealRating = __ds_scope.DealRating;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.VehicleCard = __ds_scope.VehicleCard;

})();
