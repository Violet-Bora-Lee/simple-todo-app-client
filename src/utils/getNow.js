const getNow = () => {

	// return the today in YYYY-MM-DD format
	let date = new Date(),
		year = date.getFullYear(),
		month = '' + (date.getMonth() + 1),
		day = '' + date.getDate();

	if(month.length < 2) {
		month = '0' + month;
	}
	if(day.length < 2) {
		day = '0' + day;
	}
	return [year, month, day].join('-');
}

export default getNow;
