import { useState } from "react";

export default function App() {

    const [color, setColor] = useState("#737373")
    const [text, setText] = useState("Press any button down there 👀")

    return (
        <div className="flex flex-wrap justify-center items-center w-full h-screen duration-200" style = {{backgroundColor : color}}>
            <div className="text-center text-2xl font-medium w-3/5">{text}</div>
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                    <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style= {{backgroundColor : "#d946ef"}}
                    onClick={() => {setColor("#d946ef"); setText("Purple is the color of a sleepy kitten's fur, a magical amethyst sparkling in the sun, and a field of lavender blooming in the breeze.")}}>
                        purple
                    </button>
                    <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style= {{backgroundColor : "#059669"}}
                    onClick={() => {setColor("#059669"); setText("Green's the scene, for fluffy leaves, and happy bees that buzz and weave.")}}>
                        green
                    </button>
                    <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style= {{backgroundColor : "#3b82f6"}}
                    onClick={() => {setColor("#3b82f6"); setText("Skies so blue, like a robin's hue, a day for dreams to come true!")}}>
                    blue
                    </button>
                    <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style= {{backgroundColor : "pink"}}
                    onClick={() => {setColor("pink"); setText("Pink's the wink, of a seashell bright, and fluffy clouds that drift so light.")}}>
                    pink
                    </button>
                    <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style= {{backgroundColor : "#facc15"}}
                    onClick={() => {setColor("#facc15"); setText("Yellow's the fellow, for sunshine mellow, and chicks so fluffy and bright yellow!")}}>
                        yellow
                    </button>
                </div>
            </div>
        </div>
    )
}
