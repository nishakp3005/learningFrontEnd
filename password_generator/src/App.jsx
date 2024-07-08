import { useState, useCallback, useEffect, useRef } from "react";

function App() {
    const [length, setLength] = useState(8);
    const [password, setPassword] = useState("");
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);

    const passwordRef = useRef(null);
  
    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (numberAllowed) str += "0123456789";
        if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }

        setPassword(pass);
    }, [length, numberAllowed, charAllowed, setPassword]);

    const copyToClipboard = useCallback(() => {
        passwordRef.current?.select()
        window.navigator.clipboard.writeText(password)
    }, [password])

    useEffect(() => {
        passwordGenerator();
    }, [length, numberAllowed, charAllowed, passwordGenerator]);

    return (
        <div className="flex items-center justify-center h-dvh w-dvw">
            <div className="flex flex-col items-center justify-center text-white h-1/3 w-2/5 gap-4 rounded-3xl border-2 border-white">
                <h1 className="text-3xl font-semibold">Password Generator</h1>
                <div className="flex shadow rounded-lg overflow-hidden mb-4 text-black">
                    <input
                        type="text"
                        value={password}
                        className="outline-none w-full py-1 px-3"
                        placeholder="Password"
                        readOnly
                        ref={passwordRef}
                    />
                    <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
                        onClick={copyToClipboard}
                    >
                        copy
                    </button>
                </div>
                <div className="flex text-sm gap-x-6 text-orange-500">
                    <div className="flex items-center gap-x-1">
                        <input
                            type="range"
                            min={6}
                            max={100}
                            value={length}
                            className="cursor-pointer"
                            onChange={(e) => {
                                setLength(e.target.value);
                            }}
                        />
                        <label> length : {length}</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            defaultChecked={numberAllowed}
                            id="numberInput"
                            onChange={() => {
                                setNumberAllowed((prev) => !prev);
                            }}
                        />
                        <label>Numbers </label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            defaultChecked={charAllowed}
                            id="charInput"
                            onChange={() => {
                                setCharAllowed((prev) => !prev);
                            }}
                        />
                        <label>Characters</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
