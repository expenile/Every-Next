import { z } from "zod";

export const AcceptMesageSchema = z.object({
    acceptMessages: z.boolean()
})