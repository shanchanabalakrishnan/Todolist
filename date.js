




exports.getDate = function() {

    const today = new Date();
    const option = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("eng-US", option);

    
};

exports.getDay = function() {

    const today = new Date();
    const option = {
        weekday: "long"
    
         };

    return today.toLocaleDateString("eng-US", option);

    
};

console.log(module.exports);



