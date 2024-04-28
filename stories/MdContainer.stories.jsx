import MdContainer from "@/app/_components/containers/MdContainer.component"
import SmContainer from "@/app/_components/containers/SmContainer.component"
import RegularText from "@/app/_components/text/RegularText.component"

export default {
	component: MdContainer,
	title: "MdContainer",
	tags: ["autodocs"]
}

export const Default = {
	args: {
		padded: false,
		center: false,
		children: <SmContainer><RegularText text={"Im a sample child item"} /></SmContainer>
	}
}
