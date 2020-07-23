import Avataaars from "avataaars";
import { NextApiRequest, NextApiResponse } from "next";
import ReactDOMServer from "react-dom/server";

export default (req: NextApiRequest, res: NextApiResponse) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", "image/svg+xml");
	res.send(
		ReactDOMServer.renderToString(
			<Avataaars {...req.query} avatarStyle="Transparent" />
		)
	);
};
