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
						"text": "<p class=\"paragraphNumeroUno\">Hello Hi how are you 2</p>"
					},
					"comments": true,
					"tcm": true,
					"versionUrn": "urn:pearson:work:8a49e877-144a-4750-92d2-81d5188d8e0a",
					"contentUrn": "urn:pearson:entity:b70a5dbe-cc3b-456d-87fc-e369ac59c527"
				},  //new data
				{
                    "id": "urn:pearson:work:3199ab3c-0917-49bf-9856-e92914b75fb7",
                    "type": "figure",
                    "subtype": "image25Text",
                    "schema": "http://schemas.pearson.com/wip-authoring/figure/1",
                    "alignment": "quarter-text",
                    "versionUrn": "urn:pearson:work:3199ab3c-0917-49bf-9856-e92914b75fb7",
                    "contentUrn": "urn:pearson:entity:9f379a5a-97d0-46b0-8232-a9f61e3bb948",
                    "title": {
                        "schema": "http://schemas.pearson.com/wip-authoring/authoredtext/1#/definitions/authoredtext",
                        "text": "",
                        "textsemantics": [],
                        "mathml": []
                    },
                    "captions": {
                        "schema": "http://schemas.pearson.com/wip-authoring/authoredtext/1#/definitions/authoredtext",
                        "text": "",
                        "textsemantics": [],
                        "mathml": [],
                        "footnotes": []
                    },
                    "credits": {
                        "schema": "http://schemas.pearson.com/wip-authoring/authoredtext/1#/definitions/authoredtext",
                        "text": ""
                    },
                    "figuretype": "image",
                    "subtitle": {
                        "schema": "http://schemas.pearson.com/wip-authoring/authoredtext/1#/definitions/authoredtext",
                        "text": "",
                        "textsemantics": [],
                        "mathml": [],
                        "footnotes": []
                    },
                    "figuredata": {
                        "path": "https://cite-media-stg.pearson.com/legacy_paths/796ae729-d5af-49b5-8c99-437d41cd2ef7/FPO-image.png",
                        "height": "422",
                        "width": "680",
                        "schema": "http://schemas.pearson.com/wip-authoring/image/1#/definitions/image",
                        "numbered": false,
                        "startNumber": 0
                    },
                    "html": {
                        "title": "<p></p>",
                        "subtitle": "<p></p>",
                        "caption": "<p></p>",
                        "credit": "<p></p>",
                        "text": "",
                        "postertext": "",
                        "tableasHTML": ""
                    },
                    "footnotes": {},
                    "glossaryentries": {},
                    "assetspopover": {},
                    "tcm": false,
                    "comments": false,
                    "status": "wip",
                    "feedback": false
                },
                {
                    "id": "urn:pearson:work:7ee0da07-8099-4844-8171-e0148989ecfa",
                    "type": "element-authoredtext",
                    "subtype": "",
                    "schema": "http://schemas.pearson.com/wip-authoring/element/1",
                    "elementdata": {
                        "schema": "http://schemas.pearson.com/wip-authoring/authoredtext/1#/definitions/authoredtext",
                        "text": "Heading Element",
                        "headers": [
                            {
                                "charStart": 0,
                                "charEnd": 5,
                                "level": 1
                            }
                        ]
                    },
                    "versionUrn": "urn:pearson:work:7ee0da07-8099-4844-8171-e0148989ecfa",
                    "contentUrn": "urn:pearson:entity:e2bb6aa4-2d1e-494a-8399-1f0ef72da160",
                    "html": {
                        "text": "<h1 class=\"heading1NummerEins\">Heading Element</h1>",
                        "footnotes": {},
                        "glossaryentries": {}
                    },
                    "footnotes": {},
                    "glossaryentries": {},
                    "assetspopover": {},
                    "tcm": false,
                    "comments": false,
                    "status": "wip",
                    "feedback": false
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