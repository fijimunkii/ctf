//  !AIVDM,1,1,,A,14eG;o@034o8sd<L9i:a;WF>062D,0*7D 
// 
// !AIVDM: Message type
// 1 Number of sentences
// 1 Sentence number
// blank Sequential Message ID
// A AIS Channel
// 14eG;o@034o8sd<L9i:a;WF>062D Encoded AIS data
// 0* End of data
// 7D NMEA Checksum
//
// http://bosunsmate.org/ais/#bitvector
// http://www.bosunsmate.org/ais/message1.php
// https://www.navcen.uscg.gov/?pageName=AISMessagesB


const encoded = "14eG;o@034o8sd<L9i:a;WF>062D";
const decode = str => str.split('').map(d => d.charCodeAt(0)-48).map(d => d > 40 ? d-8 : d).map(d => d.toString(2).padStart(6,'0'));

const bitvector = decode(encoded).join('');

console.log(bitvector.slice(8,30));

