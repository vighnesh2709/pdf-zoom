import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";

function App() {
  const docs = [
    { uri: "https://pdfobject.com/pdf/sample.pdf",
      fileType: "pdf",
      fileName: "demo.pdf"
    },
  ];

  return( 
  <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} style={{height:1000,width:2000}}/>
  )
}

export default App
