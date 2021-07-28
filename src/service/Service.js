import axiosInstance from './axiosConfig'

async function getShowsService() {
    var res
    try {
    res = await axiosInstance.get('/shows')
    } catch (error) {
        console.error(error)
    }
    return res
}


async function getShowDetailsService(id) {
    var res 
    try {
     res = await axiosInstance.get(`/shows/${id}`)
    } catch (error) {
        console.error(error)
    }

    return res
}


async function getSearchResultsService(searchInput) {
    var res 
    try {
         res = await axiosInstance.get(`/search/shows?q=${searchInput}`)
    } catch (error) {
        console.error(error)
    }
    return res
}



export { getShowsService, getShowDetailsService, getSearchResultsService };
