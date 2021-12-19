let getPublishers = (newsDataArray) => {
	let publishers = new Set();

	for (let i = 0; i < newsDataArray.length; i++) {
		let newData = newsDataArray[i];
		if (publishers.has(newData.PUBLISHER))
			continue;
		publishers.add(newData.PUBLISHER);
	}
	return [...publishers];

}

export default getPublishers;