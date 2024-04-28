

export default function HeaderText(props) {
	const { text, landing, small, sitetitle } = props;
	return (
		<h1 className={`${small ? "line-clamp-2 mb-2" : "line-clamp-4 mb-4"} font-black text-black duration-150 ${sitetitle ? "" : "hover:cursor-pointer hover:text-red-500 hover:opacity-75"} ${small ? "sm:max-md:text-lg md:text-xl" : !landing ? 'sm:max-md:text-xl md:text-2xl' : 'sm:max-md:text-4xl md:text-5xl'}`} >
			{sitetitle ? sitetitle : text}
			{sitetitle && <span className="text-red-500">{text}</span>}
		</h1 >
	)
}
