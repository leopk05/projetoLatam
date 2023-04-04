
$(".calcular").on("click",function (){
    let solicitado = parseInt($(".solicitado").val().replaceAll(".", ""));
    let nota1 = parseInt($(".nota1").val().replaceAll(".", ""));
    let nota2 = parseInt($(".nota2").val().replaceAll(".", ""));
    let gravidade = parseFloat($(".gravidade").val().replace(",","."))
    let arrival = parseInt($(".arrival").val().replaceAll(".", ""));
    let ground = parseInt($(".ground").val().replaceAll(".", ""));

    const aRow = $(".a-row");
    const bRow = $(".b-row");
    const cRow = $(".c-row");
    const dRow = $(".d-row");
    const eRow = $(".e-row");
    const fRow = $(".f-row");
    const gRow = $(".g-row");
    const hRow = $(".h-row");
    const iRow = $(".i-row");
    const jRow = $(".j-row");

    let finalResultA = numberToArray(solicitado)
    let finalResultB = numberToArray((arrival - ground));
    let finalResultC = numberToArray((solicitado - (arrival - ground)));
    let finalResultD = numberToArray((nota1 + nota2));
    let finalResultF = numberToArray(arrival);
    let finalResultG = numberToArray((nota1 + nota2) * gravidade);
    let finalResultH = numberToArray(solicitado);
    let finalResultI = numberToArray(ground);
    let finalResultJ = numberToArray(Math.round((((nota1 + nota2) * gravidade) - (solicitado - arrival))- ground));

    console.log(finalResultJ);

    // solicitado = 119900
    //nota 1 = 69909
    //nota 2 = 69910
    //gravidade = 0,796
    //arrival = 10400
    //used on ground = 1000

    showInScreen(finalResultA, aRow);
    showInScreen(finalResultB, bRow);
    showInScreen(finalResultC, cRow);
    showInScreen(finalResultD, dRow);
    showInScreen(finalResultF, fRow);
    showInScreen(finalResultG, gRow);
    showInScreen(finalResultH, hRow);
    showInScreen(finalResultI, iRow);
    showInScreen(finalResultJ, jRow);

    let toGravity = [];
    let digits = $(".gravidade").val().replace(",",".").split('');
    for (let i = 0; i < digits.length; i++) {
        toGravity.push(digits[i]);
    }

    showInScreen(toGravity, eRow);



});


$(document).ready(function() {
    let maximumFractionDigits = 2;
    var valueInput = $(".formattedNumberField");

    const formatNumber = (value) => {
        const parsedValue = value.replace(/[^\d,]/gi, '').replace(/(?<!^[\d-]+)\,/g, '');
        return parsedValue ? (+parsedValue).toLocaleString('pt-BR', {
            maximumFractionDigits
        }) : '';
    }

    valueInput.on('input', function() {
        if (!this.value || (maximumFractionDigits && this.value.endsWith(','))) {
            return
        }
        $(this).val(formatNumber(this.value));
    });
});


function numberToArray(num) {
    let arr = [];
    let digits = num.toString().split('');
    for (let i = 0; i < digits.length; i++) {
        arr.push(parseInt(digits[i]));
    }
    console.log(digits)
    return arr;
}

function showInScreen(arrayFinal, letterRow){
    let final = 5;

    for (let i = arrayFinal.length-1; i >=0 ; i--) {
        letterRow.eq(final).text(arrayFinal[i]);
        final--;
    }
}

