import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
import { RiGeminiFill } from "react-icons/ri";
import { PiReadCvLogoFill } from "react-icons/pi";
import { FaRobot } from "react-icons/fa6";

import { title } from "process";



export default function homeCard() {
    const cards = [
        {
            title : "ATS Friendly",
            description : "Our AI-powered resume builder ensures your resume is optimized for Applicant Tracking Systems",
            icon  : <FaRobot />


        },
        {
            title : "Customizable Templates",
            description : "Choose from a variety of professionally designed templates that can be tailored to your industry and personal style.",
            icon  : <PiReadCvLogoFill />

        },
        {
            title : "AI-Powered Suggestions",
            description : "Get real-time feedback and suggestions to improve your resume content, structure, and keywords.",
            icon  : <RiGeminiFill />
        }
    ]
    
    
    return (
        <div className="flex flex-row justify-center items-center gap-6 md:gap-8 py-8">
            {cards.map((card, index) => (
                <Card key={index} className="w-72 h-80 shadow-lg">
                    <CardHeader className="text-4xl text-secondary flex justify-center pt-4">
                        {card.icon}
                    </CardHeader>
                    <CardBody className="text-center">
                        <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                        <p className="text-gray-600">{card.description}</p>
                    </CardBody>
                </Card>
            ))}
        </div>
    )
}
