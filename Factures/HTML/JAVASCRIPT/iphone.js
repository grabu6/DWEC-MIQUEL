class iphones{
    constructor(codi,nom,preu,total){
    this.codi=codi;
    this.nom=nom;
    this.preu=preu;
    this.total=total;
} 
}

    const iphone= new iphones("001","Iphone", "300€","300€");
    localStorage.setItem('iphone', JSON.stringify(iphone));
    const iphone3G= new iphones("483","Iphone 3G","320€","320€");
    localStorage.setItem('iphone3G', JSON.stringify(iphone3G));
    const iphone3GS= new iphones("532","Iphone 3GS","350€","350€");
    localStorage.setItem('iphone3GS', JSON.stringify(iphone3GS));
    const iphone4= new iphones("987","Iphone 4", "380€","380€");
    localStorage.setItem('iphone4', JSON.stringify(iphone4));
    const iphone5= new iphones("123","Iphone 5", "400€","400€");
    localStorage.setItem('iphone5', JSON.stringify(iphone5));
    const iphone5C= new iphones("733","Iphone 5C", "420€", "420€");
    localStorage.setItem('iphone5C', JSON.stringify(iphone5C));
    const iphone5S= new iphones("255","Iphone 5S", "450€","450€");
    localStorage.setItem('iphone5S', JSON.stringify(iphone5S));
    const iphone6= new iphones("983","Iphone 6", "480€","480€");
    localStorage.setItem('iphone6', JSON.stringify(iphone6));
    const iphone6Plus= new iphones("529","Iphone 6 Plus", "500€","500€");
    localStorage.setItem('iphone6Plus', JSON.stringify(iphone6Plus));
    const iphone7= new iphones("678","Iphone 7", "540€","540€");
    localStorage.setItem('iphone7', JSON.stringify(iphone7));
    const iphone7Plus= new iphones("346","Iphone 7 Plus", "560€","560€");
    localStorage.setItem('iphone7Plus', JSON.stringify(iphone7Plus));
    const iphone8= new iphones("432","Iphone 8", "600€","600€");
    localStorage.setItem('iphone8', JSON.stringify(iphone8));
    const iphone8Plus= new iphones("976","Iphone 8 Plus", "630€","630€");
    localStorage.setItem('iphone8Plus', JSON.stringify(iphone8Plus));
    const iphoneX= new iphones("897","Iphone X", "700€","700€");
    localStorage.setItem('iphoneX', JSON.stringify(iphoneX));
    const iphone11= new iphones("999","Iphone 11", "750€", "750€");
    localStorage.setItem('iphone11', JSON.stringify(iphone11));


    let objects =[iphone,iphone3G,iphone3GS,iphone4,iphone5,iphone5C,iphone5S,iphone6,iphone6Plus,iphone7,iphone7Plus,iphone8,iphone8Plus,iphoneX,iphone11]
    localStorage.setItem('iphones', JSON.stringify(objects));

export{objects};

    

