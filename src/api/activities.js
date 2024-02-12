import activitiesData from './activities.json';

export default function (req, res) {
  res.status(200).json(activitiesData);
}
