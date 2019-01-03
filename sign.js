var sign = {
    init: function(canvas, img){
        sign.canvas = canvas;
        sign.img = img;

        sign.createCtx();
        sign.makePlume();
        sign.makeDraw();
    },

    createCtx: function(){
        if (sign.canvas.getContext) {
            sign.ctx = canvas.getContext('2d');
          } else {
            alert("désolé, votre navigateur ne supporte pas canvas");
          };
    },

    makePlume: function(){
        sign.plume = new Image();
        sign.plume.src = sign.img;
        sign.plume.addEventListener('load', function() {
            sign.ctx.drawImage(sign.plume, 0.1, 0.1);
        });
    },

    makeDraw: function(){
        sign.canvas.addEventListener('mousedown', function(e){
            // dessiner un point
            sign.ctx.beginPath();
            sign.ctx.arc(e.offsetX, e.offsetY, 3, 0, 2 * Math.PI, false);
            sign.ctx.fillStyle = '#000';
            sign.ctx.fill();
          }.bind(sign));
    }

}