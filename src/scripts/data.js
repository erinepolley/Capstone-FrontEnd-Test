const baseURL = "https://data.nashville.gov/resource/yjju-hypq.json/?status=Existing"

const API = {
getData () {
    return fetch(`${baseURL}`,
    {
        "headers": {
            "Accept": "application/json",
            "X-App-Token": "P7SZS21rPkPvHmuIvW4glESQf"
        }
    })
    .then(response => response.json())
}

}

export default API