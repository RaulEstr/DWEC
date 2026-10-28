let cont = 0;
for(let num=1;num <= 100;num++) {
    if(num%2 == 0) {
        document.write(num + ",");
        cont++;
    }

    if(cont == 5) {
        document.write("<br>");
        cont = 0;
    }
}