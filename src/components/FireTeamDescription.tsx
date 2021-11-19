import React from "react";

const FireTeamDescription = ({ descr }: { descr: string }) => {
  return <div dangerouslySetInnerHTML={{ __html: descr }} />;
};

export default FireTeamDescription;
