'use client'

import { useState } from "react";
import SmContainer from "../containers/SmContainer.component";
import RegularButton from "../inputs/RegularButton.component";
import HeaderText from "../text/HeaderText.component";
import RegularText from "../text/RegularText.component";
import SubHeaderText from "../text/SubHeaderText.component";
import FullContainer from "../containers/FullContainer.component";


export default function SubscribeForm() {


	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [agreedToSubscribe, setAgreedToSubscribe] = useState(false);
	const [warning, setWarning] = useState("");

	const handleChangeFirstName = (e) => {
		setFirstName(e.currentTarget.value);
	}
	const handleChangeLastName = (e) => {
		setLastName(e.currentTarget.value);
	}
	const handleChangeEmailAddress = (e) => {
		setEmailAddress(e.currentTarget.value);
	}
	const handleChangeAgreement = (e) => {
		setAgreedToSubscribe(!agreedToSubscribe);
	}


	function handleSubscribeUser(e) {
		e.preventDefault();
		if (firstName.length === 0 || lastName.length === 0 || emailAddress.length === 0) {
			setWarning("Please fill out all fields before subscribing.");
			return;
		}
		if (agreedToSubscribe) {
			let reqBody = {
				first_name: firstName,
				last_name: lastName,
				email_address: emailAddress
			}
			// Event server needs to be created
		}
		else {
			setWarning("Must agree to terms before subscribing.")
			return;
		}
	}

	return (
		<form className="w-full md:w-1/3 flex flex-col gap-4">
			<HeaderText sitetitle={"Subscribe to Email Updates"} />
			<FullContainer>
				<div className="flex flex-col">
					{warning.length > 0 && <SubHeaderText warning text={warning} />}
					<SubHeaderText text={"Get the latest in tech, gaming, business, and other industry exposes and whisteblowing at the tips of your fingers by subscribing to email updates. Learn when authors post on Lies They Tell, and watch as the veils that cast shadows upon the world around you start to fall."} />
				</div>
			</FullContainer>
			<FullContainer>
				<div className="w-2/3 flex flex-col py-6 px-4">
					<input
						type="text"
						className="mb-8 sm:max-md:text-md md:text-lg w-full duration-150 border-b-2 outline-0 border-black hover:border-red-500"
						name="firstName_signUp"
						placeholder="First Name"
						value={firstName}
						onChange={(e) => { handleChangeFirstName(e) }}
					/>
					<input
						type="text"
						className="mb-8 sm:max-md:text-md md:text-lg w-full duration-150 border-b-2 outline-0 border-black hover:border-red-500"
						name="firstName_signUp"
						placeholder="Last Name"
						value={lastName}
						onChange={(e) => { handleChangeLastName(e) }}
					/>
					<input
						type="email"
						className="mb-8 sm:max-md:text-md md:text-lg w-full duration-150 border-b-2 outline-0 border-black hover:border-red-500"
						name="firstName_signUp"
						placeholder="Email Address"
						value={emailAddress}
						onChange={(e) => { handleChangeEmailAddress(e) }}
					/>
					<div className="flex gap-4 p-2 mb-8">
						<input
							checked={agreedToSubscribe}
							onChange={(e) => { handleChangeAgreement(e) }}
							type="checkbox"
							className="self-start mt-2"
							name="firstName_signUp"
						/>
						<RegularText text={"I agree to receive email updates from Lies They Tell whenever a new article is published for viewing."} />
					</div>
					<button
						className="bg-red-500 bg-opacity-25 hover:bg-opacity-15 duration-150 px-8 py-4 w-full "
						type="submit"
						onClick={(e) => { handleSubscribeUser(e) }}
					>
						Submit
					</button>
				</div>
			</FullContainer>
		</form>
	)
}
