import React, { useState } from "react";
function User({ updateData }) {
    const [app, setApp] = useState({
        id: '1',
        name: "App",
        age: 20,
        gender: "male"
    });

    const handleClick = (event) => {
        setApp(currentApp => ({
            ...currentApp,
            name: event.target.value,
            age: event.target.value
        }));
    };
    return (
        <div>
            <p key={app.id} >Name: {app.name}<br />Age: {app.age}</p>
            <form style={{ display: "inline-grid" }} onSubmit={(e) => {
                e.preventDefault();
            }}>
                <input type="text" name="name" value={app.name} onChange={(e) => {
                    setApp(currentApp => ({
                        ...currentApp,
                        name: e.target.value
                    }));
                    updateData(currentApp => ({
                        ...currentApp,
                        name: e.target.value
                    }));
                }} />
                <input type="number" name="age" value={app.age} onChange={(e) => {
                    setApp(currentApp => ({
                        ...currentApp,
                        age: e.target.value
                    }));
                    updateData(currentApp => ({
                        ...currentApp,
                        age: e.target.value
                    }));
                }} />
                <button onClick={() => {
                    console.log(app);
                }}>Submit</button>
            </form>
        </div>

    );
}
export default User;