(function() {

    Polymer('list-container', {
        count: 13,

        ready: function() {
            this.data = this.generateData();
            window.list = this.$.list;
        },

        generateData: function() {
            var data = [];

            // TODO: Add dynamic dates or easier date formatting
            var dates = [
                    "01/12/2015",
                    "01/19/2015",
                    "01/26/2015",
                    "02/02/2015",
                    "02/09/2015",
                    "02/16/2015",
                    "02/23/2015",
                    "03/02/2015",
                    "03/09/2015",
                    "03/16/2015",
                    "03/23/2015",
                    "03/30/2015"
                ];

            for (var i=1; i < dates.length; i++) {
                // TODO: replace hardcoded data as needed with dynamic data
                data.push({
                    id: i,
                    name: ("Web Components Weekly #" + i),
                    url: "/" + i,
                    date: dates[i]
                });
            }
            return data.reverse();
        }
    });
})();