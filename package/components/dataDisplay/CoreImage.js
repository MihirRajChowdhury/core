/* eslint-disable import/no-unresolved */
// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { NativeImage } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreImage(props) {
  props = sanitizeComponentProps(CoreImage, props);
  return <NativeImage {...props} />;
}
CoreImage.validProps = [
  {
    name : "src",
    types: [{ type: "string" }]
  },
  {
    name : "height",
    types: [{ type: "number" }]
  },
  {
    name : "width",
    types: [{ type: "number" }]
  }
];
CoreImage.invalidProps = ["style", "sx", "classes"];
