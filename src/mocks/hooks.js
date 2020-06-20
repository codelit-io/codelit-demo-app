import React from "react";

export const useStateMock = jest
  .spyOn(React, "useState")
  .mockImplementation(() => jest.fn());
