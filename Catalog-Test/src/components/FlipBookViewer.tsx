import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import FlipPage from 'react-pageflip';
import '../index.css';

function FlipBookViewer({ pdfFile }) {
    const [numPages, setNumPages] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <div className="flipbook-container">
            <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                <FlipPage>
                    {Array.from(new Array(numPages), (el, index) => (
                        <div className="page" key={`page_${index + 1}`}>
                            <Page pageNumber={index + 1} />
                        </div>
                    ))}
                </FlipPage>
            </Document>
        </div>
    );
}

export default FlipBookViewer;
