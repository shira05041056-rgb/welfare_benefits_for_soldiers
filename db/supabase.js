import { createClient } from "@supabase/supabase-js";
import "dotenv/config";


SUPABASE_URL = process.env.SUPABASE_URL;
SUPABASE_KEY = process.env.SUPABASE_KEY;

const client = createClient(SUPABASE_URL, SUPABASE_KEY);

export { client };