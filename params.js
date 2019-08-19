module.exports = {
	
	decode(args){
	    const indexIda = args.indexOf("--ida");
	    const indexVolta = args.indexOf("--volta");
	    
	    const dataIda = args[indexIda+1];
	    const dataVolta = args[indexVolta+1];

	    const aeroportosIda = args.slice(indexIda+2, indexVolta);
	    const aeroportosVolta = args.slice(indexVolta+2);

	    return {
	    	dataIda: dataIda,
	    	dataVolta: dataVolta,
	    	aeroportosIda: decodeAirports(aeroportosIda),
	    	aeroportosVolta: decodeAirports(aeroportosVolta)
	    }
	}

}

function decodeAirports(airportParams){
	var airports = [];

	for (i = 0; i < airportParams.length; i+=2){
		airports.push({
			airport: airportParams[i],
			timeLimit: airportParams[i+1]
		});
	}

	return airports;
}