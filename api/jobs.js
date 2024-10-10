import jobsData from "./jobs.json";

export default function handler(req, res) {
  res.status(200).json(jobsData);
}
