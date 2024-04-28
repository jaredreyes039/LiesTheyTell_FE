import LgContainer from "@/app/_components/containers/LgContainer.component"
import MdContainer from "@/app/_components/containers/MdContainer.component"
import RegularText from "@/app/_components/text/RegularText.component"

export default {
	component: LgContainer,
	title: "LgContainer",
	tags: ["autodocs"]
}

export const Default = {
	args: {
		padded: false,
		center: false,
		children: <MdContainer><RegularText text={"Im a sample child item"} /></MdContainer>
	}
}
