import SmContainer from "@/app/_components/containers/SmContainer.component"
import RegularText from "@/app/_components/text/RegularText.component"

export default {
	component: SmContainer,
	title: "SmContainer",
	tags: ["autodocs"]
}

export const Default = {
	args: {
		padded: false,
		center: false,
		children: <RegularText text={"Im a sample child item"} />
	}
}
