import RegularButton from "@/app/_components/inputs/RegularButton.component";

export default {
	component: RegularButton,
	title: "RegularButton",
	tags: ["autodocs"]
}

function handleClick(e) {
	e.preventDefault();
	console.log("Navigating to {PAGE}")
}

export const Default = {
	args: {
		width: "w-full",
		label: "Label",
		clickHandler: (e) => handleClick(e),
		navLoc: "/"
	}
}
