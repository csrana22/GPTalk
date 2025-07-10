import { useState } from "react";
import { Link } from "react-router-dom";
import {TypeAnimation} from "react-type-animation"

const Home = () => {
    const [typingStatus, setTypingStatus] = useState("human1")
    return ( 
        <div className="flex items-center gap-[100px] h-[100%] 
        [@media(max-width:1024px)]:flex-col [@media(max-width:1024px)]:gap-0">
            <img src="/orbital.png" alt="" className="absolute bottom-0 left-0 opacity-[0.1] z-[-1] animate-orbital" />
            <div className="flex-1 flex flex-col items-center justify-center gap-[16px] text-center">
                <h1 className="font-bold text-[128px] bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text
                [@media(max-width:1280px)]:text-[64px]">GPTalk</h1>
                <h2 className="font-bold">Supercharge your creativity and productivity</h2>
                <h3 className="font-normal max-w-[70%] [@media(max-width:1024px)]:max-w-[100%]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat sint
                    dolorem doloribus, architecto dolor.
                </h3>
                <Link className="py-[15px] px-[25px] bg-[#217bfe] text-white rounded-[20px] text-[14px] mt-[20px] hover:bg-white hover:text-[#217bfe]" to="/dashboard">Get Started</Link>
            </div>
            <div className="flex-1 flex items-center justify-center h-[100%]">
                <div className="flex items-center justify-center bg-[#140e2d] rounded-[50px] w-[80%] h-[50%] relative">
                    <div className="w-[100%] h-[100%] overflow-hidden absolute top-0 left-0 rounded-[50px]">
                        <div className="bg-[url('/bg.png')] h-[100%] w-[200%] opacity-[0.2] bg-[length:auto_100%] animate-slide"></div>
                    </div>
                    <img className="animate-inout w-[100%] h-[100%] object-contain" src="/bot.png"></img>
                    <div className="absolute bottom-[-30px] right-[-50px] flex items-center gap-[10px] p-[20px] bg-[#2c2937] rounded-[10px]
                    [@media(max-width:1024px)]:hidden [@media(max-width:1280px)]:right-0">
                        <img src={
                            typingStatus === "human1"
                            ? "/human1.jpeg"
                            : typingStatus === "human2"
                            ? "/human2.jpeg"
                            : "/bot.png"
                        } 
                        className="w-[32px] h-[32px] rounded-[50%] object-cover">
                        </img>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                "Human:We produce food for Mice",
                                2000,
                                () => {
                                setTypingStatus("bot");
                                },
                                "Bot:We produce food for Hamsters",
                                2000,
                                () => {
                                setTypingStatus("human2");
                                },
                                "Human2:We produce food for Guinea Pigs",
                                2000,
                                () => {
                                setTypingStatus("bot");
                                },
                                "Bot:We produce food for Chinchillas",
                                2000,
                                () => {
                                setTypingStatus("human1");
                                },
                            ]}
                            wrapper="span"
                            speed={50}
                            cursor={true}
                            repeat={Infinity}
                            omitDeletionAnimation={true}
                        />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-[20px] left-[50%] transform translate-x-[-50%] flex flex-col items-center gap-[20px]">
                <img src="/logo.png" alt="" className="w-[16px] h-[16px]"/>
                <div className="flex gap-[10px] text-[#888] text-[10px]">
                    <Link to="/">Terms of Service</Link>
                    <span>|</span>
                    <Link to="/">Privacy Policy</Link>
                </div>
            </div>
        </div>
    )
}

export default Home;