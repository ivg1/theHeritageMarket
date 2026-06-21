import Server from "../../serverComms/server";
import Auth from "../../auth/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Profiles.css";

export default function Profiles() {
	const navigate = useNavigate();

    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const [me, setMe] = useState(null);

	const [yourId, setYourId] = useState(0);

	useEffect(() => {
		let mounted = true;
		setLoading(true);
		Server.users.getAll()
			.then(async (data) => {
				if (!mounted) return;
				setProfiles(Array.isArray(data) ? data : []);
				setLoading(false);
				console.log(data);

				if (await Auth.loginState()) return Server.me();
			})
			.then((me) => {
				if (!mounted) return;
				if (!me) return;

				setMe(me);
				setYourId(me.id);
				console.log(me.id);
			})
			.catch((err) => {
				if (!mounted) return;
				setError("Forbidden");
				setLoading(false);
			});

		return () => { 
			mounted = false
		};
	}, []);

    if (loading) return <div className="min-w-screen min-h-screen flex justify-center items-center text-gray-500">Loading...</div>
	if (error) return <div className="min-w-screen min-h-screen flex justify-center items-center text-red-500">{error}</div>

    return (
		<div className="p-4">
			<div className="">
				<h1 className="text-4xl font-bold ml-2 mb-2">Profiles</h1>
			</div>
			<div className="profile-list min-w-full max-w-full p-2 justify-items-center min-h-screen">
				{profiles.length > 0 ? (
					profiles.map((profile) => (
						<div className="profile-card relative min-h-fit hover:bg-white hover:cursor-pointer dark:hover:bg-[#151515] overflow-hidden" key={profile.id} listingid={profile.id}
							onClick={() => { navigate(String(profile.id)) }}
						>
							<div className="flex flex-col gap-2">
								<div className="flex justify-center items-center">
									<div className="profile-card-image-container rounded-[50%] overflow-hidden h-30 w-30">
										<img
											src={profile.profile_image !== null ? profile.profile_image : "/placeholderProfile.png"}
											alt="Profile picture"
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>
							<div>
								<h1 className="username-display text-lg text-center font-bold mb-2">{profile.username}</h1>
								{profile.is_admin ? (
									<p className="text-gray-500 text-center"><i>Administrator</i></p>
								) : (
									<>
										{profile.is_mod && (
											<p className="text-gray-500 text-center"><i>Moderator</i></p>
										)}
									</>
								)}
							</div>
						</div>
					))
				) : (
					<p className="text-gray-500 text-center">No users found.</p>
				)}
			</div>
		</div>
    )
}