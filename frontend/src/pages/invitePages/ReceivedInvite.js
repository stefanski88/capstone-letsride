import Page from "../../components/Page";
import {useAuth} from "../../auth/AuthProvider";
import {useParams} from "react-router-dom";
import {useState} from "react";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Main from "../../components/Main";
import {deleteInvite, updateInvite} from "../../services/API-Service";


export default function ReceivedInvite() {

    const {token} = useAuth()
    const {id} = useParams()

    const handleSelect = async (selectValue)=>{
        if(selectValue==='reject')
        {
         const deleteRequest = await deleteInvite(id,token)
            if(deleteRequest){
                //User deleted
                alert(`invite ${deleteRequest.inviteID} is deleted`)
            }
        else{
                //error on deletion
                console.error('error in invite deletion')
            }
        }
        if(selectValue==='accept'){
            const updateRequest = await updateInvite(id, token)
            if (updateRequest) {
                alert(`invite ${updateRequest.inviteID} is already updated`)
            }
        else {
            console.error('error in invite update')
            }
        }


}
    return (
        <Page>
        <Header />
            <Main >
                <select onChange={(e)=>{

                    handleSelect(e.target.value)
                }}>
                    <option value="">Please select..</option>
                    <option value="accept">accept</option>
                    <option value="reject">reject</option>
                </select>
            </Main>
        <NavBar />
        </Page>
    );
}