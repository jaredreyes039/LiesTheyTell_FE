import Image from "next/image";


export default function LandingImage(props) {
	const { src, alt } = props;
	return (
		<div className="w-full filter brightness-50 min-h-screen px-0 py-0 mx-0 my-0 relative z-0">
			<Image
				src={src}
				alt={alt}
				fill
			/>
		</div>
	)
}
