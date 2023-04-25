import React from "react";
import {
  Page, View, Document,
} from "@react-pdf/renderer";
import Curriculo from "../../PDF/Curriculo.pdf";

// Create Document Component
export function MyDocument() {
  return (
    <Document>
      <Page size="A4">
        <View>
          <Curriculo />
        </View>
      </Page>
    </Document>
  );
}
