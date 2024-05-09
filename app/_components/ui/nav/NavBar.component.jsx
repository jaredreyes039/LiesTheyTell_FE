'use client'

import RegularText from "../../text/RegularText.component";
import NavBrand from "./NavBrand.component";
import NavList from "./NavList.component";
import { slide as Menu } from 'react-burger-menu'
import NavListAlt from "./NavListAlt.component";

export default function NavBar(props) {
	const ROUTES = [
		{ name: "Home", src: "/" },
		{
			name: "Articles",
			subroutes: [
				{ name: "GAMING", href: "/category/gaming" },
				{ name: "TECH", href: "/category/tech" },
				{ name: "POLITICS", href: "/category/politics" },
				{ name: "BUSINESS", href: "/category/business" }
			]
		},
		{ name: "Subscribe", src: "/signup", special: true }
	]

	return (
		<>
			<div className="flex md:hidden absolute top-2 right-8">
				<div className="flex flex-col items-center justify-center text-bold text-black">
					<div className="h-12 w-12 flex flex-col justify-center items-center ">
						<div className="border-t-2 border-black w-4 h-1"></div>
						<div className="border-t-2 border-black w-4 h-1"></div>
						<div className="border-t-2 border-black w-4 h-1"></div>
					</div>
				</div>
				<Menu className="bg-white py-4 px-4 absolute left-0 top-0 bg-opacity-100">
					<NavBrand src="/logo.png" alt="Logo for blog site LiesTheyTell" />

					<NavListAlt routes={ROUTES} />
				</Menu>
			</div>
			<div className="hidden min-w-[244px] w-1/6 max-w-[244px] min-h-screen mr-12 md:flex flex-col">
				<div className="sticky top-0">
					<NavBrand src="/logo.png" alt="Some alt text" />
					<NavList routes={ROUTES} />
				</div>
			</div>
		</>
	)
}
