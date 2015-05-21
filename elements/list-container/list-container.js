(function() {

    Polymer('list-container', {
        count: 13,

        ready: function() {
          var self = this;
          this.data = [];
          var data = [
        		{
        			"name": "Web Components Weekly #1",
        			"id": "5b537c8ca0"
        		},
        		{
        			"name": "Web Components Weekly #2",
        			"id": "3d95131149"
        		},
        		{
        			"name": "Web Components Weekly #3",
        			"id": "6bb0920ff6"
        		},
        		{
        			"name": "Web Components Weekly #4",
        			"id": "6f50177c1d"
        		},
        		{
        			"name": "Web Components Weekly #5",
        			"id": "c2d3bdb50a"
        		}
        	];            

            for (var i = 0; i < data.length; i++) {
              var item = data[i];

              
              this.data.push({
                id: item.id,
                name: item.name,
                url: "http://us10.campaign-archive2.com/?u=6cd727a9a0da64b4003caa164&id=" + item.id
              });
            console.log(item);
            }

            console.log( this.data, this);
//          this.$.weeklyRefs.addEventListener("core-response", this.generateData );
          window.list = this.$.list;
        }

    });


})();