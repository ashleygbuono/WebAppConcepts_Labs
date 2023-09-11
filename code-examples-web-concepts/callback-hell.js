getData(function(a) {
    getMoreData(a, function(b) {
      getEvenMoreData(b, function(c) {
        getEvenEvenMoreData(c, function(d) {
          getFinalData(d, function(finalData) {
            console.log(finalData);
          });
        });
      });
    });
  });