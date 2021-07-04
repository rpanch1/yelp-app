import { BEARER_TOKEN, BUSINESS_SEARCH_URL, COORDINATES } from './authentication';

const getBusinessSearch = async (term) => {
    try{
        const response = await fetch(`${BUSINESS_SEARCH_URL}${term}${COORDINATES}`, {
            headers: {
                Authorization: `Bearer ${BEARER_TOKEN}`,
                Origin: 'localhost',
                withCredentials: true,
            }
        }).then(response => response.json())
        .then(response => (response['businesses']))
        
        return response;
    }
    catch(e){
        console.error(e);
    }
}


const BusinessSearch = (term) => {
    return (
        getBusinessSearch(term)
    )
}

export default BusinessSearch
