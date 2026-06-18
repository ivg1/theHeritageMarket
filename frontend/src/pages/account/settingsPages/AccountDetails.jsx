import Server from "../../../serverComms/server";
import Data from "../../../auth/data";

import { 
    Button, 
    Checkbox, 
    Label, 
    TextInput, 
    useThemeMode, 
    Toast, 
    ToastToggle,
    FileInput,
    HR,
    Textarea
} from "flowbite-react";

import { useState, useEffect, useRef } from "react";

export default function AccountDetails({ details, loading, loadingError }) {
    const [error, setError] = useState("");

    const [showError, setShowError] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const [profileImage, setProfileImage] = useState(null);
    const profileInputRef = useRef(null);

    const [formValues, setFormValues] = useState(details);
    const [newDetails, setNewDetails] = useState(details);

    useEffect(() => {
        if (details) setFormValues(details);
    }, [details]);

    const handleProfilePickerClose = () => {
        setProfilePickerShow(false);
    }

    const handleProfileDetailsSubmit = async (e) => {
        e.preventDefault();

        setSubmitting(true);
        setSuccess(false);
        setError("");
        setShowError(false);

        console.log("submitted profile data");

        const formData = new FormData(e.target);
        const values = Object.fromEntries(formData);
        console.log(values);

        const changes = await JSON.stringify(newDetails) !== JSON.stringify(formValues);
        if (!changes) {
            console.log("no changes made");
            setSuccess("User didnt make any changes.");
            setSubmitting(false);
			return;	
        }

        //phone validation
        const phone = values.phone?.trim();
        if (phone.length === 0) {
            console.error("Cannot submit empty lines");
            setError("Cannot submit empty lines.");
            setShowError(true);
            setSubmitting(false);
            return;
        } 
        const phoneRegex = /^\+?[1-9]\d{7,14}$/;

        const normalized = phone.replace(/[\s()-]/g, "");

        if (!phoneRegex.test(normalized)) {
            console.error("Phone number is invalid");
            setError("Phone number is invalid.");
            setShowError(true);
            setSubmitting(false);
            return;
        }

        let profileImageUrl = details.profile_image;
        try {
            if (values.profileImage.name !== "") {
                const response = await Server.uploadImage(values.profileImage);
                profileImageUrl = response.image_url;
                console.log(profileImageUrl);
            }
        } catch (err) {
            console.error(err);
            setError(err);
            setShowError(true);
            setSubmitting(false);
            return;
        }

        const toSend = {
            profile_image: profileImageUrl,
            fname: formValues.fname,
            lname: formValues.lname,
            phone: formValues.phone,
            //email: formValues.email,
            about: formValues.about
        };

        try {
            const response = await Server.users.update(toSend);
            console.log("user updated");
            setNewDetails(formValues);
        } catch (err) {
            console.error(err);
            setError(err);
            setShowError(true);
            setSubmitting(false);
            return;
        }


        Data.me(true);
        setSuccess("User details updated");
        setSubmitting(false);

    };

    const handleProfileImageChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setProfileImage({
            file,
            preview: URL.createObjectURL(file)
        });
    };


    if (loading) return <div className="min-w-full min-h-full flex justify-center items-center text-gray-500">Loading...</div>
	if (loadingError) return <div className="min-w-full min-h-full flex justify-center items-center text-red-500">{loadingError}</div>
    if (!details) return <div className="min-w-full min-h-full flex justify-center items-center text-gray-500">Trying to fetch details.</div>

    return (
        <div className="account-details-container">
            <h1 className="text-3xl font-bold ml-2 mb-6">Account Details</h1>
            <div className="sm:pl-10 ">
                <div className="account-details">
                    {/* <h1 className="text-2xl font-bold mb-2">Personal</h1> */}
                    <form onSubmit={handleProfileDetailsSubmit}>
                        <div className="flex gap-4 mb-4 flex-col dark:border-(--darkborder) border border-gray-200 p-4 rounded-2xl ">
                            <div className="flex gap-4 items-center flex-col sm:flex-row">
                                <Label className="relative group">
                                    <div className="w-36 h-36 rounded-full overflow-hidden dark:border-(--darkborder) border border-gray-200">
                                        <img
                                            src={profileImage?.preview || details.profile_image || "/placeholderProfile.png" }
                                            alt="Profile picture"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="w-full h-full absolute top-0 left-0 flex md:hidden group-hover:flex justify-center items-center bg-black/40 text-white dark:bg-black/50 rounded-[50%] hover:cursor-pointer overflow-hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                            <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                                            <path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <FileInput
                                        ref={profileInputRef}
                                        className="hidden"
                                        accept="image/*"
                                        name="profileImage"
                                        onChange={handleProfileImageChange}
                                    />
                                    
                                </Label>
                                <div className="form-item sm:mb-6">
                                    <div className="block">
                                        <Label htmlFor="fname" className="ml-1">First Name:</Label>
                                    </div>
                                    <TextInput id="fname" name="fname" value={formValues?.fname || ""} placeHolder={formValues?.fname || ""} required 
                                        onChange={(e) => {
                                            setFormValues({
                                                ...formValues,
                                                fname: e.target.value
                                            });
                                        }}
                                    />
                                </div>
                                <div className="form-item mb-2 sm:mb-6">
                                    <div className="block">
                                        <Label htmlFor="lname" className="ml-1">Last Name:</Label>
                                    </div>
                                    <TextInput id="lname" name="lname" value={formValues?.lname || ""} placeHolder={formValues?.lname || ""} required 
                                        onChange={(e) => {
                                            setFormValues({
                                                ...formValues,
                                                lname: e.target.value
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                            <HR className="m-0" />
                            <div className="flex flex-col gap-4 max-w-200">
                                <div className="grid gap-4 sm:grid-cols-2 grid-cols-1">
                                    <div className="form-item">
                                        <div className="block">
                                            <Label htmlFor="phone" className="ml-1">Phone number:</Label>
                                        </div>
                                        <TextInput id="phone" name="phone" type="tel" value={formValues?.phone || ""} placeHolder={formValues?.phone || ""} className="max-w-200" rows={4} required 
                                            onChange={(e) => {
												setFormValues({
													...formValues,
													phone: e.target.value
												});
											}}
                                        />
                                    </div>
                                    <div className="form-item">
                                        <div className="block">
                                            <Label htmlFor="email" className="ml-1">Email:</Label>
                                        </div>
                                        <TextInput id="email" name="email" type="email" value={formValues?.email || ""} placeHolder={formValues?.email || ""} className="max-w-200" rows={4} disabled 
                                            onChange={(e) => {
												setFormValues({
													...formValues,
													email: e.target.value
												});
											}}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="form-item">
                                        <div className="block">
                                            <Label htmlFor="about" className="ml-1">About:</Label>
                                        </div>
                                        <Textarea id="about" name="about" value={formValues?.about || ""} placeHolder={formValues?.about || ""} className="max-w-200" rows={4} required 
                                            onChange={(e) => {
												setFormValues({
													...formValues,
													about: e.target.value
												});
											}}
                                        />
                                    </div>
                                </div>
                            </div>
                            {success && (
                                <div>
                                    <p className="text-green-400">{success}</p>
                                </div>
                            )}
                            {error && showError && (
                                <div>
                                    <p className="text-red-600">{error}</p>
                                </div>
                            )}
                        </div>
                        <Button type="submit" color="red" disabled={submitting}>{submitting ? "Saving..." : "Save"}</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}