import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import IssueRow from "./components/IssueRow";
import { Circle, CheckLg, CaretDownFill } from "react-bootstrap-icons";


export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(
        `https://api.github.com/repos/facebook/react/issues`
      );
      setData(await response.json());
      // console.log('json file----',  json)
      // setData([...data, json]);
      console.log("data file -------", data);
    };
    fetchItems();
  });

  return (
    <div className="App">
      <Header />
      <div className="issue-row">
        <div className="issues-table">
          <div className="top-issue-row">
            <div className="top-issue-row1"><Circle /><p>    625 open  <CheckLg /> 10104 closed</p></div>
            <div>
              <ul className="top-issue-row2">
              <CaretDownFill />
                <li>author</li>
                <CaretDownFill />
                <li>label</li>
                <CaretDownFill />
                <li>project</li>
                <CaretDownFill />
                <li>milestones</li>
                <CaretDownFill />
                <li>asignee</li>
                <CaretDownFill />
                <li>sort</li>
                <CaretDownFill />
              </ul>
            </div>
          </div>
          {data.map((issue) => (
            <IssueRow key={`${issue.id} _issue_row`} issue={issue} />
          ))}
        </div>
      </div>
    </div>
  );
}
