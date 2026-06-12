import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen">
            <div className="flex flex-col items-center px-10 pb-60">
                <div className="explanation flex flex-col items-center mb-20">
                    <div>
                        <h1 className="text-8xl font-bold my-20 flex flex-col md:items-end dark:text-(--darktext)">
                            Privacy Policy
                        </h1>
                    </div>
                    <div className="flex flex-col gap-8 md:px-10 max-w-300">
                        <div className="text-left">
                            <p className="text-2xl mb-8">
                                The Heritage Market (HM) respects your privacy.<br />
                                We only collect and store the information necessary to operate the platform and provide its services.
                            </p>
                            <div>
                                <div className="mb-8">
                                    <h1 className="text-3xl mb-2">
                                        Data we collect
                                    </h1>
                                    <p className="mb-2">
                                        When you create an account or use HM, we may collect information like:
                                    </p>
                                    <ul className="list-disc ml-5">
                                        <li>Your username and other account details.</li>
                                        <li>Information you provide in listings.</li>
                                        <li>Messages sent through HM's messenger (We do not read them).</li>
                                        <li>Technical information required for security and operation of the platform.</li>
                                    </ul>
                                </div>
                                <div className="mb-8">
                                    <h1 className="text-3xl mb-2">
                                        How We Use Your Information
                                    </h1>
                                    <p className="mb-2">
                                        We use the collected data to:
                                    </p>
                                    <ul className="list-disc ml-5">
                                        <li>Display listings.</li>
                                        <li>Provide a working account system.</li>
                                        <li>Improve functionality, security, and reliability of HM.</li>
                                        <li>Investigate reports of rule violations, fraud, or misuse.</li>
                                    </ul>
                                </div>
                                <div className="mb-8">
                                    <h1 className="text-3xl mb-2">
                                        Data Sharing
                                    </h1>
                                    <p className="mb-2">
                                        HM does not sell personal information to third parties.
                                    </p>
                                    <p className="mb-2">
                                        Information you include in listings is public, and can be accessed by other users of the platform.
                                    </p>
                                    <p>
                                        HM may also disclose information when required by the school authorities, or when necessary to ensure safety and integrity of the platform and its users.
                                    </p>
                                </div>
                                <div className="mb-8">
                                    <h1 className="text-3xl mb-2">
                                        Data Security
                                    </h1>
                                    <p className="mb-2">
                                        HM takes reasonable measures to protect user data. However no online service can guarantee absolute security, and users should avoid sharing sensitive information on the platform.
                                    </p>
                                </div>
                                <div className="mb-8">
                                    <h1 className="text-3xl mb-2">
                                        User Responsibilities
                                    </h1>
                                    <p className="mb-2">
                                        Users are responsible for any information they post, and must ensure it is appropriate and does not violate the terms of service, school rules, laws, or privacy of others.
                                    </p>
                                </div>
                                <div className="mb-8">
                                    <h1 className="text-3xl mb-2">
                                        Changes To The Privacy Policy
                                    </h1>
                                    <p className="mb-2">
                                        This policy may be periodically updated. Continued use of HM after the changes are published constitutes acceptance of the updated policy.
                                    </p>
                                </div>
                                <div className="mb-8">
                                    <h1 className="text-3xl mb-2">
                                        Contact
                                    </h1>
                                    <p className="mb-2">
                                        If you have questions about our policy, please contact support of HM.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}