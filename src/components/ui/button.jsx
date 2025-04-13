import { forwardRef } from "react";
import { cn } from "../../lib/utils";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
	// Base styles that all buttons share
	"inline-flex items-center justify-center font-bold rounded-none border-3 border-black select-none active:translate-y-1 active:translate-x-1 active:shadow-none transition-all duration-100 ease-in-out",
	{
		variants: {
			variant: {
				default: "bg-white shadow-brutal hover:bg-gray-100",
				beginner: "bg-beginner shadow-brutal hover:bg-beginner/90",
				mid: "bg-mid shadow-brutal hover:bg-mid/90",
				senior: "bg-senior shadow-brutal hover:bg-senior/90",
				coral: "bg-coral shadow-brutal hover:bg-coral/90",
				mint: "bg-mint shadow-brutal hover:bg-mint/90",
				lavender: "bg-lavender shadow-brutal hover:bg-lavender/90",
				cyan: "bg-cyan shadow-brutal hover:bg-cyan/90",
				gold: "bg-gold shadow-brutal hover:bg-gold/90",
				outline: "bg-white hover:bg-gray-100 shadow-brutal",
				ghost: "border-transparent shadow-none hover:bg-gray-100",
			},
			size: {
				xs: "text-xs px-2 py-1",
				sm: "text-sm px-3 py-1.5",
				default: "text-base px-4 py-2",
				lg: "text-lg px-6 py-3",
				xl: "text-xl px-8 py-4",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

const Button = forwardRef(({ className, variant, size, children, ...props }, ref) => {
	return (
		<button
			className={cn(buttonVariants({ variant, size, className }))}
			ref={ref}
			{...props}>
			{children}
		</button>
	);
});

Button.displayName = "Button";

export { Button, buttonVariants };
