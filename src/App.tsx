import { useState } from "react";
import "./App.css";
import ImageHeader from "./components/ImageHeader";
import Input from "./components/Input";
import Button from "./components/Button";
import type { Items } from "./components/types/utils";
import ItemList from "./components/ItemList";


function App() {
    const [items, setItems] = useState<Items[]>([]);
    const [inputValue, setInputValue] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setItems((prev) => [...prev, { title: inputValue, id: Date.now().toString() }]);
        setInputValue("");
    };
  

    return (
        <div className="h-[100vh] w-[100%] flex flex-col justify-center items-center">
            <ImageHeader />
            <div className="w-[350px]">
                <form className="mb-5" onSubmit={handleSubmit}>
                    <Input type="text" inputValue={inputValue} setInputValue={setInputValue} />
                    <Button className="bg-gray-700 w-full p-2">Add</Button>
                </form>
                <div className="overflow-y-auto">
                    <ItemList items={items} setItems={setItems} />
                </div>
            </div>
        </div>
    );
}

export default App;
