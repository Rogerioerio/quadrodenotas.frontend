import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { NoteDataResponse } from "../interface/NoteDataResponse";

const API_URL = "http://localhost:8080";

const postData = async (data: NoteDataResponse): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/quadrodenotas', data);
    return response;
}
    

export function useNoteDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['note-data']});
        }
    })

    return mutate;
}