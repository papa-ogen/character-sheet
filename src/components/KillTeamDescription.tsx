import React from "react";

const KillTeamDescription = ({ descr }: { descr: string }) => {
  return <div dangerouslySetInnerHTML={{ __html: descr }} />;
};

export default KillTeamDescription;
