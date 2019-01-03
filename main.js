var globalMain = {
    data: {
        sign: {
            signature: document.getElementById("signature"),
            canvas: document.getElementById("canvas"),
            ctx: "",
            img: "img/plume.png",
            clear: document.getElementById("clearSign")
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
                globalMain.data.sign.ctx,
                globalMain.data.sign.img,
                globalMain.data.sign.clear
            );
        }
    }
};

$(function(){
    globalMain.methods.init();
});