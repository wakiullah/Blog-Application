import { ServicesData } from "@/data/Services";
export default function handler(req, res) {
  res.status(200).json(ServicesData);
}
