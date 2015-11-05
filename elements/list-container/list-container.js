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
                },
                {
                    "name": "Web Components Weekly #6",
                    "id": "8c1807e9dc"
                },
                {
                    "name": "Web Components Weekly #7",
                    "id": "793e0845ae"
                },
                {
                    "name": "Web Components Weekly #8",
                    "id": "51b7595c8a"
                },
                {
                    "name": "Web Components Weekly #9",
                    "id": "7217b1c5d6"
                },
                {
                    "name": "Web Components Weekly #10",
                    "id": "04930efa1f"
                },
                {
                    "name": "Web Components Weekly #11",
                    "id": "f1fbcf21ec"
                },
                {
                    "name": "Web Components Weekly #12",
                    "id": "38dbf5ba0d"
                },
                {
                    "name": "Web Components Weekly #13",
                    "id": "4f30c40461"
                },
                {
                    "name": "Web Components Weekly #14",
                    "id": "17b7af1464"
                },
                {
                    "name": "Web Components Weekly #15",
                    "id": "9d266f0b3b"
                },
                {
                    "name": "Web Components Weekly #16",
                    "id": "eb6e615448"
                },
                {
                    "name": "Web Components Weekly #17",
                    "id": "b777740dbc"
                },
                {
                    "name": "Web Components Weekly #18",
                    "id": "6259f3c3ce"
                },
                {
                    "name": "Web Components Weekly #19",
                    "id": "ec8536e1a8"
                },
                {
                    "name": "Web Components Weekly #20",
                    "id": "9c2bd05ac5"
                },
                {
                    "name": "Web Components Weekly #21",
                    "id": "c0d1e99cda"
                },
                {
                    "name": "Web Components Weekly #22",
                    "id": "613f456754"
                },
                {
                    "name": "Web Components Weekly #23",
                    "id": "0f1cc7b624"
                },
                {
                    "name": "Web Components Weekly #24",
                    "id": "5143c0877b"
                },
                {
                    "name": "Web Components Weekly #25",
                    "id": "def4e973be"
                },
                {
                    "name": "Web Components Weekly #26",
                    "id": "3454d3c64f"
                },
                {
                    "name": "Web Components Weekly #27",
                    "id": "4f53c834bd"
                },
                {
                    "name": "Web Components Weekly #28",
                    "id": "695e446a8d"
                },
                {
                    "name": "Web Components Weekly #29",
                    "id": "c21524aaf0"
                }
            ];

            for (var i = 0; i < data.length; i++) {
              var item = data[i];


              this.data.push({
                id: item.id,
                name: item.name,
                url: "http://us10.campaign-archive2.com/?u=6cd727a9a0da64b4003caa164&id=" + item.id
              });
            }

          // this.$.weeklyRefs.addEventListener("core-response", this.generateData );
          window.list = this.$.list;
        }

    });


})();