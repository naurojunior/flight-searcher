const axios = require('axios');

function filterData(results){
    return results['_r'][2][2][0];
}

function getPrice(flight){
    return flight[0][6];
}

function getData(flight){
    return flight[0][4][0];
}

function getFlight(vooDados, vooValor){
    return {
        aeroporto_saida : vooDados[0],
        aeroporto_volta : vooDados[1],
        empresa: vooDados[8][1],
        horario_ida: vooDados[3][0],
        horario_volta: vooDados[4][0],
        valor : vooValor
    };
}

function getPreferredFlights(results){
    const flightArray = filterData(results);

    for(i = 0; i < flightArray.length; i++){
        try{
            vooValor = getPrice(flightArray[i]);
            vooDados = getData(flightArray[i]);
        
            console.log(getFlight(vooDados,vooValor));
        }catch(e){
            
        }
    }
}

async function fetchFlights(aiportOne, airportTwo, destinyOne, destinyTwo, dia){
    const responseOrigin = await axios.get(`https://www.google.com/async/flights/search?vet=10ahUKEwju-PODoorkAhULDrkGHRuGAt4QjUMIaSgA..i&ei=SiNYXe6rFIuc5OUPm4yK8A0&yv=3&async=data:%5B%5B%5B%5B%5B%5Bnull%2C%5B%5B%22${aiportOne}%22%2C0%5D%2C%5B%22${airportTwo}%22%2C0%5D%5D%5D%2C%5Bnull%2C%5B%5B%22${destinyOne}%22%2C0%5D%2C%5B%22${destinyTwo}%22%2C0%5D%5D%5D%2C%5B%22${dia}%22%5D%5D%5D%2C2%2C%5B%5D%2Cnull%2Cnull%2Cnull%2Cnull%2C1%2Cnull%2C2%2Cnull%2Cnull%2Cnull%2Cnull%2Cnull%2Ctrue%5D%2C%5B%5B%5Bnull%2C%5B%5D%2C%5B%5D%2C%5B%5D%2C%5B%5D%2Cnull%2C%5B%5D%2C%5B%5D%5D%5D%5D%2Cnull%2C%22BRL%22%2Cnull%2C%5B%5D%5D%2C%5B0%5D%5D,s:s,tfg-bgr:%5B%22!BwSlBCVCsci0balv2-5EMiA8Wsh02u4CAAAAtlIAAAAXmQGNgo9p2O0075OInX1JfYbSyBM53SBjBPZ6DaD1_Cf9-zB0fOubOVcVIL8mLe9APu-0M0nGvVn-eLHqOSDAnYL40Kwg1ePSQRWSPAZTJ9ftaIgdPKKzQpxrcs8EAJyMbZrGW8fsgmRGimY8zQrvyJQ-BhI1PNlJTB2ZsFZQnpdcU1FdPR1Z6UppUimmRlBDHduMqly6tN_tFJTKbPW3FkK5s_86VxVOzi7A8CAHs1Ao8cFl4RXnM11y_Z7nF1LUBjSp6G71PJGDBVtq1HVknto3x13TaDtw9C4FvGJAhVEhHtEiJ3-IZPy3LM0BTkqsbYG4u7thBr54ixR-Ey_6U8VeBPdnDNWtOUZRIw-q-NlFBfDGSppqsRUJ8s9HHy3HMV8Gb4YrAs1_gLsCGmA0BuwTrqd0eL11qdRZBP8c5rJdWrwQGy-33dyd-dloVDjh0uQHjt6wvDImDpg22XRMc6BBT_anghxJC2BhuRvDI5O6c2ZaLEtN64kWIYrqiMDz8ONakQnyEtfc45-vtPPANg%22%2Cnull%2Cnull%2C24%2Cnull%2Cnull%2Cnull%2C0%5D,_fmt:jspb`);
    const results = JSON.parse(responseOrigin.data.substr(5));
    
    getPreferredFlights(results);
    
}

fetchFlights('FLN','NVT', 'CGH','GRU', '2019-09-23');