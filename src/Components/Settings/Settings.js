import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Fade from "react-reveal/Fade";

export default function Settings({ resetData, exportData, importData }) {
  const inputFile = useRef(null);
  let history = useHistory();
  const [importSpinnerState, setImportSpinnerState] = useState(false);
  const [exportSpinnerState, setExportSpinnerState] = useState(false);
  function handleChange(e) {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      const JSONData = JSON.parse(e.target.result);
      importData(JSONData, () => {
        setImportSpinnerState(false);
        history.push("/");
      });
    };
  }
  return (
    <>
      <div className="container">
        <Fade duration={500}>
          <h2 className="display-4 mt-4">Settings</h2>
          <div className="container my-5">
            <h5 className="text-center">
              <Button
                variant="danger"
                as="a"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  if (
                    window.confirm(
                      "Are you sure you want to reset the progress !"
                    )
                  ) {
                    setExportSpinnerState(true);
                    resetData();
                  }
                }}
              >
                Reset Progress
                <Spinner
                  animation="border"
                  variant="light"
                  size="sm"
                  style={exportSpinnerState ? {} : { display: "none" }}
                />
              </Button>{" "}
              <Button
                variant="warning"
                as="a"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setExportSpinnerState(true);
                  exportData(() => {
                    setExportSpinnerState(false);
                  });
                }}
              >
                Export Progress
              </Button>{" "}
              <Button
                variant="primary"
                as="a"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setImportSpinnerState(true);
                  inputFile.current.click();
                }}
              >
                Import Progress{" "}
                <Spinner
                  animation="border"
                  variant="light"
                  size="sm"
                  style={importSpinnerState ? {} : { display: "none" }}
                />
              </Button>
            </h5>

            <input
              type="file"
              id="file"
              ref={inputFile}
              style={{ display: "none" }}
              accept=".json"
              onChange={handleChange}
            />
          </div>
        </Fade>
      </div>
    </>
  );
}
