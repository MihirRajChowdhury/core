// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import CoreIcon, { __IconTypes } from "./CoreIcon";
import CoreIconText from "./CoreIconText";
import CoreTooltip from "./CoreTooltip";
import CoreClasses from "../../styles/CoreClasses";
import { sanitizeComponentProps } from "../../utils/componentUtil";
import { maskEmailOrPhone } from "../../utils/stringUtils";
import CoreLink from "../navigation/CoreLink";

export default function CoreEmailLink(props) {
  props = sanitizeComponentProps(CoreEmailLink, props);
  const {
    limitChars = 30,
    email,
    verified,
    tooltipPlacement = "bottom",
    size,
    mask = false,
    iconButton = false,
  } = props;

  const renderEmailLinkComp = () => {
    return (
      <>
        {email ? (
          iconButton ? (
            <CoreLink href={`mailto:${email}`}>
              <CoreIcon
                type={__IconTypes.MATERIAL_OUTLINED_ICON}
                styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY]}
              >
                mail
              </CoreIcon>
            </CoreLink>
          ) : (
            <CoreIconText
              href={`mailto:${email}`}
              limitChars={limitChars}
              hideSeeMore={true}
              type={__IconTypes.MATERIAL_OUTLINED_ICON}
              size={size}
              link={true}
              text={mask ? maskEmailOrPhone(email) : email}
              icon="mail"
              tailIconColor={
                email && verified !== undefined && verified
                  ? [CoreClasses?.ICON?.VERIFIED_SUCCESS]
                  : [CoreClasses?.ICON?.VERIFIED_WARNING]
              }
              tailIcon={
                email && verified !== undefined
                  ? verified
                    ? "verified"
                    : "error_outline"
                  : null
              }
            />
          )
        ) : iconButton ? (
          <CoreIconText
            type={__IconTypes.MATERIAL_OUTLINED_ICON}
            icon="email"
            text={"NA"}
          />
        ) : (
          <CoreIconText
            type={__IconTypes.MATERIAL_OUTLINED_ICON}
            icon="email"
            text={"Not Available"}
          />
        )}
      </>
    );
  };

  return (
    <>
      {email && email.length > limitChars ? (
        <CoreTooltip title={email} arrow placement={tooltipPlacement}>
          {renderEmailLinkComp()}
        </CoreTooltip>
      ) : (
        <>{renderEmailLinkComp()}</>
      )}
    </>
  );
}

CoreEmailLink.validProps = [
  { name: "limitChars", types: [{ default: 30, type: "number" }] },
  { name: "email", types: [{ type: "string" }] },
  { name: "verified", types: [{ type: "boolean" }] },
  { name: "tooltipPlacement", types: [{ default: "bottom", type: "string" }] },
  { name: "size", types: [{ type: "string" }] },
  { name: "mask", types: [{ default: false, type: "boolean" }] },
  { name: "iconButton", types: [{ default: false, type: "boolean" }] }
];
CoreEmailLink.invalidProps = [];