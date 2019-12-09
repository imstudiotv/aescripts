/* 
 * Copyright 2010-2019 Imotion Studio
 */

/**
* Fade In Script After Effects
* Utiliza este Script para hacer un fade un homogenio en todas tus capas.
* El siguiente Script se usa sobre la propiedad de Opacidad de la capa.
**/
fadeINTime=1; // Tiempo de entrada
velFI=100/fadeINTime;
if ((fadeIn=(time-inPoint)*velFI) < 100) {
    transform.opacity=fadeIn;
} else {
    transform.opacity=100;
}
 
 
/**
* Fade Out Script After Effects
* El siguiente Script se usa sobre la propiedad de Opacidad de la capa.
**/
fadeOUTTime=1;
velFO=100/fadeOUTTime;
outStart=outPoint-fadeOUTTime;
if (outStart <= time) {
    transform.opacity=100-(time-outStart)*velFO;
} else {
    transform.opacity=100;
}
 
 
/**
* Fade In/Out Script After Effects
* El siguiente Script se usa sobre la propiedad de Opacidad de la capa.
**/
fadeINTime=1; // Tiempo de entrada
fadeOUTTime=1; // Tiempo de salida
if ((fadeIn=(time-inPoint)*(100/fadeINTime)) < 100) {
    transform.opacity=fadeIn;
} else {
    outStart=outPoint-fadeOUTTime;
    if (outStart <= time) {
        transform.opacity=100-(time-outStart)*(100/fadeOUTTime);
    } else {
        transform.opacity=100;
    }
}
