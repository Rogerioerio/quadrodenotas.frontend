import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { NoteData } from "../interface/NoteData";

const API_URL = "http://localhost:8080";

const fetchData = async (): AxiosPromise<NoteData[]> => {
    const response = axios.get(API_URL + "/quadrodenotas");
    return response;
} 
    
export function useNoteData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['note-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}