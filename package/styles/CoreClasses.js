/* eslint-disable sort-keys-fix/sort-keys-fix */

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";

const CoreClasses = {
  ...UtilityClasses,
  
  // ----------Widget Style Constants Ends-------
  /**
   * Business Entity Component
   */
  BUSINESS_ENTITY: { INCLUDED_MODEL_CARD: "includedModelCard" },
  
  DATA_DISPLAY: {
    AVATAR             : "avatar",
    AVATAR_LARGE       : "avatarLarge",
    AVATAR_MEDIUM      : "avatarMedium",
    AVATAR_SMALL       : "avatarSmall",
    AVATAR_XLARGE      : "avatarXLarge",
    AVATAR_XXLARGE     : "avatarXXLarge",
    BOLD_TEXT          : "boldText",
    CORE_FORM_LABEL    : "coreFormLabel",
    CORE_INPUT         : "coreInput",
    CORE_TEXT          : "coreText",
    HELPER_OUTSIDE_FORM: "helperOutsideForm",
    HIDDEN_BODY_TEXT   : "hiddenBodyText",
    MEDICINE_TEXT      : "medicineText",
    TEXT_CENTER        : "textAlignCenter",
    TEXT_RIGHT         : "textAlignRight",
  },
  
  // ----------Data Table Styles Starts----------
  DATA_TABLE: {
    DATA_TABLE                  : "dataTable",
    DATA_TABLE_BODY             : "dataTableBody",
    DATA_TABLE_CONTAINER        : "dataTableContainer",
    DATA_TABLE_FOOT             : "dataTableFoot",
    DATA_TABLE_FULL_WIDTH_PANE  : "dataTableFullWidthPane",
    DATA_TABLE_HEAD             : "dataTableHead",
    DATA_TABLE_HEAD_TOP         : "dataTableHeadTop",
    DATA_TABLE_MINI_WIDTH_PANE  : "dataTableMiniWidthPane",
    DATA_TABLE_TOOLBAR          : "dataTableToolbar",
    DATA_TABLE_TOOLBAR_CONTAINER: "dataTableToolbarContainer",
  },
  
  FRAMEWORK: { CORE_FOOTER: "coreFooter" },
  
  ICON: {
    VERIFIED_SUCCESS: "verifiedSuccess",
    VERIFIED_WARNING: "verifiedWarning",
  },
  
  /**************************************************
   * Layout
   **************************************************/
  LAYOUT: {

    VIEWER_BORDER                        : "layoutViewerBorder",
    BLANK_CONTENT                        : "blankLayout",
    CENTERED_BLANK_CONTENT               : "centeredBlankLayoutContent",
    V_CENTERED_BLANK_CONTENT             : "vCenteredBlankLayoutContent",
    H_CENTERED_BLANK_CONTENT             : "hCenteredBlankLayoutContent",
    HEADER_LAYOUT_HEADER                 : "headerLayoutHeader",
    HEADER_LAYOUT_CONTENT                : "headerLayoutContent",
    FOOTER_LAYOUT_CONTENT                : "footerLayoutContent",
    FOOTER_LAYOUT_FOOTER                 : "footerLayoutFooter",
    HEADER_FOOTER_LAYOUT_HEADER          : "headerFooterLayoutHeader",
    HEADER_FOOTER_LAYOUT_CONTENT         : "headerFooterLayoutContent",
    HEADER_FOOTER_LAYOUT_FOOTER          : "headerFooterLayoutFooter",
    FIXED_HEADER_LAYOUT_HEADER           : "fixedHeaderLayoutHeader",
    FIXED_HEADER_LAYOUT_CONTENT          : "fixedHeaderLayoutContent",
    FIXED_FOOTER_LAYOUT_CONTENT          : "fixedFooterLayoutContent",
    FIXED_FOOTER_LAYOUT_FOOTER           : "fixedFooterLayoutFooter",
    FIXED_HEADER_FOOTER_LAYOUT_HEADER    : "fixedHeaderFooterLayoutHeader",
    FIXED_HEADER_FOOTER_LAYOUT_CONTENT   : "fixedHeaderFooterLayoutContent",
    FIXED_HEADER_FOOTER_LAYOUT_FOOTER    : "fixedHeaderFooterLayoutFooter",
    LEFT_DRAWER_LAYOUT_HEDAER            : "leftDrawerLayoutHeader",
    LEFT_DRAWER_LAYOUT_RIGHT_CONTENT     : "leftDrawerLayoutRightContent",
    RIGHT_DRAWER_LAYOUT_HEADER           : "rightDrawerLayoutHeader",
    RIGHT_DRAWER_LAYOUT_RIGHT_DRAWER     : "rightDrawerLayoutRightDrawer",
    RIGHT_DRAWER_LAYOUT_LEFT_CONTENT     : "rightDrawerLayoutLeftContent",
    LEFT_RIGHT_DRAWER_LAYOUT_HEADER      : "leftRightDrawerLayoutHeader",
    LEFT_RIGHT_DRAWER_LAYOUT_LEFT_DRAWER : "leftRightDrawerLayoutLeftDrawer",
    LEFT_RIGHT_DRAWER_LAYOUT_CONTENT     : "leftRightDrawerLayoutContent",
    LEFT_RIGHT_DRAWER_LAYOUT_RIGHT_DRAWER: "leftRightDrawerLayoutRightDrawer",
    TWO_COL_LAYOUT                       : "twoColLayout",
    TWO_COL_LAYOUT_FIRST_COL             : "twoColLayoutFirstCol",
    TWO_COL_LAYOUT_SECOND_COL            : "twoColLayoutSecondCol",
    THREE_COL_LAYOUT                     : "threeColLayout",
    THREE_COL_LAYOUT_FIRST_COL           : "threeColLayoutFirstCol",
    THREE_COL_LAYOUT_SECOND_COL          : "threeColLayoutSecondCol",
    THREE_COL_LAYOUT_THIRD_COL           : "threeColLayoutThirdCol",

    BORDER_BOTTOM_WIDTH: "borderBottomWidth",
    
    BUTTON_MARGIN: "buttonMargin",
    
    CONTENT_CONTAINER: "contentContainer",
    
    /* Prescription */
    CORE_TEXT: "coreText",
    
    FLEXBOX: "flexBox",
    
    FULL_HEIGHT                 : "fullHeight",
    /*
     * Container related classes
     */
    APPBAR_HEIGHT               : "appbarHeight",
    FULL_WIDTH                  : "fullWidth",
    FULL_WIDTH_HEIGHT           : "fullWidthHeight",
    GRID_PADDING                : "gridPadding",
    HORIZONTAL_CENTER           : "horizontalCenter",
    HORIZONTAL_RIGHT            : "horizontalRight",
    LEFT_ALIGN                  : "alignLeft",
    LOGGED_OUT_CONTENT_CONTAINER: "loggedOutContentContainer",
    LOGGED_OUT_PAGE_CONTAINER   : "loggedOutPageContainer",
    MENU_POPOVER                : "menuPopover",
    NO_MARGIN_P                 : "noMarginP",
    PAGE_CONTAINER              : "pageContainer",
    PROFILE_BAR_WIDTH           : "profileBarWidth",
    RIGHT_ALIGN                 : "alignRight",
    SPACED_ROW_ELEMENTS         : "spacedRowElements",
    TABLE_ROW_ACTION_POPOVER    : "tableRowActionPopover",
    VERTICAL_CENTER             : "verticalCenter",
    VERTICAL_HORIZONTAL_CENTER  : "verticalHorizontalCenter",
  },
  
  MENU: {
    HEADER_BUTTON_ITEM: "headerButtonItem",
    HEADER_ICON_ITEM  : "headerIconItem",
    HEADER_ITEM       : "headerItem",
    HEADER_TEXT_ITEM  : "headerTextItem",
    LIST_ITEM         : "listItem",
    LIST_ITEM_BUTTON  : "listItemButton",

    LIST_ITEM_ICON       : "listItemIcon",
    LIST_ITEM_TEXT       : "listItemText",
    MENU_ITEM            : "menuItem",
    MENU_ITEM_BUTTON_ITEM: "menuItemButtonItem",

    MENU_ITEM_ICON_ITEM         : "menuItemIconItem",
    MENU_ITEM_TEXT_ITEM         : "menuItemTextItem",
    MINI_DRAWER_LIST_ITEM_BUTTON: "miniDrawerListItemButton",
    MINI_DRAWER_LIST_ITEM_ICON  : "miniDrawerListItemIcon",

    PARENT_BUTTON_ITEM: "parentButtonItem",
    PARENT_ICON_ITEM  : "parentIconItem",
    PARENT_ITEM       : "parentItem",
    PARENT_TEXT_ITEM  : "parentTextItem",

    SEPERATOR_BUTTON_ITEM: "seperatorButtonItem",
    SEPERATOR_ICON_ITEM  : "seperatorIconItem",
    SEPERATOR_ITEM       : "seperatorItem",
    SEPERATOR_TEXT_ITEM  : "seperatorTextItem",
  },
  
  NAVIGATION: {
    APP_BAR_ICONS_CONTAINER  : "appBarIconsContainer",
    APP_BAR_LOGGED_OUT       : "appBarLoggedOut",
    APP_BAR_LOGGIN_IN        : "appBarLoggedIn",
    LINK_STYLE               : "linkStyle",
    PHONE_EMAIL_LINK         : "phoneEmailLink",
    PROFILE_BAR_SECTION      : "profilebarSection",
    PROFILE_CARD_CONTACT     : "profileCardContact",
    PROFILE_CARD_LINK        : "profileCardLink",
    PROFILE_CARD_NAME        : "profileCardName",
    PROFILE_CARD_TOKEN_AMOUNT: "profileCardTokenAmount",
    PROFILE_CARD_TOKEN_DETAIL: "profileCardTokenDetail",
    PROFILE_CARD_TOKEN_TEXT  : "profileCardTokenText",
    PROFILE_DETAIL           : "profileDetail"
  },
  
  /**************************************************
   * Popover Content Styles
   *************************************************/
  POPOVER: {
    CONTENT: "popoverContent",
    FOOTER : "popoverFooter",
    HEADER : "popoverHeader",
  },
  
  SC_APP_DIV: "scAppDiv",
  
  /**
   *
   */
  TABLE: {
    TABLE_TOOLBAR_POPOVER_SCROLLABLE_CONTAINER:
      "tableToolbarPopoverScrollableContainer",
    TD: "tableCell",
    TH: "tableHeadCell",
  },
  
  UTILS: {
    FIT_CONTENT_HEIGHT: "fitContentHeight",
    FIT_CONTENT_WIDTH : "fiContentWidth",
    HEADING_TOP_MARGIN: "headingTopMargin",
    PROFILE_BAR       : "profileBar",
  },
  // ----------Data Table Styles Ends------------
  // ----------Widget Style Constants Starts-----
  /**
   * Widget related Style Constants
   */
  WIDGET: {
    COUNTER_WIDGET_CARD           : "counterWidgetCard",
    COUNTER_WIDGET_CARD_ACTIONS   : "counterWidgetCardActions",
    COUNTER_WIDGET_CARD_CONTENT   : "counterWidgetCardContent",
    COUNTER_WIDGET_CARD_HEADER    : "counterWidgetCardHeader",
    COUNTER_WIDGET_CARD_ICON      : "counterWidgetCardIcon",
    COUNTER_WIDGET_COUNTER        : "counterWidgetCounter",
    COUNTER_WIDGET_COUNTER_PRIMARY: "counterWidgetCounterPrimary",
    COUNTER_WIDGET_COUNTER_STACK  : "counterWidgetCounterStack",
  }
};

export default CoreClasses;
