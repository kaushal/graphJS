function graphValues(url){
    var yql_url = 'https://query.yahooapis.com/v1/public/yql';

    $.ajax({
        'url': yql_url,
        'data': {
            'q': 'SELECT * FROM json WHERE url="'+ url +'"',
            'format': 'json',
            'jsonCompat': 'new',
        },
        'dataType': 'jsonp',
        'success': function(resp) {
            var viewData = [];
            for(var i = 0; i < resp.query.results.json.data.length; i++){
                var tempArray = [];
                tempArray.push(i+1);
                tempArray.push(parseInt(resp.query.results.json.data[i].view_count));
                viewData.push(tempArray);
            }
            var myChart = new JSChart('viewCountContainer', 'line');
            myChart.setTitle('View Count');
            myChart.setDataArray(viewData);
            myChart.draw();
        },
    });

}
