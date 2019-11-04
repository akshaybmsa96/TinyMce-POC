import axios from 'axios';
import config from '../../config/config';
import {
	FETCH_SLATE_DATA
} from '../../constants/Action_Constants';
import store from '../../appStore/store'

const slate_data = {
	"urn:pearson:manifest:d9023151-3417-4482-8175-fc965466220e": {
		"id": "urn:pearson:manifest:d9023151-3417-4482-8175-fc965466220e",
		"schema": "http://schemas.pearson.com/wip-authoring/manifest/1",
		"type": "manifest",
		"contents": {
			"schema": "http://schemas.pearson.com/wip-authoring/manifest/1#/definitions/manifest",
			"title": {
				"schema": "http://schemas.pearson.com/wip-authoring/authoredtext/1#/definitions/authoredtext",
				"text": "test1"
			},
			"frontmatter": [],
			"bodymatter": [
				{
					"id": "urn:pearson:work:8a49e877-144a-4750-92d2-81d5188d8e0a90",
					"type": "element-authoredtext",
					"subtype": "",
					"schema": "http://schemas.pearson.com/wip-authoring/element/1",
					"elementdata": {
						"schema": "http://schemas.pearson.com/wip-authoring/authoredtext/1#/definitions/authoredtext",
						"text": "Hello Hi how are you"
					},
					"html": {
						"text": "<p class=\"paragraphNumeroUno\">Hello Hi how are you</p>"
					},
					"comments": true,
					"tcm": true,
					"versionUrn": "urn:pearson:work:8a49e877-144a-4750-92d2-81d5188d8e0a",
					"contentUrn": "urn:pearson:entity:b70a5dbe-cc3b-456d-87fc-e369ac59c527"
				},
				{
					"id": "urn:pearson:work:8a49e877-144a-4750-92d2-81d5188d8e0a",
					"type": "element-authoredtext",
					"subtype": "",
					"schema": "http://schemas.pearson.com/wip-authoring/element/1",
					"elementdata": {
						"schema": "http://schemas.pearson.com/wip-authoring/authoredtext/1#/definitions/authoredtext",
						"text": " Hello Hi how are you 1."
					},
					"html": {
						"text": "<p class=\"paragraphNumeroUno\"> Hello Hi how are you 1.</p>"
					},
					"comments": true,
					"tcm": true,
					"versionUrn": "urn:pearson:work:8a49e877-144a-4750-92d2-81d5188d8e0a",
					"contentUrn": "urn:pearson:entity:b70a5dbe-cc3b-456d-87fc-e369ac59c527"
				},
				{
					"id": "urn:pearson:work:8a49e877-144a-4750-92d2-81d5188d8e02",
					"type": "element-authoredtext",
					"subtype": "",
					"schema": "http://schemas.pearson.com/wip-authoring/element/1",
					"elementdata": {
						"schema": "http://schemas.pearson.com/wip-authoring/authoredtext/1#/definitions/authoredtext",
						"text": " Hello Hi how are you 2."
					},
					"html": {
						"text": "<input placeholder='enter text' class=\"paragraphNumeroUno\"></input>"
					},
					"comments": true,
					"tcm": true,
					"versionUrn": "urn:pearson:work:8a49e877-144a-4750-92d2-81d5188d8e0a",
					"contentUrn": "urn:pearson:entity:b70a5dbe-cc3b-456d-87fc-e369ac59c527"
				},
				// {
				// 	"id": "urn:pearson:work:8a49e877-144a-4750-92d2-81d5188d8e03",
				// 	"type": "element-authoredtext",
				// 	"subtype": "",
				// 	"schema": "http://schemas.pearson.com/wip-authoring/element/1",
				// 	"elementdata": {
				// 		"schema": "http://schemas.pearson.com/wip-authoring/authoredtext/1#/definitions/authoredtext",
				// 		"text": " Hello Hi how are you 3."
				// 	},
				// 	"html": {
				// 		"text": "<p class=\"paragraphNumeroUno\"><br><br> Hello Hi how are you 3.</p>"
				// 	},
				// 	"comments": true,
				// 	"tcm": true,
				// 	"versionUrn": "urn:pearson:work:8a49e877-144a-4750-92d2-81d5188d8e0a",
				// 	"contentUrn": "urn:pearson:entity:b70a5dbe-cc3b-456d-87fc-e369ac59c527"
				// },
				// {
				// 	"id": "urn:pearson:work:8a49e877-144a-4750-92d2-81d5188d8e04",
				// 	"type": "element-authoredtext",
				// 	"subtype": "",
				// 	"schema": "http://schemas.pearson.com/wip-authoring/element/1",
				// 	"elementdata": {
				// 		"schema": "http://schemas.pearson.com/wip-authoring/authoredtext/1#/definitions/authoredtext",
				// 		"text": "Hello Hi how are you 4."
				// 	},
				// 	"html": {
				// 		"text": "<p class=\"paragraphNumeroUno\">Hello Hi how are you 4.</p>"
				// 	},
				// 	"comments": true,
				// 	"tcm": true,
				// 	"versionUrn": "urn:pearson:work:8a49e877-144a-4750-92d2-81d5188d8e0a",
				// 	"contentUrn": "urn:pearson:entity:b70a5dbe-cc3b-456d-87fc-e369ac59c527"
				// },

			],
			"backmatter": []
		}
	}
}






