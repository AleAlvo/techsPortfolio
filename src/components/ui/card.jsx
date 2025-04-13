import { forwardRef } from "react";
import { cn } from "../../lib/utils";
import { cva } from "class-variance-authority";

const cardVariants = cva("rounded-none border-3 border-black bg-white", {
	variants: {
		variant: {
			default: "shadow-brutal",
			beginner: "bg-beginner shadow-brutal",
			mid: "bg-mid shadow-brutal",
			senior: "bg-senior shadow-brutal",
			coral: "bg-coral shadow-brutal",
			mint: "bg-mint shadow-brutal",
			lavender: "bg-lavender shadow-brutal",
			cyan: "bg-cyan shadow-brutal",
			gold: "bg-gold shadow-brutal",
			outline: "shadow-brutal",
			ghost: "border-0 shadow-none",
		},
		hover: {
			true: "hover:-translate-y-1 hover:-translate-x-1 hover:shadow-brutal-lg transition-all duration-200",
			false: "",
		},
	},
	defaultVariants: {
		variant: "default",
		hover: false,
	},
});

const Card = forwardRef(({ className, variant, hover, children, ...props }, ref) => {
	return (
		<div className={cn(cardVariants({ variant, hover, className }))} ref={ref} {...props}>
			{children}
		</div>
	);
});

Card.displayName = "Card";

const CardHeader = forwardRef(({ className, children, ...props }, ref) => {
	return (
		<div
			className={cn("p-6 font-bold border-b-3 border-black", className)}
			ref={ref}
			{...props}>
			{children}
		</div>
	);
});

CardHeader.displayName = "CardHeader";

const CardContent = forwardRef(({ className, children, ...props }, ref) => {
	return (
		<div className={cn("p-6", className)} ref={ref} {...props}>
			{children}
		</div>
	);
});

CardContent.displayName = "CardContent";

const CardFooter = forwardRef(({ className, children, ...props }, ref) => {
	return (
		<div className={cn("p-6 border-t-3 border-black", className)} ref={ref} {...props}>
			{children}
		</div>
	);
});

CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardContent, CardFooter, cardVariants };
