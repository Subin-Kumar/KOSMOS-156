import { useDispatch } from "react-redux";
import { publicRequest } from "../Rqst/request";
import { KdataAdd } from "../Slice";



export const GetAllAData = async (disp) => {

    try {
        const Adat = await publicRequest.get(`/Cli/getAll`)
        
        console.log("Adat",Adat.data);
        disp(KdataAdd(Adat.data))

        return Adat
    } catch (err) {
        console.log('error--', err);
    }
}

export const Wetin = async (data) => {
    console.log('data--', data);
    try {

        const response = await publicRequest.post("/Cli/Win", data)
        console.log("success", response);
    } catch (err) {
        console.log('error--', err);
    }
}