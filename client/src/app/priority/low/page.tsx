import React from "react";
import ReusablePriorityPage from "../reuseablePriorityPage";
import { Priority } from "@/state/api";

const Low = () => {
  return <ReusablePriorityPage priority={Priority.Low} />;
};

export default Low;