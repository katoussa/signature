var globalMain = {
    data: {
        sign: {
            signature: document.getElementById("signature"),
            canvas: document.getElementById("canvas"),
            img: "img/plume.png"
        }
    },
    methods: {
        init: function(){
            // Création des objets 
            var objServices = Object.create(services),
                objSign = Object.create(sign);
                
            //objServices.getData(globalMain.data.services.url);

            objSign.init(
                globalMain.data.sign.canvas,
                globalMain.data.sign.img
            );
        }
    }
};

$(function(){
    globalMain.methods.init();
});