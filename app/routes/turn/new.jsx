import { redirect } from "remix"
import { db } from '~/utils/db.server'

export const action = async ({ request }) => {
    const body = await request.formData();
    await db.turn.create({
        data: {
          userId: body.get("userId")
        }
    })
    return redirect(`/`);
}
