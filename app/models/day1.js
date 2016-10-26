exports.definition = {
	config: {
		columns: {
		    "time": "text",
		    "room": "text",
		    "title": "text",
		    "speaker": "text",
		    "description": "text",
		    "speakerbio": "text",
		    "myindex": "integer"
		},
		adapter: {
			type: "sql",
			collection_name: "day1"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};