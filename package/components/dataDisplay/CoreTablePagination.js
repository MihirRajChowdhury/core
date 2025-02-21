// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeTablePagination } from "@wrappid/native";

import CoreTableCell from "./CoreTableCell";
import { DATA_TABLE_CONST } from "../../config/dataTableConstants";
import { sanitizeComponentProps } from "../../utils/componentUtil";

/**
 * CoreTablePagination is a component that displays pagination controls for a table.
 * @todo rowsPerPageOptions via wrappid style context.
 * @param {*} props 
 * @returns 
 */
export default function CoreTablePagination(props) {
  props = sanitizeComponentProps(CoreTablePagination, props);
  const { rowsPerPageOptions, ...restProps } = props;

  return (
    <NativeTablePagination
      labelRowsPerPage="" // make it clean
      rowsPerPageOptions={rowsPerPageOptions || DATA_TABLE_CONST.ROWS_PER_PAGE_OPTIONS}
      {...restProps}
    />
  );
}

CoreTablePagination.displayName = "CoreTablePagination";
CoreTablePagination.validProps = [
  ...CoreTableCell.validProps,
  {
    description: "The total number of rows. To enable server side pagination for an unknown number of items, provide -1.",
    name       : "count",
    types      : [{ type: "number" }]
  },
  {
    description: `Callback fired when the page is changed.
Signature:
function(event: React.MouseEvent | null, page: number) => void

  - event The event source of the callback.
  - page The page selected.`,
    name : "onPageChange",
    types: [{ type: "function" }]
  },
  {
    description: "The zero-based index of the current page.",
    name       : "page",
    types      : [{ type: "number" }]
  },
  {
    decription: "The number of rows per page. Set -1 to display all the rows.",
    name      : "rowsPerPage",
    types     : [{ type: "number" }]
  },
  {
    description: "The component used for displaying the actions. Either a string to use a HTML element or a component.",
    name       : "ActionsComponent",
    types      : [
      {
        default: "TablePaginationActions",
        type   : "elementType"
      }
    ]
  },
  {
    description: "If true, the component is disabled.",
    name       : "disabled",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false]
      }
    ]
  },
  {
    description: `Accepts a function which returns a string value that provides a user-friendly name for the current page. This is important for screen reader users.
Signature:
function(type: string) => string

  - type The link or button type to format ('first' | 'last' | 'next' | 'previous').`,
    name : "getItemAriaLabel",
    types: [{ type: "function" }]
  },
  {
    description: "Customize the displayed rows label. Invoked with a { from, to, count, page } object.",
    name       : "labelDisplayedRows",
    types      : [{ type: "function" }]
  },
  {
    description: "Customize the rows per page label",
    name       : "labelRowsPerPage",
    types      : [{ type: "node" }]
  },
  {
    description: `Callback fired when the number of rows per page is changed.
Signature:
function(event: React.ChangeEvent) => void

  - event The event source of the callback.`,
    name : "onRowsPerPageChange",
    types: [{ type: "function" }]
  },
  {
    description: "Customizes the options of the rows per page select field. If less than two options are available, no select field will be displayed. Use -1 for the value with a custom label to show all the rows.Array type: Array<number{ label: string, value: number }> ",
    name       : "rowsPerPageOptions",
    types      : [
      {
        default: DATA_TABLE_CONST.ROWS_PER_PAGE_OPTIONS,
        type   : "array"
      }
    ]
  },
  {
    description: "If true, show the first-page button.",
    name       : "showFirstButton",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false]
      }
    ]
  },
  {
    description: "If true, show the last-page button.",
    name       : "showLastButton",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false]
      }
    ]
  },
  {
    description: "The props used for each slot inside the CoreTablePagination.",
    name       : "slotProps",
    types      : [
      {
        default: {},
        type   : "object"
      }
    ]
  },
  {
    description: "The components used for each slot inside the CoreTablePagination. Either a string to use a HTML element or a component.",
    name       : "slots",
    types      : [
      {
        default: {},
        type   : "object"
      }
    ]
  }
];
