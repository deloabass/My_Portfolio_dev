/**
 * @copyright 2024 codewihthsadee
 * @license Apache-2.0
 */

/**
 * Node modules
 */

import PropTypes from "prop-types";

/**
 * Primary Button
 */
const ButtonPrimary = ({ href, target = "_self", label, icon, classes = "" }) => {
  const iconElement = icon ? (
    <span className="material-symbols-rounded" aria-hidden="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="currentColor"
      >
        <path
          d="M480-320 280-520l56-58 104 104v-326h80v326l104-104
          56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0
          33-23.5 56.5T720-160H240Z"
        />
      </svg>
    </span>
  ) : <><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="16px" fill="text-zinc-900"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></>;

  if (href) {
    return (
      <a href={href} target={target} className={`btn btn-primary ${classes}`}>
        {label}
        {iconElement}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-primary ${classes}`}>
        {label}
        {iconElement}
      </button>
    );
  }
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.bool,
  classes: PropTypes.string,
};

const ButtonOutline = ({ href, target = "_self", label, icon, classes = "" }) => {
    const iconElement = icon ? (
      <span className="material-symbols-rounded" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/></svg>
      </span>
    ) : null;
  
    if (href) {
      return (
        <a href={href} target={target} className={`btn btn-outline ${classes}`}>
          {label}
          {iconElement}
        </a>
      );
    } else {
      return (
        <button className={`btn btn-outline ${classes}`}>
          {label}
          {iconElement}
        </button>
      );
    }
  };
  
  ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.bool,
    classes: PropTypes.string,
  };

export { ButtonPrimary, ButtonOutline};
