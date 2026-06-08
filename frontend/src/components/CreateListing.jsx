import { useEffect } from "react";
import { Button, Checkbox, Label, TextInput, Textarea, Radio, FileInput, HelperText } from "flowbite-react";
import "./CreateListing.css";

export default function CreateListing({ open, onClose }) {
    let hasInfo = true;

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
        onClose();
    }

    return (
        <div className="create-listing-overlay fixed inset-0 flex items-center justify-center p-4 z-2000">
            <div className="create-listing-backdrop absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <div className="create-listing-panel relative z-10 w-full max-w-200 min-h-full rounded-2xl bg-white p-6 shadow-2xl dark:bg-gray-800">
                <Button
                    onClick={handleClose}
                    color="bglessOnlyText"
                    className="absolute right-4 top-4 rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </Button>

                <div className="pr-10">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Create listing</h2>
                    <div className="flex flex-col">
                        <form className="flex flex-col gap-4">
                            <div className="form-item flex flex-col">
                                <h1 className="text-l mb-1">What type of listing is it?</h1>
                                <div className="flex gap-2 m-1 justify-start items-center">
                                    <Radio id="physical" name="type" value="physical" defaultChecked />
                                    <Label htmlFor="physical">Physical item</Label>
                                </div>
                                <div className="flex gap-2 mx-1 justify-start items-center">
                                    <Radio id="service" name="type" value="service" />
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
							    <TextInput id="price" name="price" type="number" placeholder="10..?" required shadow />
                            </div>
                            <div className="form-item">
                                <div className="mb block">
								    <Label htmlFor="username">Description:</Label>
							    </div>
							    <Textarea id="desc" name="desc" type="text" placeholder="Used, in good condition..." required shadow />
                            </div>
                            <div className="form-item">
                                <div id="images-upload">
                                    <Label htmlFor="images" className="mb block">Upload images</Label>
                                    <FileInput id="images" />
                                    <HelperText className="">Upload images for your listing (max. 10MB)</HelperText>
                                </div>
                            </div>
                            <div className="form-item flex flex-col gap-1">
                                <div className="flex items-center gap-1">
                                    <Checkbox id="include-phone" name="include-phone" />
                                    <Label htmlFor="include-phone">Display phone for contact</Label>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Checkbox id="include-email" name="include-email" />
                                    <Label htmlFor="include-email">Display email for contact</Label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}