import { createClient } from "@supabase/supabase-js";

// Environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check for missing environment variables
if (!supabaseUrl || !supabaseAnonKey) {
	console.warn(
		"Missing Supabase environment variables. Please check your .env.local file.",
		{
			supabaseUrl: supabaseUrl ? "✅" : "❌",
			supabaseAnonKey: supabaseAnonKey ? "✅" : "❌",
		},
	);
}

// Create a single supabase client for the entire app
export const supabase = createClient(supabaseUrl || "", supabaseAnonKey || "");

/**
 * Auth helpers
 */

export async function signUp(email, password) {
	const { data, error } = await supabase.auth.signUp({
		email,
		password,
	});
	return { data, error };
}

export async function signIn(email, password) {
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});
	return { data, error };
}

export async function signOut() {
	const { error } = await supabase.auth.signOut();
	return { error };
}

export async function getSession() {
	const { data, error } = await supabase.auth.getSession();
	return { data, error };
}

/**
 * Database helpers
 */

export async function getProjects() {
	const { data, error } = await supabase
		.from("projects")
		.select("*")
		.order("created_at", { ascending: false });
	return { data, error };
}

export async function getProjectById(id) {
	const { data, error } = await supabase
		.from("projects")
		.select("*")
		.eq("id", id)
		.single();
	return { data, error };
}

/**
 * Storage helpers
 */

/**
 * Upload a file to Supabase Storage
 * @param {string} bucket - The storage bucket name
 * @param {string} path - The file path within the bucket
 * @param {File} file - The file to upload
 * @returns {Promise<{data: any, error: any}>} - Supabase response
 */
export async function uploadFile(bucket, path, file) {
	return supabase.storage.from(bucket).upload(path, file);
}

/**
 * Get a public URL for a file
 * @param {string} bucket - The storage bucket name
 * @param {string} path - The file path within the bucket
 * @returns {string} - Public URL for the file
 */
export function getPublicUrl(bucket, path) {
	return supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl;
}

/**
 * Delete a file from Supabase Storage
 * @param {string} bucket - The storage bucket name
 * @param {string} path - The file path within the bucket
 * @returns {Promise<{data: any, error: any}>} - Supabase response
 */
export async function deleteFile(bucket, path) {
	return supabase.storage.from(bucket).remove([path]);
}

/**
 * List all files in a bucket with an optional path prefix
 * @param {string} bucket - The storage bucket name
 * @param {string} prefix - Optional path prefix
 * @returns {Promise<{data: any, error: any}>} - Supabase response
 */
export async function listFiles(bucket, prefix = "") {
	return supabase.storage.from(bucket).list(prefix);
}
