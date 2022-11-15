import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  getData,
  updateDBData,
  resetDBData,
  exportDBData,
  importDBData,
} from "./services/dbServices";
import { saveAs } from "file-saver";
import Spinner from "react-bootstrap/Spinner";
import TopicCard from "./Components/TopicCard/TopicCard";
import Topic from "./Components/Topic/Topic";
import Settings from "./Components/Settings/Settings";
import ReactGA from "react-ga";
import "./App.css";
import Header from "./Components/Header/Header";
import Tutorials from "./Components/Tutorials/Tutorials";

function App() {
  const [questionData, setquestionData] = useState([]);

  useEffect(() => {
    localStorage.removeItem("cid");
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
    getData((QuestionData) => {
      setquestionData(QuestionData);
    });
  }, []);

  function updateData(key, topicData, topicPosition) {
    let reGenerateUpdatedData = questionData.map((topic, index) => {
      if (index === topicPosition) {
        updateDBData(key, topicData);
        return {
          topicName: topic.topicName,
          position: topic.position,
          ...topicData,
        };
      } else {
        return topic;
      }
    });
    setquestionData(reGenerateUpdatedData);
  }

  // reset and clear DB
  function resetData() {
    resetDBData((response) => {
      setquestionData([]);
      window.location.replace(window.location.origin);
    });
  }

  // export 450DSA-Progress data

  function exportData(callback) {
    exportDBData((data) => {
      const fileData = JSON.stringify(data);
      const blob = new Blob([fileData], { type: "text/plain" });
      saveAs(blob, "progress.json");
      callback();
    });
  }

  // import 450DSA-Progress data

  function importData(data, callback) {
    importDBData(data, (QuestionData) => {
      setquestionData(QuestionData);
      callback();
    });
  }

  return (
    <Router>
      <div className="App">
        <Header />

        {questionData.length === 0 ? (
          <div className="d-flex justify-content-center">
            <Spinner animation="grow" variant="success" />
          </div>
        ) : (
          <>
            <Route
              exact
              path="/"
              children={<TopicCard questionData={questionData}></TopicCard>}
            />
            <Route path="/tutorials" children={<Tutorials />} />
            <Route
              path="/settings"
              children={
                <Settings
                  resetData={resetData}
                  exportData={exportData}
                  importData={importData}
                  setQuestionData={setquestionData}
                ></Settings>
              }
            />

            {/* TOPIC ROUTE */}
            <Route
              path="/array"
              children={
                <Topic data={questionData[0]} updateData={updateData} />
              }
            />
            <Route
              path="/matrix"
              children={
                <Topic data={questionData[1]} updateData={updateData} />
              }
            />
            <Route
              path="/string"
              children={
                <Topic data={questionData[2]} updateData={updateData} />
              }
            />
            <Route
              path="/search_sort"
              children={
                <Topic data={questionData[3]} updateData={updateData} />
              }
            />
            <Route
              path="/linked_list"
              children={
                <Topic data={questionData[4]} updateData={updateData} />
              }
            />
            <Route
              path="/binary_trees"
              children={
                <Topic data={questionData[5]} updateData={updateData} />
              }
            />
            <Route
              path="/bst"
              children={
                <Topic data={questionData[6]} updateData={updateData} />
              }
            />
            <Route
              path="/greedy"
              children={
                <Topic data={questionData[7]} updateData={updateData} />
              }
            />
            <Route
              path="/backtracking"
              children={
                <Topic data={questionData[8]} updateData={updateData} />
              }
            />
            <Route
              path="/stacks_queues"
              children={
                <Topic data={questionData[9]} updateData={updateData} />
              }
            />
            <Route
              path="/heap"
              children={
                <Topic data={questionData[10]} updateData={updateData} />
              }
            />
            <Route
              path="/graph"
              children={
                <Topic data={questionData[11]} updateData={updateData} />
              }
            />
            <Route
              path="/trie"
              children={
                <Topic data={questionData[12]} updateData={updateData} />
              }
            />
            <Route
              path="/dynamic_programming"
              children={
                <Topic data={questionData[13]} updateData={updateData} />
              }
            />
            <Route
              path="/bit_manipulation"
              children={
                <Topic data={questionData[14]} updateData={updateData} />
              }
            />
            {/* </ThemeContext.Provider> */}
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
