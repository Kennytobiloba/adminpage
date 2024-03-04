import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../data";

const userSlice = createSlice({
    name:"users",
    initialState: userList,
    reducers:{
        addUser:(state,action) => {
            state.push(action.payload)

        },

        updateUser:(state,action) => {
            const {id,name,email,phone,emailno} = action.payload
            const uu = state.find(user => user.id == id)
            if(uu){
                uu.name = name;
                uu.email = email;
                uu.emailno = emailno;
                uu.phone = phone;
            }
        },
        userdelete:(state,action) => {
            const { id } = action.payload
            const uu = state.find(user => user.id == id)
            if(uu){
                return state.filter (f => f.id !==id)
            }
        }
       

    },
   

})
export const {updateUser,addUser,userdelete} = userSlice.actions
export default userSlice.reducer;
