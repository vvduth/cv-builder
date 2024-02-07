import type { Style } from "@react-pdf/types";
import { View, Text } from "@react-pdf/renderer";
import { styles, spacing } from "../styles";
import { DEFAULT_FONT_COLOR } from "@/app/lib/redux/settingsSlice";

export const ResumePDFSection = ({
  themeColor,
  heading,
  style,
  children,
}: {
  themeColor?: string;
  heading?: string;
  style?: Style;
  children: React.ReactNode;
}) => (
  <View
    style={{
      ...styles.flexCol,
      gap: spacing["2"],
      marginTop: spacing["5"],
      ...style,
    }}
  >
    {heading && (
      <View style={{ ...styles.flexRow, alignItems: "center" }}>
        {themeColor && (
          <View
            style={{
              height: "3.75pt",
              width: "30pt",
              backgroundColor: themeColor,
              marginRight: spacing["3.5"],
            }}
          />
        )}
        <Text
         style={{
            fontWeight: "bold", 
            letterSpacing: "0.3pt"
         }}
        >
            {heading}
        </Text>
      </View>
    )}
    {children}
  </View>
);

export const ResumePDFText = ({
    bold= false, 
    themeColor,
    style={}, children
}: {
    bold?: boolean;
    themeColor?: string, 
    style? : Style,
    children: React.ReactNode
}) => {

    return (
        <Text 
            style={{
                color: themeColor || DEFAULT_FONT_COLOR,
                fontWeight: bold ? "bold" : "normal",
                ...styles
            }}
        >
            {children}
        </Text>
    )
}
