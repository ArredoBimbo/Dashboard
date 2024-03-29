import React, { useState, useEffect } from 'react'
import { Input, Row, Col, Card, Form, InputNumber, Alert, Select, Tag, Descriptions } from 'antd';
import { rules, sottocategorie, categorie, ultimiArrivi, gratis, personalizzazione, colori, taglie_tutte } from 'configs/AppConfig'

const { Option } = Select;

const GeneralField = props => {

	const [sottocat, setSottocat] = useState([])
	const [listaColori, setListaColori] = useState(props.listaColori)
	const [listaTaglie, setListaTaglie] = useState([])
	const [listaTaglie_dict, setListaTaglie_dict] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}])
	const [ultimoArrivo, setUltimoArrivo] = useState(false)
	const [personalizza, setPersonalizza] = useState(false)
	const [prenota, setPrenota] = useState([[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []])
	const [prodottiPersonalizzazione, setProdottiPersonalizzazione] = useState([])



	const [prezzo, setPrezzo] = useState(0)
	const [sconto, setSconto] = useState(0)

	const [oneTime, set_oneTime] = useState(true)

	const vettore_colori = props.colori_disabilitati

	const vettore_taglie = props.taglie_disabilitate
	const vettore_numeri_disp = props.numColori

	let appoggio_taglie_mio = []
	for (let i = props.taglie_disabilitate.length; i < 20; i++) {
		appoggio_taglie_mio = []
		for (let j = 0; j < taglie_tutte.length; j++) {
			appoggio_taglie_mio.push({
				value: taglie_tutte[j]
			})
			if (j == taglie_tutte.length - 1) {
				vettore_taglie.push(
					appoggio_taglie_mio
				)
			}
		}
	}

	//AAAAAAAAAAAAAAAAAAAAAAAAAAA BACKUP
	let appoggio_render_mio = []
	//console.log("li", props.taglie_disabilitate)

	//mettere qui la logica dei colori come fatto per le taglie!!!! MANUELLLLLLLLLLLL

	for (let i = props.numColori.length; i < 20; i++) {
		appoggio_render_mio = []
		//console.log("qui")
		for (let j = 0; j < taglie_tutte.length; j++) {
			appoggio_render_mio.push("")
			if (j == taglie_tutte.length - 1) {
				vettore_numeri_disp.push(appoggio_render_mio)
			}
		}
	}
	//console.log("vettore_numeri_disp", vettore_numeri_disp)

	//console.log("vettore_taglie", vettore_taglie)
	/*

	console.log("vettore_taglie", vettore_taglie)

	console.log("props.listaTaglie", props.listaTaglie)
	console.log("props.taglie_totali", props.taglie_totali)

	
		//const [vettore_colori, setVettore_colori] = useState([])
	
		console.log("props.colori",props.colori)
		console.log("props.colori_totali",props.colori_totali)
		console.log("vettore_colori",vettore_colori)
	
		console.log("props.taglie",props.taglie)
		console.log("props.taglie_totali",props.taglie_totali)
		console.log("vettore_taglie",vettore_taglie)
	
		*/
	if (props.colori.length != 0) {
		if (oneTime) {
			console.log("qui props colori")
			for (let i = 0; i < props.colori_totali.length; i++) {
				const value = `${props.colori_totali[i]}`;
				vettore_colori.push({ value })
				if (i == props.colori_totali.length - 1) {
					set_oneTime(false)
				}
			}
			console.log(vettore_colori)

		}
	}
	else {
		if (oneTime) {
			for (let i = 0; i < colori.length; i++) {
				vettore_colori.push({ value: `${colori[i]}` })
				if (i == colori.length - 1) {
					set_oneTime(false)
				}
			}
		}

	}

	if (props.taglie.length != 0) {
		if (oneTime) {
			for (let i = 0; i < props.taglie_totali.length; i++) {
				if (props.taglie_totali[i].length == 1) {
					const value = `${props.taglie_totali[i]}`;
					vettore_taglie[i].push({ value })
				} else {
					for (let j = 0; j < props.taglie_totali[i].length; j++) {
						const value = `${props.taglie_totali[i][j]}`;
						vettore_taglie[i].push({ value })

					}
				}
			}
		}
	}
	else {
		if (oneTime) {
			for (let i = 0; i < taglie_tutte.length; i++) {
				vettore_taglie.push({ value: `${taglie_tutte[i]}` })
			}
		}
	}


	useEffect(() => {

		/* console.log("props.numColori", props.numColori)
		console.log("listaTaglie", listaTaglie)
		console.log("props.listaTaglie", props.listaTaglie) */
		FunzioneDiPrenotazione(props.listaTaglie, listaColori, props.prenotazioni)
		let appoggio = []
		for (let i = 0; i < props.all_prodotti.length; i++) {
			appoggio.push(props.all_prodotti[i].nomeArticolo)
		}
		setProdottiPersonalizzazione(appoggio)
	}, []);



	const FunzioneDiPrenotazione = (inputListaTaglie, inputListaColori, inputPrenotazioni) => {

		for (let k = 0; k < inputListaColori.length; k++) {
			for (let j = 0; j < inputListaTaglie[k].length; j++) {

				if (inputPrenotazioni[k][inputListaTaglie[k][j]].prenotazione == "No") {

					onChangePrenotazione("Si", k, j, inputListaTaglie[k][j])
					onChangePrenotazione("No", k, j, inputListaTaglie[k][j])
				}
				else {
					onChangePrenotazione("No", k, j, inputListaTaglie[k][j])
					onChangePrenotazione("Si", k, j, inputListaTaglie[k][j])
				}
			}
		}
	}

	const onChangeUltimiArrivi = event => {
		setUltimoArrivo(!ultimoArrivo)
	}


	const onChangePersonalizzazione = event => {
		//console.log("event personalizza", event)
		setPersonalizza(event)
	}

	const onChangePrenotazione = (event, key, key2, taglia) => {
		console.log("event prenota", event)
		console.log("event taglia", taglia)
		console.log("listaTaglie", listaTaglie)
		console.log("key", key)
		console.log("key2", key2)
		console.log("listaTaglie_dict", listaTaglie_dict)
		let appoggio = prenota
		let appoggio_2 = listaTaglie_dict
		let presente = false
		console.log("props.taglie", props.taglie[key])
		console.log("props.listaTaglie", props.listaTaglie)
		console.log("props.taglie_totali", props.taglie_totali)
		//console.log("props.taglie", props.taglie[key])
		let appoggio_mio = []

		if (listaTaglie.length == 0 && props.taglie.length != 0) {


			for (let i = 0; i < props.listaTaglie.length; i++) {
				appoggio_mio = []
				for (let j = 0; j < props.listaTaglie[i].length; j++) {
					appoggio_mio.push(props.listaTaglie[i][j])
					if (j == props.listaTaglie[i].length - 1) {
						appoggio_2[i].stock = appoggio_mio
					}
				}
			}

			console.log("appoggio", appoggio)

			for (let j = 0; j < props.listaTaglie[key].length; j++) {
				if (event == "Si" && props.listaTaglie[key][j] == taglia) {
					console.log("appoggio in FOR", appoggio)



					appoggio[key].push(taglia)
					console.log("appoggio", appoggio)
					/* 	

			presente = false
			if (listaTaglie[key].prenotazione == undefined) {
				//prima volta
				appoggio[key].push(taglia)
			} else {
				if (listaTaglie[key].prenotazione.length == 0) {
					appoggio[key].push(taglia)
				} else {
					for (let i = 0; i < listaTaglie[key].prenotazione.length; i++) {

						if (listaTaglie[key].stock[j] == listaTaglie[key].prenotazione[i]) {
							presente = true
						}
						if (i == listaTaglie[key].prenotazione.length - 1 && !presente) {
							appoggio[key].push(taglia)
						}
					}
				}

			}

			if (j == listaTaglie[key].stock.length - 1) {
				appoggio_2[key].prenotazione = appoggio[key]
			} */
				}
				else if (event == "No" && props.listaTaglie[key][j] == taglia) {
					const index = appoggio[key].indexOf(taglia);
					console.log("appoggio", appoggio)
					console.log("appoggio[key]", appoggio[key])
					if (index > -1) {
						appoggio[key].splice(index, 1); // 2nd parameter means remove one item only
					}
					if (j == props.listaTaglie[key].length - 1) {
						appoggio_2[key].prenotazione = appoggio[key]
					}
				}
			}
		}
		else {
			for (let j = 0; j < listaTaglie[key].stock.length; j++) {
				if (event == "Si" && listaTaglie[key].stock[j] == taglia) {
					presente = false
					if (listaTaglie[key]["prenotazione"] == undefined) {
						//prima volta
						console.log("PRIMA VOLTA")
						appoggio[key].push(taglia)
					} else {
						if (listaTaglie[key]["prenotazione"].length == 0) {
							appoggio[key].push(taglia)
						} else {
							for (let i = 0; i < listaTaglie[key].prenotazione.length; i++) {

								if (listaTaglie[key].stock[j] == listaTaglie[key].prenotazione[i]) {
									presente = true
								}
								if (i == listaTaglie[key].prenotazione.length - 1 && !presente) {
									appoggio[key].push(taglia)
								}
							}
						}

					}

					if (j == listaTaglie[key].stock.length - 1) {
						appoggio_2[key].prenotazione = appoggio[key]
					}
				}
				else if (event == "No" && listaTaglie[key].stock[j] == taglia) {
					const index = appoggio[key].indexOf(taglia);
					if (index > -1) {
						appoggio[key].splice(index, 1); // 2nd parameter means remove one item only
					}
					if (j == listaTaglie[key].stock.length - 1) {
						appoggio_2[key].prenotazione = appoggio[key]
					}
				}
			}

		}


		console.log("appoggio", appoggio)


		setPrenota(appoggio)



		let appoggio_3 = []

		for (let i = 0; i < appoggio_2.length; i++) {
			if (appoggio_2[i].stock != undefined) {
				appoggio_3.push(appoggio_2[i])
			}
		}
		console.log("appoggio-269", appoggio)
		console.log("appoggio_2-270", appoggio_2)
		console.log("appoggio_3-271", appoggio_3)
		//console.log(appoggio_2)
		setListaTaglie(appoggio_3)
	}


	const handleChange = event => {
		//console.log("ev", event)
		setSottocat(sottocategorie[event])
		////console.lo("sott", sottocategorie)
		////console.lo(sottocategorie[event])
	}

	

	function handleChange_sconto(value) {
		console.log(value)
		setSconto(value)
	}

	
	function handleChange_prezzo(value) {
		console.log(value)
		setPrezzo(value)
	}

	function handleChange_colori(value) {
		set_oneTime(false)
		////console.lo(`selected ${value}`);
		setListaColori(value)
		//console.lo("value", value)
		let appoggio = listaTaglie_dict
		let appoggio_mio = []
		if (listaTaglie.length == 0 && props.listaTaglie.length != 0) {
			//console.lo("sonoQUIPROPS")
			////console.lo("listaTaglie.length",listaTaglie.length)

			for (let i = 0; i < props.listaTaglie.length; i++) {
				appoggio_mio = []
				for (let j = 0; j < props.listaTaglie[i].length; j++) {
					appoggio_mio.push(props.listaTaglie[i][j])
					if (j == props.listaTaglie[i].length - 1) {
						appoggio[i].stock = appoggio_mio
					}
				}
			}

			//for (let i = props.listaTaglie.length; i < value.toString().split(",").length; i++) {
			appoggio.push({ stock: ["MERDAPROPS"] })
			//}

			////console.lo("appoggioPROPS", appoggio)

			setListaTaglie_dict(appoggio)
			let appoggio_2 = []
			for (let i = 0; i < appoggio.length; i++) {
				if (appoggio[i].stock != undefined) {
					appoggio_2.push(appoggio[i])
				}
			}
			////console.lo(appoggio_2)

			////console.lo("appoggio_2", appoggio_2)

			setListaTaglie(appoggio_2)
		}

		else if (listaTaglie.length != 0) {
			//console.lo("sonoQUISTATO")
			////console.lo("listaTaglie.length",listaTaglie.length)

			//significa che: 1) c'è stata una modifica - 2) non ho mai toccato le taglie - 3) ho aggiunto già un nuovo colore
			for (let i = 0; i < listaTaglie.length; i++) {
				appoggio_mio = []
				for (let j = 0; j < listaTaglie[i].length; j++) {
					appoggio_mio.push(listaTaglie[i][j])
					if (j == listaTaglie[i].length - 1) {
						appoggio[i].stock = appoggio_mio
					}
				}
			}
			////console.lo("listaTaglie.length",listaTaglie.length)
			////console.lo("value.toString().split(",").length",value.toString().split(",").length)
			for (let i = listaTaglie.length; i < value.toString().split(",").length; i++) {
				appoggio[i].stock = []
			}
			////console.lo("appoggio", appoggio)

			setListaTaglie_dict(appoggio)
			let appoggio_2 = []
			for (let i = 0; i < appoggio.length; i++) {
				if (appoggio[i].stock != undefined) {
					appoggio_2.push(appoggio[i])
				}
			}
			////console.lo(appoggio_2)
			setListaTaglie(appoggio_2)
		}

	}

	function handleChange_taglie(value, key) {
		set_oneTime(false)
		//console.lo("handleChange_taglie")
		//console.lo("stato prenota", prenota)



		/*
		//console.lo(value)
		//console.log(key)
		console.log("taglie", listaTaglie)
		console.log("colori", listaColori)
		console.log("props.listaTaglie", props.listaTaglie)
		console.log("props.listaTaglie", props.listaTaglie)
		*/
		let appoggio = listaTaglie_dict
		let appoggio_mio = []
		if (listaTaglie.length == 0 && props.listaTaglie.length != 0) {
			//console.log("sono quiiiiiii")
			// qui perché props esiste e la lunghezza di listaTaglie è nulla
			for (let i = 0; i < props.listaTaglie.length; i++) {
				appoggio_mio = []
				if (i == key) {
					//console.log("dentro props.listaTaglie")
					appoggio[key].stock = value
				} else {
					for (let j = 0; j < props.listaTaglie[i].length; j++) {
						appoggio_mio.push(props.listaTaglie[i][j])
						if (j == props.listaTaglie[i].length - 1) {
							appoggio[i].stock = appoggio_mio
						}
					}
				}
			}
		}

		else if (listaTaglie.length != 0) {
			//significa che: 1) c'è stata una modifica - 2) non ho mai toccato le taglie - 3) ho aggiunto già un nuovo colore
			for (let i = 0; i < listaTaglie.length; i++) {
				appoggio_mio = []
				if (i == key) {
					//console.log("dentro listaTaglie")
					appoggio[key].stock = value
				} else {
					for (let j = 0; j < listaTaglie[i].length; j++) {
						appoggio_mio.push(listaTaglie[i][j])
						if (j == listaTaglie[i].length - 1) {
							appoggio[i].stock = appoggio_mio
						}
					}
				}
			}
		}

		else {
			for (let i = 0; i < listaColori.length; i++) {
				if (i == key) {
					appoggio[key].stock = value
				} else {
					appoggio.push({ stock: [] })
				}
			}
		}




		setListaTaglie_dict(appoggio)

		let appoggio_2 = []

		for (let i = 0; i < appoggio.length; i++) {
			if (appoggio[i].stock != undefined) {
				appoggio_2.push(appoggio[i])
			}
		}

		console.log(appoggio_2)

		let appoggio_4 = prenota

		// FARE QUI IL CONTROLLO CHE SE NEL CASO HO FATTO UNA CANCELLAZIONE, ALLORA CANCELLARE
		// ANCHE DA PRENOTAZIONE ---
		//ES: se il nome della taglia in prenotazione non è presente nella lista di stock, allora levala!!
		let findPrenotato = false
		if (appoggio_2[key].prenotazione != undefined) {
			for (let i = 0; i < appoggio_2[key].prenotazione.length; i++) {
				if (!appoggio_2[key].stock.includes(appoggio_2[key].prenotazione[i])) {
					const index = appoggio_4[key].indexOf(appoggio_2[key].prenotazione[i]);
					console.log("index", index)
					if (index > -1) {
						appoggio_4[key].splice(index, 1); // 2nd parameter means remove one item only
					}
				}

				/* 			findPrenotato = false
							for (let j = 0; j < prenota[key].length; j++) {
								if (appoggio_2[key].stock[i] == prenota[key][j]) {
									console.log("TROVATO")
									findPrenotato = true
								}
								console.log("findPrenotato", findPrenotato)
								console.log("j", j)
								console.log("prenota[key].length - 1", prenota[key].length - 1)
				
								if (!findPrenotato && j == prenota[key].length - 1) {
									console.log("findPrenotato", findPrenotato)
									const index = appoggio_4[key].indexOf(appoggio_4[key][j]);
									console.log("index", index)
									if (index > -1) {
										appoggio_4[key].splice(index, 1); // 2nd parameter means remove one item only
									}
								}
							} */

			}
		}

		console.log("appoggio_4", appoggio_4)

		setListaTaglie(appoggio_2)
		setPrenota(appoggio_4)
	}

	function handleChange_stock(value, key) {
		//console.log(`selected ${value}`);
		//setListaTaglie(value)

		//setListaTaglie([value])
		//console.log(value)
		//console.log(key)
		//console.log(listaTaglie)
		for (let i = 0; i < listaTaglie.length; i++) {
			if (i == key) {

			}
		}
	}

	function tagRender(props) {
		const { label, value, closable, onClose } = props;
		if (value == "Acquamarina") {
			return (
				<Tag color={"#7FFFD4"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Albicocca") {
			return (
				<Tag color={"#FBCEB1"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		} else if (value == "GrigioAlluminio") {
			return (
				<Tag color={"#8C9194"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		} else if (value == "OroRosa") {
			return (
				<Tag color={"#b76e79"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Amaranto") {
			return (
				<Tag color={"#E52B50"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Ambra") {
			return (
				<Tag color={"#FFBF00"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Ametista") {
			return (
				<Tag color={"#884DA7"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Anguria") {
			return (
				<Tag color={"#FC6C85"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Antracite") {
			return (
				<Tag color={"#293133"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Aragosta") {
			return (
				<Tag color={"#ED7465"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Arancione") {
			return (
				<Tag color={"#FF6600"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Ardesia") {
			return (
				<Tag color={"#708090"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Argento") {
			return (
				<Tag color={"#C0C0C0"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Asparago") {
			return (
				<Tag color={"#87A96B"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Avio") {
			return (
				<Tag color={"#5D8AA8"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Avorio") {
			return (
				<Tag color={"#FFFFF0"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Azalea") {
			return (
				<Tag color={"#D3305D"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Azzurro") {
			return (
				<Tag color={"#007FFF"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Azzurrofiordaliso") {
			return (
				<Tag color={"#ABCDEF"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Beige") {
			return (
				<Tag color={"#F5F5DC"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Beigeolivachiaro") {
			return (
				<Tag color={"#908435"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Beigeverdastro") {
			return (
				<Tag color={"#BEBD7F"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Bianco") {
			return (
				<Tag color={"#FFFFFF"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4, color: 'black', borderColor: 'black' }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Biancoantico") {
			return (
				<Tag color={"#FFFEEF"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Biancoantiflash") {
			return (
				<Tag color={"#F2F3F4"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Biancodititanio") {
			return (
				<Tag color={"#FAEBD7"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Biancodizinco") {
			return (
				<Tag color={"#FEFEE9"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Biancofantasma") {
			return (
				<Tag color={"#F8F8FF"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Biancofloreale") {
			return (
				<Tag color={"#FFFAF0"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Biancofumo") {
			return (
				<Tag color={"#F5F5F5"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "BiancoNavajo") {
			return (
				<Tag color={"#FFDEAD"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Biscotto") {
			return (
				<Tag color={"#FFE4C4"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Bistro") {
			return (
				<Tag color={"#3D2B1F"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Blu") {
			return (
				<Tag color={"#0000FF"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Bluacciaio") {
			return (
				<Tag color={"#4682B4"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Blualice") {
			return (
				<Tag color={"#F0F8FF"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "BluBondi") {
			return (
				<Tag color={"#0095B6"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Blucadetto") {
			return (
				<Tag color={"#5F9EA0"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Bluceruleo") {
			return (
				<Tag color={"#2A52BE"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Blucomandostellare") {
			return (
				<Tag color={"#007BB8"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "BludiPersia") {
			return (
				<Tag color={"#1C39BB"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "BludiPrussia") {
			return (
				<Tag color={"#003153"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "BluDodger") {
			return (
				<Tag color={"#1E90FF"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Bluelettrico") {
			return (
				<Tag color={"#003399"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Blumarino") {
			return (
				<Tag color={"#000080"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Blumedio") {
			return (
				<Tag color={"#0000CD"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Blunotte") {
			return (
				<Tag color={"#191970"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Bluoltremare") {
			return (
				<Tag color={"#120A8F"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Blupolvere") {
			return (
				<Tag color={"#B0E0E6"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Blupolverescuro") {
			return (
				<Tag color={"#003399"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Blureale") {
			return (
				<Tag color={"#4169E1"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Bluscuro") {
			return (
				<Tag color={"#00008B"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Bordeaux") {
			return (
				<Tag color={"#800000"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Borgogna") {
			return (
				<Tag color={"#800020"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Bronzo") {
			return (
				<Tag color={"#CD7F32"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		} else if (value == "Bronzoantico") {
			return (
				<Tag color={"#75663F"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Camoscio") {
			return (
				<Tag color={"#F0DC82"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Carbone") {
			return (
				<Tag color={"#050402"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Cardo") {
			return (
				<Tag color={"#D8BFD8"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Carminio") {
			return (
				<Tag color={"#960018"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		} else if (value == "Cartadazucchero") {
			return (
				<Tag color={"#E0FFFF"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Castagno") {
			return (
				<Tag color={"#CD5C5C"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Castagnoscuro") {
			return (
				<Tag color={"#986960"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Castagnochiaro") {
			return (
				<Tag color={"#DDADAF"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Catrame") {
			return (
				<Tag color={"#D2B48C"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Catramescuro") {
			return (
				<Tag color={"#918151"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Chartreuse") {
			return (
				<Tag color={"#7FFF00"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Ciano") {
			return (
				<Tag color={"#00FFFF"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Ciliegia") {
			return (
				<Tag color={"#DE3163"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Cioccolato") {
			return (
				<Tag color={"#D2691E"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Cobalto") {
			return (
				<Tag color={"#0047AB"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Conchiglia") {
			return (
				<Tag color={"#FFF5EE"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Corallo") {
			return (
				<Tag color={"#FF7F50"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Crema") {
			return (
				<Tag color={"#FFFDD0"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Cremisi") {
			return (
				<Tag color={"#DC143C"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Denim") {
			return (
				<Tag color={"#1560BD"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Denimchiaro") {
			return (
				<Tag color={"#5E86C1"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Eliotropo") {
			return (
				<Tag color={"#DF73FF"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Écru") {
			return (
				<Tag color={"#C2B280"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Fioredigranturco") {
			return (
				<Tag color={"#6495ED"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Fogliadite") {
			return (
				<Tag color={"#008080"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Fucsia") {
			return (
				<Tag color={"#F400A1"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Fulvo") {
			return (
				<Tag color={"#EBB55F"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Gainsboro") {
			return (
				<Tag color={"#DCDCDC"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Giada") {
			return (
				<Tag color={"#00A86B"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Giallo") {
			return (
				<Tag color={"#FFFF00"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Giallomiele") {
			return (
				<Tag color={"#A98307"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "GialloNapoli") {
			return (
				<Tag color={"#F7E89F"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Giallopastello") {
			return (
				<Tag color={"#FFFF66"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Giallosabbia") {
			return (
				<Tag color={"#C6A664"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Giallosegnale") {
			return (
				<Tag color={"#E5BE01"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Gialloscuolabus") {
			return (
				<Tag color={"#FFD800"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Glicine") {
			return (
				<Tag color={"#C9A0DC"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Granata") {
			return (
				<Tag color={"#7B1B02"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Grano") {
			return (
				<Tag color={"#F5DEB3"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Grigio5") {
			return (
				<Tag color={"#F7F7F7"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}

		else if (value == "Grigioasparago") {
			return (
				<Tag color={"#465945"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Grigioardesiascuro") {
			return (
				<Tag color={"#2F4F4F"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Grigioardesiachiaro") {
			return (
				<Tag color={"#778899"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Grigiocenere") {
			return (
				<Tag color={"#E4E5E0"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Grigiotopo") {
			return (
				<Tag color={"#646B63"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Incarnatoprugna") {
			return (
				<Tag color={"#CC8899"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Indaco") {
			return (
				<Tag color={"#4B0082"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Indacoelettrico") {
			return (
				<Tag color={"#6F00FF"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Indacoscuro") {
			return (
				<Tag color={"#310062"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "InternationalKleinBlue") {
			return (
				<Tag color={"#002FA7"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Isabella") {
			return (
				<Tag color={"#F4F0EC"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Kaki") {
			return (
				<Tag color={"#C3B091"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Kakichiaro") {
			return (
				<Tag color={"#F0E68C"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Kakiscuro") {
			return (
				<Tag color={"#BDB76B"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Lampone") {
			return (
				<Tag color={"#E30B5C"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Lavanda") {
			return (
				<Tag color={"#E6E6FA"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Lavandapallido") {
			return (
				<Tag color={"#DABAD0"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Lavandarosata") {
			return (
				<Tag color={"#FFF0F5"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Limone") {
			return (
				<Tag color={"#FDE910"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Limonecrema") {
			return (
				<Tag color={"#FFFACD"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Lilla") {
			return (
				<Tag color={"#C8A2C8"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Lime") {
			return (
				<Tag color={"#CCFF00"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Lino") {
			return (
				<Tag color={"#FAF0E6"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Magenta") {
			return (
				<Tag color={"#FF00FF"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Magentachiaro") {
			return (
				<Tag color={"#F984E5"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Mandarino") {
			return (
				<Tag color={"#FFCC00"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Marrone") {
			return (
				<Tag color={"#964B00"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Marronechiaro") {
			return (
				<Tag color={"#CD853F"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Marronepastello") {
			return (
				<Tag color={"#987654"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Marronerosso") {
			return (
				<Tag color={"#993300"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Marronesabbiachiaro") {
			return (
				<Tag color={"#DABDAB"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Marronescuro") {
			return (
				<Tag color={"#654321"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Melenzana") {
			return (
				<Tag color={"#990066"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Mogano") {
			return (
				<Tag color={"#C04000"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Nero") {
			return (
				<Tag color={"#000000"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Ocra") {
			return (
				<Tag color={"#CC7722"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Olivina") {
			return (
				<Tag color={"#9AB973"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Orchidea") {
			return (
				<Tag color={"#DA70D6"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Oro") {
			return (
				<Tag color={"#FFD700"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Orovecchio") {
			return (
				<Tag color={"#CFB53B"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Ottoneantico") {
			return (
				<Tag color={"#CC9966"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Ottanio") {
			return (
				<Tag color={"#00665C"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Papaia") {
			return (
				<Tag color={"#FFEFD5"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Pera") {
			return (
				<Tag color={"#D1E231"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Pervinca") {
			return (
				<Tag color={"#CCCCFF"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Pesca") {
			return (
				<Tag color={"#FFE5B4"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Pescascuro") {
			return (
				<Tag color={"#FFDAB9"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Pescaarancio") {
			return (
				<Tag color={"#FFCC99"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Pescagiallo") {
			return (
				<Tag color={"#FADFAD"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Pistacchio") {
			return (
				<Tag color={"#93C572"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Platino") {
			return (
				<Tag color={"#E5E4E2"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Porpora") {
			return (
				<Tag color={"#B20000"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Prugna") {
			return (
				<Tag color={"#660066"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Rame") {
			return (
				<Tag color={"#B87333"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Rosa") {
			return (
				<Tag color={"#FFC0CB"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Rosaarancio") {
			return (
				<Tag color={"#FF9966"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Rosamedio") {
			return (
				<Tag color={"#DB244F"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "RosaMountbatten") {
			return (
				<Tag color={"#997A8D"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Rosapallido") {
			return (
				<Tag color={"#FADADD"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Rosapastello") {
			return (
				<Tag color={"#FFD1DC"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Rosascuro") {
			return (
				<Tag color={"#E75480"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Rosashocking") {
			return (
				<Tag color={"#FC0FC0"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Rosavivo") {
			return (
				<Tag color={"#FF007F"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Rosso") {
			return (
				<Tag color={"#FF0000"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Rossoaragosta") {
			return (
				<Tag color={"#CC5500"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Rossocardinale") {
			return (
				<Tag color={"#C41E3A"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Rossocorsa") {
			return (
				<Tag color={"#CC0000"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "RossoFalun") {
			return (
				<Tag color={"#801818"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Rossofragola") {
			return (
				<Tag color={"#CE3018"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Rossofuoco") {
			return (
				<Tag color={"#A61022"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Rossomattone") {
			return (
				<Tag color={"#B22222"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Rossomattonechiaro") {
			return (
				<Tag color={"#BD8E80"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Rossopomodoro") {
			return (
				<Tag color={"#FF6347"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Rossopompeiano") {
			return (
				<Tag color={"#D21F1B"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Rossorosa") {
			return (
				<Tag color={"#FF6088"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Rossosangue") {
			return (
				<Tag color={"#500000"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Rossosegnale") {
			return (
				<Tag color={"#A52019"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "RossoTiziano") {
			return (
				<Tag color={"#BA6262"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Rossovenenziano") {
			return (
				<Tag color={"#C80815"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Rossoviolettochiaro") {
			return (
				<Tag color={"#DB7093"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Rubino") {
			return (
				<Tag color={"#B72755"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Sabbia") {
			return (
				<Tag color={"#F4A460"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Salmone") {
			return (
				<Tag color={"#FF8C69"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Salmonescuro") {
			return (
				<Tag color={"#E9967A"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Sangria") {
			return (
				<Tag color={"#92000A"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}

		else if (value == "Scarlatto") {
			return (
				<Tag color={"#FF2400"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Scarlattoscuro") {
			return (
				<Tag color={"#560319"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Senape") {
			return (
				<Tag color={"#FFDB58"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Seppia") {
			return (
				<Tag color={"#704214"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Solidago") {
			return (
				<Tag color={"#DAA520"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Solidagoscuro") {
			return (
				<Tag color={"#B8860B"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Tanno") {
			return (
				<Tag color={"#D2B48C"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Tenne") {
			return (
				<Tag color={"#CD5700"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Terradombra") {
			return (
				<Tag color={"#635147"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Terradombrabruciata") {
			return (
				<Tag color={"#8A3324"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "TerradiSiena") {
			return (
				<Tag color={"#E97451"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "TerradiSienabruciata") {
			return (
				<Tag color={"#531B00"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Testadimoro") {
			return (
				<Tag color={"#754909"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Teverde") {
			return (
				<Tag color={"#D0F0C0"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Tronco") {
			return (
				<Tag color={"#79443B"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Turchese") {
			return (
				<Tag color={"#30D5C8"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Turchesechiaro") {
			return (
				<Tag color={"#08E8DE"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Turchesepallido") {
			return (
				<Tag color={"#99FFCC"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Turchesescuro") {
			return (
				<Tag color={"#116062"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Uovodipettirosso") {
			return (
				<Tag color={"#00CCCC"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Uovodipettirossochiaro") {
			return (
				<Tag color={"#96DED1"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Verde") {
			return (
				<Tag color={"#00FF00"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "VerdeCaraibi") {
			return (
				<Tag color={"#00CC99"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Verdeforesta") {
			return (
				<Tag color={"#228B22"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Verdechiaro") {
			return (
				<Tag color={"#66FF00"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Verdegiallo") {
			return (
				<Tag color={"#ADFF2F"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Verdemarino") {
			return (
				<Tag color={"#2E8B57"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Verdemarinomedio") {
			return (
				<Tag color={"#3CB371"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Verdemarinoscuro") {
			return (
				<Tag color={"#8FBC8F"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Verdementa") {
			return (
				<Tag color={"#98FF98"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Verdementachiaro") {
			return (
				<Tag color={"#A6FBB2"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Verdemuschio") {
			return (
				<Tag color={"#ADDFAD"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Verdeoliva") {
			return (
				<Tag color={"#808000"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Verdeolivascuro") {
			return (
				<Tag color={"#556B2F"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Verdepastello") {
			return (
				<Tag color={"#77DD77"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Verdepino") {
			return (
				<Tag color={"#01796F"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Verdeprimavera") {
			return (
				<Tag color={"#00FF7F"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Verdeprimaverascuro") {
			return (
				<Tag color={"#177245"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Verdeufficio") {
			return (
				<Tag color={"#008000"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Verdesmeraldo") {
			return (
				<Tag color={"#50C878"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "VerdeVeronese") {
			return (
				<Tag color={"#40826D"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Vermiglio") {
			return (
				<Tag color={"#FF4D00"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Viola") {
			return (
				<Tag color={"#800080"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Violachiaro") {
			return (
				<Tag color={"#9F00FF"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Violamelenzana") {
			return (
				<Tag color={"#991199"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Violetto") {
			return (
				<Tag color={"#8000FF"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Vinaccia") {
			return (
				<Tag color={"#C0007F"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Zafferano") {
			return (
				<Tag color={"#F4C430"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Zafferanoprofondo") {
			return (
				<Tag color={"#FF9933"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}
		else if (value == "Zaffiro") {
			return (
				<Tag color={"#0F52BA"} closable={closable} onClose={onClose} style={{ marginRight: 3, marginTop: 4 }}>
					{label}
				</Tag>
			);
		}






	}
	//NELLONETAVER

	return (
		<Row gutter={16}>
			<Col xs={24} sm={24} md={17}>
				<Card title="Informazioni sul prodotto">
					<Form.Item name="name" label="Nome del prodotto" rules={rules.name}>
						<Input placeholder="Nome del prodotto" />
					</Form.Item>
					<Form.Item name="description" label="Descrizione" rules={rules.description}>
						<Input.TextArea rows={5} />
					</Form.Item>
				</Card>
				<Card title="Informazioni">
					<Row gutter={16}>
						<Col xs={24} sm={24} md={12}>
							<Form.Item name="price" label="Prezzo" rules={rules.price}>
								<InputNumber
									min={1}
									className="w-100"
									formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
									parser={value => value.replace(/\€\s?|(,*)/g, '')}
									onChange={handleChange_prezzo}
								/>
							</Form.Item>
						</Col>
						<Col xs={24} sm={24} md={12}>
							<Form.Item id="sconto" name="sconto" label="Sconto del prodotto" rules={rules.sconto}>
								<InputNumber
									onChange={handleChange_sconto}
									defaultValue={0}
									min={0}
									max={100}
									formatter={value => `${value}%`}
									parser={value => value.replace('%', '')}
								/>
							</Form.Item>
						</Col>

					</Row>
					<Row gutter={16}>
						<Col xs={24} sm={24} md={12}>
							{props.numUltimiArrivi < 8 ?
								<Form.Item name="ultimiArrivi" label="Ultimo arrivo" rules={rules.ultimiArrivi}>
									<Select defaultValue={props.ultimiArrivi} className="w-100" placeholder="Scelta" onChange={(e) => onChangeUltimiArrivi(e)} >
										{
											ultimiArrivi.map(elm => (
												<Option key={elm} value={elm}>{elm}</Option>
											))
										}
									</Select>
								</Form.Item>
								:
								<Alert message="Sono già presenti più di 8 articoli classificati come 'ultimi arrivi'." type="warning" showIcon />
							}
						</Col>
						<Col xs={24} sm={24} md={12}>
							<Form.Item name="gratis" label="Spedizione gratuita" rules={rules.gratis}>
								<Select defaultValue={props.gratis} className="w-100" placeholder="Scelta" onChange={(e) => onChangeUltimiArrivi(e)} >
									{
										gratis.map(elm => (
											<Option key={elm} value={elm}>{elm}</Option>
										))
									}
								</Select>
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={20}>
						<Col xs={24} sm={24} md={20}>
								<Form.Item name="prezzoScontato" label="Prezzo scontato" rules={rules.prezzoScontato}>
									<Descriptions.Item label="prezzoScontato"> </Descriptions.Item>
									{props.mode == "EDIT"  ?
										<div>

									{prezzo == 0 && sconto == 0 &&
									
										<div>
									<Alert message={props.prezzo-(props.prezzo*props.sconto/100)} type="info" showIcon />

									 

									</div>

										}

									{prezzo != 0 && sconto == 0 &&

									<div>
									<Alert message={prezzo-(prezzo*props.sconto/100)} type="info" showIcon />
								</div>

									
									}

									
{prezzo == 0 && sconto != 0 &&

<div>
<Alert message={props.prezzo-(props.prezzo*sconto/100)} type="info" showIcon />
</div>


}

								{prezzo != 0 && sconto != 0 &&

									<div>
									<Alert message={prezzo-(prezzo*sconto/100)} type="info" showIcon />
								</div>

									
									}

									
										</div>

										:

										<div>


								<Alert message={prezzo-(prezzo*sconto/100)} type="info" showIcon />

										</div>

									}
								</Form.Item>
								
						</Col>
					</Row>
				</Card>
				<Card title="Scheda tecnica">
					<Row gutter={16}>
						<Col xs={24} sm={24} md={12}>
							<Form.Item name="lunghezza" label="Lunghezza (in cm)" rules={rules.lunghezza}>
								<InputNumber
									min={0}
									className="w-100"
								/>
							</Form.Item>
						</Col>
						<Col xs={24} sm={24} md={12}>
							<Form.Item name="larghezza" label="Larghezza (in cm)" rules={rules.larghezza}>
								<InputNumber
									className="w-100"
									min={0}
								/>
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>

						<Col xs={24} sm={24} md={12}>
							<Form.Item name="altezza" label="Altezza (in cm)" rules={rules.altezza}>
								<InputNumber
									min={0}
									className="w-100"
								/>
							</Form.Item>
						</Col>
						<Col xs={24} sm={24} md={12}>
							<Form.Item name="peso" label="Peso (in kg)" rules={rules.peso}>
								<InputNumber
									min={0}
									className="w-100"
								/>
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col xs={24} sm={24} md={12}>
							<Form.Item name="materiale" label="Materiale" rules={rules.materiale}>
								<Input placeholder="Materiale utilizzato" />
							</Form.Item>
						</Col>
					</Row>
				</Card>
			</Col>
			<Col xs={24} sm={24} md={7}>
				<Card title="Colori disponibili">
					<Form.Item name="Colori" label="Colori" rules={rules.colori} >
						<Select
							mode="multiple"
							style={{ width: '100%' }}
							placeholder="Seleziona i colori della lista"
							defaultValue={props.listaColori}
							onChange={handleChange_colori}
							options={vettore_colori}
							tagRender={tagRender}
						>
						</Select>

					</Form.Item>
					{listaColori.length != 0 &&
						listaColori.map((taglia, key) =>
							<Form.Item name={"numTaglia" + key} label={"Taglie per " + listaColori[key]} rules={rules.taglia} >
								<Select
									id={"numTaglia" + key}
									mode="multiple"
									className="w-100"
									placeholder="taglia"
									defaultValue={props.listaTaglie[key]}
									onChange={(e) => handleChange_taglie(e, key)}
									options={vettore_taglie[key]}
								> /*sono qui fra*/
								</Select>
							</Form.Item>
						)
					}

					{listaTaglie.length != 0 &&
						listaColori.map((colore, key) =>
							<div>
								<Form.Item name={"numColore" + key} label={"Numeri disponibili per il colore: " + listaColori[key]}>
									{listaTaglie[key].stock.map((taglia, key_2) =>
										<Form.Item name={"numColore" + key + "numStock" + key_2} label={"taglia: " + taglia} rules={rules.numColori}>

											<InputNumber
												min={0}
												className="w-100"
												formatter={value => value}
												defaultValue={props.numColori[key][key_2]}
												parser={value => value.replace(/\$\s?|(,*)/g, '')}
												onChange={(e) => handleChange_stock(e, key)}
												options={vettore_numeri_disp[key][key_2]}

											/>
										</Form.Item>
									)
									}

									{listaTaglie[key].stock.map((taglia, key_2) =>
										<Form.Item name={"numColore" + key + "prenotazione" + taglia} label={"Prenotazione: " + taglia} rules={rules.numColori}>


											<Select className="w-100" placeholder="Prenotazione" onChange={(e) => onChangePrenotazione(e, key, key_2, taglia)} >
												{
													personalizzazione.map(elm => (
														<Option key={key} value={elm}>{elm}</Option>
													))
												}
											</Select>
										</Form.Item>
									)
									}

									{listaTaglie[key].prenotazione != undefined && listaTaglie[key].prenotazione.map((nome_taglia, key_3) =>
										<Form.Item name={"numColore" + key + "stock" + nome_taglia} label={"Giorni di prenotazione per : " + nome_taglia} rules={rules.numColori}>


											<Input />

										</Form.Item>
									)
									}
								</Form.Item>
							</div>

						)
					}

					{listaTaglie.length == 0 && props.listaTaglie.length != 0 &&
						listaColori.map((colore, key) =>
							<Form.Item name={"numColore" + key} label={"Numero disponibili per il colore: " + listaColori[key]}>
								{props.listaTaglie[key].map((taglia, key_2) =>
									<Form.Item name={"numColore" + key + "numStock" + key_2} label={"taglia: " + taglia} rules={rules.numColori}>

										<InputNumber
											min={0}
											className="w-100"
											formatter={value => value}
											defaultValue={props.numColori[key][key_2]}
											parser={value => value.replace(/\$\s?|(,*)/g, '')}
											onChange={(e) => handleChange_stock(e, key)}
											options={vettore_numeri_disp[key][key_2]}

										/>
									</Form.Item>
								)
								}

								{props.listaTaglie[key].map((taglia, key_2) =>
									<Form.Item name={"numColore" + key + "prenotazione" + taglia} label={"Prenotazione: " + taglia} rules={rules.numColori}>
										<Select className="w-100" placeholder="Prenotazione" onChange={(e) => onChangePrenotazione(e, key, key_2, taglia)} >
											{
												personalizzazione.map(elm => (
													<Option key={key} value={elm}>{elm}</Option>
												))
											}
										</Select>
									</Form.Item>
								)
								}

								{props.listaTaglie[key].prenotazione != undefined && props.listaTaglie[key].prenotazione.map((nome_taglia, key_3) =>
									<Form.Item name={"numColore" + key + "stock" + nome_taglia} label={"Giorni di prenotazione per : " + nome_taglia} rules={rules.numColori}>
										<InputNumber
											min={0}
											className="w-100"
										/>
									</Form.Item>
								)
								}
							</Form.Item>
						)
					}


				</Card>

				<Card title="Catalogazione">
					<Form.Item name="category" label="Categoria" rules={rules.categoria} >
						<Select className="w-100" placeholder="Categoria" onChange={(e) => handleChange(e)} >
							{
								categorie.map(elm => (
									<Option key={elm} value={elm}>{elm}</Option>
								))
							}
						</Select>
					</Form.Item>
					<Form.Item name="sottocat" label="Sottocategoria" rules={rules.sottocategoria} >
						<Select id="sottocateg" className="w-100" placeholder="Sottocategoria">
							{
								sottocat.map(sottocat => (
									<Option key={sottocat} value={sottocat}>{sottocat}</Option>
								))

							}
						</Select>
					</Form.Item>
					<Form.Item name="marca" label="Marca" rules={rules.marca} >
						<Input placeholder="Marca del prodotto" />
					</Form.Item>
				</Card>

				<Card title="Personalizzazione">
					<Form.Item name="personalizzazione" label="Personalizzazione" rules={rules.personalizzazione} >
						<Select defaultValue={props.personalizzazione} className="w-100" placeholder="Scelta" onChange={(e) => onChangePersonalizzazione(e)} >
							{
								personalizzazione.map(elm => (
									<Option key={elm} value={elm}>{elm}</Option>
								))
							}
						</Select>
					</Form.Item>
					{(personalizza == "Si" || props.personalizzazione == "Si") &&
						<div>

							<Form.Item name="costo_personalizzazione" label="Costo della personalizzazione" rules={rules.costo_personalizzazione}>
								<InputNumber
									min={1}
									className="w-100"
									formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
									parser={value => value.replace(/\€\s?|(,*)/g, '')}
								/>
							</Form.Item>

							<Form.Item name="descrizione_personalizzazione" label="Descrizione della personalizzazione" rules={rules.descrizione_personalizzazione}>
								<Input.TextArea rows={2} />
							</Form.Item>
						</div>
					}
					<Form.Item name="correlati" label="Prodotti correlati" rules={rules.correlati} >
						<Select mode="multiple" id="corr" className="w-100" placeholder="Correlati">
							{
								prodottiPersonalizzazione.map(elm => (
									<Option key={elm} value={elm}>{elm}</Option>
								))

							}
						</Select>
					</Form.Item>
				</Card>
			</Col>
		</Row>


	)
}




export default GeneralField
