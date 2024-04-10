function calcolaEta() {
    const Nome = document.getElementById("Nome").value;
    const Cognome = document.getElementById("Cognome").value;
    const AnnoDiNascità= parseInt(document.getElementById("AnnoDiNascità").value);
    const currentYear = new Date().getFullYear();
    const age = currentYear - AnnoDiNascità;

    console.log(`Nome: ${Nome}`);
    console.log(`Cognome: ${Cognome}`);
    console.log(`Anno di nascita: ${AnnoDiNascità}`);
    console.log(`Età corrente: ${age} anni`);
}