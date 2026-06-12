import { Link } from "react-router-dom";

export default function TermsOfService() {
    return (
        <div className="min-h-screen">
            <div className="flex flex-col items-center px-10 pb-60">
                <div className="explanation flex flex-col items-center mb-20">
                    <div>
                        <h1 className="text-8xl font-bold my-20 flex flex-col md:items-end dark:text-(--darktext)">
                            Terms Of Service
                            <span className="m-0 text-[12px]">
                                (read also the&nbsp;
                                <Link className="text-red-600 hover:underline" to="/legal/privacy-policy">privacy policy</Link>)
                            </span>
                        </h1>
                    </div>
                    <div className="flex flex-col gap-8 md:px-10">
                        <div className="text-left">
                            <p className="text-2xl mb-8">
                                By using the platform The Heritage Market (HM), you agree to the following terms:
                            </p>
                            <ul className="list-decimal pl-5 text-lg">
                                <li>Sellers must not create listings containing content that is inappropriate, illegal, or prohibited by school rules.</li>
                                <li>Sellers are responsible for ensuring that all their listing information, including description, price, and images, is accurate.</li>
                                <li>Sellers must own the items they list or have the legal right to sell them.</li>
                                <li>Buyers are responsible for reviewing listings carefully before making a purchase.</li>
                                <li>HM is not responsible for disputes between buyers and sellers or service providers.</li>
                                <li>Users may not use HM for fraudulent, misleading, or unlawful activities.</li>
                                <li>Users must not impersonate another person or school staff member.</li>
                                <li>Users must not list stolen, counterfeit, dangerous, or illegal items.</li>
                                <li>HM may remove any listing without prior notice, and suspend the user's account, if it violates these terms or is reported by users.</li>
                                <li>HM may suspend or terminate accounts that repeatedly violate these terms.</li>
                                <li>HM is provided "as is" and may be modified, suspended, or discontinued at any time by its creators.</li>
                            </ul>
                            <p className="text-xl mt-8">
                                These terms may be updated periodically, and continued use of HM constitutes acceptance of any changes.
                            </p>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}