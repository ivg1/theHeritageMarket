import { Link } from "react-router-dom";

export default function RelationToSchool() {
    return (
        <div className="min-h-screen">
            <div className="flex flex-col items-center px-10 pb-60">
                <div className="explanation flex flex-col items-center mb-20">
                    <div>
                        <h1 className="text-8xl font-bold my-20 flex flex-col md:items-end dark:text-(--darktext)">
                            Relation To The School
                        </h1>
                    </div>
                    <div className="flex flex-col gap-8 md:px-10 max-w-300">
                        <div className="text-left">
                            <p className="text-xl mb-8">
                                The Heritage Market (HM) is a platform created by students designed to help members of the school to buy/sell/trade goods and services.
                            </p>
                            <p className="text-xl mb-8">
                                HM is not owned, operated, sponsored, or officially affiliated with the school, or its staff unless explicitly stated otherwise in the terms of service and privacy policy.
                            </p>
                            <p className="text-xl mb-8">
                                While HM is designed to be used by students from the school, it operated independently. However, users are expected to follow all school rules that apply to the content of this platform, as stated in the terms of service.
                            </p>
                            <p className="text-xl mb-8">
                                If HM receives requests or guidance from the school administration regarding safety or policy compliance, HM administrators may take appropriate action, including removing specific content.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}