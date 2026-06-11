import { Button, Checkbox, Label, TextInput, useThemeMode, Toast, ToastToggle } from "flowbite-react";
import "./SignupPage.css";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import Server from "../../serverComms/server";
import Auth from "../../auth/auth";


export default function LoginPage() {
	const { computedMode, toggleMode } = useThemeMode();
	const isDarkMode = computedMode === "dark";
	const navigate = useNavigate();

	const [someError, setSomeError] = useState("");
	const [showError, setShowError] = useState(true);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);
		const values = Object.fromEntries(formData.entries());

		const toSend = {
			username: values.username,
			password: values.password,
		};
		console.log(toSend);
	
		try {
			const response = await Server.auth.login(toSend);

			console.log("login response", response);
			Auth.storeToken(response);
			Auth.storeUsername(values.username);
			navigate("/");

		} catch (err) {
			console.error("login failed", err);
			setSomeError("Wrong username or password.");
			setShowError(true);
		}
	};

	return (
		<>
			<div className="auth-container min-w-screen min-h-screen flex items-center justify-center md:py-10">
				<div className="auth-holder w-100 h-fit bg-white dark:bg-black rounded-2xl px-4 pt-8 border-solid border-2 dark:border-gray-700 border-gray-200">
					<div className="flex flex-col justify-center mb-6">
						<h1 className="text-4xl font-bold text-center mb-2">Login</h1>
					</div>
					<form className="flex min-w-full flex-col gap-4" id="login-form" onSubmit={handleSubmit}>
						<div className="form-item">
							<div className="mb-2 block">
								<Label htmlFor="username">Username:&nbsp;<span className="text-red-600">*</span></Label>
							</div>
							<TextInput id="username" name="username" type="text" placeholder="user1234" required shadow />
						</div>
						<div className="form-item">
							<div className="mb-2 block">
								<Label htmlFor="password">Password:&nbsp;<span className="text-red-600">*</span></Label>
							</div>
							<TextInput id="password" name="password" type="password" placeholder="••••••••" required shadow />
						</div>
						<Button type="submit" color="red">Login</Button>
					</form>
					<div className="text-center flex justify-center text-sm my-4">
						<p>Dont have an account?</p>&nbsp;<Link to="/signup" className="text-red-600 hover:underline">Sign up</Link>
					</div>
				</div>
			</div>
			<div className="accessibility-corner absolute right-0 top-0 p-4">
				<Button
						type="button"
						color="bglessOnlytext"
						pill
						className=""
						onClick={toggleMode}
						aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
						title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
					>
						{isDarkMode ? (
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
								<path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
							</svg>
						) : (
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
								<path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
							</svg>
						)}
					</Button>
			</div>
			<div className="gohome-corner absolute left-0 top-0 p-4">
				<Link to="/"><img draggable="false" src="/favicon.png" className="mr-3 h-12"></img></Link>
			</div>
			{someError && showError && (
				<div className="min-w-screen fixed flex top-0 left-0 p-4">
					<Toast className="rounded-xl bg-red-100 text-red-800 p-4 z-1000 min-w-full">
                        {someError}
                        <ToastToggle className="bg-red-100 hover:bg-red-200" onDismiss={() => setShowError(false)} />
                    </Toast>
				</div>
			)}
		</>
	)
}