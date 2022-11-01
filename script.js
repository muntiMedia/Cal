// declare variable
var calculate = "";

// write function

$(function() { $("button").click(function() {
    var clear = 0;
    let result;


    // add value and  event listener and

    var key = $(this).prop("value");

    if (parseInt(key, 0, 10) == key || key === "%" || key === "/" ||
            key === "*" || key === "-" ||key === "+" ||key === ".") {

          if (clear === 0) {
            calculate += key; $(".holder").val(calculate);
         } else {
           calculate = key;
           $(".holder").val(calculate);
           clear = 0;
         }
       }



    // add switch
     switch (key) {
        case "±":
            if (clear === 0) {
                calculate = calculate * (-1);
                $(".holder").val(calculate);
            } else {
                 result = result * (-1);
                 $(".holder").val(result);
            }
            break;

            case "C":
                  calculate = "";
                  $(".holder").val("");
             break;
             case "=":
                  result =(new Function('return '+ calculate))()
                  $(".holder").val(result);
                  clear = 1;
             default:
                 break;
            }
          })
        })
