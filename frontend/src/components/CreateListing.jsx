import { useEffect, useState } from "react";
import { Button, Checkbox, Label, TextInput, Textarea, Radio, FileInput, HelperText } from "flowbite-react";
import "./CreateListing.css";

import Server from "../serverComms/server";
import Auth from "../auth/auth";

export default function CreateListing({ open, onClose }) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    let hasInfo = true;

    //prevent background scrolling
    useEffect(() => {
        if (!open) return;

        const html = document.documentElement;
        html.style.overflow = "hidden";

        return () => {
            html.style.overflow = "scroll";
        };
    }, [open]);

    //confirm to discard listing
    useEffect(() => {
        if (!open) return;

        const handleBeforeUnload = (e) => {
            if (!hasInfo) return;
            e.preventDefault();
            e.returnValue = "";
        };

        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => window.removeEventListener("beforeunload", handleBeforeUnload);
    }, [open, hasInfo]);

    if (!open) return null;

    const handleClose = () => {
        if (hasInfo && !window.confirm("Discard listing?")) return;
        setIsSubmitted(false);
        onClose();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitted) return;
        setIsSubmitted(true);

        const formData = new FormData(e.target);
        const values = Object.fromEntries(formData.entries());
        console.log(values);

        const images = formData.getAll("images");

        const uploadPromises = images.map(async (image) => Server.uploadImage(image) );

        const results = await Promise.all(uploadPromises);
        const imageUrls = results.map((r) => r.image_url);
        console.log(imageUrls);

        const goodTags = values.tags.split(",").map(tag => tag.trim()).filter(tag => tag.length > 0);

        const username = await Auth.getUsername();
        const userData = await Server.users.getDataByUsername(username); //yes i dont leak anything other than email, phone and id here
        const sellerId = userData.id;
        const sellerEmail = userData.email;
        const sellerPhone = userData.phone;

        const toSend = {
            title: values.title,
            description: values.desc,
            price: Number(values.price),
            tags: goodTags,
            images: imageUrls,
            seller_id: sellerId,
            seller_email: sellerEmail,
            seller_phone: sellerPhone,
            email_show: (values.includeEmail === "on"),
            phone_show: (values.includePhone === "on"),
            is_physical: (values.type === "physical"),
            negotiable: (values.negotiable === "on")
        };
        console.log(toSend);

        try {
			const response = await Server.listings.create(toSend);
			console.log("listing create response", response);

		} catch (err) {
			console.error("listing creation failed", err);
		}

        hasInfo = false;
        onClose();
        window.location.reload();
    };

    return (
        <div className="create-listing-overlay fixed inset-0 flex items-start justify-center overflow-hidden sm:items-center z-2000">
            <div className="create-listing-backdrop absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <div className="create-listing-panel relative z-10 w-full max-w-200 max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain sm:rounded-2xl bg-white p-6 shadow-2xl dark:bg-gray-950">
                <Button
                    onClick={handleClose}
                    color="bglessOnlyText"
                    className="absolute right-4 top-4 rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </Button>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Create listing</h2>
                <div className="pr-10 ">
                    <div className="flex flex-col">
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <div className="form-item flex flex-col">
                                <h1 className="text-l mb-1">What type of listing is it?</h1>
                                <div className="flex gap-2 m-1 justify-start items-center">
                                    <Radio color="red" id="physical" name="type" value="physical" defaultChecked />
                                    <Label htmlFor="physical">Physical item</Label>
                                </div>
                                <div className="flex gap-2 mx-1 justify-start items-center">
                                    <Radio color="red" id="service" name="type" value="service" />
                                    <Label htmlFor="service">Service</Label>
                                </div>
                            </div>
                            <div className="form-item">
                                <div className="mb block">
								    <Label htmlFor="username">Title:</Label>
							    </div>
							    <TextInput id="title" name="title" type="text" placeholder="Maths IGCSE Extended book" required shadow />
                            </div>
                            <div className="form-item">
                                <div className="mb block">
								    <Label htmlFor="username">Price:</Label>
							    </div>
							    <TextInput id="price" name="price" type="number" placeholder="10..?" min="0" step="1" required shadow />

                                <div className="flex items-center gap-1 my-2">
                                    <Checkbox color="red" id="negotiable" name="negotiable" />
                                    <Label htmlFor="negotiable">Price negotiable</Label>
                                </div>
                            </div>
                            <div className="form-item">
                                <div className="mb block">
								    <Label htmlFor="username">Description:</Label>
							    </div>
							    <Textarea id="desc" name="desc" type="text" rows={4} placeholder="Used, in good condition..." required shadow />
                                <HelperText>Try to include things like, in case of a book, how used it is. Aim to write multiple lines.</HelperText>
                            </div>
                            <div className="form-item">
                                <div className="mb block">
                                    <Label htmlFor="tags">Tags:</Label>
                                </div>
                                <Textarea id="tags" name="tags" placeholder="Book, Used, Maths, IGCSE, ..." required shadow />
                                <HelperText>Adding tags makes it easier to find your listing.</HelperText>
                            </div>
                            <div className="form-item flex flex-col gap-1">
                                <div className="md block">
                                    <Label>Contact:</Label>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Checkbox color="red" id="includePhone" name="includePhone" defaultChecked />
                                    <Label htmlFor="include-phone">Display phone for contact</Label>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Checkbox color="red" id="includeEmail" name="includeEmail" defaultChecked />
                                    <Label htmlFor="include-email">Display email for contact</Label>
                                </div>
                            </div>
                            <div className="form-item">
                                {/* !! todo: rlly got to change this up later to use https://picrd.com/docs */}
                                <div id="images-upload">
                                    <Label htmlFor="images" className="mb block">Upload images</Label>
                                    <FileInput id="images" name="images" multiple />
                                    <HelperText>Upload images for your listing (max. 10MB each).</HelperText>
                                </div>
                            </div>
                            <div className="flex justify-end mt-10 mr-2 mb-2">
                                <Button type="submit" color="red" disabled={isSubmitted}>Create listing</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}