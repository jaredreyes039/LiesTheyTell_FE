

export default function CategoryText(props) {
	const { text, spotlight } = props;
	return (
		<h1 className={`w-fit text-red-500 duration-150 hover:cursor-pointer hover:underline ${spotlight ? 'sm:max-md:text-xl md:text-2xl' : 'sm:max-md:text-md md:text-lg'}`} >
			{text}
		</h1 >
	)
}
