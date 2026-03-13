import { supabase } from "../../supabase/supabase"



export const getProducts=()=> async(dispatch)=>{
    const {data} = await supabase
    .from("mentorProduct")
    .select("*")


    dispatch({
        type: "GET_PRODUCTS",
        payload: data
    })

}


export const addProducts=(product)=> async(dispatch)=>{
    const {data} = await supabase
    .from("mentorProduct")
    .insert([product])
    .select()


    dispatch({
        type: "ADD_PRODUCTS",
        payload: data[0]
    })

}


export const deleteProducts=(id)=> async(dispatch)=>{
     await supabase
    .from("mentorProduct")
    .delete().eq("id", id)
    .select()


    dispatch({
        type: "DELETE_PRODUCTS",
        payload: id
    })

}


export const editProducts=(id)=> async(dispatch)=>{
     await supabase
    .from("mentorProduct")
    .update().eq("id", id)
    .select()


    dispatch({
        type: "EDIT_PRODUCTS",
        payload: id
    })

}