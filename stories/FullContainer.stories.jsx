import FullContainer from "@/app/_components/containers/FullContainer.component"
import LgContainer from "@/app/_components/containers/LgContainer.component"
import RegularText from "@/app/_components/text/RegularText.component"

export default {
	component: FullContainer,
	title: "FullContainer",
	tags: ["autodocs"]
}

export const Default = {
	args: {
		padded: false,
		center: false,
		children: <LgContainer><RegularText text={"Im a sample child item"} /></LgContainer>
	}
}
