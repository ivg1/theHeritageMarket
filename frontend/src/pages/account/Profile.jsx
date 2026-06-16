import Server from "../../serverComms/server";
import Auth from "../../auth/auth";
import { HR, Button, TextInput, Textarea } from "flowbite-react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Profile() {
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [found, setFound] = useState(false);

    const [editAccess, setEditAccess] = useState(false);
    const [editingAbout, setEditingAbout] = useState(false);
    const [newAbout, setNewAbout] = useState("");

    const [isSubmitted, setSubmitted] = useState(false);

    const { userId } = useParams();
	const id = Number(userId);

    useEffect(() => {
        let mounted = true;
        setLoading(true);

        let userData;

        Server.users.getData(id)
            .then(async (data) => {
                if (!mounted) return;

                if (data.message === "user not found") {
                    setError("No such user.");
                    setLoading(false);
                    return;
                }

                userData = data;

                setUser(data);
                setFound(true);

                //console.log("reached server.me");
                if (await Auth.loginState()) return Server.me();
            })
            .then((me) => {
                if (!mounted) return;

                if (me && me.id === userData.id) {
                    console.log("can edit");
                    setEditAccess(true);
                } else {
                    console.log("cannot edit");
                }

                setLoading(false);
            })
            .catch((err) => {
                if (!mounted) return;
                console.error("Profile page error:", err);
                setError(`Error displaying user profile: ${err}`);
                setLoading(false);
            });
        
        return (() => {
            mounted = false;
        })
    }, [id]);

    if (loading) return <div className="min-w-screen min-h-screen flex justify-center items-center text-gray-500">Loading...</div>
	if (error) return <div className="min-w-screen min-h-screen flex justify-center items-center text-red-500">{error}</div>
	if (!found) return <div className="min-w-screen min-h-screen flex justify-center items-center text-red-500">User not found.</div>

    //console.log(username);
    //console.log(user);

    const userCreated = new Date(user.created_at);
    //console.log(userCreated);
    const formattedDate = userCreated.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });


    const handleAboutEdit = async (e) => {
        e.preventDefault();

        if (isSubmitted) return;
        setSubmitted(true);

        if (newAbout === user.about) {
            setEditingAbout(false);
            setSubmitted(false);
            return;
        }

        setError("");

        const formData = new FormData(e.target);
        const values = Object.fromEntries(formData.entries());
        console.log(values);

        try {
            let about = newAbout;
            if (about === "") about = "{no about}";
            //foolproof i hope, cus this avoids errors if user changed html name attribute
            const toSend = {
                about: about
            }

            const response = await Server.users.update(toSend);
            console.log("about update response", response);

            setUser({
                ...user,
                about: about
            });

            setEditingAbout(false);
            setSubmitted(false);
        } catch (err) {
            console.error("updating about failed", err);
            setError("Failed to update about.");
            setShowError(true);
            setSubmitted(false);
            //setEditingAbout(false);
        }
    }

    return (
        <div className="profile-page min-w-screen min-h-screen flex justify-center">
            <div className="w-full max-w-screen min-h-200 rounded-2xl dark:border-(--darkbg)">
                <div className="flex md:flex-row flex-col items-center justify-between p-6 ">
                    <div className="flex items-center">
                        <div className="w-30 h-30 rounded-full overflow-hidden dark:border-(--darkborder) border border-gray-200">
                            <img
                                src={user.profile_image !== null ? user.profile_image : "/placeholderProfile.png"}
                                alt="Profile picture"
                                className="w-full h-full object-cover"
                            />
                        </div>
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
                            <div className="mb-4">
                                <h1 className="text-2xl font-semibold">
                                    About
                                    {editAccess ? (
                                        <span className="text-sm text-gray-500 underline ml-2 hover:text-red-800 hover:cursor-pointer select-none" onClick={() => { 
                                            editingAbout ? setEditingAbout(false) : setEditingAbout(true); 
                                            setNewAbout(user.about) 
                                        }}>
                                            (edit)
                                        </span>
                                    ) : (<></>)}
                                </h1>
                                {editingAbout ? (
                                    <form onSubmit={handleAboutEdit}>
                                        <Textarea id="about" name="about" value={newAbout} className="my-2" rows={4} onChange={(e) => {
                                            setNewAbout(e.target.value);
                                        }} />
                                        <Button color="red" type="submit" disabled={isSubmitted}>{isSubmitted ? "Saving..." : "Save"}</Button>
                                    </form>
                                ) : (
                                    <p className="whitespace-pre-wrap">{user.about}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}