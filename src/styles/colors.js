/**
 * Central color definitions for the entire application
 * This file serves as the single source of truth for all colors
 */

// Main brand/theme colors
export const colors = {
	// Main skill level colors (core theme)
	primary: "#A7DBD8", // beginner level (teal)
	secondary: "#FFDB58", // mid level (yellow)
	tertiary: "#FFA07A", // senior level (salmon)

	// UI state colors
	success: "#00CC66", // green
	warning: "#F4D738", // gold
	error: "#FF6B6B", // red
	info: "#87CEEB", // sky blue

	// Neutrals
	black: "#000000",
	white: "#FFFFFF",
	gray: {
		100: "#F5F5F5",
		200: "#EEEEEE",
		300: "#DDDDDD",
		400: "#CCCCCC",
		500: "#AAAAAA",
		600: "#888888",
		700: "#666666",
		800: "#444444",
		900: "#222222",
	},

	// Extended palette (organized by color groups)
	blue: {
		light: "#DAF5F0", // light cyan
		middle: "#69D2E7", // cyan
		dark: "#597FF9", // dark blue
	},
	green: {
		light: "#B5D2AD", // light green
		middle: "#90EE90", // green
		dark: "#7FBC8C", // forest green
	},
	yellow: {
		light: "#FDFD96", // light yellow
		middle: "#FFDB58", // yellow (same as secondary)
		dark: "#E3A018", // amber
	},
	orange: {
		light: "#F8D6B3", // light peach
		middle: "#FFA07A", // salmon (same as tertiary)
		dark: "#FF7A5C", // coral
	},
	pink: {
		light: "#FCDFF", // light pink
		middle: "#FFC9CB", // pink
		dark: "#FF69B4", // hot pink
	},
	purple: {
		light: "#E3DFF2", // light purple
		middle: "#C4A1FF", // lavender
		dark: "#9723C9", // violet
	},

	// Additional colors for variety
	mint: "#BAFCA2",
	magenta: "#FFB2EF",
	gold: "#F4D738",
};

// Aliases for better readability in different contexts
export const skillColors = {
	beginner: colors.primary, // teal
	mid: colors.secondary, // yellow
	senior: colors.tertiary, // salmon
};

// Neobrutalism styling constants
export const shadows = {
	brutal: "4px 4px 0px 0px #000000",
	brutalSm: "2px 2px 0px 0px #000000",
	brutalLg: "8px 8px 0px 0px #000000",
};

export const borders = {
	brutal: "2px solid #000000",
	brutalThick: "4px solid #000000",
};

// Helper function to create neobrutalism style for a component
export const neoBrutalismStyle = (bgColor, borderWidth = 4, shadowOffset = 4) => {
	return {
		backgroundColor: bgColor,
		border: `${borderWidth}px solid #000000`,
		boxShadow: `${shadowOffset}px ${shadowOffset}px 0px #000000`,
		borderRadius: "0px",
		padding: "12px",
		transition: "all 0.1s ease",
		position: "relative",
	};
};
