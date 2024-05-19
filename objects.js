const cup={
    color:'red',
    shape:'circular',
    weight:'50 grams',
    size:'medium',
    description:{
        drinkType:'tea',
        temperature:'hot'
    },
   drink:function (){
    console.log('use me to drink');
    console.log(`The main purpose of this cup is to drink ${this.descriptio.temperature} ${this.description.drinkType}`);

   }

};
console.log({color:cup.color});
console.log('size',cup['size']);
console.log('temperature',cup.description.temperature);

cup.material='ceramic';
console.log({cup});

cup.color='green';
console.log({cup});

delete cup.material;
console.log({cup});
cup.drink();
//object methods/functions-(a property whose value is a function is a method)



const keys=object.keys(cup);
console.log({keys});

const values=object.values(cup);
console.log({values});

object.keys(cup).forEach(item=>{
    console.log({key:item,values:cup[item]});
})

    