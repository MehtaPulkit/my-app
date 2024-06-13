import React, { useRef } from "react";
import Resume from "../assets/files/Resume-Pulkit.pdf";

const DownloadButton = () => {
  // Create a ref for the hidden link element
  const hiddenLinkRef = useRef(null);

  // Click handler for the button
  const handleDownload = () => {
    // Programmatically click the hidden link
    hiddenLinkRef.current.click();
  };

  return (
    <div className="inline ml-4">
      {/* Button to trigger the download */}
      <button onClick={handleDownload}>
        <svg
          className="fill-current w-4 h-4 inline"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
      </button>

      {/* Hidden link to the PDF file */}
      <a
        ref={hiddenLinkRef}
        href={Resume}
        download="Resume-Pulkit"
        style={{ display: "none" }}
      ></a>
    </div>
  );
};

export default DownloadButton;
