import { useState } from "react";

const useForm = (initialState = {}) => {

    const [data, setData] = useState(initialState)

    const reset = () =>{
        setData(initialState)
    }

    const handleChange = ({target})=> setData(
        {
            ...data, 
            [target.name]: target.value
        }
    )
    return{reset, data, handleChange};
};

export default useForm;