export const insertElement = (cuurentIndexId) => {
	const updatedData = slate_data;
	let new_data = {
		"id": "urn:pearson:work:8a49e877-144a-4750",
		"type": "element-authoredtext",
		"subtype": "",
		"schema": "http://schemas.pearson.com/wip-authoring/element/1",
		"elementdata": {
			"schema": "http://schemas.pearson.com/wip-authoring/authoredtext/1#/definitions/authoredtext",
			"text": "Hello this is a new Paragraph Element"
		},
		"html": {
			"text": "<p class=\"paragraphNumeroUno\">Hello this is a new Paragraph Element</p>"
		},
		"comments": true,
		"tcm": true,
		"versionUrn": "urn:pearson:work:8a49e877-144a-4750",
		"contentUrn": "urn:pearson:entity:b70a5dbe-cc3b-456d"
	}

	let index =  updatedData['urn:pearson:manifest:d9023151-3417-4482-8175-fc965466220e'].contents.bodymatter.findIndex((obj)=>{
		return obj.id===cuurentIndexId;
	})


	updatedData['urn:pearson:manifest:d9023151-3417-4482-8175-fc965466220e'].contents.bodymatter.splice(index+1,0,new_data);

	store.dispatch({
		type: FETCH_SLATE_DATA,
		payload: JSON.parse(JSON.stringify(updatedData))
	})
}

export const updateElementType = (indexToUpdate,type) => {

	const updatedData = slate_data;

	let index =  updatedData['urn:pearson:manifest:d9023151-3417-4482-8175-fc965466220e'].contents.bodymatter.findIndex((obj)=>{
		return obj.id===indexToUpdate;
	})
	let new_data = updatedData['urn:pearson:manifest:d9023151-3417-4482-8175-fc965466220e'].contents.bodymatter[index];
	new_data.html.text = `<${type} class=\"paragraphNumeroUno\">${new_data.elementdata.text}</${type}>`;

	updatedData['urn:pearson:manifest:d9023151-3417-4482-8175-fc965466220e'].contents.bodymatter[index]=new_data;
	store.dispatch({
		type: FETCH_SLATE_DATA,
		payload: JSON.parse(JSON.stringify(updatedData))
	})

}

export const fetchSlateData = (cb) => dispatch => {

	dispatch({
		type: FETCH_SLATE_DATA,
    payload: slate_data
	})
	/*
	axios.get(`${config.REACT_APP_API_URL}v1/slate/content/${config.projectUrn}/${config.slateURN}`, {
		headers: {
			"Content-Type": "application/json",
			"PearsonSSOSession": config.ssoToken
		}
	}).then(slateData => {   
        dispatch({
        	type: FETCH_SLATE_DATA,
        	payload: slate_data
		})
		cb();
	})*/
};