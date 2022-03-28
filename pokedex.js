const fetchPokemon = () =>{
    const pokeName = document.getElementById("pokeName");
    let pokeInput= pokeName.value.toLowerCase();
    const url =`https://pokeapi.co/api/v2/pokemon/${pokeInput}`;

    fetch(url).then((res)=>{
        if(res.status != "200"){
            console.log(res);
            pokeImage("./pokeball.png");
        } 
        else{
            return res.json();
        }
    }).then((info)=>{
        
        datos(info);
    })

}
poketipos=[];
bandera=0;
pokemoves=[];
bandera2=0;
pokeNum=0;


const fetchPokemonId = () =>{
    const url =`https://pokeapi.co/api/v2/pokemon/${this.pokeNum}`;

    fetch(url).then((res)=>{
        if(res.status != "200"){
            console.log(res);
            pokeImage("./pokeball.png");
        } 
        else{
            return res.json();
        }
    }).then((info)=>{
        
        datos(info);
    })

}

let datos = (info) => {
    this.poketipos= [];
    this.pokemoves= [];
    let pokeImg = info.sprites.front_default;
    this.pokeNum = info.id;
    let pokeName = info.forms[0].name;
    let pokeName2 = info.name;
    let pokeType=[];
    let pokeStats=[];
    let pokeMoves=[];

    for (let i=0; i <= info.types.length - 1 ; i++){
        pokeType[i] = info.types[i].type.name;
        this.poketipos[i]=info.types[i].type.name;
        
    }
   
    for (let i=0; i <= info.stats.length - 1 ; i++){
       
        pokeStats[i] = info.stats[i].base_stat;
    }
    for (let i=0; i <= 4 ; i++){
      
        pokeMoves[i] = info.moves[i].move.name;
        this.pokemoves[i]=info.moves[i].move.name;
    }

    
    document.getElementById("pokeStatsHp").innerHTML = pokeStats[0];
    document.getElementById("pokeStatsAtk").innerHTML = pokeStats[1];
    document.getElementById("pokeStatsDef").innerHTML = pokeStats[2];
    document.getElementById("pokeStatsVel").innerHTML = pokeStats[5];
    
    document.getElementById("types").innerHTML = pokeType[0];
    document.getElementById("moves").innerHTML = pokeMoves[0];
    document.getElementById("pokeName2").innerHTML = pokeName;


    pokeImage(pokeImg);

    return this.pokeNum, this.pokeName;
}

const pokeImage = (url) =>{
    const pokeImg =document.getElementById("pokeImg");
    pokeImg.src = url;
}

const imprimir = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput= pokeName.value;
    

}
const reset= () => {
    this.poketipos= [];
    this.pokemoves= [];
    document.getElementById("pokeStatsHp").innerHTML = '';
    document.getElementById("pokeStatsAtk").innerHTML = '';
    document.getElementById("pokeStatsDef").innerHTML = '';
    document.getElementById("pokeStatsVel").innerHTML = '';
    document.getElementById("types").innerHTML = 'Tipos';
    document.getElementById("moves").innerHTML = 'Movimientos';
    pokeImg =document.getElementById("pokeImg"); 
    pokeImg.src = 'img/pokeball.jpg';
    info = undefined;
    pokeName.value = '';
   
}

const left = () => {
    bandera === 0 ? bandera = this.poketipos.length -1 : bandera -= 1;
    document.getElementById("types").innerHTML = this.poketipos[bandera];
    

    
}
const right = () => {
    bandera2 === 0 ? bandera2 = this.pokemoves.length -1 : bandera2 -= 1;
    document.getElementById("moves").innerHTML = this.pokemoves[bandera2];
}

const down= () => {
    pokeNum === 1 ? null : pokeNum -= 1;
    fetchPokemonId();
}

const up = () => {
    pokeNum === 151 ? null : pokeNum += 1;
    fetchPokemonId();
}