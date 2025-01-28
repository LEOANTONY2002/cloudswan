// import type { NextApiRequest, NextApiResponse } from "next";
// import { enrollEmail } from "../../lib/enroll";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "POST") {
//     const { name, email, phone, mode } = req.body;

//     try {
//       await enrollEmail(name, email, phone, mode);
//       res.status(200).json({ message: "Email sent successfully" });
//     } catch (error) {
//       res.status(500).json({ error: "Failed to send email" });
//     }
//   } else {
//     res.status(405).json({ error: "Method not allowed" });
//   }
// }
