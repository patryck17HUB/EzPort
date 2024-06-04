/* fonts */
export const FontFamily = {
    font_base: "Roboto",
  };
  /* font sizes */
export const FontSize = {
    size_base: 16,
};
  /* Colors */
export const Color = {
    primary: "#000000",
    secondary: "#2E2E2E",
};

import { StyleSheet } from "react-native";

export const globalstyles = StyleSheet.create({
  background: {
    backgroundColor: Color.primary,
    flex: 1,
    position: 'relative', // Permitir la posición relativa para elementos internos
  },
  contenido: {
    marginTop: 35,
    marginBottom: '1%',
    flex: 1,
  },
});