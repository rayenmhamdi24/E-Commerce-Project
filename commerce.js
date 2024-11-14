$(document).ready(function() {
    var phones = [
        { Name: "Redmi 14C", Storage: "128GO", price: 450, img: "https://telfonak.com/wp-content/uploads/2024/09/14c-redmi.webp" },
        { Name: "Redmi Note 13", Storage: "256GO", price: 1890, img: "https://www.ooredoo.tn/Personal/8992-large_default/portable-redmi-note-13-pro-12512go-5g.jpg" },
        { Name: "Honor X7b", Storage: "256GO", price: 850, img: "https://www.tunisianet.com.tn/372050-large/smartphone-honor-x7b-6-go-256-go-silver.jpg" },
        { Name: "Honor X8b", Storage: "256GO", price: 950, img: "https://www.tunisianet.com.tn/378039-large/honor-x8b-prix-tunisie.jpg" },
        { Name: "Honor X9b", Storage: "256GO", price: 1150, img: "https://www.tunisianet.com.tn/393689-large/smartphone-honor-x9b-5g-12-go-256-go-noir-airpods-oraimo-otw-330-lb-offerts.jpg" },
        { Name: "Galaxy Z flip 6", Storage: "256GO", price: 4000, img: "https://www.tunisianet.com.tn/384096-large/smartphone-samsung-galaxy-z-flip-6-5g-12-go-256-go-gris.jpg" },
        { Name: "Oppo A18", Storage: "128GO", price: 429, img: "https://www.tunisianet.com.tn/367848-home/smartphone-oppo-a18-4g-double-sim-4-go-128-go-bleu.jpg" },
        { Name: "Oppo A3", Storage: "128GO", price: 550, img: "https://www.tunisianet.com.tn/387850-home/smartphone-oppo-a3-6go-128-go-blanc.jpg" },
        { Name: "Honor 90 Lite 5G", Storage: "256GO", price: 750, img: "https://www.tunisianet.com.tn/327982-large/smartphone-honor-90-lite-5g-8-go-256-go-bleu-un-abonnement-ott-pro-12-mois-offert.jpg" },
        { Name: "Oppo A58", Storage: "128GO", price: 600, img: "https://www.tunisianet.com.tn/326188-large/smartphone-oppo-a58-4g-double-sim-8-go-128-go-noir.jpg" }
    ];

    // Function to render phones
    function renderPhones(phoneList) {
        $("#phone-list").empty();
        for (var i = 0; i < phoneList.length; i++) {
            var ph = phoneList[i];
            var box = $("<div>").addClass("phone-box");
            $("<img>").prop("src", ph.img).appendTo(box);
            $('<h2>').text(ph.Name).appendTo(box);
            $('<p>').text('Price: ' + ph.price + ' DT').appendTo(box);
            $('<p>').text('Storage: ' + ph.Storage ).appendTo(box)
            const button = $('<button>').text('Add to Cart ')
            button.on('click', function() {
                const currentText = $(this).text()
                if (currentText === "Add to Cart") {
                    $(this).text("Remove from  Cart")
                   } else {
                    $(this).text("Add to Cart")
                }
            });
            button.appendTo(box)
           $("#phone-list").append(box);
        }
    }

 // Search phones
    function searchPhones() {
        var query = $('#search-bar').val().toLowerCase();
         var filteredPhones=filter(phones,function(phone){
            return phone.Name.toLowerCase().includes(query)
        })
        renderPhones(filteredPhones);
    }
// Handle search on Enter key press
    $('#search-bar').on('keyup', function(event) {
        if (event.key === 'Enter') { // Enter key
            searchPhones();
        }
    });
// Handle search button click
    $('#search-button').on('click', function() {
        searchPhones();
    });
// Initial rendering of phones
    renderPhones(phones);
});
// Helper functions
function each(coll, f) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function (element, i) {
      if (predicate(element, i)) {
        acc.push(element);
      }
    });
    return acc;
  }
