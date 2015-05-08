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
            var dates = "weekly.json";


            for (var i = 0; i < dates.length; i++) {
                // TODO: replace hardcoded data as needed with dynamic data
                data.push({
                    id: i,
                    name: ("Web Components Weekly #" + i),
                    url: "http://us10.campaign-archive2.com/?u=6cd727a9a0da64b4003caa164&id=" + i,
                    date: dates[i]
                });
            }
            return data.reverse();
        }
    });
})();