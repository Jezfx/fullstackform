import { cookies } from "next/headers";
import { createClient } from "../_utils/utils-supabase/";

export default async function Messages() {
  const cookieStore = cookies();
  const supabase = await createClient(cookieStore);

  const { data: users } = await supabase.from("messages").select();

  return <pre>{JSON.stringify(users, null, 2)}</pre>;
}
