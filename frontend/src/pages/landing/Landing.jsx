import { Button, Card, HRTrimmed, Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import { useNavigate } from 'react-router-dom';

export default function Landing() {
    const navigate = useNavigate();

    return (
        <div className="landing-page smooth-trans">
            <div className="hero min-h-150 flex items-center justify-center px-10">
                <div className="text-center">
                    <h1 className="md:text-8xl text-7xl lg:px-0 px-6 font-bold text-slate-900 dark:text-white max-w-200">Welcome to The Heritage Market!</h1>
                    <p className="py-6 text-slate-700 dark:text-gray-400 lg:px-0 px-6">
                        The platform for buying/selling/trading things and services of all kinds with your fellow classmates across the school.<br />
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button pill color="alternative" size="lg" onClick={() => navigate("/learn-more")}>Learn more</Button>
                        <Button pill color="red" size="lg" onClick={() => navigate("/listings")}>Explore listings</Button>
                    </div>
                </div>
            </div>
            <div className="explanation min-h-fit w-full flex p-10 mb-10">
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 min-h-full min-w-full text-center px-2">
                    <Card className="max-w-full max-h-200 m-2 p-0px text-left dark:bg-(--darksurface) dark:border-(--darkborder)">
                        <div className="flex align-center">
                            <div className="flex justify-center align-center items-center mr-4 text-red-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="md:size-10 size-8">
                                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                </svg>
                            </div>
                            <h5 className="md:text-2xl text-l text-gray-900 dark:text-white min-w-fit flex justify-center">
                                Made by students,<br /> for students.
                            </h5>
                        </div>
                        <p className="min-h-22 font-normal text-gray-700 dark:text-gray-400">Developed by a group of students, we strive to develop services that help students. <br />(or at least we try to)</p>
                    </Card>
                    <Card className="max-w-full max-h-200 m-2 p-0px text-left dark:bg-(--darksurface) dark:border-(--darkborder)">
                        <div className="flex align-center">
                            <div className="flex justify-center align-center items-center mr-4 text-red-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="md:size-10 size-8">
                                    <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h5 className="md:text-2xl text-l text-gray-900 dark:text-white min-w-fit flex justify-center">
                                Monetise your goods <br />and services.
                            </h5>
                        </div>
                        <p className="min-h-22 font-normal text-gray-700 dark:text-gray-400">This platform lets you reach a wider audience at any given time of day, be you in school to advertise/buy or not.</p>
                    </Card>
                    <Card className="max-w-full max-h-200 m-2 p-0px text-left dark:bg-(--darksurface) dark:border-(--darkborder)">
                        <div className="flex align-center">
                            <div className="flex justify-center align-center items-center mr-4 text-red-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="md:size-10 size-8">
                                    <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h5 className="md:text-2xl text-l text-gray-900 dark:text-white min-w-fit flex justify-center">
                                Every transaction is physical. <br /> You're in control.
                            </h5>
                        </div>
                        <p className="min-h-22 font-normal text-gray-700 dark:text-gray-400">Everything you give or receive is done physically, after messaging with the other party, ensuring you get what you pay for.</p>
                    </Card>
                </div>
            </div>
            <HRTrimmed />
            <div className="process-steps flex flex-col gap-4 min-w-full min-h-fit p-10 mb-10">
                <div className="step1 md:grid md:grid-cols-2 gap-4 min-h-fit flex flex-col">
                    <div className="flex justify-center items-center w-full">
                        <img src="/signupStep.png" className="steps-image-holder flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col text-left text-ellipsis max-h-100 max-w-full"></img>
                    </div>
                    <div className="steps-text-holder p-10 md:order-last order-first">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white p-2">1. Create an account.</h2>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Sign up with your school email to get access to the platform and start exploring and/or listing.</p>
                    </div>
                </div>
                <div className="step2 md:grid md:grid-cols-2 gap-4 min-h-fit flex flex-col">
                    <div className="steps-text-holder p-10 md:order-first order-first">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white p-2">2. Explore/Create listings.</h2>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Browse through existing listings or create your own to showcase your goods or services. Each listing includes detailed information about the item and the seller such as the seller's target price.</p>
                    </div>
                    <div className="flex justify-center items-center w-full">
                        <img src="/signupStep.png" className="steps-image-holder flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col text-left text-ellipsis max-h-100 max-w-full"></img>
                    </div>
                </div>
                <div className="step3 md:grid md:grid-cols-2 gap-4 min-h-fit flex flex-col">
                    <div className="flex justify-center items-center w-full">
                        <img src="/signupStep.png" className="steps-image-holder flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col text-left text-ellipsis max-h-100 max-w-full"></img>
                    </div>
                    <div className="steps-text-holder p-10 md:order-last order-first">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white p-2">3. Begin the talks.</h2>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Once you find something you like, reach out to the seller, and discuss the details through our built-in messenger, such as price and meeting place.</p>
                    </div>
                </div>
                <div className="step4 md:grid md:grid-cols-2 gap-4 min-h-fit flex flex-col">
                    <div className="steps-text-holder p-10 md:order-first order-first">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white p-2">4. Secure the deal.</h2>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Once both parties agree on the terms, meet up at the agreed location to complete the transaction.</p>
                    </div>
                    <div className="flex justify-center items-center w-full">
                        <img src="/signupStep.png" className="steps-image-holder flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col text-left text-ellipsis max-h-100 max-w-full"></img>
                    </div>
                </div>
            </div>
            <HRTrimmed />
            <div className="contact-us flex flex-col gap-4 min-w-full min-h-fit p-10 mb-10 justify-center">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">FAQ</h1>
                <div className="min-w-full">
                    <Accordion collapseAll alwaysOpen className="">
                        <AccordionPanel>
                            <AccordionTitle>Is this service free?</AccordionTitle>
                            <AccordionContent>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Yes. It is completely free to use. We would greatly appreciate it if you spread the word to your friends!
                                </p>
                            </AccordionContent>
                        </AccordionPanel>
                        <AccordionPanel>
                            <AccordionTitle>How do I create a listing?</AccordionTitle>
                            <AccordionContent>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    To create a listing, you need to sign up for an account using your school email. Once you have an account, you can head to the listing page and click on the "Create Listing" button.
                                </p>
                            </AccordionContent>
                        </AccordionPanel>
                        <AccordionPanel>
                            <AccordionTitle>What can I list on this platform?</AccordionTitle>
                            <AccordionContent>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Literally anything that doesn't violate our terms of service is listable. The things can be both services (e.g. homework help or tutoring) and physical things (e.g. textbooks).
                                </p>
                            </AccordionContent>
                        </AccordionPanel>
                        <AccordionPanel>
                            <AccordionTitle>How do I message the seller?</AccordionTitle>
                            <AccordionContent>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    You can communicate with the seller through our built-in messenger by clicking on the message button on their listing, or if the seller provided an email/phone number you can contact them through those channels.
                                </p>
                            </AccordionContent>
                        </AccordionPanel>
                        <AccordionPanel>
                            <AccordionTitle>Is it safe to buy/sell on this platform?</AccordionTitle>
                            <AccordionContent>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Look, this platform connects students, and the only way for a transaction to occur is physically meeting up and at the end of the day, it's on your side to make sure you get what you pay for.
                                </p>
                            </AccordionContent>
                        </AccordionPanel>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}