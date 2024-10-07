"use server";

import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

// Make sure to set these environment variables in your .env.local file
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables");
}

const supabase = createClient(supabaseUrl, supabaseKey);

const schema = z.object({
  email: z.string().email("Invalid email address"),
});

export async function addToWaitlist(formData: FormData) {
  const email = formData.get("email") as string;

  try {
    await schema.parseAsync({ email });

    console.log("Passed schema  check");

    // Check if email already exists
    const { data: existingEmail } = await supabase
      .from("waitlist")
      .select("email")
      .eq("email", email)
      .single();

    if (existingEmail) {
      return { message: "Error: Email already exists in the waitlist" };
    }

    // Insert new email
    const { error } = await supabase.from("waitlist").insert({ email });

    if (error) throw new Error("Failed to add to waitlist");

    return { message: "Successfully added to the waitlist!" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { message: `Error: ${error.errors[0].message}` };
    }
    console.error("Waitlist error:", error);

    return { message: "Error: Failed to add to waitlist. Please try again." };
  }
}

export async function getWaitlistCount(): Promise<number> {
  try {
    const { count, error } = await supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true });

    if (error) throw error;

    let newCount = 26;

    if (count) {
      newCount += count;
    }

    return newCount;
  } catch (error) {
    console.error("Error fetching waitlist count:", error);

    return 0;
  }
}
