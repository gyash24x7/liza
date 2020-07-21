import { NextApiRequest, NextApiResponse } from "next";
import { generateAvatar } from "../../../utils/avatar";

export default (_req: NextApiRequest, res: NextApiResponse) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", "application/json");
	const { url } = generateAvatar();
	res.send({ url });
};
