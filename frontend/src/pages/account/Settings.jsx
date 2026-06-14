import Server from "../../serverComms/server";
import Auth from "../../auth/auth";
import { Avatar, HR } from "flowbite-react";
import { useState, useEffect } from "react";

export default function Settings() {
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [found, setFound] = useState(false);

    useEffect(() => {
        let mounted = true;
        setLoading(true);

        Auth.getUsername()
            .then((username) => {
                if (!mounted) return;
                setUsername(username);
                return Server.users.getDataByUsername(username);
            })
            .then((data) => {
                if (!mounted || !data) return;
                setUser(data);
                setLoading(false);
                setFound(true);
            })
            .catch((err) => {
                if (!mounted) return;
                setError(err);
                setLoading(false);
            });
        
        return (() => {
            mounted = false;
        })
    }, []);

    if (loading) return <div className="min-w-screen min-h-screen flex justify-center items-center text-gray-500">Loading...</div>
	if (error) return <div className="min-w-screen min-h-screen flex justify-center items-center text-red-500">Error displaying user profile.</div>
	if (!found) return <div className="min-w-screen min-h-screen flex justify-center items-center text-red-500">User not found.</div>

    console.log(username);
    console.log(user);

    const userCreated = new Date(user.created_at);
    console.log(userCreated);
    const formattedDate = userCreated.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <div className="profile-page min-w-screen min-h-screen flex justify-center">
            <div className="w-full max-w-screen bg-white dark:bg-(--darkbg) min-h-200 rounded-2xl dark:border-(--darkbg)">
                <div className="flex md:flex-row flex-col items-center justify-between p-6 ">
                    <div className="flex items-center">
                        <Avatar img={user.profile_image} size="lg" rounded />
                        <div className="flex md:flex-row flex-col items-center">
                            <h1 className="text-4xl font-bold ml-6">{user.username}</h1>
                            <p className="text-gray-500 ml-4">({user.fname} {user.lname})</p>
                        </div>
                    </div>
                    <p className="text-gray-500 m-4">
                        Joined {formattedDate}
                    </p>
                </div>
                <HR className="m-0" />
                <div className="mt-4">
                    <div className="py-4 px-6">
                        <div className="bg-gray min-w-full min-h-40 grid grid-cols-1 sm:grid-cols-3 gap-4 divide-x dark:divide-(--darkborder) divide-gray-300 border dark:border-(--darkborder) border-gray-300 rounded-2xl py-4">
                            <div className="flex flex-col items-center py-4">
                                <h1 className="text-3xl font-bold ">Listings Posted</h1>
                                <p className="text-8xl font-bold text-red-600">{user.listings_posted}</p>
                            </div>
                            <div className="flex flex-col items-center py-4">
                                <h1 className="text-3xl font-bold ">Listings Posted</h1>
                                <p className="text-8xl font-bold text-red-600">{user.listings_posted}</p>
                            </div>
                            <div className="flex flex-col items-center py-4">
                                <h1 className="text-3xl font-bold ">Listings Posted</h1>
                                <p className="text-8xl font-bold text-red-600">{user.listings_posted}</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-4 px-6">
                        <div className="bg-gray min-w-full min-h-40 flex flex-col gap-4">
                            <div className="">
                                <h1 className="text-2xl font-semibold">About</h1>
                                <p>{user.about}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}