import axiosInstance from './axiosConfig'

function getShowsService(){
    return axiosInstance.get('/shows')
}

function getShowDetailsService(id){
    return axiosInstance.get(`/shows/${id}`)
}


function getSearchResultsService(searchInput){
    return axiosInstance.get(`/search/shows?q=${searchInput}`);
}



export {getShowsService, getShowDetailsService,getSearchResultsService};
