import Server from "../../../serverComms/server";

import { Button, Checkbox, Label, TextInput, useThemeMode, Toast, ToastToggle, Avatar } from "flowbite-react";
import { useState, useEffect } from "react";

export default function AccountDetails() {
    const [details, setDetails] = useState(null);
    const [me, setMe] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const [profilePickerShow, setProfilePickerShow] = useState(false);

    useEffect(() => {
        let mounted = true;
        setLoading(true);

        Server.me()
            .then((me) => {
                if (!mounted) return;

                setMe(me);
                const id = me.id;
                return Server.users.private.getDataById(id);
            })
            .then((data) => {
                if (!mounted) return;

                if (!data) {
                    setError("Failed getting user data.");
                    setLoading(false);
                }

                setDetails(data);

                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError(`Error getting account details. ${err}`);
                setLoading(false);
            })

        return () => {
            mounted = false;
        }
    }, []);

    const handleProfileDetailsSubmit = (e) => {
        e.preventDefault();

        setSubmitting(true);
        console.log("submitted profile data");

        const formData = new FormData(e.target);
        const values = Object.fromEntries(formData);

        console.log(values);

        setSubmitting(false);

    };

    if (loading) return <div className="min-w-full min-h-full flex justify-center items-center text-gray-500">Loading...</div>
	if (error) return <div className="min-w-full min-h-full flex justify-center items-center text-red-500">{error}</div>
    if (!details) return <div className="min-w-full min-h-full flex justify-center items-center text-red-500">No details found. Cmon now.</div>

    return (
        <div className="">
            <h1 className="text-3xl font-bold ml-2 mb-6">Account Details</h1>
            <div className="pl-10">
                <div className="profile-details">
                    {/* <h1 className="text-2xl font-bold mb-2">Personal</h1> */}
                    <form onSubmit={handleProfileDetailsSubmit}>
                        <div className="flex gap-4 mb-4 dark:border-(--darkborder) border p-4 rounded-2xl items-center">
                            <div className="relative group">
                                <Avatar img={details.profile_image || undefined} size="xl" rounded />
                                <div className="w-full h-full absolute top-0 left-0 hidden group-hover:flex justify-center items-center bg-black/50 rounded-[50%] hover:cursor-pointer overflow-hidden" onClick={() => {
                                    setProfilePickerShow(true);
                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                        <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                                        <path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                {profilePickerShow ? (
                                    <div className="create-listing-overlay fixed inset-0 flex items-start justify-center overflow-hidden sm:items-center z-900">
                                        <div className="create-listing-backdrop absolute inset-0 bg-black/60 backdrop-blur-sm" />
                                        <div className="create-listing-panel relative z-1000 w-full max-w-200 max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain sm:rounded-2xl bg-white p-6 shadow-2xl dark:bg-(--darkbg)">
                                        
                                        </div>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                            <div className="form-item mb-6">
                                <div className="block">
                                    <Label htmlFor="fname">First Name:</Label>
                                </div>
                                <TextInput id="fname" name="fname" defaultValue={details.fname}></TextInput>
                            </div>
                            <div className="form-item mb-6">
                                <div className="block">
                                    <Label htmlFor="lname">Last Name:</Label>
                                </div>
                                <TextInput id="lname" name="lname" defaultValue={details.lname}></TextInput>
                            </div>
                        </div>
                        <Button type="submit" color="red" disabled={submitting}>{submitting ? "Saving..." : "Save"}</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}