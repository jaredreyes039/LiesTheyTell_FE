import Image from "next/image";
import HeaderText from "../../text/HeaderText.component";


export default function NavBrand(props) {

	const { src, alt, text, basis } = props

	return (
		<div className={`w-full mb-24 relative sm:max-xl:h-48 h-64`} >
			{src ? <Image
				src={src}
				alt={alt}
				fill
			/>
				:
				<HeaderText text={text} />
			}
		</div >
	)
}
