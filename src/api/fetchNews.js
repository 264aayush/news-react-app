import * as axios from 'axios';

let apiURL = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/newsf6e2440.json";
let fetchData = () => {
	return axios.get(apiURL);
}

export { fetchData };