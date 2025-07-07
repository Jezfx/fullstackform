"use server";

import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const createClient = async (cookieStore: ReturnType<typeof cookies>) => {
  const cookies = await cookieStore;
  return createServerClient(supabaseUrl!, supabaseKey!, {
    cookies: {
      getAll() {
        return cookies.getAll();
      },
    },
  });
};

export const addToDatabase = async (
  table: string,
  validatedData: Record<string, string>
) => {
  const cookieStore = cookies();
  const supabase = await createClient(cookieStore);
  return await supabase.from(table).insert(validatedData).select();
};
