d3.csv('NLP_Dataset.csv').then(function (data) {
    console.log(data);
    var search = data;
    var button = d3.select('#button');
    var form = d3.select('#form');
    button.on('click', runEnter);
    form.on('submit', runEnter);

    function runEnter() {
        d3.select('tbody').html('');

        d3.event.preventDefault();

        var inputValue = d3.select('#user-input').property('value');

        // Check if 'search' is defined and not empty
        if (search && search.length > 0) {
            var filteredProducts = search.filter(item => item.Product.includes(inputValue));

            var output = _.sortBy(filteredProducts, 'Price').reverse();

            for (var i = 0; i < output.length; i++) {
                d3.select('tbody').insert('tr').html(
                    '<td>' + (i + 1) + '</td>' +
                    '<td>' + (output[i]['Product']) + '</td>' +
                    '<td>' + (output[i]['Price']) + '</td>' +
                    '<td>' + (output[i]['URL']) + '</td>' +
                    '<td>' + (output[i]['Sentiment']) + '</td>'
                );
            }
        }
    }
});
