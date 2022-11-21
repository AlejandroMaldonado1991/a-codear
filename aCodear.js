const autosImportados = require('./autos');
let concesionaria = {
   autos: autosImportados,
   buscarAuto: function (patente){
      let buscarPatente = this.autos.find(auto => patente == patente)
      if (buscarPatente != null){
         return buscarPatente
      }
      return null
   },
   venderAuto:function (buscarPatente){
      let autoBuscado = this.buscarAuto (buscarPatente);
      if(autoBuscado != null){
         autoBuscado.vendido = true;
      }
   },
   autosParaLaVenta:function(){
      let autosParaVender = this.autos.filter(function(auto){
         return auto.vendido == false;
      })
      return autosParaVender
   },
   autosNuevos : function(){
let auto0KM = this.autosParaLaVenta().filter(auto=> auto.km < 100);   
return auto0KM  
 },
listaDeVentas:function (){
let vendidos = this.autos.filter(auto => auto.vendido == true);
return vendidos.map(auto => auto.precio);
},
totalDeVentas:function (){
   if(this.listaDeVentas().length > 0){
return this.listaDeVentas().reduce((acum, precio)=>acum + precio)
   }
   return 0;
},
puedeComprar: function (auto, persona){
   if(persona.capacidadDePagoEnCuotas >= auto.precio/auto.cuotas){
      return true
   }
   return false
},
autosQuePuedeComprar: function (persona){
  let autosParaVender = this.autosParaLaVenta();
  let autosParaComprar = autosParaVender.filter((auto)=>{
    let autosParaComprar = this.puedeComprar(auto, persona)
    if(autosParaComprar == true){
      return auto;
  }
  })
  return autosParaComprar;
}

};