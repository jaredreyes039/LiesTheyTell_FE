import FullContainer from "../../containers/FullContainer.component";
import NavBrand from "./NavBrand.component";
import NavList from "./NavList.component";


export default function NavBar(props) {
	const ROUTES = [
		{
			name: "Articles",
			subroutes: [
				{ name: "Linux", href: "/categories/linux" },
				{ name: "Javascript", href: "/categories/javascript" }
			]
		},
		{ name: "About Me", href: "/about" },
		{ name: "Subscribe", href: "/signup", special: true }
	]

	return (
		<div className="w-1/6 min-h-screen mr-12 flex flex-col">
			<div className="sticky top-0">
				<NavBrand text="DEV.LOG" alt="Some alt text" />
				<NavList routes={ROUTES} />
			</div>
		</div>
	)
}
