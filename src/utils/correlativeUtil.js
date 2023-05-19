import { CORRELATIVES } from "../db/correlatives";

export const getCorrelativeData = (id, itemId) => {
  const subject = CORRELATIVES.find((item) => item.id === id);
  const forStudy = subject.correlatives[itemId].study;
  const forYield = subject.correlatives[itemId].yield;

  const studyWithId = forStudy.map((subject, index) => ({
    id: `${index}`,
    title: subject,
  }));
  const name = subject.subjects[itemId];
  const yieldWithId = forYield.map((subject, index) => ({
    id: `${index}`,
    title: subject,
  }));

  return {
    studyWithId,
    yieldWithId,
    name,
  };
};
