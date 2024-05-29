import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import resumeFile from "../assets/files/Resume-Pulkit.pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
const Resume = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <h1 className="text-xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100 max-[640px]:flex justify-center my-5">
        Resume{" "}
        <button className="rounded bg-slate-100 border border-solid border-grey hover:bg-slate-200  dark:bg-slate-800 dark:text-white p-2 ml-4">
          <svg
            className="fill-current w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
        </button>
      </h1>
      <div className="max-[640px]:hidden">
        <div className="m-auto flex flex-col items-center border border-solid border-grey w-fit">
          <Document file={resumeFile} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
        <div className="m-auto flex items-center justify-center my-10">
          <button
            className="rounded-s-lg bg-slate-100 border border-solid border-grey w-24 hover:bg-slate-200  dark:bg-slate-800 dark:text-white"
            onClick={() => {
              if (1 < pageNumber) setPageNumber(pageNumber - 1);
            }}
          >
            -
          </button>
          <button
            className="rounded-r-lg bg-slate-100 border border-solid border-grey w-24 hover:bg-slate-200  dark:bg-slate-800 dark:text-white"
            onClick={() => {
              if (numPages > pageNumber) setPageNumber(pageNumber + 1);
            }}
          >
            +
          </button>
        </div>
        <div className="m-auto flex items-center justify-center my-5">
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </div>
      </div>
      <div className="hidden max-[640px]:block mt-4">
        <div className="m-auto flex flex-col items-center border border-solid border-grey w-fit">
          <Document file={resumeFile} onLoadSuccess={onDocumentLoadSuccess}>
            <Page width={300} pageNumber={pageNumber} />
          </Document>
        </div>
        <div className="m-auto flex items-center justify-center my-10">
          <button
            className="rounded-s-lg bg-slate-100 border border-solid border-grey w-24 hover:bg-slate-200  dark:bg-slate-800 dark:text-white"
            onClick={() => {
              if (1 < pageNumber) setPageNumber(pageNumber - 1);
            }}
          >
            -
          </button>
          <button
            className="rounded-r-lg bg-slate-100 border border-solid border-grey w-24 hover:bg-slate-200  dark:bg-slate-800 dark:text-white"
            onClick={() => {
              if (numPages > pageNumber) setPageNumber(pageNumber + 1);
            }}
          >
            +
          </button>
        </div>
        <div className="m-auto flex items-center justify-center my-5">
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </div>
      </div>
    </>
  );
};

export default Resume;
