'use client'
import { useRouter } from "next/navigation";
import AttentionButton from "../../inputs/AttentionButton.component";
import RegularButton from "../../inputs/RegularButton.component";

export default function NavListAlt(props) {

	const { basis, routes } = props;
	const ROUTER = useRouter();

	function handleNav(e) {
		if (e.currentTarget.id !== "/") {
			ROUTER.replace(e.currentTarget.id)
		}
		else {
			ROUTER.replace("/")
		}
	}

	function openTruncMenu(e) {
		e.preventDefault();
		console.log("open")
		let element = document.getElementById("art-trunc-alt");
		let arrow = document.getElementById("art-trunc-arrow-alt")
		if (element.classList.contains("close-menu")) {
			element.classList.remove("close-menu")
			element.classList.add("open-menu")
			arrow.classList.remove("rotate-180")

		}
		else {
			element.classList.remove("open-menu")
			element.classList.add("close-menu")
			arrow.classList.add("rotate-180")
		}
	}

	return (
		<div className={`w-full relative z-40 ${basis} flex flex-col justify-evenly`}>
			{routes.map((route, idx) => {
				if (route.special) {
					return (
						<AttentionButton
							key={route.name + "-" + idx}
							navLoc={route.src}
							width="w-fit"
							label={route.name}
							clickHandler={handleNav}
						>
						</AttentionButton>
					)
				}
				else if (route.subroutes && route.subroutes.length > 0) {
					return (
						<div>
							<div className="flex justify-between items-center w-3/4">
								<RegularButton
									key={route.name + "-" + idx}
									width="w-fit"
									label={route.name}
									clickHandler={openTruncMenu}
								/>
								<div id="art-trunc-arrow-alt" className="rotate-180 font-black">^</div>
							</div>
							<div id="art-trunc-alt" className="pl-4 close-menu">
								{route.subroutes.map((sr, idx) => {
									return (
										<>


											<RegularButton
												left
												key={sr.name + "-" + idx}
												navLoc={sr.href}
												width="w-full"
												label={sr.name}
												clickHandler={handleNav}
											/>
										</>
									)
								})}
							</div>
						</div>
					)
				}
				else {
					return (
						<RegularButton
							key={route.name + "-" + idx}
							navLoc={route.src}
							width="w-fit"
							label={route.name}
							clickHandler={handleNav}
						>
						</RegularButton>
					)
				}
			})}
		</div>
	)
}
