import React from "react";
import IssueIcon from "./IssueIcon";

const IssueRow = ({ issue }) => {
  const userLoginName = issue.user.login;
  const createdTimeAgo = issue.created_at;
  const subtitle = `# ${issue.id} opened ${createdTimeAgo} by `;

  return (
    <>
      
      <div>
        <div className="issue-row">
          <div className="issue-icon">
            <IssueIcon />
          </div>
          <div className="issue-text">
            <div className="issue-title">{issue.title}</div>
            <div className="issue-subtitle">
              {subtitle}
              <a
                href={`https://github.com/facebook/create-react-app/issues/created_by/${userLoginName}`}
              >
                {" "}
                {userLoginName}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IssueRow;
