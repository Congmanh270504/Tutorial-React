import React, { useState } from "react";
function User({ addUser }) {
    //  Tạo 1 biến user tmp 
    const [user, setUser] = useState({
        id: 0,
        name: "",
        age: 0
    });


    return (
        <div className="user">
            <h1>Create User</h1>
            <form style={{ display: "inline-grid" }} onSubmit={(e) => {
                e.preventDefault();
            }}>
                <input type="text" name="name" onChange={(e) => {
                    setUser(currentUSer => ({
                        ...currentUSer,
                        name: e.target.value,
                    }));
                }} />
                <input type="number" name="age" onChange={(e) => {
                    setUser(currentUSer => ({
                        ...currentUSer,
                        age: e.target.value,
                    }));
                }} />
                <button onClick={(e) => {
                    setUser({
                        ...user,
                        id: Math.floor(Math.random() * 1000) + 1,
                    });
                    addUser(user);
                }
                }> Submit</button>

                {/* mỗi 1 dòng setUser thì mình update cái state của name, age , id cái submit thì mình add vào cái list  */}
            </form>

        </div>
    );
}
export default User;