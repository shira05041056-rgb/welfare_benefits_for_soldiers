import { createClient } from "@supabase/supabase-js";
import "dotenv/config";


const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

const client = createClient(SUPABASE_URL, SUPABASE_KEY);

export { client };