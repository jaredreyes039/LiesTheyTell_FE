import FullContainer from "../containers/FullContainer.component";
import LgContainer from "../containers/LgContainer.component";
import MdContainer from "../containers/MdContainer.component";


export default function ArticlePage(props) {
	return (
		<div className="w-full max-w-[1440px] md:w-3/4" col>
			{props.children}
		</div>
	)
}
