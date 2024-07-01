import React, { useState } from 'react';
function ListUser({ userInfo, deleteUser }) {
    const [showHide, showHideAll] = useState("true");
    return (
        <>
            {/* Nhớ là cái ! là trả về giá trị phủ định lại */}
            <button onClick={() => showHideAll(!showHide)}>{showHide === false ? 'Show' : 'Hide'}</button>
            {
                showHide && <div>
                    <h2>List of Users</h2>
                    {userInfo.map((user) => {
                        return (
                            <div key={user.id} className={user.age >= 20 ? 'red' : 'blue'}>
                                Id:{user.id}  Name: {user.name} Age:{user.age}
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                                <hr />
                            </div>
                        );
                    })}
                </div>
            }

        </>
    );
}
export default ListUser;