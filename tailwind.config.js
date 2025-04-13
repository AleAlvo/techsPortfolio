/** @type {import('tailwindcss').Config} */
import { colors, shadows } from "./src/styles/colors.js";

export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				// Use the main colors directly
				...colors,

				// Add skill level aliases for better readability in templates
				beginner: colors.primary,
				mid: colors.secondary,
				senior: colors.tertiary,

				// Add flat versions of nested colors for direct access in Tailwind
				// Blues
				"blue-light": colors.blue.light,
				"blue-mid": colors.blue.middle,
				"blue-dark": colors.blue.dark,

				// Greens
				"green-light": colors.green.light,
				"green-mid": colors.green.middle,
				"green-dark": colors.green.dark,

				// Yellows
				"yellow-light": colors.yellow.light,
				"yellow-mid": colors.yellow.middle,
				"yellow-dark": colors.yellow.dark,

				// Oranges
				"orange-light": colors.orange.light,
				"orange-mid": colors.orange.middle,
				"orange-dark": colors.orange.dark,

				// Pinks
				"pink-light": colors.pink.light,
				"pink-mid": colors.pink.middle,
				"pink-dark": colors.pink.dark,

				// Purples
				"purple-light": colors.purple.light,
				"purple-mid": colors.purple.middle,
				"purple-dark": colors.purple.dark,

				// Grays (directly from the color system)
				"gray-100": colors.gray[100],
				"gray-200": colors.gray[200],
				"gray-300": colors.gray[300],
				"gray-400": colors.gray[400],
				"gray-500": colors.gray[500],
				"gray-600": colors.gray[600],
				"gray-700": colors.gray[700],
				"gray-800": colors.gray[800],
				"gray-900": colors.gray[900],
			},
			boxShadow: {
				brutal: shadows.brutal,
				"brutal-sm": shadows.brutalSm,
				"brutal-lg": shadows.brutalLg,
			},
			borderWidth: {
				3: "3px",
			},
		},
	},
	plugins: [],
};
