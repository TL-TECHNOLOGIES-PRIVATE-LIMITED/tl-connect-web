import { Document, Page } from 'react-pdf';

export const PDFViewer = ({selectedDocument}) => {
  return (
    <Document file={selectedDocument} >
      <Page pageNumber={1} />
    </Document>
  );
};
