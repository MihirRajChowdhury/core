// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeDateTimeRangePicker } from "@wrappid/native";

import CoreFormErrorText from "./CoreFormErrorText";
import CoreFormHelperText from "./CoreFormHelperText";
import CoreClasses from "../../styles/CoreClasses";
import CoreBox from "../layouts/CoreBox";

export default function CoreDateTimeRangePicker(props) {
  const { error, helperText } = props;
  
  return (
    <CoreBox>
      <NativeDateTimeRangePicker {...props} />

      {helperText && (
        <CoreFormHelperText styleClasses={[CoreClasses.LAYOUT.NO_MARGIN_P]}>
          {helperText}
        </CoreFormHelperText>
      )}
      
      {error && <CoreFormErrorText>{error}</CoreFormErrorText>}
    </CoreBox>
  );
}
CoreDateTimeRangePicker.validProps = [
  {
    name : "formik",
    types: [{ type: "object" }]
  }
];
CoreDateTimeRangePicker.invalidProps = [];