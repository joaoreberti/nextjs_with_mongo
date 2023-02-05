import User from "@/backend/db/models/user";
export default async function getData(req, res) {
  const result = new User({
    name: "Titaasda",
    email: "minerva@hotlail",
    password: "1234",
  });
  await result.save();
  res.status(200).json(result);
}
