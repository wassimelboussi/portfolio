import { Document, Page } from 'react-pdf';

function ResumeViewer() {
  const pdfUrl = 'src/assets/cv.pdf';

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Document file={pdfUrl}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default ResumeViewer;
