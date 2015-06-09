(function() {

    Polymer('list-container', {
        count: 13,

        ready: function() {
          var self = this;
          this.data = [];

          var data =
			  [
        		{
        			"name": "Web Components Weekly #1",
					"date" : "04/02/2015",
        			"url": "http://eepurl.com/biB5B5"
        		},
        		{
        			"name": "Web Components Weekly #2",
					"date" : "04/08/2015",
        			"url": "http://eepurl.com/bjdEW9"
        		},
        		{
        			"name": "Web Components Weekly #3",
					"date" : "04/17/2015",
        			"url": "http://eepurl.com/bj-f4j"
        		},
        		{
        			"name": "Web Components Weekly #4",
					"date" : "04/22/2015",
        			"url": "http://eepurl.com/bkwVRD"
        		},
        		{
        			"name": "Web Components Weekly #5",
					"date" : "04/29/2015",
        			"url": "http://eepurl.com/bldYD9"
        		},
			    {
					"name": "Web Components Weekly #6",
					"date" : "05/06/2015",
					"url": "http://eepurl.com/blYoi1"
			    },
			    {
					"name": "Web Components Weekly #7",
					"date" : "05/20/2015",
					"url" : "http://eepurl.com/bm9RG1"
			    }

        	];

			data = data.reverse();

			for (var i = 0; i < data.length; i++) {
			  var item = data[i];

				this.data.push({
					id: item.id,
					name: item.name,
					url: item.url,
					publishedDate: item.date
				});
			}
            window.list = this.$.list;
        }

    });


})();