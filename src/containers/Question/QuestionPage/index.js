import React from "react";
import MoPage from "components/shared/MoPage";
import MoPageEdit from "components/shared/MoPageEdit";

const QuestionPage = ({ authUser, children, isLoading, subtitle, title }) =>
  authUser ? (
    <MoPageEdit
      subtitle={subtitle}
      title={title}
      isLoading={isLoading}
      isCard={false}
    >
      {children}
    </MoPageEdit>
  ) : (
    <MoPage
      subtitle={subtitle}
      title={title}
      isLoading={isLoading}
      isCard={false}
    >
      {children}
    </MoPage>
  );
export default QuestionPage;
