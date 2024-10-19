import { MedusaRequest, MedusaResponse } from "@medusajs/framework";

export async function GET(req: MedusaRequest, res: MedusaResponse): Promise<void> {
  res.status(200).json({ message: "MEDUSA V2" });
}
