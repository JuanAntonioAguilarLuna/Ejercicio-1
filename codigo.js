dinerocofla = prompt("cuando dinero tienes Cofla");
dineroRoberto = prompt("cuando dinero tienes Roberto");
dineroPedro = prompt("cuando dinero tienes Pedro");

dinerocofla = parseInt(dinerocofla);


if(dinerocofla >= 0.6 && dinerocofla < 1) {
    alert("cofla, Compra el helado de agua");
    alert("y si te sobra " + (dinerocofla - 0.6));
}

else if (dinerocofla >= 1 && dinerocofla < 1.6) {
    alert("cofla, Compra el helado de crema");
    alert("y si te sobra " + (dinerocofla - 1));

}
else if (dinerocofla >= 1.6 && dinerocofla < 1.7) {
    alert("cofla, Compra el helado de heladix");
    alert("y si te sobra " + (dinerocofla - 1.6));

}
else if (dinerocofla >= 1.7 && dinerocofla < 1.8) {
    alert("cofla, Compra el helado de heladovich");
    alert("y si te sobra " + (dinerocofla - 1.8));

}
else if (dinerocofla >= 1.8 && dinerocofla < 2.8) {
    alert("cofla, Compra el helado de helardo");
    alert("y si te sobra " + (dinerocofla - 2.9));

}

else if (dinerocofla >= 2.9) {
    alert("cofla, Compra el helado con confites o el P de 1/4kg");
} else {
    alert("cofla, Lo lamentamos, no te alcanza para nada ");
}

if(dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Roberto, Compra el helado de agua");
}

else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("Roberto, Compra el helado de crema");
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("Roberto, Compra el helado de heladix");
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("Roberto, Compra el helado de heladovich");
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.8) {
    alert("Roberto, Compra el helado de helardo");
}

else if (dineroRoberto >= 2.9) {
    alert("Roberto, Compra el helado con confites o con popote");
} else {
    alert("Roberto, Lo lamentamos, no te alcanza para nada ");
}

if(dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Pedro, Compra el helado de agua");
}

else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Pedro, Compra el helado de crema");
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Pedro, Compra el helado de heladix");
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("Pedro, Compra el helado de heladovich");
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.8) {
    alert("Pedro, Compra el helado de helardo");
}

else if (dineroPedro >= 2.9) {
    alert("Pedro, Compra el helado con confites o con popote");
} else {
    alert("Pedro, Lo lamentamos, no te alcanza para nada ");
}

