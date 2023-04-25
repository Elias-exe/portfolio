import { PDFViewer } from "@react-pdf/renderer";
import { Document } from "react-pdf";
import { Container, PDFContainer } from "./styles";
import Curriculo from "../../../assets/PDF/Curriculo.pdf";

export default function Resume() {
  return (
    <Container>
      <PDFContainer>
        <PDFViewer>
          <Document file={Curriculo} />
        </PDFViewer>
      </PDFContainer>
    </Container>
  );
}
